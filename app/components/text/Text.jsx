import PropTypes from 'prop-types';
import Tooltip from "../tooltip/Tooltip";
import "./Text.styles.scss"

export default function Text(props) {

    // ======= Setup Tooltip =======

    const tooltipProps = {
        title: props.tooltipText || "",
        placement: props.tooltipPlacement || "top",
        enterDelay: props.enterDelay || 300,
        noArrow: props.noArrow || false
    }

    // ======= Set Props =======

    const align =
    props.align === "left" ? "tex-ali-left" :
    props.align === "cen" ? "tex-ali-cen" :
    props.align === "right" ? "tex-ali-right" : "tex-ali-left"

    // ======= Labels =======

    const label =
    props.label === "grey"     ? "label-grey" :
    props.label === "blue"     ? "label-blue" :
    props.label === "success"  ? "label-success" :
    props.label === "warning"  ? "label-warn" :
    props.label === "critical" ? "label-crit" : ""

    // ======= Set classNames =======

    const classNames = [
        props.className,
        label,
        label          && "label",
        props.onClick  && "cursor-click",
        props.noWrap   && "text-nowrap",
        props.ellipsis && "text-ellipsis",
        props.scroll   && "text-scroll ",
        props.fit      && "width-fit-con",
        props.thin     && "text-thin",
        props.bold     && "text-bold",
        props.italic   && "text-italic",
        props.heading1 && "text-heading-1",
        props.heading2 && "text-heading-2",
        props.heading3 && "text-heading-3",
        props.heading4 && "text-heading-4",
        props.heading5 && "text-heading-5",
        props.body1    && "text-body-1",
        props.body2    && "text-body-2",
        align
    ].filter(Boolean).join(" ");

    return (
        <Tooltip {...tooltipProps} >
            <p 
                className={classNames}
                onClick={() => props.onClick && props.onClick()}
            >{props.children || props.text}</p>
        </Tooltip>
    )
}

Text.propTypes = {
    children: PropTypes.node,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    align: PropTypes.oneOf(["left", "cen", "right"]),
    className: PropTypes.string,
    label: PropTypes.string,
    fit: PropTypes.bool,
    noWrap: PropTypes.bool,
    scroll: PropTypes.bool,
    ellipsis: PropTypes.bool,
    thin: PropTypes.bool,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    heading1: PropTypes.bool,
    heading2: PropTypes.bool,
    heading3: PropTypes.bool,
    heading4: PropTypes.bool,
    heading5: PropTypes.bool,
    body1: PropTypes.bool,
    body2: PropTypes.bool,
    onClick: PropTypes.func,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    enterDelay: PropTypes.number,
    noArrow: PropTypes.bool
};
