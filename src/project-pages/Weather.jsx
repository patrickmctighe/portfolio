import { Link } from "react-router-dom";

export default function Weather() {
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
              src="/project-images/weather.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href="https://patrickmctighe.github.io/weather1/"
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
                  href="https://github.com/patrickmctighe/weather1"
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
              Introducing a weather app that transforms your screen into a
              meteorological hub! This application utilizes APIs to fetch
              real-time weather information from various locations. Upon opening
              the site, it conveniently showcases your current location's
              weather. Moreover, a user-friendly search bar allows you to
              specify and explore the weather conditions of any desired
              location. Developed with the simplicity of vanilla JavaScript,
              HTML, and CSS, this app effortlessly provides accurate and timely
              weather updates.
            </div>
            <div className="projectTech">
            <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/js.png" alt="" />
        <div className="skillTitle">JavaScript</div>
      </div>
      <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/html.png" alt="" />
        <div className="skillTitle">HTML</div>
      </div>
      <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/css.png" alt="" />
        <div className="skillTitle">CSS</div>
      </div>
      <div className="skillComp">
        <img className="skillImgs" src="/skill-logos/webpack.png" alt="" />
        <div className="skillTitle">Webpack</div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
