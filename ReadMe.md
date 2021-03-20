## 白板Demo
  
   
曾参与前端项目[ENOW](https://enweb.seewo.com/)的开发，该项目功能类似于PPT，提供常见的白板功能  
如：元素动画，形状插入，工具插入，书写擦除等。  
本demo基于其原理，使用`React`，`Webpack`实现最小可用。

### 功能演示

![img](https://github.com/mianandong/simpleBoardDemo/blob/main/demo.gif)

### 实现概述
- 组件组成
```
一个组件包含两部分，model.js和render.js.
model.js负责定义组件的数据模型，并提供了其操作数据的方法和默认值；
render.js负责定义组件的渲染逻辑，其渲染的数据来自于model.js和内部state；
其中model.js由框架componentManager负责，将其作为props传递给相应的render.js
```
- 基础能力提供
```
组件实现只要符合框架的接口要求，插入页面中，则自动具有元素缩放，移动，动画等基础能力。
此demo只实现了移动功能，主要是依靠基础组件baseContainer+高阶组件实现。
```
- 后续扩展
```
新增一个可插入的元素非常方便，只两部：
```
1. 组件实现model.js，render.js

```js
model.js
export default class MyModel extends baseModel {
    constructor(props) {
        super(props);
    }
}
```

```js
render.js
export default class MyRender extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.model)
    }
}
```
2. 将组件注册到框架
```js
componentManager.registrComponent('MyComponent', {model, render});
```