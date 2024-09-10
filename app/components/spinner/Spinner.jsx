import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import {Spinner as ShopifySpinner} from "@shopify/polaris"
import "./Spinner.styles.scss"


export default function Spinner(props) {
  // ======= Cycle Setup =======

  const [loadingText, setLoadingText] = useState(props.firstLine || "Checking...");
  const [isVisible, setIsVisible] = useState(true);

  const lines = props.cycleLines || ["CYCLE TEXT REQUIRED", "CYCLE TEXT REQUIRED"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        const currentIndex = lines.indexOf(loadingText);
        const nextIndex = (currentIndex + 1) % lines.length;
        setLoadingText(lines[nextIndex]);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [loadingText]);

  const classNames = [
    props.className,
  ].filter(Boolean).join(" ");
  
  // ======= Main =======
  
  return (
  !props.cycle ? (
      <div className={`${props.center ? "center" : ""} ${classNames} pos-rel small-spinner`}>
          <div className="center-spinner">
          <ShopifySpinner size={props.size || "small"} />
          </div>
      </div>
  ) : (
      <div className={`spinner-cycle-container ${classNames}`}>
          <ShopifySpinner />
          <p className={isVisible ? "fade-in active" : "fade-in"}>{loadingText}</p>
      </div>
  )
  )
}

Spinner.propTypes = {
  cycleLines: PropTypes.array.isRequired, 
  firstLine: PropTypes.string,
  size: PropTypes.string, 
  center: PropTypes.bool,
};