import React from 'react'


    
  

export const Projects = props => {
    return (
        
            <a href={props.link} className='projects-body'>
                <img src={props.image} alt="" className='body-image'/>
                <div className="projects-side" >
                    <h3>{props.title}</h3>
                    <text>{props.description}</text>
                    
                </div>
            </a>

            
        
    )
}
