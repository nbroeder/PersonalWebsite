import { Section } from "./Section";
import {AboutSection} from "./AboutSection";
import {ProjectsSection} from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";
import React from 'react';


export const MainSection = () => {
    return (
            <div className='main-section'>
                <AboutSection ></AboutSection>
                <ProjectsSection></ProjectsSection>
                <SkillsSection></SkillsSection>
                <Section text={'Resume'}></Section>
                <ContactSection></ContactSection>
            </div>

    )
}