import { CreateSearchBarFactory } from './main_searchbar.js';

const articlesArray = [...document.querySelectorAll('.recipe')];

new CreateSearchBarFactory(articlesArray);

