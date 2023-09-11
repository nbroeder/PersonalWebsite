import './App.css';
import { Routes, Route } from "react-router-dom"

import { SideBar } from './components/SideBar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { MainSection } from './components/MainSection';

function App() {
  return (
    <div className="App">
    
         <SideBar></SideBar>
         <MainSection></MainSection>
         {/*<div className='main-section'>
         
         <Routes>
            <Route path="/" element={<AboutSection/>}/>
            <Route path="/skills" element={<SkillsSection/>}/>
            <Route path="/projects" element={<ProjectsSection/>}/>
  </Routes>
          <ContactSection></ContactSection>
         </div>*/}
        
      </div>
    
  );
}

export default App;
