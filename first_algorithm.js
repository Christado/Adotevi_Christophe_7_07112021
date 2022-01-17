import { normalizeValues } from './function_normalizeValue.js';
import { recipes } from './JS/datas.js';
import { DisplayRecipesFactory } from './recipes_display.js';
// import { ButtonListFactory } from "./dropDownApp.js";
// import { DropDowIng } from './dropDownIng.js';

let textInput = '';
let selectedIngredient = [];
let selectedUstensil = [];
let selectedAppli = [];
let filterRecipes = recipes;
const searchByTag = (tagName, type) => {
  const input = normalizeValues(tagName);
  if (type === 'ingredient') {
    filterRecipes = filterRecipes.filter((recipe) => searchByIngredientPredicate(recipe, input));
    display.addRecipeToMainContainer(filterRecipes);
    selectedIngredient.push(tagName);
  }
  if (type === 'ustensil') {
    filterRecipes = filterRecipes.filter((recipe) => searchByUstensilPredicate(recipe, input));
    display.addRecipeToMainContainer(filterRecipes);
    selectedUstensil.push(tagName);
  }
  if (type === 'appliance') {
    filterRecipes = filterRecipes.filter((recipe) => searchByAppliancePredicate(recipe, input));
    display.addRecipeToMainContainer(filterRecipes);
    selectedAppli.push(tagName);
  }
};

const removeTag = (tagName, type) => {
  console.log('suppresion du tag');
  console.log(tagName);
  if (type === 'ingredient') {
    selectedIngredient = selectedIngredient.filter((ingredient) => ingredient !== tagName);
  }

  if (type === 'ustensil') {
    selectedUstensil = selectedUstensil.filter((ustensil) => ustensil !== tagName);
  }

  if (type === 'appliance') {
    selectedAppli = selectedAppli.filter((appliance) => appliance !== tagName);
  }

  filterRecipes = procesSearch(textInput);
  // console.table(filterRecipes)
  searchByAllIngredient();
  searchByAllUstensil();
  searchByAllAppliance();
  display.addRecipeToMainContainer(filterRecipes);
};

const searchByIngredientPredicate = (recipe, normalizedInput) => {
  /* const ingredientNames = recipe.ingredients.map(item => item.ingredient)
    return ingredientNames.some(name => normalizeValues(name).includes(normalizedInput)) */

  let existe = false;
  for (const ingredient of recipe.ingredients) {
    const ingredientName = ingredient.ingredient;
    if (normalizeValues(ingredientName).includes(normalizedInput)) {
      existe = true;
    }
  }
  return existe;
};

const searchByUstensilPredicate = (recipe, normalizedInput) => {
  const ustensilNames = recipe.ustensils;
  return ustensilNames.some((name) => normalizeValues(name).includes(normalizedInput));
};

const searchByAppliancePredicate = (recipe, normalizedInput) => {
  const applianceName = recipe.appliance;
  return normalizeValues(applianceName).includes(normalizedInput);
};

const searchByAllIngredient = () => {
  console.log(selectedIngredient);
  selectedIngredient.forEach((ingredient) => {
    const input = normalizeValues(ingredient);
    filterRecipes = filterRecipes.filter((recipe) => searchByIngredientPredicate(recipe, input));
  });
};

const searchByAllUstensil = () => {
  console.log(selectedUstensil);
  selectedUstensil.forEach((ustensil) => {
    const input = normalizeValues(ustensil);
    filterRecipes = filterRecipes.filter((recipe) => searchByUstensilPredicate(recipe, input));
  });
};

const searchByAllAppliance = () => {
  console.log(selectedAppli);
  selectedAppli.forEach((appliance) => {
    const input = normalizeValues(appliance);
    filterRecipes = filterRecipes.filter((recipe) => searchByAppliancePredicate(recipe, input));
  });
};

const display = new DisplayRecipesFactory(searchByTag, removeTag);
// ALGO DE RECHERCHE 1
// Différentes listes des dropDownMenus

const searchByNamePredicate = (recipe, normalizedInput) => {
  const normalizedName = normalizeValues(recipe.name);
  return normalizedName.includes(normalizedInput);
};

const searchByDescriptionPredicate = (recipe, normalizedInput) => {
  const normalizedDescription = normalizeValues(recipe.description);
  return normalizedDescription.includes(normalizedInput);
};

const procesSearch = (inputNorm) => {
  if (!inputNorm) { return recipes; }
  /* return recipes.filter((recipe)=>{

      // eslint-disable-next-line max-len
      return searchByNamePredicate(recipe,inputNorm) || searchByDescriptionPredicate(recipe,inputNorm) || searchByIngredientPredicate(recipe,inputNorm);
     }) */
  const result = [];
  for (const recipe of recipes) {
    if (searchByNamePredicate(recipe, inputNorm)
      || searchByDescriptionPredicate(recipe, inputNorm)
      || searchByIngredientPredicate(recipe, inputNorm)) {
      result.push(recipe);
    }
  }
  return result;
};
const searchAlgo = (articles, input) => {
  const inputValueNorm = normalizeValues(input);
  textInput = inputValueNorm;
  filterRecipes = procesSearch(inputValueNorm);
  display.addRecipeToMainContainer(filterRecipes);
  // refrshDropDown(filterRecipes);
};

export {
  searchAlgo,
};
