import { recipes } from './JS/datas.js';
import { DropDowIng } from './dropDownIng.js';
import { DropDownUst } from './dropDownUst.js';
import { DropDownApp } from './dropDownApp.js';

class DisplayRecipesFactory {
  searchByTag = null;

  dropTag = null;

  constructor() {
    //this.searchByTag = searchByTag;
    //this.dropTag = dropTag;
    this.recipesContainer = document.querySelector('#recipes-container');
    /*this.init();
    this.initIngredient();
    this.initUstensil();
    this.initAppliance();*/
  }

  init() {
    this.recipesContainer.innerText = '';
    recipes.forEach((recipe) => {
      this.addUlDOMElements(recipe);
    });
    this.initIngredient();
    this.initUstensil();
    this.initAppliance();
  }

  addRecipeToMainContainer(filterRecipes) {
    this.recipesContainer.innerText = '';
    const receipesToDisplay = filterRecipes || recipes;
    receipesToDisplay.forEach((recipe) => {
      this.addUlDOMElements(recipe);
    });
    this.dropDowIng.refresh(filterRecipes);
    this.dropDownUst.refresh(filterRecipes);
    this.dropDownApp.refresh(filterRecipes);
    if (receipesToDisplay.length === 0) {
      this.displayErrorMessage();
    }
  }

  createRecipeDOMElement(recipe, ingredientinfos) {
    this.recipesContainer.insertAdjacentHTML(
      'afterbegin',
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
        `,
    );
  }

  addUlDOMElements(recipe) {
    let ingredientinfos = '';

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

  initIngredient() {
    this.dropDowIng = new DropDowIng(
      recipes,
      this.searchByTag,
      this.dropTag,

    );
  }

  initUstensil() {
    this.dropDownUst = new DropDownUst(
      recipes,
      this.searchByTag,
      this.dropTag,

    );
  }

  initAppliance() {
    this.dropDownApp = new DropDownApp(
      recipes,
      this.searchByTag,
      this.dropTag,

    );
  }

  displayErrorMessage() {
    this.recipesContainer.innerHTML = `
    <main>
    <p id = "error-message" >Oups...<i class="far fa-dizzy"></i><br>Votre recherche ne correspond à aucun résultat...Vous pouvez chercher "tarte aux pommes", "poisson", etc...</p></main>`;
  }
}

export { DisplayRecipesFactory };
