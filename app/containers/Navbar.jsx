import {useState} from "react"
import NavItem from "./nav/NavItem"

export default function NavBar(props) {
    return (
        <div className="navbar-cont">
            <NavItem text="Home" titleOR="Apps" route={props.route} setPage={props.setPage}/>
            <NavItem text="Changelog" route={props.route} setPage={props.setPage}/>
            <NavItem text="gettingstartedsku" titleOR="Getting Started" route={props.route} setPage={props.setPage}/>
            <NavItem text="Privacy" route={props.route} setPage={props.setPage}/>
        </div>
    )
}