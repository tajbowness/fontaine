import PropTypes from 'prop-types';

export default function Box(props) {

    const gapClass = props.gap && `gap-${props.gap}`;
    const padClass = props.pad && `pad-${props.pad}`;
    const marClass = props.mar && `mar-${props.mar}`;

    const alignClass = // Align
    props.align === "left"   ? "jus-con-left"  :
    props.align === "cen"    ? "jus-con-cen"  :
    props.align === "right"  ? "jus-con-right" : ""
    
    const classNames = [
        props.className,
        props.noFlex     ? "" : "disp-flex",
        props.wrap      && "flex-wrap",
        props.col        ? "flex-dir-col" : "flex-dir-row", // flex-direction
        props.center    && "flex-cen ali-cen",
        gapClass, padClass, marClass, alignClass
    ].filter(Boolean).join(" ");

    // ======= Default Styles =======
    // display: flex

    return (
        <div name={props.name} className={classNames} onClick={() => props.onClick && props.onClick()} style={props.style}>
            {props.children}
        </div>
    )
};

Box.propTypes = {
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    align: PropTypes.oneOf(["left", "cen", "right"]),
    className: PropTypes.string,
    noFlex: PropTypes.bool,
    wrap: PropTypes.bool,
    col: PropTypes.bool,
    center: PropTypes.bool,
    children: PropTypes.node
};