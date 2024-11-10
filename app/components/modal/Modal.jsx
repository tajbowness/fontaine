import {useState, useEffect, Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import { default as CustomModal } from 'react-modal';


import "./Modal.styles.scss"

const Collapse = lazy(() => import('@mui/material/Collapse'));

// REMINDER This is early code. Don't update it with current version. This is good enough


export default function Modal(props) {
  if (props.hasError) {throw new Error("hasError: Manual")};

  const isOpen = props.slideIn ? true : props.isOpen


  // loaderElement - When submit button pressed, they're collapsed, then a spinner appears at the top

  CustomModal.setAppElement('body');

  // ======= Slide in Effect =======

  const [negZIndex, setNegZIndex] = useState(false)

  useEffect(() => {
    if (props.slideIn) {
      let timer;

      if (props.isOpen) { 
        setNegZIndex(false) } // Remove negative index
      else { setNegZIndex(true) }
      // Seems to work properly without the timeout, see without a few days before removing
      // else { timer = setTimeout(() => setNegZIndex(true), 1) } // Apply negative index

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [props.isOpen]);

  const [isShown, setIsShown] = useState(false);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (props.isOpen) {
      setIsShown(props.isOpen);
      
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false); // End transition after 300ms
      }, 300);

      return () => clearTimeout(timer); // Clean up the timer when unmounted

    } else {
      setIsShown(false);
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false); // End transition after 300ms
      }, 300);
      return () => clearTimeout(timer);
    }

  }, [props.isOpen]);
  
  // ======= Set ClassNames =======

  const overlayClassNames = [
    "modal-overlay",
    props.slideIn && `slide-in ${isShown ? `visible ${props.isSecondModal ? "second-modal" : ""}` : ""} ${negZIndex ? "zIndex-neg" : ""}`,
  ].filter(Boolean).join(" ");

  const classNames = [
    props.className   || "modal-styles no-scroll",
    props.slideIn     && `modal-styles slide-in ${isShown ? `visible` : ""} ${!isTransitioning ? "transition-ended" : ""}`,
  ].filter(Boolean).join(" ");

  return (
    <Suspense>
    <Collapse 
      in={props.isOpen}
      unmountOnExit
    >
      <CustomModal
        isOpen={isOpen || false}
        overlayClassName={overlayClassNames}
        className={classNames}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        closeTimeoutMS={props.closeTimeoutMS}
        onRequestClose={() => props.onRequestClose && props.onRequestClose()}
        onAfterOpen={   () => props.onAfterOpen    && props.onAfterOpen()}
        onAfterClose={  () => props.onAfterClose   && props.onAfterClose()}
      >
        {props.children}
      </CustomModal>
    </Collapse>
    </Suspense>
  );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeFunc: PropTypes.func.isRequired,
    continueFunc: PropTypes.func,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    closeTimeoutMS: PropTypes.number,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    description: PropTypes.string,
    cancelText: PropTypes.string,
    continueText: PropTypes.string,
    lowerText: PropTypes.string,
    loaderElement: PropTypes.bool,
    isLoading: PropTypes.bool,
    infoText: PropTypes.string,
    infoLevel: PropTypes.number, // Assuming level is a number, adjust as needed
    children: PropTypes.node,
    hasError: PropTypes.bool,
};