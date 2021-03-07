import BaseModel from "../baseModel";

export default class SlideModel extends BaseModel{
    constructor(props) {
        super(props);
        this.data = {
            elements: [],
            x: 0,
            y: '15%',
            width: '100%',
            height: '70%',
            color: 'white'
        }
    }

    addElement = (type) => {
        this.data.elements.push(type);
        this.set('elements', this.data.elements);
    }
}