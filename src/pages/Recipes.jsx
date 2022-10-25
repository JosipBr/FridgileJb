/* 
  written by Josip Brljevic
  Start of the recipe page
*/
import RecipeCategory from "../components/recipecategory/recipecategory";
import productIcon from "../recipesimages/products.svg";
import Breakfast from "../recipesimages/Breakfast.svg";
import Lunch from "../recipesimages/Lunch.svg";
import Dinner from "../recipesimages/Dinner.svg";
import Dessert from "../recipesimages/Dessert.svg";
import Quick from "../recipesimages/Quick.svg";
import Meatless from "../recipesimages/Meatless.svg";
import Saved from "../recipesimages/saved.svg";
import "./Recipes.css";
import BlackButton from "../components/blackbutton/blackbutton";
import TimeDescription from "../components/timedescription/timedescription";
import Recipe from "../components/recipe/recipe";
import { Link } from "react-router-dom";

export default function Recipes() {
  return (
    <section className="page">
      <div className="titleandicon">
        <p>Recipes</p>
        <div className="image">
          <Link to="/products">
            <img src={productIcon} alt="producticon" />
          </Link>
        </div>
      </div>

      <div className="description">
        <p>
          Here you can find recipes that match the contents of your fridge the
          most.
        </p>
      </div>

      <div className="flexbox">
        <div className="first">
          <div className="description">
            <TimeDescription />
          </div>
          <Recipe />
        </div>

        <div className="second">
          <div className="description">
            <p>Browse through all recipes</p>
          </div>

          <div className="recipecategories">
            <RecipeCategory
              icon={Breakfast}
              title="Breakfast"
              link="/breakfast"
            />
            <RecipeCategory icon={Lunch} title="Lunch" link="/lunch" />
            <RecipeCategory icon={Dinner} title="Dinner" link="/dinner" />
            <RecipeCategory icon={Dessert} title="Dessert" />
            <RecipeCategory icon={Quick} title="Quick" />
            <RecipeCategory icon={Meatless} title="Meatless" />
          </div>
          <div className="blackbuttons">
            <BlackButton text="Saved" image={Saved} />
            <BlackButton
              id="second"
              text="All recipes"
              link="/allrecipes"
            ></BlackButton>
          </div>
        </div>
      </div>
    </section>
  );
}
