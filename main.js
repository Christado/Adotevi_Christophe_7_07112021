import { CreateSearchBarFactory } from "./main_searchbar.js";
import { displayTagAboveMenuNav } from "./dropDownApp.js";
import { displayRecipesFactory } from "./recipes_display.js";
import { recipes } from "./JS/datas.js";
import { DropDowIng } from "./dropDownIng.js";


//Génère les Recettes dans le DOM
//new displayRecipesFactory();

// Variable Tableau qui contient toutes les recettes générées du DOM
let articlesArray = [...document.querySelectorAll(".recipe")];

//Crée le comportement de l'input de recherche
new CreateSearchBarFactory(articlesArray);

//Différentes listes des dropDownMenus
let listOfIngredients = document.querySelector(
  ".dropDownMenus--input_active_list_ing"
);
let listOfAppliance = document.querySelector(
  ".dropDownMenus--input_active_list_appliance"
);
let listOfUstensils = document.querySelector(
  ".dropDownMenus--input_active_list_ustensils"
);

// Boutons Inactifs
let buttonIngredients = document.querySelector("#container-1_inactive");
let buttonAppliance = document.querySelector("#container-2_inactive");
let buttonUstensils = document.querySelector("#container-3_inactive");

// Boutons Actifs (déployés)
let buttonIngredientExpanded = document.querySelector("#container-1_active");
let buttonApplianceExpanded = document.querySelector("#container-2_active");
let buttonUstensilsExpanded = document.querySelector("#container-3_active");

/*new DropDowIng(
  "ingredient",
  buttonIngredients,
  listOfIngredients,
  "ingredients",
  buttonIngredientExpanded,
  "container-1_active",
   recipes
);*/

/*new ButtonListFactory(
  "appliances",
  buttonAppliance,
  listOfAppliance,
  "appliances",
  buttonApplianceExpanded,
  "container-2_active",
  recipes
);

new ButtonListFactory(
  "ustensils",
  buttonUstensils,
  listOfUstensils,
  "ustensils",
  buttonUstensilsExpanded,
  "container-3_active",
  recipes
);*/

//displayTagAboveMenuNav(articlesArray);
