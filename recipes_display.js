import { recipes } from "./JS/datas.js";
import { DropDowIng } from "./dropDownIng.js";
import { DropDownUst } from "./dropDownUst.js";
import { DropDownApp } from "./dropDownApp.js";

class displayRecipesFactory {
  constructor(searchByTag, dropTag) 
  
  
  {
    this.searchByTag = searchByTag;
    this.dropTag = dropTag;
    this.recipesContainer = document.querySelector("#recipes-container");
    this.init();
    this.initIngredient();
    this.initUstensil();
    this.initAppliance();
  }

  init() {
    this.recipesContainer.innerText = ""
    recipes.forEach((recipe) => {
      this.addUlDOMElements(recipe);
    });
  }

  addRecipeToMainContainer(filterRecipes) {
    this.recipesContainer.innerText = ""
    const receipesToDisplay = filterRecipes || recipes
    receipesToDisplay.forEach((recipe) => {
      this.addUlDOMElements(recipe);
    });
    this.dropDowIng.refresh(filterRecipes);
    this.dropDownUst.refresh(filterRecipes);
    this.dropDownApp.refresh(filterRecipes);
  }

  createRecipeDOMElement(recipe, ingredientinfos, applianceAndUstensilsInfos) {
    this.recipesContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <article class="recipe">
               
                <img class = 'background_picture' src = "./img/recipes/${recipe.name}.jpg">
              
              <footer class="recipe--information">
                  <h1 class="recipe--information_name">${recipe.name}</h1>
                  <h2 class="recipe--information_time"><i class="far fa-clock"></i> ${recipe.time} min</h2>
                  <div class="recipe--information--text">
                      <ul class="recipe--information--text_list">
                      ${ingredientinfos}
                      </ul>
                      <p class="recipe--information--text_instructions">${recipe.description}</p>
                      <p style = 'display : none'> ${recipe.appliance} ${recipe.ustensils} </p>
                  </div>
              </footer>
          </article>
        `
    );
  }

  addUlDOMElements(recipe) {
    let ingredientinfos = "";

    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.quantity) {
        if (ingredient.unit && ingredient.quantity) {
          ingredientinfos += `<li><strong>${ingredient.ingredient}</strong> : ${ingredient.quantity} ${ingredient.unit}</li>`;
        } else {
          ingredientinfos += `<li><strong>${ingredient.ingredient}</strong> : ${ingredient.quantity}</li>`;
        }
      } else {
        ingredientinfos += `<li><strong>${ingredient.ingredient}</strong></li>`;
      }
    });

    return this.createRecipeDOMElement(recipe, ingredientinfos);
  }

   refrshDropDown = (filterRecipes) => {

    listOfIngredients.innerText = ""
    listOfUstensils.innerText = ""
    listOfAppliance.innerText = ""
    new DropDowIng(
      "ingredient",
      buttonIngredients,
      listOfIngredients,
      "ingredients",
      buttonIngredientExpanded,
      "container-1_active",
       filterRecipes,
       searchByTag
    
    );
    
    /*new DropDownApp(
      "appliance",
      buttonAppliance,
      listOfAppliance,
      "appliances",
      buttonApplianceExpanded,
      "container-2_active",
      filterRecipes,
      searchByTag
    );*/
    
   /* new DropDownUst(
      "ustensil",
      buttonUstensils,
      listOfUstensils,
      "ustensils",
      buttonUstensilsExpanded,
      "container-3_active",
      filterRecipes,
      searchByTag
    );*/
  }

  initIngredient () {
    this.dropDowIng = new DropDowIng(
       recipes,
       this.searchByTag,
       this.dropTag,
    
    );
  }

  initUstensil () {
    this.dropDownUst = new DropDownUst(
      recipes,
      this.searchByTag,
      this.dropTag,
   
   );
  }

  initAppliance () {
    this.dropDownApp = new DropDownApp(
      recipes,
      this.searchByTag,
      this.dropTag,
      
   
   );

  }

}

export { displayRecipesFactory };
