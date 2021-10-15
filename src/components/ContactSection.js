import React from 'react'
import {Contact} from './Contact'
import phoneIcon from './images/phone.png'
import emailIcon from './images/email.png'
import githubIcon from './images/github.png'
import linkedinIcon from './images/linkedin.png'


export const ContactSection = () => {
    return (
        <div className='section' id='ContactSection'>
            <text  className='section-header'>Contact</text>
            <div className='contact-section'>
                
                <Contact icon={phoneIcon} text='519-701-2110'></Contact>
                <Contact icon={emailIcon} text='nbroeder@uwo.ca'></Contact>
                <Contact icon={githubIcon} link={"https://github.com/nbroeder"} text={'nbroeder'}></Contact>
                <Contact icon={linkedinIcon} link={"https://www.linkedin.com/in/nicholas-broeders-6552251b7/"} text={'nbroeder'}></Contact>
            </div>
        </div>
    )
}
