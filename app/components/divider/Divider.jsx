import PropTypes from 'prop-types';
import {Suspense, lazy} from "react"

const MUIDivider = lazy(() => import('@mui/material/Divider'));

export default function Divider(props) {
    // ======= Props =======
    // vertical   - bool - Makes it vertical
    // flex       - bool - Use if parent is flex
    // gutter     - str  - See @example

    // ======= Gutter =======

    // @example input gutter="top10" . Results in mar-10-t

    const gutter = props.gutter?.toLowerCase() || ""

    const gutterSide = 
    gutter.includes("top")    ? "t"  :
    gutter.includes("bottom") ? "b"  :
    gutter.includes("left")   ? "l"  :
    gutter.includes("right")  ? "r"  : ""

    const gutterSize = 
    gutter.includes("5")  ? "5" :
    gutter.includes("10") ? "10" :
    gutter.includes("15") ? "15" :
    gutter.includes("20") ? "20" : ""

    let gutterClass = "mar-" + gutterSize + "-" + gutterSide 
    
    let gutterOpposite = "";

    if (props.both) {
        const opposite =
        gutterSide === "l" ? "r" :
        gutterSide === "r" ? "l" :
        gutterSide === "t" ? "b" :
        gutterSide === "b" ? "t" : ""

        gutterOpposite = "mar-" + gutterSize + "-" + opposite 
    }

    // ======= Set classNames =======

    const classNames = [
        props.className,
        gutterClass, gutterOpposite
    ].filter(Boolean).join(" ");

    return (
        <Suspense>
            <MUIDivider orientation={props.vertical ? "vertical" : "horizontal"} flexItem={props.flex} className={classNames}/>
        </Suspense>
    )
}

Divider.propTypes = {
    vertical: PropTypes.bool,        // Makes the divider vertical if true
    flex: PropTypes.bool,            // Use if parent is a flex container
    gutter: PropTypes.string,        // Gutter size and side (e.g., "top10", "bottom20")
    both:   PropTypes.bool,
    className: PropTypes.string      // Optional custom class names
};