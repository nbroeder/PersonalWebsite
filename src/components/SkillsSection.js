import React from 'react'
import {Skills} from './Skills.js'
import sampleImage from './profilePicture.jpg'
export const SkillsSection = () => {
    return (
        <div className='section' >
            <text className='section-header'>Skills</text>
            <div className='projects-body'>
                <Skills title={"Java"} image={sampleImage}></Skills>
                <Skills title={"JavaScript"} image={sampleImage}></Skills>
                <Skills title={"React"} image={sampleImage}></Skills>
                <Skills title={"Python"} image={sampleImage}></Skills>
                <Skills title={"SQL"} image={sampleImage}></Skills>
            </div>
        </div>
    )
}
