// let arrayOfCrossCloseAbove = [];
const tagSelectedContainer = document.querySelector(
  '.menuNav--buttons-selected-container',
);

export const addTag = (tag) => {
  tagSelectedContainer.appendChild(tag);
};

export const removeTag = (tag) => {
  tagSelectedContainer.removeChild(tag);
};
