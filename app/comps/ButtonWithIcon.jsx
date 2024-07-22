// Button With an Icon

// https://playcode.io/1867118

import React, { Suspense } from 'react';
import { useNavigate } from "@remix-run/react";


const tooltipStyle = {popper: { modifiers: [{ name: 'offset', options: {offset: [0, -10]}}]}}

function ButtonWithIcon(props) {
  if (props.hasError) {throw new Error("hasError: Manual")};

  // --- Link Functionality ---

  const navigate = useNavigate();
  
  function handleLinkClick() {
    if (props.passData) {
      navigate(props.linkto, { state: {data: props.passData}})
    } else {
      navigate(props.linkto);
    }
  }

  // --- Default Props ---

  const text = props.text || ""
  const glowRed = props.glowRed || false
  const value = props.value || ""  // For submit data
  const name = props.name || ""  // For submit data

  const linkProps = {value: value, name: name}
  const hasClickFunc = props.clickFunc || props.linkto ? true : false

  // --- Classes ---

  const className = props.className || ""
  const addClass = props.addClass || ""
  const noShadow = props.noShadow ? "no-box-shadow" : ""
  const heightFull = props.heightFull || ""  // Width 100%
  const widthFull = props.widthFull || ""  // Width 100%
  
  const toggledClass = 
  props.toggled ? "button-toggled-s" :
  props.toggledGrey ? "button-toggled-g" :
  ""
  
  const width = props.width || ""

  const widthClass =
  width === "XS" ? "button-width-xs" :
  width === "S" ? "button-width-s" :
  width === "M" ? "button-width-m" :
  width === "L" ? "button-width-l" :
  width === "FW" ? "button-width-FW" :
  "";
    
  const buttonStyle = props.buttonStyle || "WithIcon"

  const mainClass =
  buttonStyle === "Standard" ? "button-standard" :
  buttonStyle === "Large" ? "button-large" :
  buttonStyle === "WithIcon" ? "button-with-icon-styles" :
  "";

  // Incompatible
  // Undercard - Large / Standard
  // Left sidecard - Large / Standard
  // Right sidecard - Large / Standard

  const getClassNames = () => {
    return [
      className,
      mainClass,
      "noselect",
      addClass,
      glowRed ? "glowred-styles button-hover-red" : "",
      props.disabled ? "button-disable" : "",
      props.underCard ? "button-undercard-OR" : "",
      props.noIcon ? "button-with-icon-no-icon" : "", // For WithIcon style. Corrects padding. 
      props.onlyIcon ? "pad8" : "",
      props.leftSideIcon ? "button-leftside-icon" : "",
      props.small ? "fs-smaller" : "",
      props.liteShadow ? "button-lite-shadow" : "",
      props.hasShadow ? "bs-5" : "",
      noShadow,
      props.sideCard ? "button-hover-left-sidecar" : "",
      props.hover ? "button-hover-primary" : "",             // Color of BG when hover
      props.hoverGrey ? "button-hover-grey" : "",            // Color of BG when hover (Grey)
      widthClass,
      widthFull ? "width-100 width-max-auto jus-con-cen" : "",
      heightFull ? "height-100" : "",
      toggledClass
    ].filter(Boolean).join(" ");
  };

  return (
    <Suspense>
      <div className={`button-container ${noShadow}`}> 
        <div 
          className={`button-container-child ${heightFull ? "height-100" : ""} ${widthFull ? "width-100 width-max-auto" : ""}
          ${props.rightSideCard ? "button-container-child-right-sidecard" : ""}
          ${props.underCard ? "button-container-child-bottom-card" : ""}
        `}>
          <button
            className={getClassNames()}
            onClick={
              (event) => {
                if (hasClickFunc) {
                  if (props.linkto) {handleLinkClick()} // Link Button
                  else {props.clickFunc(event)}
                }
              }
            }
            disabled={props.disabled}
            data-link={props.link}
            {...linkProps}
          >
            {text}

            {/* -=- ICONS -=- */}
            {/* {
            props.refreshIcon ? (<RefreshIcon tone={glowRed && "white"} />) : (
            props.hideIcon ? (<HideIcon />) : (
            props.showIcon ? (<ShowIcon />) : (
            props.tickIcon ? (<TickIcon />) : (
            props.searchIcon ? (<SearchResIcon />) : (
            props.profileIcon ? (<ProfileIcon />) : (
            props.questionIcon ? (<QuestionIcon />) : (
            props.xIcon && <XIcon />)
            ))))))} */}
          </button>

          {props.underCard && ( // Requires proper display settings on parent
            <div className={`button-undercard-container ${glowRed && "glowred-secondary"}`}>
              <p>{props.underCardText}</p>
            </div>
          )}
          {props.sideCard && (
            <div className={`button-sidecard-container ${glowRed && "glowred-secondary"}`}>
              <span>{props.sideCardText}</span>
            </div>
          )}
          {props.rightSideCard && (
            <div className={`button-right-sidecard-container ${glowRed && "glowred-secondary"}`}>
              <span className={`${props.small && "fs-smaller"}`}>{props.sideCardText}</span>
            </div>
          )}
            </div>
      </div>
    </Suspense>
  );
}

export default ButtonWithIcon;