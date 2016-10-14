import { Switch } from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Demo extends Component {
	changeHandle(e){
		console.log(`switch to ${e}`);
	}
	render(){
		return( 
			<div style={{"width":"100px","margin":"0 auto"}}>
				<Switch />
				<Switch checked={true} size='small' />
				<Switch onChange = {this.changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} /> 
				<Switch checked={true} onChange = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} /> 
			</div>
			

		)
	}
}
export default Demo;