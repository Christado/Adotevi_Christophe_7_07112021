import {
  normalizeValues,
  sortByAlphabeticsOrder,
} from './function_normalizeValue.js';
import { NavigateInButton } from './navigation_inside_button.js';

import {
  refreshRecipes,
  refreshElementAfterRemoveTags,
  returnDisplayedArticles,
  refreshDropDownMenus,
} from './refresh_items.js';
import { TagUst } from './TagUst.js';

// Génère les élements de type TAGS dans les listes déroulantes
class DropDownUst {
  constructor(

    recipes,
    searchByTag,
    dropTag,
  ) {
    this.name = 'ustensil';

    this.button = document.querySelector('#container-3_inactive');
    this.listOfItems = document.querySelector(
      '.dropDownMenus--input_active_list_ustensils',
    );
    this.nameOfClass = 'ustensils';
    this.buttonForDisplay = document.querySelector('#container-3_active');
    this.crossCloseButton = [];
    this.allIngredients = [];
    this.allAppliances = [];
    this.allUstensils = [];
    this.arrayOfChevronUp = [];
    this.inactiveContainerID = 'container-3_active';
    this.recipes = recipes;
    this.searchByTag = searchByTag;
    this.dropTag = dropTag;

    this.articlesArray = [...document.querySelectorAll('.recipe')];
    // METHODES APPELEES

    this.addTagsToButton(this.nameOfClass);

    this.generateItemsListInDOM(this.allIngredients);
    this.generateItemsListInDOM(this.allAppliances);
    this.generateItemsListInDOM(this.allUstensils);

    this.eraseDuplicateItem(this.allIngredients);
    this.eraseDuplicateItem(this.allAppliances);
    this.eraseDuplicateItem(this.allUstensils);

    this.openNavigationList(this.button, this.buttonForDisplay);

    this.navigateInButton = new NavigateInButton(this.listOfItems, this.articlesArray);

    this.closeDropDownMenuByClickingOutside(this.button, this.buttonForDisplay);
  }

  eraseDuplicateItem(array) {
    array = Array.from(new Set(this.allUstensils));
  }

  addTagsToButton(nameOfClass) {
    this.allIngredients = [];
    this.allAppliances = [];
    this.allUstensils = [];
    this.recipes.forEach((recipe) => {
      if (nameOfClass === 'ingredients') {
        recipe.ingredients.forEach((ingredient) => {
          this.allIngredients.push(ingredient.ingredient);
        });
      }
      if (nameOfClass === 'appliances') {
        this.allAppliances.push(recipe.appliance);
      }
      if (nameOfClass === 'ustensils') {
        recipe.ustensils.forEach((ustensil) => {
          this.allUstensils.push(ustensil);
        });
      }
    });

    // Supprime les doublons dans les tableaux avec méthode Set

    const eraseDuplicatedValues = () => {
      this.allIngredients = Array.from(new Set(this.allIngredients));
      this.allAppliances = Array.from(new Set(this.allAppliances));
      this.allUstensils = Array.from(new Set(this.allUstensils));
    };

    eraseDuplicatedValues();
  }

  // Trie les items des listes dans l'ordre alphabétique + les génère dans le DOM
  generateItemsListInDOM(array) {
    sortByAlphabeticsOrder(array);

    array.forEach((item) => {
      const tagUst = new TagUst(item, this.searchByTag, this.dropTag);
      tagUst.addTocontainer(this.listOfItems);
    });
  }

  refresh(filterRecipes) {
    this.listOfItems.innerText = '';
    this.recipes = filterRecipes;
    this.addTagsToButton(this.nameOfClass);

    this.generateItemsListInDOM(this.allIngredients);
    this.generateItemsListInDOM(this.allAppliances);
    this.generateItemsListInDOM(this.allUstensils);

    this.eraseDuplicateItem(this.allIngredients);
    this.eraseDuplicateItem(this.allAppliances);
    this.eraseDuplicateItem(this.allUstensils);

    this.openNavigationList(this.button, this.buttonForDisplay);

    // this.navigateInButton.refresh();

    this.closeDropDownMenuByClickingOutside(this.button, this.buttonForDisplay);
    this.navigateInButton = new NavigateInButton(this.listOfItems, this.articlesArray);
  }

  // OUVRE ET FERME LES LISTES DEROULANTES
  openNavigationList(buttonInactive, buttonActive) {
    buttonInactive.addEventListener('click', (e) => {
      // Supprime la classe 'Erase Temporarly' à l'ouverture du menu déroulant pou afficher le reste des tags disponibles
      const listOfItems = [...document.querySelectorAll('.name-of-item')];
      listOfItems.forEach((li) => {
        if (li.className === 'name-of-item erase-temporarly') {
          li.classList.remove('erase-temporarly');
        }
      });

      // Comportement des boutons au clic
      buttonInactive.style.display = 'none';
      buttonActive.style.display = 'block';
      buttonActive.firstChild.nextElementSibling.focus(); // FOCUS SUR L'INPUT /
      const closeActiveInputByChevron = (containerId, chevronId) => {
        if (buttonActive.id === containerId) {
          document.querySelector(chevronId).addEventListener('click', () => {
            buttonActive.style.display = 'none';
            buttonInactive.style.display = 'block';
          });
        }
      };

      this.createMessageIfNoItemsRemainings();

      closeActiveInputByChevron('container-1_active', '#chevron-up-ingredient');
      closeActiveInputByChevron('container-2_active', '#chevron-up-appliance');
      closeActiveInputByChevron('container-3_active', '#chevron-up-ustensils');
    });
  }

  // Crée un message dans le dropDownMenu lorsqu'il est vide
  createMessageIfNoItemsRemainings() {
    const menus = [
      ...document.querySelectorAll('.dropDownMenus--input_active_list'),
    ];

    menus.forEach((menu) => {
      const endMessage = menu.querySelector('.end-message');
      this.createMessageForEachDropdownMenus(menu, endMessage);
    });
  }

  // Crée le message dans le DOM et le supprime si le dropdown est re rempli avec des items
  createMessageForEachDropdownMenus(menu, endMessage) {
    if (endMessage) {
      endMessage.remove();
    }
    const itemsClassNames = [];

    const itemArray = [...menu.querySelectorAll('li')];

    itemArray.forEach((item) => {
      itemsClassNames.push(item.className);
    });
    const itemIsHidden = (className) => className === 'name-of-item hidden';
    const allitemsAreHidden = itemsClassNames.every(itemIsHidden);

    if (allitemsAreHidden) {
      menu.insertAdjacentHTML(
        'afterbegin',
        `
      <p class = 'end-message'>Il n'y a plus rien à selectionner dans cette section </p>`,
      );
    } else if (endMessage) {
      endMessage.remove();
    }
  }

  closeDropDownMenuByClickingOutside(buttonInactive, buttonActive) {
    document.addEventListener('click', (e) => {
      if (
        e.target.parentNode !== buttonActive
        && e.target.parentNode !== buttonInactive
      ) {
        buttonActive.style.display = 'none';
        buttonInactive.style.display = 'block';
      }
    });
  }
}

// AFFICHE LES TAGS SELECTIONNES AU DESSUS DES BOUTONS

const displayTagAboveMenuNav = (articles) => {
  const arrayOfCrossCloseAbove = [];
  const tagSelectedContainer = document.querySelector(
    '.menuNav--buttons-selected-container',
  );
  const arrayOfItems = [...document.querySelectorAll('.name-of-item')];
  arrayOfItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const parentContainerOfTarget = e.target.parentNode.parentNode;
      const inputAboveTarget = parentContainerOfTarget.firstChild.nextElementSibling;
      e.preventDefault();
      tagSelectedContainer.insertAdjacentHTML(
        'afterbegin',
        `
              <button class="menuNav--buttonTagSelected"> <p>${e.target.innerHTML}</p> <img class="menuNav--buttonTagSelected__crossClose" src="./img/cross-close.svg" alt="supprimer le tags">
          </button>`,
      );
      const buttonForTagsAbove = document.querySelector(
        '.menuNav--buttonTagSelected',
      );

      const valueOfItemSelected = normalizeValues(e.target.innerHTML).trim();
      const restArticles = [];
      restArticles.splice(0, restArticles.length);

      // Supprime la valeur entrée au clic sur un tag
      if (inputAboveTarget.value) inputAboveTarget.value = null;

      // Lance la recherche avancée par tag au clic sur un tag

      refreshRecipes(articles, restArticles, valueOfItemSelected);
      
      // DEFINIT LA COULEUR DE L'ARRIERE-PLAN DU BOUTON DE TAG SELECTIONNE
      const getBgColorOfTagsAbove = (className, color) => {
        if (e.target.parentNode?.className?.includes(className)) {
          buttonForTagsAbove.style.backgroundColor = color;
          arrayOfCrossCloseAbove.push(
            document.querySelector('.menuNav--buttonTagSelected__crossClose'),
          );
        }
      };

      getBgColorOfTagsAbove(e, 'ing', '#3282f7');
      getBgColorOfTagsAbove(e, 'appliance', '#68d9a4');
      getBgColorOfTagsAbove(e, 'ustensils', '#ed6454');

      closeTagAboveMenuNav(arrayOfCrossCloseAbove);
    });
  });
};

// SUPPRIME LE TAG SELECTIONNE AU CLIC SUR LA CROIX
const closeTagAboveMenuNav = (arrayOfCrossCloseAbove) => {
  arrayOfCrossCloseAbove.forEach((cross) => {
    cross.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      // Lance la déselection des tags de recherches avancées et actualise les recettes + tags
      const restArticles = [];
      restArticles.splice(0, restArticles.length);
      const input = document.querySelector('.menuNav--searchInput');
      if (!input.value) {
        refreshElementAfterRemoveTags(restArticles);
      }
      const buttons = [
        ...document.querySelectorAll('.menuNav--buttonTagSelected'),
      ];
      const articles = [...document.querySelectorAll('.recipe')];
      if (input.value && buttons.length < 1) {
        articles.forEach((article) => {
          article.classList.remove('hidden');
          const articleFooter = article.firstChild.nextElementSibling.nextElementSibling;
          const footerValuesNorm = normalizeValues(articleFooter.innerHTML);
          const inputValue = normalizeValues(input.value);
          if (!footerValuesNorm.includes(inputValue)) {
            article.classList.add('hidden');
          }
          returnDisplayedArticles(restArticles, articles);
          refreshDropDownMenus(restArticles);
        });
      }
    });
  });
};

export { DropDownUst, displayTagAboveMenuNav, closeTagAboveMenuNav };