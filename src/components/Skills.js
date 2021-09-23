import React from 'react'

export const Skills = (props) => {
    return (
        <div className='skills-body'>
            <h3>{props.title}</h3>
            <img className='body-image' src={props.image} alt="" />
        </div>
    )
}
