import PropTypes from 'prop-types';
import "./Skeleton.styles.scss"

export default function Skeleton(props) {
    // ======= Props =======
    // hasText - Fake text with rectangle
    // hasIcon - Fake an icon with a circle
    //  - Note - Only use if comp has icon in it, not just icon on its own. Otherwise, use below
    // icon    - Fake an icon with a circle - ENTIRE
    
    if (props.noSkeleton) return

    const modalSize =
        props.modalSize === "s" ? "skeleton-modal-small" :
        props.modalSize === "l" ? "skeleton-modal-large" : "skeleton-modal-medium"

    const classNames = [
        props.className,
        "skeleton-style cursor-def",
        props.large && "skeleton-large",
        props.icon  && "skeleton-icon",
        props.modal && "skeleton-modal",
        (props.hasIcon && props.hasText) && "disp-flex gap-10"
    ].filter(Boolean).join(" ");

    return (
        <span className={classNames}>
            {props.hasText && <span className="skeleton-text"><span className="skeleton-text-sim">.</span></span>}
            {props.hasIcon && <span className="skeleton-icon"></span>}
            {props.modal && (
                <span className={`skeleton-modal-child ${modalSize}`}></span>
            )}
        </span>
    )
}

Skeleton.propTypes = {
    className: PropTypes.string,
    noSkeleton: PropTypes.bool, 
    large: PropTypes.bool, 
    icon: PropTypes.bool,
    modal: PropTypes.bool,
    modalSize: PropTypes.oneOf(["s", "m", "l"]),
    hasText: PropTypes.bool,
    hasIcon: PropTypes.bool, 
};