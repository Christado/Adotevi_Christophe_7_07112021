import { addTag, removeTag } from "./tag.js"


export class TagApp {

    constructor (
        applianceName,
        searchByTag,
        dropTag
    ) {
        this.applianceName = applianceName
        this.searchByTag = searchByTag
        this.dropTag = dropTag
        this.createNode()
    }
    createNode () {
        this.content = document.createElement('li')
        this.content.tabIndex = 0
        this.content.className = 'name-of-item'
        this.content.title = this.applianceName
        this.content.innerText = this.applianceName
        this.content.addEventListener('click', () => this.onClick())
    }

    onClick () {
        const tag = this.getTagTemplate()
        addTag(tag)
        this.searchByTag (this.applianceName, 'appliance')
        console.log (this.applianceName)
    }

    getTagTemplate() {

        this.buttonTag = document.createElement ("button")
        this.buttonTag.className= "menuNav--buttonTagSelected applianceTag"
        const p = document.createElement ("p")
        p.innerText = this.applianceName
        const image = document.createElement("img")
        image.className = "menuNav--buttonTagSelected__crossClose"
        image.src = "./img/cross-close.svg" 
        image.alt = "supprimer le tags"
        this.buttonTag.append(p,image)
        this.buttonTag.addEventListener('click',(e) => this.onTagRemove(e))
        image.addEventListener('click', (e) => this.onTagRemove (e) )
        return this.buttonTag
    }

    onTagRemove(e) {
        e.preventDefault ()
        e.stopPropagation()
        console.log(this.applianceName + "doit etre supprimé")
        removeTag(this.buttonTag)
        this.dropTag(this.applianceName, 'appliance')
    }

    addTocontainer(container) {

        container.appendChild(this.content)
    }

}