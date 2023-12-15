import { Link } from "react-router-dom";
export default function Etchy() {
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
              src="/project-images/etchy1.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href="https://patrickmctighe.github.io/etch-a-sketch/"
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
                  href="https://github.com/patrickmctighe/etch-a-sketch"
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
            Embark on a nostalgic journey with a digital Etch-A-Sketch! This project, born from my early coding days, embraces simplicity and coding fundamentals. Serving as a prime illustration of vanilla JavaScript, CSS, and HTML, it creatively employs grid, flexbox, and custom-made functions.
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
        <img className="projSkillImgs" src="/skill-logos/github3.png" alt="" />
        <div className="skillTitle">GitHub</div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
