export default class ComponentManager {
    constructor(props) {
        this.elements = new Map();
    }

    registrComponent(type, {render, model}) {
        this.elements.set(type, {render, model});
    }

    getModuleByType(type) {
        let comp = this.elements.get(type);
        if (comp) {
            console.log(comp);
            return comp.model;
        }
    }

    getRenderByType(type) {
        let comp = this.elements.get(type);
        if (comp) {
            return comp.render;
        }
    }
}