/* eslint-disable no-undef */
/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

import { CreateSearchBarFactory } from './main_searchbar.js';
// import { displayTagAboveMenuNav } from './dropDownApp.js';
// import { displayRecipesFactory } from "./recipes_display.js";
// import { recipes } from './JS/datas.js';
// import { DropDowIng } from './dropDownIng.js';

// Génère les Recettes dans le DOM
// new displayRecipesFactory();

// Variable Tableau qui contient toutes les recettes générées du DOM
const articlesArray = [...document.querySelectorAll('.recipe')];

// Crée le comportement de l'input de recherche
new CreateSearchBarFactory(articlesArray);

// Différentes listes des dropDownMenus

// Boutons Inactifs

// Boutons Actifs (déployés)

/* new DropDowIng(
  "ingredient",
  buttonIngredients,
  listOfIngredients,
  "ingredients",
  buttonIngredientExpanded,
  "container-1_active",
   recipes
); */

/* new ButtonListFactory(
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
); */

// displayTagAboveMenuNav(articlesArray);
