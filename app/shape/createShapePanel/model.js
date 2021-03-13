import BaseModel from "../../baseModel";

export default class ShapeModel extends BaseModel {
    constructor(props) {
        super(props);

        this.data = {
            width: '100%',
            height: '100%',
            opacity: 1,
            fixed: true 
        }
    }
}