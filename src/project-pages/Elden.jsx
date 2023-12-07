import { Link } from "react-router-dom";
export default function Elden() {
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
              src="/project-images/elden.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href="https://sensational-halva-395ce3.netlify.app"
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
                  href="https://github.com/patrickmctighe/Memory-Game"
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
              <p>  "The Elden Ring Memory Game" is a themed memory challenge that I
              created to familiarize myself with React's features while
              delivering an enjoyable gaming experience. Leveraging GIMP, I
              customized images from the Elden Ring game by removing backgrounds
              and enhancing visuals. CSS was employed to incorporate animations
              to the game cards, enhancing the overall interactive appeal.</p>
            
            </div>
            <div className="projectTech">
              {" "}
              <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/react3.png" alt="" />
        <div className="skillTitle">React</div>
      </div>
      <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/js.png" alt="" />
        <div className="skillTitle">JavaScript</div>
      </div>
      <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/css.png" alt="" />
        <div className="skillTitle">CSS</div>
      </div>
      <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/vite.png" alt="" />
        <div className="skillTitle">Vite</div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
