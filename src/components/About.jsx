import Letter from "./Letter";
import{Link} from "react-router-dom";

export default function About() {
  return (
    <div className="aboutMain">
    <div className="picAndPara">    
    <img className="myPicture" src="./my-pic/me.JPEG" alt="" />
         <p className="aboutText">
After a successful 12 year career in the culinary industry, I was ready for a new challenge. My dogged desire to learn and my ability to deftly respond to change–like pandemic job loss and numerous moves– equipped me for this professional shift. While the fields differ, my knack for solving problems and my understanding of when to lead (and when to follow) served me well during my training and have prepared me for my new role. 

     </p></div>
 
       <div className="letterRecCont">
<Link className="letterRec" to="letter"> Letter of Recomendation</Link>
       </div>
    </div>
  );
}
