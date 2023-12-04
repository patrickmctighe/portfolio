import { NavLink, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import Aimee from "../project-pages/Aimee";
import Armored from "../project-pages/Armored";
import Chatr from "../project-pages/Chatr";
import Elden from "../project-pages/Elden";
import Climate from "../project-pages/Climate";
import Members from "../project-pages/Members";
import PlanIt from "../project-pages/PlanIt";
import Weather from "../project-pages/Weather";
import Etchy from '../project-pages/Etchy';

export default function SiteBody() {
  return (
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
           
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/aimee" element={<Aimee />} />
            <Route path="/projects/armored" element={<Armored />} />
            <Route path="/projects/chatr" element={<Chatr />} />
            <Route path="/projects/elden" element={<Elden />} />
            <Route path="/projects/climate" element={<Climate />} />
            <Route path="/projects/members" element={<Members />} />
            <Route path="/projects/planit" element={<PlanIt />} />
            <Route path="/projects/weather" element={<Weather />} />
            <Route path="/projects/etchy" element={<Etchy />} />
             <Route path="/projects/*" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}