import { MainSearchFactory } from './search_inside_mainSearchBar.js';
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

        returnDisplayedArticles(restArticles, this.articlesArray);
        refreshDropDownMenus(restArticles);
      }
    });
  }
}

export { CreateSearchBarFactory };
