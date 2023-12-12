import { NavLink, Routes, Route, useLocation} from 'react-router-dom';
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
import Letter from './Letter';
import{ useTheme } from '../theme/ThemeContext';

export default function SiteBody() {
  const location = useLocation();
  const { setTheme } = useTheme();

  const handleNavLinkClick = (theme) => {
    setTheme(theme);
  };

  return (
   
      <div className="siteBody">
        <div className="nav">
          <NavLink className="hexagon" id="aboutLink" to="/about"  onClick={() => handleNavLinkClick('about')} >About Me</NavLink>
          <NavLink className="hexagon" id="projectsLink" to="/projects"   onClick={() => handleNavLinkClick('projects')} >Projects</NavLink>
          <NavLink className="hexagon" id="skillsLink" to="/skills" onClick={() => handleNavLinkClick('skills')}>Skills</NavLink>
          <NavLink className="hexagon" id="resumeLink" to="/resume"  onClick={() => handleNavLinkClick('resume')} >Resume</NavLink>
        </div>
        <div className="mainContainer">
          <Routes>
            <Route path="/about/*" element={<About />} />
           <Route path="/about/letter" element={<Letter />} />
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
    
  );
}