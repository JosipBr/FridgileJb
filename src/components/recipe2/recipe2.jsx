/* 
  written by Josip Brljevic 
  A recipe component ONLY used in the different category pages of the recipe
*/
import HeartIcon from "../HeartIcon/HeartIcon";
import MissingAndFound from "../MissingAndFound/MissingAndFound";
import RecipeLink from "../RecipeLink/RecipeLink";
import "../recipe/recipe.css";
import RecipeData from "../recipedata/recipedata.json";

export default function Recipe2(props) {
  
  console.log(RecipeData)
  if(props.time === "breakfast"){
    return (
        <div>
          {RecipeData.breakfast.map((post) => (
            <div className="recipe2" key={post.at}>
                {post.details.map(item =>(
                     <div className="recipe" key={item.id} id={item.tag}>
                     <div className="top">
                       <MissingAndFound />
                       <HeartIcon />
                     </div>
           
                     <div className="bottom">
                       <RecipeLink link="bbcgoodfood.com" title={item.name}></RecipeLink>
                     </div>
                   </div>
                ))}
            </div>
            
          ))}
        </div>
      );
  }
  
  else if(props.time === "lunch"){
    return (
        <div className="recipe2">
          {RecipeData.lunch.map((post) => (
            <div key={post.at}>
                {post.details.map(item =>(
                     <div className="recipe" key={item.id} id={item.tag}>
                     <div className="top">
                       <MissingAndFound />
                       <HeartIcon />
                     </div>
           
                     <div className="bottom">
                       <RecipeLink link="bbcgoodfood.com" title={item.name}></RecipeLink>
                     </div>
                   </div>
                ))}
            </div>
            
          ))}
        </div>
      );
  }

  else if(props.time === "dinner"){
    return (
        <div className="recipe2">
          {RecipeData.dinner.map((post) => (
            <div key={post.at}>
                {post.details.map(item =>(
                     <div className="recipe" key={item.id} id={item.tag}>
                     <div className="top">
                       <MissingAndFound />
                       <HeartIcon />
                     </div>
           
                     <div className="bottom">
                       <RecipeLink link="bbcgoodfood.com" title={item.name}></RecipeLink>
                     </div>
                   </div>
                ))}
            </div>
            
          ))}
        </div>
      );
  }
}
