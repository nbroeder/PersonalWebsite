import { Section } from "./Section";
import {AboutSection} from "./AboutSection";
import React from 'react';


export const MainSection = () => {
    return (
            <div className='main-section'>
                <AboutSection ></AboutSection>
                
                <Section text={'Projects'}></Section>
                <Section text={'Skills'}></Section>
                <Section text={'Resume'}></Section>
                <Section text={'Contact Me'}></Section>
            </div>

    )
}