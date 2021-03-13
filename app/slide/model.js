import BaseModel from "../baseModel";
import _ from 'lodash';

export default class SlideModel extends BaseModel{
    constructor(props) {
        super(props);
        this.data = {
            elements: [],
            x: 0,
            y: '10%',
            width: '100%',
            height: '80%',
            color: 'white',
            fixed: true
        }
    }

    addElement = (type, key, data) => {
        this.data.elements.push({type, key, data});
        this.set('elements', this.data.elements);
    }

    removeElement = (type) => {
        console.log('55555', this.data.elements)
        const a = _.remove(this.data.elements, (element) => {
            return element.type != type;
        });
        console.log('44444', a)
        this.set('elements', a);
    }
}