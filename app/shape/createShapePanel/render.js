import React from "react";
import { get, throttle } from 'lodash';
import LoveShapeModel from "./shapemodel/loveShapeModel";
import MoonShapeModel from "./shapemodel/moonShapeModel";
import './index.css';

export default class ShapeRender extends React.Component {
    constructor(props) {
        super(props);
        this._container = null;
        this._startPoint = null;
        const { data } = this.props.model;
        if (data.shape == 'LoveShape') {
          this._currentShape = new LoveShapeModel();
        }
        if (data.shape == 'MoonShape') {
          this._currentShape = new MoonShapeModel();
        }
        

        this.state = {
            // 鼠标移动的起点坐标（相对于slide）
            x: 0,
            y: 0,
            // 鼠标抬起时，移动的长度和宽度（相对于slide，且已转化为正值）
            width: 0,
            height: 0,
            // 当前以path绘制的路径
            currentDrawPath: ''
        }

        this._throttleHandleMove = throttle(this._handleMove, 30);
    }

    componentDidMount = () => {     
        this._selfRegisterDownEvent();
    }

    _selfRegisterDownEvent = () => {
        this._container && this._container.addEventListener('mousedown', this._handleDown, false);
    }

    _handleDown = (e) => {
        // 事件处理(要优先调用)
        this._container && this._container.addEventListener('mousemove', this._throttleHandleMove, false);
        this._container && this._container.addEventListener('mouseup', this._handleUp, false);
        this._container && this._container.removeEventListener('mousedown', this._handleDown, false);
        this._startPoint = this._getEventPoint(e);
        this.setState({
          x: this._startPoint.x,
          y: this._startPoint.y,
        });
    }

    _handleMove = (e) => {
        const point = this._getMovePoint(e);
        const offsetX = (point.clientX - this._startPoint.clientX);
        const offsetY = (point.clientY - this._startPoint.clientY);
        const { x, y, width, height } = this._transfromQuadrantRectPoint(offsetX, offsetY);
    
        this.setState((state) => {
          let newWidth = width;
          let newHeight = height;
    
          const nextState = {
            x, y, width: newWidth, height: newHeight,
          };
    
          nextState.currentDrawPath = this._currentShape.path(newWidth, newHeight)
    
          return nextState;
        });
    }

    _handleUp = (e) => {
        // 事件处理
        this._container && this._container.removeEventListener('mousemove', this._throttleHandleMove, false);
        this._container && this._container.removeEventListener('mouseup', this._handleUp, false);
        if (this._startPoint) {
          this._endPoint = this._getEventPoint(e);
          // 创建元素
          window.slideModel.addElement('ShapeComponent', 
          Math.random.toString(),
          {
            width: this.state.width,
            height: this.state.height,
            x: this.state.x,
            y: this.state.y,
            path: this.state.currentDrawPath
          })
        }
        setTimeout(()=>{
            window.slideModel.removeElement('AddShape')
        }, 0);
    }

    _createElement = (id) => {
        console.log('create element');
    }

    /**
     * 基于象限转换坐标点，获取此次移动所形成矩形的偏移和长宽
     * @param offsetX 相对于起点(down按下的点)的x轴偏移
     * @param offsetY 相对于起点(down按下的点)的y轴偏移
    */
    _transfromQuadrantRectPoint = (offsetX, offsetY) => {
        const MIN_WIDTH = 20;
        const MIN_HEIGHT = 20;
        const width = Math.max(MIN_WIDTH, Math.abs(offsetX));
        const height = Math.max(MIN_HEIGHT, Math.abs(offsetY));
        const { x, y } = this._startPoint;
        let rect;
    
        if (offsetX < 0) {
          if (offsetY > 0) {
            rect = {
              x: x - width, y, width, height
            }
          } else {
            rect = {
              x: x - width, y: y - height, width, height
            }
          }
        } else {
          if (offsetY > 0) {
            rect = {
              x, y, width, height
            }
          } else {
            rect = {
              x, y: y - height, width, height
            }
          }
        }
    
        return rect;
    }

    _getEventPoint(event) {
        const touch = get(event, ['touches', 0], event);
        return {
            x: touch.offsetX,
            y: touch.offsetY,
            clientX: touch.clientX,
            clientY: touch.clientY
        };
    }

    _getMovePoint(event) {
        const touch = get(event, ['touches', 0], event);
        return {
          clientX: touch.clientX,
          clientY: touch.clientY
        };
    }

    render = () => {
        const { data } = this.props.model;
        return (
            <div id='createShapePanel' ref={e => this._container = e}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                    style={{position: 'absolute', width: `${this.state.width}px`, height: `${this.state.height}px`, transform: `translate(${this.state.x}px, ${this.state.y}px)`}}
                    viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
                    <path d={`${this.state.currentDrawPath}`} fill='red' strokeWidth="3" stroke={3}></path>
                </svg>
            </div>
        );
    }
}