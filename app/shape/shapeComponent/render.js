import React from "react";

export default class ShapeRender extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {data} = this.props.model;
        console.log('========', data);
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                    style={{width: `${data.width}px`, height: `${data.height}px`}}
                    viewBox={`0 0 ${data.width} ${data.height}`}>
                    <path d={`${data.path}`} fill='red' strokeWidth="3" stroke={3}></path>
                </svg>
            </div>
        );
    }
}