import { CreateSearchBarFactory } from './main_searchbar.js';
// import { displayTagAboveMenuNav } from './dropDownApp.js';
// import { recipes } from './JS/datas.js';
// import { DropDowIng } from './dropDownIng.js';

// Variable Tableau qui contient toutes les recettes générées du DOM
const articlesArray = [...document.querySelectorAll('.recipe')];

// Crée le comportement de l'input de recherche
new CreateSearchBarFactory(articlesArray);
