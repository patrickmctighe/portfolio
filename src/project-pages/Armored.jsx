import { Link } from "react-router-dom";
export default function Armored() {

    return (
        <div className="individualProjectMain">
              <div className="backCont">
              <Link to="/projects" className="backButton">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
            </div>
          <div className="imgAndDescription">
            <div className="projectIndvImg">
              <img src="/project-images/armored1.png"alt="" className="indvProjImg" />
              <div className="liveGit">
            <div className="live"> <a  className="livea" href=" https://expressinv.onrender.com" rel="noreferrer" target="_blank">Live</a></div>
            <div className="git"> <a className="gita" href="https://github.com/patrickmctighe/express-inventory" rel="noreferrer" target="_blank">Git</a></div>
          </div>
        </div>
        <div className="projectDescriptionAndTech">
          <div className="projectDescription">
            <p>

"Files of Rubicon" is a database I developed for the weapons featured in the new Armored Core video game. Leveraging MongoDB, EJS, and Express, this project serves as both an app and website, intended for continuous contributions and updates from fans of the game. It incorporates a responsive CSS design with a color palette reminiscent of the game, ensuring a seamless and visually appealing user experience.</p>
          </div>
          <div className="projectTech">
            {" "}
            <div className="skillComp">
              <img className="projSkillImgs"src="/skill-logos/pug.png" alt="" />
              <div className="skillTitle">Pug</div>
            </div>
            <div className="skillComp">
              <img
                className="skillImgs"
                src="/skill-logos/tailwind1.png"
                alt=""
              />
              <div className="skillTitle">Tailwind CSS</div>
            </div>
            <div className="skillComp">
              <img className="projSkillImgs"src="/skill-logos/vite.png" alt="" />
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
