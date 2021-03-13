import BaseModel from "../baseModel";

export default class RulerModel extends BaseModel {
    constructor(props) {
        super(props);
        this.data = {
            width: '19em',
            height: '19em',
            word: 'hello word'
        }
    }
}