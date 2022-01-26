
import { normalizeValues } from './function_normalizeValue.js';
import { searchAlgo } from './first_algorithm.js';

const refreshRecipes = (articles, restArticles, input) => {
  const filtredRecipes = searchAlgo(articles, input);
};

const returnDisplayedArticles = (restArticles, articles) => {
  articles.forEach((article) => {
    if (article.className !== 'recipe hidden') {
      restArticles.push(article);
    }
  });
};

// ACTUALISE LES DROPDOWN MENUS

const refreshDropDownMenus = (restArticles) => {
  eraseAllTags();
  const items = [...document.querySelectorAll('.name-of-item')];
  displayCorrespondantTagsOnly(restArticles, items);
  eraseValuesAlreadySelected(items);
};

const eraseAllTags = () => {
  const items = [...document.querySelectorAll('.name-of-item')];
  items.forEach((item) => {
    item.classList.add('hidden');
  });
};

const displayCorrespondantTagsOnly = (restArticles, items) => {
  let nameOfItem;

  // Refresh Tags that correspond to the recipes filters remaining
  restArticles.forEach((article) => {
    let infos = article.firstChild.nextElementSibling.nextElementSibling.innerText;
    infos = normalizeValues(infos);
    items.forEach((item) => {
      nameOfItem = item.innerText;
      nameOfItem = normalizeValues(nameOfItem).trim();
      if (infos.includes(nameOfItem)) {
        item.classList.remove('hidden');
      }
    });
  });
};


const refreshElementAfterRemoveTags = (restArticles) => {
  const articles = [...document.querySelectorAll('.recipe')];
  const buttons = [...document.querySelectorAll('.menuNav--buttonTagSelected')];

  buttons.forEach((button) => {
    const buttonValue = normalizeValues(button.innerText);
    articles.forEach((article) => {
      article.classList.remove('hidden');
    });
  });

  refreshRecipesAfterRemovingTags(articles, restArticles, buttons);

  // Affiche l'intégralité des recettes si il n'y a plus de tags et que l'input est vide
  const input = document.querySelector('.menuNav--searchInput');
  if (buttons.length < 1 && !input.value) {
    // Faire le comportement si l'input est vide et s'il est rempli
    articles.forEach((article) => {
      article.classList.remove('hidden');
    });
    const items = [...document.querySelectorAll('.name-of-item')];
    items.forEach((item) => {
      item.classList.remove('hidden');
    });
  }
};

const refreshRecipesAfterRemovingTags = (articles, restArticles, buttons) => {
  articles.forEach((article) => {
    const articleFooter = article.firstChild.nextElementSibling.nextElementSibling;
    const footerValuesNorm = normalizeValues(articleFooter.innerText);
    buttons.forEach((button) => {
      const buttonValueNorm = normalizeValues(button.innerText);
      if (!footerValuesNorm.includes(buttonValueNorm)) {
        article.classList.add('hidden');
      }
    });
  });
  returnDisplayedArticles(restArticles, articles);
  refreshDropDownMenus(restArticles);
};

export {
  refreshRecipes,
  refreshElementAfterRemoveTags,
  returnDisplayedArticles,
  refreshDropDownMenus,
  refreshRecipesAfterRemovingTags,
  displayCorrespondantTagsOnly,
};
