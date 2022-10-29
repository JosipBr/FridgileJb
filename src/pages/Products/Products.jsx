/* 
    written by Josip Brljevic 
    A page with your current items in the fridge that you can select for the recipes
*/

import { useNavigate } from "react-router-dom";
import RecipeProduct from "../../components/recipeproducts/recipeproducts";
import "./Products.css";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div className="page">

      <div className="cancelandsave">
        <div className="left">
          <button className="cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
        <div className="right">
          <button className="save" onClick={() => navigate(-1)}>
            Save
          </button>
        </div>
      </div>

      <div className="productdescription">
        <p>Choose the food itmes from your fridge you would like to use:</p>
      </div>

      <div className="expiring">
        <p>Recommended items close to expiring:</p>
      </div>

      <div className="productlist">
        <RecipeProduct />
      </div>

      <div className="expiring">
        <p>Selected food items:</p>
      </div>
      
      {/* add the part where you move the selected item to this part*/}

    </div>
  );
}