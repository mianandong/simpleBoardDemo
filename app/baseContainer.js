import React from "react";

export default class BaseContainer extends React.Component {
    constructor(props) {
        super(props);
        // 获取该组件的Model类
        this.ComponentModelStruct = componentManager.getModuleByType(this.props.type);
        if (this.ComponentModelStruct) {
            // 调用类的静态方法，返回XXXModel的实例，this.model是一个对象
            this.model = this.ComponentModelStruct.create();
            // 将state指向model.data
            this.state = this.model.data;
            console.log('model state', this.state);
            // 为数据变更注册回调
            this.model.onChange(this.setNewData);
        }
    }

    setNewData = (data) => {
        console.log('====call setState===', data);
        this.setState(data);
    }

    render = () => {
        const ObjRender = componentManager.getRenderByType(this.props.type);
        const data = this.model ? this.model.data : {};
        console.log('=====');
        console.log(this.model);
        
        return (
             <div>
                 <ObjRender data={data}/>
             </div>
        );
    }
}