/**
 *
 * @title 事件开关
 * @description 点击开关触发事件
 *
 */

import React, { Component } from 'react';
import {Row, Col } from 'bee-layout';
import Switch from '../../src';

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            switch : "",
            checked: false
        };
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(e){
		this.setState({
            switch: `${e}`,
            checked: !this.state.checked
        })
	}

    render () {
        return (
            <Row>
                <Col sm={2}>
                    <Switch defaultChecked={this.state.checked}   onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
                </Col>
                <Col sm={2}>
                    <span>{ this.state.switch }</span>
                </Col>
            </Row>
        )
    }
}

export default Demo3;
