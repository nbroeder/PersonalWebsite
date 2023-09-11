import React from 'react'

import { Section } from "./Section";
import {AboutSection} from "./AboutSection";
import {ProjectsSection} from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";

export const Portfolio = () => {
  return (
    <div>
        <AboutSection ></AboutSection>
        <ProjectsSection></ProjectsSection>
        <SkillsSection></SkillsSection>
        {/*<Section text={'Resume'}></Section>*/}
        <ContactSection></ContactSection>
    </div>
  )
}
