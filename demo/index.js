
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Switch from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 *
 * @title 默认开关
 * @description 
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <Switch />
        )
    }
}
/**
 *
 * @title 不同大小的开关
 * @description 通过`size`属性控制开关的大小
 *
 */

class Demo2 extends Component {

    render () {
        return (
            <Row>
                <Col sm={2}>
                    <Switch checked={true} size='sm' />
                </Col>
                <Col sm={2}>
                    <Switch checked={true} />
                </Col>
                <Col sm={2}>
                    <Switch checked={true} size='lg' />
                </Col>
            </Row>
        )
    }
}
/**
 *
 * @title 事件开关
 * @description 点击开关触发事件
 *
 */

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            switch : ""
        };
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(e){
		this.setState({
            switch: `${e}`
        })
	}

    render () {
        return (
            <Row>
                <Col sm={2}>
                    <Switch onChangeHandler = {this.changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />
                </Col>
                <Col sm={2}>
                    <Switch checked={true} onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
                </Col>
                <Col sm={2}>
                    <span>{ this.state.switch }</span>
                </Col>
            </Row>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认开关","code":"/**\r\n *\r\n * @title 默认开关\r\n * @description \r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <Switch />\r\n        )\r\n    }\r\n}\r\n","desc":" "},{"example":<Demo2 />,"title":" 不同大小的开关","code":"/**\r\n *\r\n * @title 不同大小的开关\r\n * @description 通过`size`属性控制开关的大小\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} size='sm' />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} size='lg' />\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`size`属性控制开关的大小"},{"example":<Demo3 />,"title":" 事件开关","code":"/**\r\n *\r\n * @title 事件开关\r\n * @description 点击开关触发事件\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            switch : \"\"\r\n        };\r\n        this.changeHandle = this.changeHandle.bind(this);\r\n    }\r\n    changeHandle(e){\r\n\t\tthis.setState({\r\n            switch: `${e}`\r\n        })\r\n\t}\r\n\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col sm={2}>\r\n                    <Switch onChangeHandler = {this.changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <span>{ this.state.switch }</span>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 点击开关触发事件"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
