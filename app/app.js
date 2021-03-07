import React from 'react';
import BaseContainer from './baseContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 通过此，可以让该容器充满整个页面
        const styles = {
            position: 'fixed',
            top: '0px',
            height: '100%',
            width: '100%',
            background: 'rgb(39, 39, 39)'
        }
        return (
            <div style={styles}>
                <BaseContainer type='Slide'/>
            </div>
        );
    }
}

export default App;