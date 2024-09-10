import {Suspense, lazy, useState} from "react"
import { useNavigate } from "@remix-run/react";
import Spinner from "../spinner/Spinner";
import Icon from "../icon/Icon"
import Tooltip from "../tooltip/Tooltip";
import Skeleton from "../skeleton/Skeleton";
import PropTypes from 'prop-types';
import "./Button.styles.scss"

const Collapse = lazy(() => import('@mui/material/Collapse'));

export default function Button(props) {
    if (props.hasError) {throw new Error("hasError: Manual")};

    // ======= Link / Click Functionality =======

    const navigate = useNavigate();
    
    function handleLinkClick() {
        if (props.passData) {
        navigate(props.linkto, { state: {data: props.passData}})
        } 
        else {navigate(props.linkto)}
    }

    const [hovered, setHovered] = useState(false)
    
    // ======= Tooltip Setup =======
    
    const tooltipProps = {
        title:      props.tooltipText      || "",
        placement:  props.tooltipPlacement || "top",
        enterDelay: props.enterDelay       || 300,
        noArrow:    props.noArrow          || false
    }
    
    // ======= Set Props =======
    
    const value = props.value || ""  // For submit data
    const name = props.name || ""  // For submit data
    const linkProps = {value: value, name: name}
    const hasClickFunc = !props.fake && (props.onClick || props.linkto) ? true : false
    
    const text = props.text || (props.onlyIcon || props.noText) ? props.text || "" : "Button" // DEMO PURPOSES. Revert
    const icon = props.icon?.toLowerCase() || ""
    const isLoading = props.isLoading || false

    const disabled = props.isLoading || props.disabled
    
    const level =
    props.level === 1 || props.success  ? "button-success" :   // Green
    props.level === 2 || props.warn     ? "button-warn" :      // Orange
    props.level === 3 || props.critical ? "button-crit" : ""   // Red

    const levelSide =
    props.level === 1 || props.success  ? "button-success-sidecar" :   // Green
    props.level === 2 || props.warn     ? "button-warn-sidecar" :      // Orange
    props.level === 3 || props.critical ? "button-crit-sidecar" : ""   // Red
    
    const width = props.width?.toLowerCase() || ""
    const widthClass =
    width === "xs" ? "button-width-xs" :
    width === "s" ?  "button-width-s"  :
    width === "m" ?  "button-width-m"  :
    width === "l" ?  "button-width-l"  :
    "";

    const toggledClass = 
        props.toggled     ? "toggled-primary" :
        props.toggledGrey ? "toggled-grey" : ""
        
    const hasSideCar = props.leftSideCard || props.underCard || props.rightSideCard

    // ======= Set classNames =======    
    
    const masterClassNames = [
        "button-container",
        props.masterClassName,
        props.heightFull && "height-100",
        props.widthFull  && "width-100"
    ].filter(Boolean).join(" ");
    
    const parentClassNames = [
        "button-container-child pos-rel",
        props.parentClassName,
        props.leftSideCard  && `button-container-child-left-sidecar ${!levelSide && "grey-l-side"}`,
        props.rightSideCard && `button-container-right-sidecar button-container-child-right-sidecar ${!levelSide && "grey-r-side"}`,
        props.underCard     && `button-container-undercard-sidecar button-container-child-undercar ${!levelSide && "grey-b-side"}`,
        props.widthFull     && "width-100 width-max-auto",
        props.heightFull    && "height-100"
    ].filter(Boolean).join(" ");

    const classNames = [
        "button cursor-click",
        "button-hover-grey",     // Color of BG when hover (Grey)
        widthClass,
        level,
        props.className    || "",
        disabled           && "button-disable",
        props.fake         && "cursor-def",
        props.fitted       && "fitted",
        props.slim         && "slim",
        props.thick        && "thick",
        !text              && "pad-8-hr",
        !icon              && "no-icon",   // Corrects padding
        props.onlyIcon     && "only-icon",
        props.rightSideIcon ? "icon-right" : isLoading ? "icon-left" : props.onlyIcon ? "" : !icon ? "" : "icon-left",
        props.liteShadow   && "bs-2",
        props.hasShadow    && "bs-4",
        props.noShadow     && "no-box-shadow",
        props.hover        && "button-hover-primary",             // Color of BG when hover
        props.noHover      && "button-no-hover",
        props.widthFull    && "width-100 width-max-auto jus-con-cen",
        props.heightFull   && "height-100",
        toggledClass
    ].filter(Boolean).join(" ");

    const textClassNames = [
        props.textClassName,
        "text-class",
        "disable-actions",
        isLoading      && "mar-15-l",
        props.textWrap && "text-wrap"
    ].filter(Boolean).join(" ");
    
    const sideCarClassNames = [
        "side-car-container",
        props.rightSideCard ? "right-sidecar" : props.underCard ? "undercar" : "left-sidecar",
        (props.leftSideCard  && !levelSide) && `grey-l-side`,
        (props.rightSideCard && !levelSide) && `grey-r-side`,
        (props.underCard     && !levelSide) && `grey-b-side`,
        levelSide
    ].filter(Boolean).join(" ");
    
    return (
        <Tooltip {...tooltipProps} fallback={<Skeleton className="button-skeleton" hasText={!props.onlyIcon} hasIcon={!!props.icon} />}>
            <div className={masterClassNames}>
            <div className={parentClassNames}>
                <button
                    className={classNames}
                    onMouseOver={() => hasSideCar && setHovered(true)}
                    onMouseOut={ () => hasSideCar && setHovered(false)}
                    onClick={(event) => {if (hasClickFunc) {
                        if (props.linkto) {handleLinkClick()} // Link Button
                        else {props.onClick(event)}
                    }}}
                    disabled={props.disabled}
                    data-link={props.link}
                    data-meta={props.meta && JSON.stringify(props.meta)}
                    style={props.style}
                    {...linkProps}
                >
                    {text && !props.onlyIcon && 
                    <span className={textClassNames}>{text}</span>
                    }
                    {/* -=- ICONS -=- */}
                    {
                    isLoading ? <Spinner size="small"/> : 
                    icon     && <Icon icon={icon} className={"icon-reach"}/>
                    }
                </button>
                {hasSideCar && (
                <div className="car-container">
                <Suspense>
                <Collapse in={hovered} orientation={props.underCard ? "vertical" : "horizontal"}>
                    <div 
                        className={sideCarClassNames}
                        onMouseOver={() => setHovered(true)}
                        onMouseOut={() => setHovered(false)}
                    >
                        <span>{props.sideCardText}</span>
                    </div>
                </Collapse></Suspense>
                </div>
                )}
                {isLoading && <div className="pos-abs loading-style"></div>}
            </div>

            </div>
        </Tooltip>       
    )
}

function conditionalPropType(props) {

    if ((props.underCard || props.leftSideCard || props.rightSideCard) && !props.sideCardText) {
        return new Error(`Side car enabled. No sideCardText Passed. Identification: ${props.text}`);
    }

    if (props.onlyIcon && !props.icon) {
        return new Error(`onlyIcon enabled. No icon passed. Identification: ${props.text}`)
    }
    return null;
}

Button.propTypes = {
    custom: conditionalPropType,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    linkto: PropTypes.string,
    passData: PropTypes.any,
    value: PropTypes.string,
    meta: PropTypes.any,
    name: PropTypes.string,
    icon: PropTypes.string,
    fake:  PropTypes.bool,
    isLoading: PropTypes.bool,
    width: PropTypes.oneOf(["xs", "s", "m", "l", "XS", "S", "M", "L"]),
    fitted: PropTypes.bool,
    slim:  PropTypes.bool,
    small: PropTypes.bool,
    thick: PropTypes.bool,
    noText: PropTypes.bool,
    onlyIcon: PropTypes.bool,
    rightSideIcon: PropTypes.bool,
    noShadow: PropTypes.bool,
    liteShadow: PropTypes.bool,
    hasShadow: PropTypes.bool,
    hover: PropTypes.bool,
    noHover: PropTypes.bool,
    widthFull: PropTypes.bool,
    heightFull: PropTypes.bool,
    sideCardText: PropTypes.string,
    underCard: PropTypes.bool,
    leftSideCard: PropTypes.bool,
    rightSideCard: PropTypes.bool,
    disabled: PropTypes.bool,
    level: PropTypes.oneOf([1, 2, 3]),
    success: PropTypes.bool,
    warn: PropTypes.bool,
    critical: PropTypes.bool,
    toggled: PropTypes.bool,
    toggledGrey: PropTypes.bool,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    enterDelay: PropTypes.number,
    noArrow: PropTypes.bool,
};