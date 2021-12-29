/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable import/prefer-default-export */
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

let arrayOfCrossCloseAbove = [];
let tagSelectedContainer = document.querySelector(
  '.menuNav--buttons-selected-container',
);

export const addTag = (tag) => {
  tagSelectedContainer.appendChild(tag);
  /* tagSelectedContainer.insertAdjacentHTML(
        "afterbegin",
        `
              <button id= ${tagName} class="menuNav--buttonTagSelected ${type}"> <p>${tagName}</p> <img class="menuNav--buttonTagSelected__crossClose" src="./img/cross-close.svg" alt="supprimer le tags">
          </button>`
      ); */
  /* let arrayOfItems = [...document.querySelectorAll(".name-of-item")];
    arrayOfItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        let parentContainerOfTarget = e.target.parentNode.parentNode;
        let inputAboveTarget =
          parentContainerOfTarget.firstChild.nextElementSibling;
        e.preventDefault();
        tagSelectedContainer.insertAdjacentHTML(
          "afterbegin",
          `
                <button class="menuNav--buttonTagSelected"> <p>${e.target.innerHTML}</p> <img class="menuNav--buttonTagSelected__crossClose" src="./img/cross-close.svg" alt="supprimer le tags">
            </button>`
        ); */
  let buttonForTagsAbove = document.querySelector(
    '.menuNav--buttonTagSelected',
  );

  /* let valueOfItemSelected = normalizeValues(e.target.innerHTML).trim();
        let restArticles = [];
        restArticles.splice(0, restArticles.length); */

  // Supprime la valeur entrée au clic sur un tag
  // if (inputAboveTarget.value) inputAboveTarget.value = null;

  // Lance la recherche avancée par tag au clic sur un tag

  // refreshRecipes(articles,restArticles, valueOfItemSelected);
  // displayCorrespondantTagsOnly (articles, restArticles, valueOfItemSelected);
  // returnDisplayedArticles(articles,restArticles);

  // DEFINIT LA COULEUR DE L'ARRIERE-PLAN DU BOUTON DE TAG SELECTIONNE
  /* const getBgColorOfTagsAbove = (e, className, color) => {

          if (e.target.parentNode?.className?.includes(className)) {
            buttonForTagsAbove.style.backgroundColor = color;
            arrayOfCrossCloseAbove.push(
              document.querySelector(".menuNav--buttonTagSelected__crossClose")
            );
          }
        };

        getBgColorOfTagsAbove(e, "ing", "#3282f7");
        getBgColorOfTagsAbove(e, "appliance", "#68d9a4");
        getBgColorOfTagsAbove(e, "ustensils", "#ed6454");

        closeTagAboveMenuNav(arrayOfCrossCloseAbove);
      });
    }); */
};

export const removeTag = (tag) => {
  tagSelectedContainer.removeChild(tag);
};
