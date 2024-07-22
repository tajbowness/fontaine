import { useNavigate, useRevalidator } from "@remix-run/react";

export default function NavItem(props) {
    const navigate = useNavigate();
    const revalidator = useRevalidator();

    return(
        <p 
            className={`
                navbar-item 
                ${props.text.toLowerCase() === props.route && "nav-sel"}
            `}
            onClick={() => {
                navigate("/" + props.text.toLowerCase())
                revalidator.revalidate();
            }}
            >
            {props.text}
        </p>
    )
}