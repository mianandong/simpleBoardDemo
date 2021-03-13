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

    static create(modelData, key) {
        const component = new this();
        if (!key) {
            key = Math.random().toString();
        }
        component.data = {
            x: 0,
            y: 0,
            width: 40,
            height: 40,
            opacity: 1,
            key: key,
            ...modelData,
            ...component.data,
        }
        return component;
    }

    move = (x, y) => {
        this.set('x', x);
        this.set('y', y);
    }
}