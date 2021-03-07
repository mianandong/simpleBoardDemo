export default class BaseModel {
    constructor(props) {
        this.data = {
            x: 0,
            y: 0
        };
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

    move = (x, y) => {
        this.set('x', x);
        this.set('y', y);
    }
}