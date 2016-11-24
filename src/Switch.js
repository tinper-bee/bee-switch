import React, { Component,PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames';
const propTypes = {
    clsPrefix: PropTypes.string,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChangeHandler: PropTypes.func
};
const defaultProps = {
    clsPrefix: 'u-switch',
	checkedChildren: null,
	unCheckedChildren: null,
	defaultChecked: false,
	size:'',
	disabled:false,
	onChangeHandler: function(){}
};
class Switch extends Component {

	constructor(props){
		super(props);
		var checked = false;
		if('checked' in this.props){
			checked = !!this.props.checked;
		}else {
			checked = !!this.props.defaultChecked;
		}
		this.state = {
			checked: checked
		}
		this.clickHandler = this.clickHandler.bind(this)
	}
	//点击switch改变状态
	clickHandler(){
		let checked = this.state.checked;
		this.setState({
			checked:!checked
		})
		this.props.onChangeHandler(!checked);
	}
	render(){
		const { checkedChildren,unCheckedChildren,onChangeHandler,size,className,clsPrefix,colors } = this.props;
		//获取checked
		const checked = this.state.checked;
		let classes = {
			'is-checked':checked
		}
		if(size){
			classes[`${clsPrefix}-${size}`] = true;
		}
		if(colors){
			classes[`${clsPrefix}-${colors}`] = true;
		}
		let classNames = classnames(clsPrefix,classes);

		return(
			<div>
				<span onClick = {this.clickHandler} className={classnames(className,classNames)} tabIndex="0">
					<span  
						className={`${clsPrefix}-inner`}>
						{ checked?checkedChildren : unCheckedChildren}
					</span>
				</span>
			</div>
		)
	}
}
Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
export default Switch;