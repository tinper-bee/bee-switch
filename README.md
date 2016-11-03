# bee-switch
[![npm version](https://img.shields.io/npm/v/bee-switch.svg)](https://www.npmjs.com/package/bee-switch)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-switch)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-switch.svg)](https://david-dm.org/tinper-bee/bee-switch#info=devDependencies)


react bee-switch component for tinper-bee



## 使用

### 使用单独的switch包
#### 组件引入
先进行下载switch包
```
npm install --save bee-switch
```
组件调用
```js
import { Switch } from 'bee-switch';
React.render(<div>
            <Switch />
        </div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下switch.css
```
<link rel="stylesheet" href="./node_modules/build/bee-switch.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Switch.scss"
//或是
import "./node_modules/build/bee-switch.css"
```



## API
|参数|说明|类型|默认值|
|---|----|---|------|
|checked	|指定当前是否选中|	Boolean	|false
|defaultChecked	|初始是否选中	|Boolean|	false
|onChangeHandler	|变化时回调函数,自定义参照demo	|Function(checked:Boolean)	
|checkedChildren	|选中时的内容	|React| Node	
|unCheckedChildren	|非选中时的内容	|React| Node	
|size|	开关大小，可选值：'' small|	String	|''

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-switch
$ cd bee-switch
$ npm install
$ npm run dev
```
|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|type|类型(`text` `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'input'|
|onChange|组件内容发生改变所触发的动作|function|''|
|placeholder|占位符|string|''|
|defaultValue|默认值|string|''|
