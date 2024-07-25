export default function NavItem(props) {

    return(
        <p 
        className={`navbar-item ${props.text.toLowerCase() === props.route && "nav-sel"}`}
        onClick={() => {
            props.setPage(props.text.toLowerCase())
        }}
        >
            {props.titleOR || props.text}
        </p>
    )
}