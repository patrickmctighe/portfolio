import { NavLink, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Skills from "./Skills"

export default function SiteBody() {

    
    return( 

        <Router>
            <div className="siteBody">
                <div className="nav">
                    <NavLink className="hexagon" id="aboutLink" to="/about" >About Me</NavLink>
                    <NavLink className="hexagon" id="projectsLink" to="/projects" >Projects</NavLink>
                    <NavLink className="hexagon" id="skillsLink" to="/skills" >Skills</NavLink>
                    <NavLink className="hexagon" id="resumeLink" to="/resume"  >Resume</NavLink>
        
                </div>
                <div className="mainContainer">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}