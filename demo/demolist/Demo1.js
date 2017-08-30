/**
 *
 * @title 默认开关
 * @description 
 *
 */
import React, { Component } from 'react';
import Switch from '../../src';

class Demo1 extends Component {
    render () {
        return (
            <div>
                <Switch />
                <Switch defaultChecked={true}/>
                <Switch checked/>
            </div>
            
        )
    }
}

export default Demo1;