export default class BaseModel {
    constructor(props) {
        this.data = {};
    }

    set = (key, vaule) => {
        this.data[key] = vaule;
        this.changeCallBack(this.data);
    }

    get = (key) => {
        return this.data[key];
    }

    changeCallBack = (data) => {
    }

    onChange(cb) {
        this.changeCallBack = cb;
    }

    static create() {
        return new this();
    }
}