import PropTypes from 'prop-types';
import Icon from "../../icon/Icon"
import Button from '../../button/Button';

import "./ErrorFallback.styles.scss"

export default function ErrorFallback(props) {
  // showStatus   - Linked button to status page
  
  const text       = props.text || "Could not fetch data."
  const buttonText = props.buttonText || "Back"

  const parentClassNames = [
    props.container && "error-fallback-container card-style-container",
    props.center    && "width-100 height-100 ali-cen flex-cen",  
    props.redBack   && "error-redBack",                                // file:///C:/Users/Taj/Documents/Screenshots/2.png
    props.small     && "error-small"
  ].filter(Boolean).join(" ");
  
  const classNames = [
    "error-fallback",
    props.backFunction   && `gap-10 flex-dir-col`,
    props.center         && `flex-cen ali-cen`,
    props.className
  ].filter(Boolean).join(" ");

  return (
    <div className={parentClassNames}>
      <div className={classNames}>
        <span className={`disp-flex flex-dir-row gap-5`}>
          <Icon icon="alertCircle" tone="critical" />
          <p className="error-text">{text}</p>
        </span>
        {props.backFunction && 
          <span className="disp-flex flex-dir-row gap-5">
            <Button text={buttonText} onClick={() => props.backFunction()} />  
            {props.showStatus && 
            <Button text={"Status Page"} linkto="/app/status" />}
          </span>
        }
      </div>
    </div>
  );
};

ErrorFallback.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  backFunction: PropTypes.func,
  showStatus: PropTypes.bool,
  container: PropTypes.bool,
  center: PropTypes.bool,
  redBack: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string
};
