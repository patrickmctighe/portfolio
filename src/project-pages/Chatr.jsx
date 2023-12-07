import { Link } from "react-router-dom";

export default function Chatr() {
  return (
    <div className="individualProjectMain">
      <div className="individualProjectMainContent">
        <div className="backCont">
          <Link to="/projects" className="backButton">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
        </div>
        <div className="imgAndDescription">
          <div className="projectIndvImg">
            <img
              src="/project-images/chatr2.png"
              alt="Chatr Project"
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href="https://warm-bienenstitch-c15fe2.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live
                </a>
              </div>
              <div className="git">
                {" "}
                <a
                  className="gita"
                  href="https://github.com/patrickmctighe/chatApp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Git
                </a>
              </div>
            </div>
          </div>
          <div className="projectDescriptionAndTech">
            <div className="projectDescription">
              <p>
                In this project, I developed a messaging application featuring
                secure profiles and encoded authorization. The application
                facilitates the exchange of messages and images among users.
                Notably, real-time updates have been implemented, ensuring an
                active chat environment and providing visibility into the online
                status of members. The project leverages a WebSocket server and
                JSON Web Tokens for enhanced functionality and security.
              </p>
            </div>
            <div className="projectTech">
              <div className="skillComp">
                <img
                  className="projSkillImgs"
                  src="/skill-logos/react3.png"
                  alt=""
                />
                <div className="skillTitle">React</div>
              </div>
              <div className="skillComp">
                <img
                  className="projSkillImgs"
                  src="/skill-logos/ex.png"
                  alt=""
                />
                <div className="skillTitle">express</div>
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
                <img
                  className="projSkillImgs"
                  src="/skill-logos/mongoDB.png"
                  alt=""
                />
                <div className="skillTitle">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
