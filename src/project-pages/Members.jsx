import { Link } from "react-router-dom";
export default function Members() {
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
              src="/project-images/membersOnly1.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href=" https://membersonlyapi.onrender.com"
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
                  href="https://github.com/patrickmctighe/membersOnly"
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
              Introducing a covert and intriguing project – the Secret
              Agent-themed Message Board. This innovative message board employs
              distinct levels of authentication, ensuring confidentiality in
              revealing message senders or updating critical information.
              Developed using a combination of Express, EJS, CSS, and MongoDB,
              this project seamlessly blends security and functionality for a
              unique user experience.{" "}
            </div>
            <div className="projectTech">
            <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/mongoDB.png" alt="" />
        <div className="skillTitle">MongoDB</div>
      </div>
      <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/ejs.png" alt="" />
        <div className="skillTitle">EJS</div>
      </div>
      <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/ex.png" alt="" />
        <div className="skillTitle">express</div>
      </div>
      <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/css.png" alt="" />
        <div className="skillTitle">CSS</div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
