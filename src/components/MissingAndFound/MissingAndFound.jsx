/* 
    written by Josip Brljevic 
    A black bar displayed on the top of every recipe showing numbers of missing and found ingredients
*/
import { Link } from "react-router-dom";
import Arrow from "../../recipesimages/arrow.svg";
import "./MissingAndFound.css";

export default function MissingAndFound(props) {
  return (
    <div className="missingandfoundcontainer" >
      <Link to="/recipeproducts">
        <div className="missingandfound">
          <p>Missing: </p>
          <p>Found: </p>
          <div className="arrow">
            <img src={Arrow} alt="arrow"></img>
          </div>
        </div>
      </Link>
    </div>
  );
}
