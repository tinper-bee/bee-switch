/**
 *
 * @title 默认开关
 * @description
 *
 */
import React, {Component} from 'react';
import {Row, Col } from 'bee-layout';
import Switch from '../../src';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultChecked:true,
            checked:true
        };
    }
    defaultCheckChange = () => {
        this.setState({
            defaultChecked: !this.state.defaultChecked
        })
    }
    render() {
        return (
            <Row>
                <Col sm={2}>
                    <Switch/>
                </Col>
                <Col sm={2}>
                    <Switch defaultChecked={this.state.defaultChecked} onChangeHandler={this.defaultCheckChange}/>
                </Col>
            </Row>
        )
    }
}

export default Demo1;