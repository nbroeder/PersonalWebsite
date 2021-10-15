import React from 'react'

export const SideBarItem = (props) => {
    return (

        <a href={"#"+props.link} className ="side-bar-item"  >
            <text>{props.text}</text>
        </a>
    )
}
