import React from "react";
import BaseContainer from "../baseContainer";
import './index.css';

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        window.slideModel = this.props.model;
    }

    generatorComponent = ({ type, key, data }) => {
        console.log('9999', type, data)
        return <BaseContainer type={type} modelData={data} key={key}/>
    }

    addElement = () => {
        const { model } = this.props;
        model.addElement('Leida', Math.random().toString);
    }

    addShape = (shape) => {
        const { model } = this.props;
        model.addElement('AddShape', Math.random().toString, {shape: shape});
    }

    addLoveShape = () => {
        this.addShape('LoveShape');
    }

    addMoonShape = () => {
        this.addShape('MoonShape');
    }

    render = () => {
        let components = [];
        const { data } = this.props.model;
        console.log('===slide data===', data);
        const { elements } = data;
        elements.forEach(element => {
            components.push(this.generatorComponent(element));
        });

        return (
             <div>
                 {components}
                 <div id='add-component'>
                    <button id='add-com' onClick={this.addElement}>
                        插入雷达图
                    </button>
                    <button id='add-shape' onClick={this.addLoveShape}>
                        插入心形形状
                    </button>
                    <button id='add-' onClick={this.addMoonShape}>
                        插入月亮形状
                    </button>
                 </div>
             </div>
        );
    }
}