import React from 'react'
import {Contact} from './Contact'
import sampleImage from './profilePicture.jpg'

export const ContactSection = () => {
    return (
        <div className='section'>
            <text  className='section-header'>Contact</text>
            <div className='row-contents'>
                
                <Contact icon={sampleImage} text='519-701-2110'></Contact>
                <Contact icon={sampleImage} text='nbroeder@uwo.ca'></Contact>
                <Contact icon={sampleImage} link={"https://github.com/nbroeder"} text={'nbroeder'}></Contact>
            </div>
        </div>
    )
}
