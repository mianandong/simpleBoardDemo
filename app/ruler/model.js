import BaseModel from "../baseModel";

export default class RulerModel extends BaseModel {
    constructor(props) {
        super(props);
        this.data = {
            width: 80,
            height: 80,
            color: 'red',
            word: 'hello word'
        }
    }
}