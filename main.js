/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { CreateSearchBarFactory } from './main_searchbar.js';
import { displayTagAboveMenuNav } from './dropDownApp.js';
import { displayRecipesFactory } from './recipes_display.js';
import { recipes } from './JS/datas.js';
import { DropDowIng } from './dropDownIng.js';

// Génère les Recettes dans le DOM
// new displayRecipesFactory();

// Variable Tableau qui contient toutes les recettes générées du DOM
const articlesArray = [...document.querySelectorAll('.recipe')];

// Crée le comportement de l'input de recherche
new CreateSearchBarFactory(articlesArray);

// Différentes listes des dropDownMenus
const listOfIngredients = document.querySelector(
  '.dropDownMenus--input_active_list_ing',
);
const listOfAppliance = document.querySelector(
  '.dropDownMenus--input_active_list_appliance',
);
const listOfUstensils = document.querySelector(
  '.dropDownMenus--input_active_list_ustensils',
);

// Boutons Inactifs
const buttonIngredients = document.querySelector('#container-1_inactive');
const buttonAppliance = document.querySelector('#container-2_inactive');
const buttonUstensils = document.querySelector('#container-3_inactive');

// Boutons Actifs (déployés)
const buttonIngredientExpanded = document.querySelector('#container-1_active');
const buttonApplianceExpanded = document.querySelector('#container-2_active');
const buttonUstensilsExpanded = document.querySelector('#container-3_active');

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
