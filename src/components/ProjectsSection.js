import React from 'react'
import {Projects} from './Projects'
import sample from './profilePicture.jpg'




export const ProjectsSection = () => {
    return (
        <div className="section">
            <text className="section-header">Projects</text>
            <Projects description={"this is a sample description"} title={"sampleTitle"} image={sample} link={"https://github.com/nbroeder"} ></Projects>
        </div>
    )
}
