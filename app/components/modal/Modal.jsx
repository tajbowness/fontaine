import PropTypes from 'prop-types';
import { default as CustomModal } from 'react-modal';

import "./Modal.styles.scss"

export default function Modal(props) {
  if (props.hasError) {throw new Error("hasError: Manual")};

  // loaderElement - When submit button pressed, they're collapsed, then a spinner appears at the top

  CustomModal.setAppElement('body');
  
  return (
    <CustomModal
        isOpen={props.isOpen || false}
        overlayClassName="modal-overlay"
        className="modal-styles"
        shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick || true}
        shouldCloseOnEsc={props.shouldCloseOnEsc || true}
        closeTimeoutMS={props.closeTimeoutMS}
        onRequestClose={() => props.onRequestClose && props.onRequestClose()}
        onAfterOpen={()    => props.onAfterOpen    && props.onAfterOpen()}
        onAfterClose={()   => props.onAfterClose   && props.onAfterClose()}
    >
        {props.children}
    </CustomModal>
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