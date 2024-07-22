import React, {useState} from "react"
import NavItem from "./nav/NavItem"

export default function NavBar(props) {
    return (
        <div className="navbar-cont">
            <NavItem text="Home" route={props.route}/>
            {/* <NavItem text="About" route={props.route}/> */}
            <NavItem text="Privacy" route={props.route}/>
        </div>
    )
}