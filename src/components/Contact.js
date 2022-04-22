import React from 'react'

export const Contact = (props) => {
    return (
        
            <a href={props.link} className='contact-body'>
                <img className = 'contact-icon'src={props.icon} alt="" />
                <text className='body-title'>{props.text}</text>

            </a>
        
    )
}
