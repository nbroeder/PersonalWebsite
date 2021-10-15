import React from 'react'


    
  

export const Projects = props => {
    return (
        
            <a href={props.link} className='row-contents'>
                <img src={props.image} alt="" className='projects-image'/>
                <div className="projects-side" >
                    <text className='body-title'>{props.title}</text>
                    <text>{props.description}</text>
                    
                </div>
            </a>

            
        
    )
}
