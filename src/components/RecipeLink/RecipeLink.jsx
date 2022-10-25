/* 
    written by Josip Brljevic
    The bottom part of the recipe component
 */
import Arrow2 from "../../recipesimages/arrow2.svg"
import "./RecipeLink.css"

export default function RecipeLink(props) {
    return(
        <div className="recipelink">
            <div className="leftlink">
                <p className="title">{props.title}</p>
                <p className="link">{props.link}</p>
            </div>
            <div className="righticon">
                <img src={Arrow2} alt="arrow"></img>
            </div>
        </div>
    )
}