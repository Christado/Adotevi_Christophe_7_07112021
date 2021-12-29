/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const normalizeValues = (value) => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

const sortByAlphabeticsOrder = (array) => {
  array = array.sort((a, b) => {
    return a > b ? 1 : -1;
  });
};

export { normalizeValues, sortByAlphabeticsOrder };
