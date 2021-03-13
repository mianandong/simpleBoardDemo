import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ComponentManager from './componentManager';
import Ruler from './ruler/index';
import Slide from './slide/index';
import AddShape from './shape/createShapePanel/index';
import ShapeComponent from './shape/shapeComponent/index';

import './index.css';

function createApp(container) {
    ReactDOM.render(<App />, container);
}

export default function init(container) {
    return createApp(container);
}

window.createTeachingTool = init;
window.componentManager = new ComponentManager();
window.componentManager.registrComponent('Slide', Slide);
window.componentManager.registrComponent('Leida', Ruler);
window.componentManager.registrComponent('AddShape', AddShape);
window.componentManager.registrComponent('ShapeComponent', ShapeComponent);
ReactDOM.render(<App />, document.getElementById('board'));
