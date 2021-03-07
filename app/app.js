import React from 'react';
import BaseContainer from './baseContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseContainer type='Slide'/>
        );
    }
}

export default App;