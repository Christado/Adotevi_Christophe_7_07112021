/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable import/prefer-default-export */
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

import { addTag, removeTag } from './tag.js';

export class TagIng {
  constructor(
    ingredientName,
    searchByTag,
    dropTag,
  ) {
    this.ingredientName = ingredientName;
    this.searchByTag = searchByTag;
    this.dropTag = dropTag;
    this.createNode();
  }

  createNode() {
    this.content = document.createElement('li');
    this.content.tabIndex = 0;
    this.content.className = 'name-of-item';
    this.content.title = this.ingredientName;
    this.content.innerText = this.ingredientName;
    this.content.addEventListener('click', () => this.onClick());
  }

  onClick() {
    const tag = this.getTagTemplate();
    addTag(tag);
    this.searchByTag(this.ingredientName, 'ingredient');
    console.log(this.ingredientName);
  }

  getTagTemplate() {
    this.buttonTag = document.createElement('button');
    this.buttonTag.className = 'menuNav--buttonTagSelected ingredientTag';
    const p = document.createElement('p');
    p.innerText = this.ingredientName;
    const image = document.createElement('img');
    image.className = 'menuNav--buttonTagSelected__crossClose';
    image.src = './img/cross-close.svg';
    image.alt = 'supprimer le tags';
    this.buttonTag.append(p, image);
    this.buttonTag.addEventListener('click', (e) => this.onTagRemove(e));
    image.addEventListener('click', (e) => this.onTagRemove(e));
    return this.buttonTag;
  }

  onTagRemove(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(`${this.ingredientName}doit etre supprimé`);
    removeTag(this.buttonTag);
    this.dropTag(this.ingredientName, 'ingredient');
  }

  addTocontainer(container) {
    container.appendChild(this.content);
  }
}
