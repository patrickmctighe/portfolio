import { Link } from "react-router-dom";

export default function Synth() {
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
              src="/project-images/synthLogo3.png"
              alt=""
              className="indvProjImg"
            />
            <div className="liveGit">
              <div className="live">
                {" "}
                <a
                  className="livea"
                  href="https://patrick-mctighe-retro-react-synth.netlify.app"
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
                  href="https://github.com/patrickmctighe/javascript-synth-2"
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
              The Retro React Synth is a virtual synthesizer that allows users
              to create and manipulate sound. This application is built with
              React and styled with CSS. The synthesizer is equipped with a
              variety of sound effects and filters, including a low-pass filter,
              Unison, ADSR control and echo effect -- all made using the web audio api. The application also
              includes a keyboard that allows users to play notes and chords.
              The Retro React Synth is a fun and interactive way to explore the
              world of sound synthesis.
            </div>
            <div className="projectTech">
              <div className="skillComp">
                <img className="skillImgs" src="/skill-logos/react3.png" alt="" />
                <div className="skillTitle">React</div>
              </div>
              <div className="skillComp">
                <img className="skillImgs" src="/skill-logos/vite.png" alt="" />
                <div className="skillTitle">Vite</div>
              </div>
              <div className="skillComp">
                <img className="skillImgs" src="/skill-logos/css.png" alt="" />
                <div className="skillTitle">CSS</div>
              </div>
              <div className="skillComp">
                <img
                  className="skillImgs"
                  src="/skill-logos/webaudio.png"
                  alt=""
                />
                <div className="skillTitle">Web Audio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
