import React from 'react'
import {Skills} from './Skills.js'

//Image files
import javaIcon from './images/java.png'
import javascriptIcon from './images/javascript.png'
import pythonIcon from './images/python.png'
import reactIcon from './images/react.png'
import sqlIcon from './images/sql.png'






export const SkillsSection = () => {
    return (
        <div className='main-section'>
        <div className='section' id='SkillsSection'>
             <br/>
            <text className='section-header'>Skills</text>
            <div className='row-contents'>
                <Skills title={"Java"} image={javaIcon}></Skills>
                <Skills title={"JavaScript"} image={javascriptIcon}></Skills>
                <Skills title={"React"} image={reactIcon}></Skills>
                <Skills title={"Python"} image={pythonIcon}></Skills>
                <Skills title={"SQL"} image={sqlIcon}></Skills>
            </div>
        </div>
        </div>
        
    )
}

