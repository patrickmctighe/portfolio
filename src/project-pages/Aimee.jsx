import { Link } from "react-router-dom";
export default function Aimee() {
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
              src="/project-images/aimee.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href="https://aimeekeeble.com"
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
                  href="https://github.com/patrickmctighe/restaurant"
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
                This website was crafted for writer Aimee Keeble, featuring a
                simple and responsive design with an old-school aesthetic and a
                catchy color palette. The static site, built using React,
                includes an image slider for visual appeal and showcases Aimee's
                published works with links for readers to explore or purchase.
                An "About Me" section provides additional insights. Hosted on
                Netlify, the site prioritizes a seamless user experience.
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
                  src="/skill-logos/js.png"
                  alt=""
                />
                <div className="skillTitle">JavaScript</div>
              </div>
              <div className="skillComp">
                <img
                  className="projSkillImgs"
                  src="/skill-logos/css.png"
                  alt=""
                />
                <div className="skillTitle">CSS</div>
              </div>
              <div className="skillComp">
                <img
                  className="projSkillImgs"
                  src="/skill-logos/html.png"
                  alt=""
                />
                <div className="skillTitle">HTML</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
