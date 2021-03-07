import React from "react";
import BaseContainer from "../baseContainer";
import './index.css';

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.model = this.props.model;
        this.count = 0;
    }

    generatorComponent = (type) => {
        return <BaseContainer type={type}/>
    }

    addElement = () => {
        this.model.addElement('Ruler');
    }

    render = () => {
        let components = [];
        const { data } = this.model;
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