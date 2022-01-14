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
import { normalizeValues } from './function_normalizeValue.js';

class NavigateInButton {
  constructor(listOfItems, articles) {
    this.listOfItems = listOfItems;
    console.log(articles);
    this.articles = articles;
    /* this.items = items;
    this.type = type;
    this.input = null;
    this.onSearch = onSearch; */

    this.inputsForSearchArray = [
      ...document.querySelectorAll('.dropDownMenus--input_active_title'),
    ];
    this.chevronArray = [
      ...document.querySelectorAll('.dropDownMenus--input_active_chevron '),
    ];
    this.listOfItemsArray = [...listOfItems.children];

    this.searchThroughItems(this.inputsForSearchArray);
  }

  searchThroughItems(inputs) {
    inputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        if (this.listOfItems.parentNode === input.parentNode) {
          const valueLowCaseAndWithoutAccent = normalizeValues(input.value);

          this.listOfItemsArray.forEach((li) => {
            // Supprime temporairement les éléments restants de la liste des tags affinée
            if (li.className !== 'name-of-item hidden') {
              li.classList.add('erase-temporarly');
            }

            const titleLowCaseAndWithoutAccent = normalizeValues(li.title);
            // Affiche les items avec la même valeur que la saisie entrée dans l'input
            this.displayItemsWithSameValuesAsEnteredInInput(
              titleLowCaseAndWithoutAccent,
              valueLowCaseAndWithoutAccent,
              li,
            );
          });
        }
      });
    });
  }

  /* refresh () {
    this.searchThroughItems(this.inputsForSearchArray);
  } */

  // Affiche les items dans la liste déroulante qui ont la même valeur que la saisie
  displayItemsWithSameValuesAsEnteredInInput(titleOfItems, valueOfInput, li) {
    if (li.className === 'name-of-item erase-temporarly') {
      if (titleOfItems.includes(valueOfInput)) {
        li.classList.remove('erase-temporarly');
      }
    }
  }
}

export { NavigateInButton };
