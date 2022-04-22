import './App.css';
import { Routes, Route } from "react-router-dom"

import { SideBar } from './components/SideBar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';


function App() {
  return (
    <div className="App">
    
         {/*<WebsiteHeader></WebsiteHeader>*/}
         <SideBar></SideBar>
         <div className='main-section'>
         
          <Routes>
            <Route path="PersonalWebsite" element={<AboutSection/>}/>
            <Route path="PersonalWebsite/skills" element={<SkillsSection/>}/>
            <Route path="PersonalWebsite/resume" element={<ContactSection/>}/>
            <Route path="PersonalWebsite/projects" element={<ProjectsSection/>}/>
          </Routes>
          <ContactSection></ContactSection>
         </div>
        
      </div>
    
  );
}

export default App;
