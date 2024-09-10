import { useState, lazy, Suspense } from "react";
import PropTypes from 'prop-types';
import Box from "../box/Box";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import Skeleton from "../skeleton/Skeleton";

import "./Accordion.styles.scss"

const Collapse = lazy(() => import('@mui/material/Collapse'));

export default function Accordion(props) {
    const [open, setOpen] = useState(props.opened || false)

    const noDivider      = props.noDivider      || props.noDividerAbs || false
    const noDividerChild = props.noDividerChild || props.noDividerAbs || false

    const headClassNames = [
        props.headClassName,
        "accord-head",
        "ali-cen jus-con-spa-bet",
        "pad-5-b",
        open          && "accord-head-open",
        !noDivider    && "accord-divider",
        props.noHover && "accord-no-hover"
    ].filter(Boolean).join(" ");

    const childClassNames = [
        "child",
        noDividerChild ? "" : "child-divider"
    ].filter(Boolean).join(" ");

    return (
        <Box col>
            <Box className={headClassNames} onClick={() => setOpen(prev => !prev)}>
                <Text className="mar-0 fs-small" >{props.title}</Text>
                <Icon icon={open ? "arrowUp" : "arrowDown"} />
            </Box>
            <Suspense fallback={open && <Skeleton large hasText />}>
                <Collapse in={open}>
                <Box className={childClassNames}>
                    {props.children}
                </Box>
                </Collapse>
            </Suspense>
        </Box>
    )
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired, // title is required and should be a string
    opened: PropTypes.bool,             // opened is optional and should be a boolean
    children: PropTypes.node,           // children is optional and can be any renderable node (string, element, etc.)
    noDivider: PropTypes.bool,          // Removes divider
    noDividerChild: PropTypes.bool,     // Removes divider for child
    noDividerAbs: PropTypes.bool,       // Removes divider for head & child
    noHover: PropTypes.bool,            // Removes hover effects
};