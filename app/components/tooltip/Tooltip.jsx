import {Suspense, lazy} from 'react';

const MUITooltip = lazy(() => import('@mui/material/Tooltip'));
const tooltipStyle = {popper: { modifiers: [{ name: 'offset', options: {offset: [0, -10]}}]}};

export default function Tooltip(props) {
    const tooltipText = props.title || ""
    const tooltipPlacement = props.placement || "top"
    const enterDelay = props.enterDelay || 300
    const noArrow = props.noArrow
    
    // (to be copy and pasted)
    // ======= Setup Tooltip =======

    // const tooltipProps = {
    //     title:      props.tooltipText      || "",
    //     placement:  props.tooltipPlacement || "top",
    //     enterDelay: props.enterDelay       || 300,
    //     noArrow:    props.noArrow          || false
    // }

    // <Tooltip {...tooltipProps}>

    // ======= Main =======

    return (
        tooltipText ? 
            <Suspense fallback={props.fallback}>
                <MUITooltip 
                    title={tooltipText} 
                    placement={tooltipPlacement} 
                    enterDelay={enterDelay} 
                    slotProps={tooltipStyle} 
                    arrow={noArrow ? false : true}
                >
                    {props.children}
                </MUITooltip>
            </Suspense>
        : props.children
    )
}