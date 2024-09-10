import PropTypes from 'prop-types';
import { useState, lazy, Suspense } from 'react';
import Tooltip from '../tooltip/Tooltip';
import Skeleton from '../skeleton/Skeleton';
import Divider from '../divider/Divider';
import Spinner from '../spinner/Spinner';
import Icon from "../icon/Icon";
import "./InfoBox.styles.scss"

const Collapse = lazy(() => import('@mui/material/Collapse'));

export default function InfoBox(props) {
    // @param {date} date - Date.
    if (props.hasError) {throw new Error("hasError: Manual")};
    // shadow     - Gives elevation shadow
    // iconStickLeft - Places icon all the way to the left
    // small         - Lowers padding, border radius
    // smallFont     - xx Small font

    const [isDropdown, setDropdown] = useState(false)

    // ======= Tooltip Setup =======
    
    const tooltipProps = {
        title:      props.tooltipText      || "",
        placement:  props.tooltipPlacement || "top",
        enterDelay: props.enterDelay       || 300,
        noArrow:    props.noArrow          || false
    }

    // ======= Main =======

    const {icon} = props

    const align = 
    props.align === "left"  ? "jus-con-left" :
    props.align === "right" ? "jus-con-right" : props.iconStickLeft ? "" : "jus-con-cen"

    const width  = props.width?.toLowerCase()  || ""
    const height = props.height?.toLowerCase() || ""
    
    const widthClass =
    width === "xs" ? "infobox-x-small" :
    width === "s"  ? "infobox-small" :
    width === "m"  ? "infobox-medium" :
    width === "l"  ? "infobox-large":
    width === "xl" ? "infobox-x-large": ""

    const heightClass =
    height === "xs" ? "infobox-h-x-small" :
    height === "s"  ? "infobox-h-small" :
    height === "m"  ? "infobox-h-medium" :
    height === "l"  ? "infobox-h-large":
    height === "xl" ? "infobox-h-x-large": ""

    const level =
    props.level === 0 || props.grey     ? "infobox-grey" :      // Grey
    props.level === 1 || props.success  ? "infobox-success" :   // Green
    props.level === 2 || props.warn     ? "infobox-warn" :      // Orange
    props.level === 3 || props.critical ? "infobox-crit" : ""   // Red

    const cursorClass = (props.onClick || props.dropdown) ? "cursor-click" : "cursor-def"

    const parentClassNames = [
        "infobox-parent",
        props.parentClass,
        props.small              && "infobox-small-option",
        props.superSmall         && "infobox-super-small",
        props.superSmall && icon && "pad-10-r",
        props.smallFont          && "fs-x-small",
        props.shadow             && "bs-4",
        heightClass, 
        heightClass && props.dropdown && "height-setup scroll-thin",
        widthClass, 
        level,
        
    ].filter(Boolean).join(" ");
    
    const classNames = [
        "infobox-container text-wrap",
        props.className,
        props.iconStickLeft && "infobox-icon-left", // Applies jus-con space-between (left / right icon will touch ends)
        cursorClass,                                // Apply click / No click
        props.noWrap          && "text-nowrap",
        align,
    ].filter(Boolean).join(" ");

    const textClassNames = [
        heightClass, heightClass && "height-setup scroll-thin",
    ].filter(Boolean).join(" ");

    return (
        <Tooltip {...tooltipProps} fallback={<Skeleton large hasText hasIcon={!!icon} />}>
            <div className={parentClassNames}>
                <div className={classNames} onClick={() => {
                    props.onClick && props.onClick()
                    props.dropdown && setDropdown(prev => !prev)
                    }}
                >
                    {
                    props.isLoading    ? <Spinner /> : props.icon && <Icon icon={icon} className={props.iconClass} />
                    }
                    <div className={textClassNames}>
                        {props.text}
                    </div>
                    {/* ======= Right Side ======= */}
                    {
                    props.closeIcon ? <Icon icon="x" onClick={props.iconClickFunc} tone={props.tone} /> :  // X Close icon
                    props.icon && !props.superSmall && !props.dropdown && <span style={{width: "20px"}}></span> // Correctly position icon
                    }
                    {props.isLoading && <div className="pos-abs loading-style"></div>}
                    {props.dropdown && 
                    <Icon icon={isDropdown ? "arrowUp" : "arrowDown"} />
                    }
                </div>
                <div>
                <Suspense>
                <Collapse in={isDropdown}>
                <div>
                    <Divider gutter="top10" />
                    {props.dropdownText ? 
                    <div className='mar-5-t'>{props.dropdownText}</div> 
                    : props.children}
                </div>
                </Collapse>
                </Suspense>
                </div>
            </div>
        </Tooltip>
    );
}

function conditionalPropType(props) {
    if (props.iconStickLeft && props.align) {
        return new Error(`Can't have align and iconStickLeft, align will override. Identification: ${props.text}`);
    }
    return null;
}

InfoBox.propTypes = {
    custom: conditionalPropType,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    icon: PropTypes.string,
    tone: PropTypes.string,
    onClick: PropTypes.func,
    iconClass: PropTypes.string,
    closeIcon: PropTypes.bool,
    iconClickFunc: PropTypes.func,
    iconStickLeft: PropTypes.bool,
    isLoading: PropTypes.bool,
    dropdown: PropTypes.bool,
    dropdownText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    children: PropTypes.node,
    align: PropTypes.oneOf(['left', 'right', 'center']),
    width: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', "XS", "S", "M", "L", "XL"]),
    height: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', "XS", "S", "M", "L", "XL"]),
    level: PropTypes.oneOf([0, 1, 2, 3]),
    grey: PropTypes.bool,
    success: PropTypes.bool,
    warn: PropTypes.bool,
    critical: PropTypes.bool,
    parentClass: PropTypes.string,
    small: PropTypes.bool,
    superSmall: PropTypes.bool,
    smallFont: PropTypes.bool,
    shadow: PropTypes.bool,
    noWrap: PropTypes.bool,
    hasError: PropTypes.bool,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    enterDelay: PropTypes.number,
    noArrow: PropTypes.bool,
};