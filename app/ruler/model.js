import BaseModel from "../baseModel";

export default class RulerModel extends BaseModel {
    constructor(props) {
        super(props);
        this.data = {
            width: 80,
            height: 80,
            color: 'red',
            x: 100,
            y: 0
        }
        window.xuwei = this.move;
    }
}