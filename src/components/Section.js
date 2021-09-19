import React from 'react'
import { About } from './About'

export const Section = ({text}) => {
    return (
        <div className="section">
            <text className='section-header'>{text}</text>
        </div>
    )
}
