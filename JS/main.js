import { CreateSearchBarFactory } from './main_searchbar.js';

// Variable Tableau qui contient toutes les recettes générées du DOM
const articlesArray = [...document.querySelectorAll('.recipe')];

// Crée le comportement de l'input de recherche
new CreateSearchBarFactory(articlesArray);
