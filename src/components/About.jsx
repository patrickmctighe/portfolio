import Letter from "./Letter";
import{Link} from "react-router-dom";

export default function About() {
  return (
    <div className="aboutMain">
    
          <p className="aboutText"> I have been very successful with my career in the culinary industry and I believe my resume serves as a testament to my
hard work and dedication into anything a pursue. Even when losing my job from the pandemic i was able to problem
solve and make decisions that would turn out very successful. I am a natural leader when I am needed to be as well as a
dedicated student.
     </p>
       <div className="letterRecCont">
<Link className="letterRec" to="letter"> Letter of Recomendation</Link>
       </div>
    </div>
  );
}
