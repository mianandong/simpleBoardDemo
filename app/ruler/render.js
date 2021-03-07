import React from "react";

export default class Ruler extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { data } = this.props;
        console.log('ruler data', data);

        return (
            <div style={{width: `${data.width}px`, height: `${data.height}px`, backgroundColor: `${data.color}`}}>
                xuwei
            </div>
        );
    }
}