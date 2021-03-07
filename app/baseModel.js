export default class BaseModel {

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
        const component = new this();
        component.data = {
            x: 0,
            y: 0,
            width: 40,
            height: 40,
            ...component.data
        }
        return component;
    }

    move = (x, y) => {
        this.set('x', x);
        this.set('y', y);
    }
}