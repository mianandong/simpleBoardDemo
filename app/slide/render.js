import React from "react";
import BaseContainer from "../baseContainer";

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
    }

    generatorComponent = (type) => {
        return <BaseContainer type={type}/>
    }

    render = () => {
        let components = [];
        const { data } = this.props;
        console.log('++++++');
        console.log(data);
        const { elements } = data;
        elements.forEach(elementType => {
            components.push(this.generatorComponent(elementType));
        });
        
        return (
             <div style={{width: `${data.width}px`, height: `${data.height}px`, backgroundColor: 'yellow'}}>
                 {components}
             </div>
        );
    }
}