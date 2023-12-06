import { Link } from "react-router-dom";
export default function Etchy() {
    return (
        <div className="individualProjectMain">
            <div className="backCont">
            <Link to="/projects" className="backButton">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
            </div>
          <div className="imgAndDescription">
            <div className="projectIndvImg">
              <img src="/project-images/etchy.png" alt="" className="indvProjImg" />
              <div className="liveGit">
            <div className="live"> <a  className="livea" href="https://patrickmctighe.github.io/etch-a-sketch/" rel="noreferrer" target="_blank">Live</a></div>
            <div className="git"> <a className="gita" href="https://github.com/patrickmctighe/etch-a-sketch" rel="noreferrer" target="_blank">Git</a></div>
          </div>
        </div>
        <div className="projectDescriptionAndTech">
          <div className="projectDescription">
          Presenting a nostalgic trip down memory lane with a digital rendition of the classic toy Etch-A-Sketch! This project holds sentimental value as one of my initial coding ventures, embodying simplicity and fundamental coding principles. While it maintains a basic structure, it serves as a noteworthy example of utilizing vanilla JavaScript, CSS, and HTML. Leveraging the power of grid and flexbox, the project showcases the implementation of custom-made functions, adding a touch of creativity to this digital adaptation.          </div>
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
