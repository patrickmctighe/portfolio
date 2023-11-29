import React, { useState } from 'react';
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import SoftSkills from "./SoftSkills";

export default function Resume() {
  const [selectedSection, setSelectedSection] = useState('education');

  return (
    <div className="resumeMain">
      <nav className='resumeNav'>
        <button className='resumeButton' onClick={() => setSelectedSection("education")}>
          Education
        </button>
        <button className='resumeButton' onClick={() => setSelectedSection("experience")}>
          Experience
        </button>
        <button className='resumeButton' onClick={() => setSelectedSection("hobbies")}>Hobbies</button>
        <button className='resumeButton' onClick={() => setSelectedSection("languages")}>
          Languages
        </button>
        <button className='resumeButton' onClick={() => setSelectedSection("soft-skills")}>
          Soft Skills
        </button>
      </nav>
      <div className="resumeCont">
        {" "}
        {selectedSection === "education" && <Education />}
        {selectedSection === "experience" && <Experience />}
        {selectedSection === "hobbies" && <Hobbies />}
        {selectedSection === "languages" && <Languages />}
        {selectedSection === "soft-skills" && <SoftSkills />}
      </div>
    </div>
  );
}