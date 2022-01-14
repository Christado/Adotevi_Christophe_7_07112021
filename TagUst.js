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
import { addTag, removeTag } from './tag.js';

export class TagUst {
  constructor(
    ustensilName,
    searchByTag,
    dropTag,
  ) {
    this.ustensilName = ustensilName;
    this.searchByTag = searchByTag;
    this.dropTag = dropTag;
    this.createNode();
  }

  createNode() {
    this.content = document.createElement('li');
    this.content.tabIndex = 0;
    this.content.className = 'name-of-item';
    this.content.title = this.ustensilName;
    this.content.innerText = this.ustensilName;
    this.content.addEventListener('click', () => this.onClick());
  }

  onClick() {
    const tag = this.getTagTemplate();
    addTag(tag);
    this.searchByTag(this.ustensilName, 'ustensil');
    console.log(this.ustensilName);
  }

  getTagTemplate() {
    this.buttonTag = document.createElement('button');
    this.buttonTag.className = 'menuNav--buttonTagSelected ustensilTag';
    const p = document.createElement('p');
    p.innerText = this.ustensilName;
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
    console.log(`${this.ustensilName}doit etre supprimé`);
    removeTag(this.buttonTag);
    this.dropTag(this.ustensilName, 'ustensil');
  }

  addTocontainer(container) {
    container.appendChild(this.content);
  }
}
