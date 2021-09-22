import React from 'react'


    
  

export const Projects = props => {
    return (
        <div className='projects-body'>
            <a href={props.link}>
                <text>{props.title}</text>

                <img src={props.image} alt="" />
                <text>{props.description}</text>
            </a>

            
        </div>
    )
}
