import React from 'react'

export const Skills = (props) => {
    return (
        <div className='skills-body'>
            <text className='body-title'>{props.title}</text>
            <img className='body-image' src={props.image} alt="" />
        </div>
    )
}
