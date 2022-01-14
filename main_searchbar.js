/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { MainSearchFactory } from './search_inside_mainSearchBar.js';
import { normalizeValues } from './function_normalizeValue.js';
import {
  returnDisplayedArticles,
  refreshDropDownMenus,
} from './refresh_items.js';

class CreateSearchBarFactory {
  constructor(articlesArray) {
    this.inputOfMainSearchBar = document.querySelector('.menuNav--searchInput');
    this.articlesArray = articlesArray;

    this.searchInsideMainSearchBar(this.inputOfMainSearchBar);

    new MainSearchFactory(this.inputOfMainSearchBar, this.articlesArray);
  }

  searchInsideMainSearchBar(input) {
    // Affiche toutes les recettes si l'input est vidé
    input.addEventListener('input', (e) => {
      if (input.value.length < 1) {
        let restArticles = [];
        restArticles = restArticles.splice(0, restArticles.length);
        const buttons = [
          ...document.querySelectorAll('.menuNav--buttonTagSelected'),
        ];
        this.articlesArray.forEach((article) => {
          article.classList.remove('hidden');
        });

        // Actualise les recettes uniquement en fonctions des tags si l'input est supprimé

        buttons.forEach((button) => {
          this.articlesArray.forEach((article) => {
            const articleFooter = article.firstChild.nextElementSibling.nextElementSibling;
            const footerValuesNorm = normalizeValues(articleFooter.innerHTML);
            const buttonValueNorm = normalizeValues(button.innerText);
            if (!footerValuesNorm.includes(buttonValueNorm)) {
              article.classList.add('hidden');
            }
          });
        });
        returnDisplayedArticles(restArticles, this.articlesArray);
        refreshDropDownMenus(restArticles);
      }
    });
  }
}

export { CreateSearchBarFactory };
