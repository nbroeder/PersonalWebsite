import { Section } from "./Section";
import React from 'react';


export const MainSection = () => {
    return (
            <div className='main-section'>
                <Section text={'About'}></Section>
                <Section text={'Projects'}></Section>
                <Section text={'Skills'}></Section>
                <Section text={'Resume'}></Section>
                <Section text={'Contact Me'}></Section>
            </div>

    )
}