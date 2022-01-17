import { refreshRecipes } from './refresh_items.js';

const research = (articles, input) => {
  const restArticles = [];
  restArticles.splice(0, restArticles.length);

  const errorMessage = document.querySelector('#error-message');
  if (errorMessage) errorMessage.remove();

  refreshRecipes(articles, restArticles, input.value);
};
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

export { MainSearchFactory, research };
