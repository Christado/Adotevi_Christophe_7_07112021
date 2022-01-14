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
import { refreshRecipes } from './refresh_items.js';

class MainSearchFactory {
  constructor(input, articles) {
    this.input = input;
    this.underInputMessage = document.querySelector('#under-input-message');
    this.articles = articles;
    this.searchWithInput(this.input, this.articles);
    this.focusOnMainSearchbarAfterWindowOnload();
  }

  focusOnMainSearchbarAfterWindowOnload() {
    window.onload = this.input.focus();
  }

  searchWithInput(input, articles) {
    input.addEventListener('input', (e) => {
      if (input.value.length > 2) {
        research(articles, input);
      }
    });
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Backspace') {
        articles.forEach((article) => {
          article.classList.remove('hidden');
        });
        research(articles, input);
      }
    });
  }
}

const research = (articles, input) => {
  const restArticles = [];
  restArticles.splice(0, restArticles.length);

  const errorMessage = document.querySelector('#error-message');
  if (errorMessage) errorMessage.remove();

  refreshRecipes(articles, restArticles, input.value);

  /* if (restArticles.length < 1) {
    displayErrorMessage();
  } */
};

const displayErrorMessage = () => {
  const menuNav = document.querySelector('.menuNav');
  menuNav.insertAdjacentHTML(
    'afterend',
    `
        <main>
        <p id = "error-message" >Oups...<i class="far fa-dizzy"></i><br>Votre recherche ne correspond à aucun résultat...Vous pouvez chercher "tarte aux pommes", "poisson", etc...</p></main>`,
  );
};

export { MainSearchFactory, research };
