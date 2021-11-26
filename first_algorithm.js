
import { normalizeValues } from "./function_normalizeValue.js";
import { recipes } from "./JS/datas.js";


//ALGO DE RECHERCHE 1


const searchByNamePredicate = (recipe,normalizedInput) => {
    const normalizedName = normalizeValues(recipe.name)
    return normalizedName.includes(normalizedInput)
  }
  
  const searchByDescriptionPredicate = (recipe,normalizedInput) => {
    const normalizedDescription = normalizeValues(recipe.description)
    return normalizedDescription.includes(normalizedInput)
  }
  
  const searchByIngredientPredicate = (recipe,normalizedInput) => {
    const ingredientNames = recipe.ingredients.map(item => item.ingredient)
    return ingredientNames.some(name => normalizeValues(name).includes(normalizedInput))
    
  }
  const searchAlgo = (articles, input) => {
    const inputValueNorm = normalizeValues(input)
    const filterRecipes = recipes.filter((recipe)=>{
     
     return searchByNamePredicate(recipe,inputValueNorm) || searchByDescriptionPredicate(recipe,inputValueNorm) || searchByIngredientPredicate(recipe,inputValueNorm);
    })
    display.addRecipeToMainContainer(filterRecipes)
    
  };
  
  export {
    searchAlgo,
  };
  