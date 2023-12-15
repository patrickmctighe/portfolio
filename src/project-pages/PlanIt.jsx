import { Link } from "react-router-dom";
export default function PlanIt() {
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
              src="/project-images/planIt.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href=" https://patrickmctighe.github.io/toDoList/"
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
                  href="https://github.com/patrickmctighe/toDoList"
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
                Plan-It is a website I created to assist individuals in
                organizing their daily tasks. This platform exemplifies my
                proficiency in utilizing what some might consider the basics.
                Using only vanilla JavaScript, HTML, and CSS, I believe it
                showcases a commendable blend of seamless functionality and
                appealing design work.
              </p>
            </div>
            <div className="projectTech">
              {" "}
              <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/js.png" alt="" />
        <div className="skillTitle">JavaScript</div>
      </div>
              <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/html.png" alt="" />
        <div className="skillTitle">HTML</div>
      </div>
              <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/css.png" alt="" />
        <div className="skillTitle">CSS</div>
      </div>
              <div className="skillComp">
        <img className="projSkillImgs" src="/skill-logos/webpack.png" alt="" />
        <div className="skillTitle">Webpack</div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
