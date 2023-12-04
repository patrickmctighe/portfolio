import { Link } from "react-router-dom";
export default function PlanIt() {
    return (
        <div className="individualProjectMain">
              <div className="backCont">
              <Link to="/projects" className="backButton">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
            </div>
          <div className="imgAndDescription">
            <div className="projectIndvImg">
              <img src="/project-images/planIt.png"  alt="" className="indvProjImg" />
              <div className="liveGit">
            <div className="live"> <a href="">Live Site</a></div>
            <div className="git"> <a href="">Git Repository</a></div>
          </div>
        </div>
        <div className="projectDescriptionAndTech">
          <div className="projectDescription">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text.Until recently, the prevailing view assumed lorem
            ipsum was born as a nonsense text. “It's not Latin, though it looks
            like it, and it actually says nothing,” Before & After magazine
            answered a curious reader, “Its ‘words’ loosely approximate the
            frequency with which letters occur in English, which is why at a
            glance it looks pretty real.” “It's not Latin, though it looks like
            it, and it actually says nothing,” Before & After magazine answered
            a curious reader, “Its ‘words’ loosely approximate the frequency
            with which letters occur in English, which is why at a glance it
            looks pretty real.”
          </div>
          <div className="projectTech">
            {" "}
            <div className="skillComp">
              <img className="skillImgs" src="/skill-logos/pug.png" alt="" />
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
              <img className="skillImgs" src="/skill-logos/vite.png" alt="" />
              <div className="skillTitle">Vite</div>
            </div>
            <div className="skillComp">
              <img
                className="skillImgs"
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
