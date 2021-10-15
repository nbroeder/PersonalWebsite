import React from 'react'
import {Projects} from './Projects'
import sample from './images/profilePicture.jpeg'


let breastCancerDes= 'This project used artificial intelligence to determine the most accurate identifying feature between malignant and begnin tumors. The project succesfully identified cell size uniformity as the best measure of if a tumor was malignant with a success rate of 93%. We acheived this using common artificial intelligence and math libraries such as numpy and matplotlib'

export const ProjectsSection = () => {
    return (
        <div className="section" id="ProjectsSection">
            <text className="section-header">Projects</text>
            <Projects description={breastCancerDes} title={"Sample Title"} image={sample} link={"https://github.com/nbroeder"} ></Projects>
            <Projects description={"this is a sample description"} title={"Sample Title"} image={sample} link={"https://github.com/nbroeder"} ></Projects>
        </div>
    )
}
