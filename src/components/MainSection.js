import { Section } from "./Section";
import {AboutSection} from "./AboutSection";
import {ProjectsSection} from "./ProjectsSection";
import React from 'react';


export const MainSection = () => {
    return (
            <div className='main-section'>
                <AboutSection ></AboutSection>
                <ProjectsSection></ProjectsSection>
                <Section text={'Skills'}></Section>
                <Section text={'Resume'}></Section>
                <Section text={'Contact Me'}></Section>
            </div>

    )
}