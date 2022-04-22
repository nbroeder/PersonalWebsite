import React from 'react'
import { Link } from "react-router-dom";

export const SideBarItem = (props) => {
    return (

        <Link to={props.link} className ="side-bar-item"  >
           {props.text}
        </Link>
    )
}
