import React from "react";
import './index.css';

export default class Ruler extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { data } = this.props.model;
        console.log('===ruler data===', data);

        return (
            <div id='rule-component'>
                {data.word}
            </div>
        );
    }
}