/*
    writen by Josip Brljevic
    A component that displays the items from your fridge when you press the top right button on the Recipe page
*/

import { useState } from "react";
import AddIcon2 from "../../recipesimages/add3.png";
import Checked from "../../recipesimages/checked.png";
import "./recipeproducts.css";

export default function RecipeProduct() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const checkbox = isChecked ? Checked : AddIcon2;

  return (
    <div className="recipeproduct">
      <div className="addicon">
        <img src={checkbox} alt="add" onClick={toggleCheck}></img>
      </div>
      <div className="recipeproductdata">
        <p>Milk</p>
      </div>
      <div className="expirationtime">
        <p>2 days left</p>
      </div>
    </div>
  );
}
