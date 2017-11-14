/**
 *
 * @title 被禁用开关
 * @description
 *
 */
import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import Switch from "../../src";

class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        defaultDisabled: true
    };
  }
  onChange = () => {
    this.setState({
      defaultDisabled: !this.state.defaultDisabled
    });
  };
  onConsoleLog=(x)=>{
    console.log(x) 
  }
  render() {
    return (
      <Row>
        <Col sm={2}>
          <Switch disabled={this.state.defaultDisabled}/>
        </Col>
        <Col sm={2}>
          <button onClick={this.onChange}>toggle disabled</button>
        </Col>
      </Row>
    );
  }
}

export default Demo4;
