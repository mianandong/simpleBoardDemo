import BaseModel from "../baseModel";

export default class RulerModel extends BaseModel {
    constructor(props) {
        super(props);
        this.data = {
            width: 100,
            height: 20,
            color: 'red'
        }
        window.xuwei = this.move;
    }

    move = (width) => {
        this.set('width', width);
    }
}