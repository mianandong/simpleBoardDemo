import React from "react";

export default class BaseContainer extends React.Component {
    constructor(props) {
        super(props);
        // 获取该组件的Model类
        this.ComponentModelStruct = componentManager.getModuleByType(this.props.type);
        if (this.ComponentModelStruct) {
            // 调用类的静态方法，返回XXXModel的实例，this.model是一个对象
            this.model = this.ComponentModelStruct.create(this.props.modelData, this.props.key);
            console.log('===create model===', this.model);
            // 为数据变更注册回调
            this.model.onChange((newData) => {
                console.log('===call setState===');
                this.setState(newData);
            });
        }
        this.self = this;
        this.dragging = false;
        this.tLeft = 0;
        this.tTop = 0;
        this.originX = 0;
        this.originY = 0;
        this.jieliuMove = null;
    }

    onMouseDown = (e) => {
        console.log('mouse down', e.target, this.self)
        if (!this.model.data.fixed) {
            this.dragging = true;

            this.tLeft = e.clientX;
            this.tTop = e.clientY;
            this.originX = this.model.data.x;
            this.originY = this.model.data.y;
            this.jieliuMove = this.jieliu(this.onMouseMove, 50);
            window.addEventListener('mousemove', this.jieliuMove, false);
            window.addEventListener('mouseup', this.onMouseUp, false);
        }
    }

    onMouseMove = (e) => {
        console.log('mouse mousemove');
        if (this.dragging) {
            const moveX = e.clientX - this.tLeft;
            const moveY = e.clientY - this.tTop;
            const x = this.originX + moveX;
            const y = this.originY + moveY;
            this.model.move(x, y);
        }
    }

    onMouseUp = () => {
        console.log('mouse up');
        this.dragging = false;
        window.removeEventListener('mousemove', this.jieliuMove, false);
        window.removeEventListener('mouseup', this.onMouseUp, false);
    }

    render = () => {
        const ObjRender = componentManager.getRenderByType(this.props.type);
        const { data } = this.model;
        const styles = {
            position: 'absolute',
            width: data.width,
            height: data.height,
            top: data.y,
            left: data.x,
            backgroundColor: data.color,
            overflow: 'hidden',
            opacity: data.opacity
        }

        return (
            <div style={styles} key={this.props.key} onMouseDown={this.onMouseDown} ref={(c) => {this.self = c}}>
                <ObjRender model={this.model}/>
            </div>
        );
    }

    jieliu = (cb, wait) => {
        let timer;
        return function(e) {
            let context = this;
            if (!timer) {
                timer = setTimeout(() => {
                    cb.call(context, e);
                    timer = null;
                }, wait);
            }
        }
    }
}
