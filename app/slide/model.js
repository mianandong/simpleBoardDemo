import BaseModel from "../baseModel";

export default class SlideModel extends BaseModel{
    constructor(props) {
        super(props);
        this.data = {
            elements: ['Ruler'],
            width: 400,
            height: 500,
        }
    }

    addElement = (type) => {
        this.data.elements.push(type);
        this.data.set('elements', this.data.elements);
    }
}