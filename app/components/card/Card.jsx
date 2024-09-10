import PropTypes from "prop-types";

export default function Card(props) {
  const gapClass = props.gap && `gap-${props.gap || 10}`; // Default: gap: 10px
  const padClass = props.pad && `pad-${props.pad || 15}`; // Default: padding: 15px
  const marClass = props.mar !== undefined ? `mar-${props.mar}` : ""; // Default: None

  const alignClass = // Align
    props.align === "left"   ? "jus-con-left"  :
    props.align === "cen"    ? "jus-con-cen"  :
    props.align === "right"  ? "jus-con-right" : ""

  const classNames = [
    "card-style-container",
    props.className,
    props.noFlex ? "" : "disp-flex",
    props.row        ? "flex-dir-row" : "flex-dir-col", // flex-direction
    props.center     && "flex-cen ali-cen",              
    gapClass, padClass, marClass, alignClass
  ].filter(Boolean).join(" ");

  // ======= Default Styles =======
  // @extend card-style-container
  // display: flex
  // gap: 10px
  // padding: 15px

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
}

Card.propTypes = {
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf(["left", "cen", "right"]),
  className: PropTypes.string,
  noFlex: PropTypes.bool,
  wrap: PropTypes.bool,
  row: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node,
};
