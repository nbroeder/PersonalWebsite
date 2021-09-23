import React from 'react'
import {Skills} from './Skills.js'
import sampleImage from './profilePicture.jpg'
export const SkillsSection = () => {
    return (
        <div className='section' >
            <text className='section-header'>Skills</text>
            <Skills title={"Java"} image={sampleImage}></Skills>
        </div>
    )
}
