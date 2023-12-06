import { Link } from "react-router-dom";
export default function Climate() {

    return (
        <div className="individualProjectMain">
              <div className="backCont">
              <Link to="/projects" className="backButton">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
            </div>
          <div className="imgAndDescription">
            <div className="projectIndvImg">
              <img  src="/project-images/rooLogo.png"alt="" className="indvProjImg" />
              <div className="liveGit">
            <div className="live"> <a  className="livea" href="https://sweet-selkie-37c150.netlify.app" rel="noreferrer" target="_blank">Live</a></div>
            <div className="git"> <a className="gita" href="https://github.com/patrickmctighe/virtual-store" rel="noreferrer" target="_blank">Git</a></div>
          </div>
        </div>
        <div className="projectDescriptionAndTech">
          <div className="projectDescription">
            <p>

This project constitutes an online store specializing in the sale of weather control systems. It is a highly reactive site that demonstrates extensive use of props and setStates. Furthermore, it serves as an excellent example of React Router functionality, showcasing the synergistic effects achieved by integrating both React and vanilla JavaScript functions.</p>
          </div>
          <div className="projectTech">
            {" "}
            <div className="skillComp">
              <img className="projSkillImgs" src="/skill-logos/pug.png" alt="" />
              <div className="skillTitle">Pug</div>
            </div>
            <div className="skillComp">
              <img
                className="projSkillImgs"
                src="/skill-logos/tailwind1.png"
                alt=""
              />
              <div className="skillTitle">Tailwind CSS</div>
            </div>
            <div className="skillComp">
              <img className="projSkillImgs" src="/skill-logos/vite.png" alt="" />
              <div className="skillTitle">Vite</div>
            </div>
            <div className="skillComp">
              <img
                className="projSkillImgs"
                src="/skill-logos/github3.png"
                alt=""
              />
              <div className="skillTitle">GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
