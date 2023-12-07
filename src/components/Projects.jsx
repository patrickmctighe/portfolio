import { Link } from "react-router-dom";
import Aimee from "../project-pages/Aimee";
import Armored from "../project-pages/Armored";
import Chatr from "../project-pages/Chatr";
import Elden from "../project-pages/Elden";
import Climate from "../project-pages/Climate";
import Members from "../project-pages/Members";
import PlanIt from "../project-pages/PlanIt";
import Weather from "../project-pages/Weather";

export default function Projects() {
  return (
    <div className="projectsMain">
      <div className="projectsMainContainer">
      <div className="proj">
        <Link
          className="projA"
          to="chatr"
        >
          <img className="projImg" src="/project-images/chatr2.png" alt="" />
          <div className="projTitle">Full Stack Chat App</div>
        </Link>
      </div>

      <div className="proj">
        <Link className="projA" to="climate">
          <img className="projImg" src="/project-images/rooLogo.png" alt="" />
          <div className="projTitle">React Virtual Store</div>
        </Link>
      </div>

      <div className="proj">
        <Link className="projA" to="planit">
          <img className="projImg" src="/project-images/planIt.png" alt="" />
          <div className="projTitle">Task App</div>
        </Link>
      </div>

      <div className="proj">
        <Link className="projA" to="armored">
          <img className="projImg" src="/project-images/armored1.png" alt="" />
          <div className="projTitle">Armored Core Database</div>
        </Link>
      </div>

      <div className="proj">
        <Link
          className="projA"
          to="elden"
        >
          <img className="projImg" src="/project-images/elden.png" alt="" />
          <div className="projTitle">Elden Ring Memory game</div>
        </Link>
      </div>

      <div className="proj">
        <Link className="projA" to="members">
          <img
            className="projImg"
            src="/project-images/membersOnly1.png"
            alt=""
          />
          <div className="projTitle">Secret Agent Message Board</div>
        </Link>
      </div>

      <div className="proj">
        <Link className="projA" to="aimee">
          <img className="projImg" src="/project-images/aimee.png" alt="" />
          <div className="projTitle">Writers Website</div>
        </Link>
      </div>

      <div className="proj">
        <Link className="projA" to="weather">
          <img className="projImg" src="/project-images/weather.png" alt="" />
          <div className="projTitle">API Weather App</div>
        </Link>
      </div>
      <div className="proj">
        <Link
          className="projA"
          to="etchy"
        >
          <img className="projImg" src="/project-images/etchy.png" alt="" />
          <div className="projTitle">Etch-A-Sketch</div>
        </Link>
      </div>
    </div></div>
  );
}
