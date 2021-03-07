import React from "react";
import BaseContainer from "../baseContainer";
import './index.css';

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    generatorComponent = (type) => {
        return <BaseContainer type={type}/>
    }

    addElement = () => {
        const { model } = this.props;
        model.addElement('Ruler');
    }

    render = () => {
        let components = [];
        const { data } = this.props.model;
        console.log('===slide data===', data);
        const { elements } = data;
        elements.forEach(elementType => {
            components.push(this.generatorComponent(elementType));
        });

        return (
             <div>
                 {components}
                 <button id='add-component' onClick={this.addElement}>
                     添加元素
                 </button>
             </div>
        );
    }
}