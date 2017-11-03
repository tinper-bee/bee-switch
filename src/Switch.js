import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
    clsPrefix: PropTypes.string,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChangeHandler: PropTypes.func,
    onChange: PropTypes.func,
};
const defaultProps = {
    clsPrefix: 'u-switch',
	checkedChildren: null,
	unCheckedChildren: null,
	defaultChecked: false,
	size:'',
	disabled:false,
	onChangeHandler: function(){},
	onChange: function(){},
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
	componentWillReceiveProps(nextProps,nextState) {
		if(nextProps.checked) {
			this.setState({checked:nextProps.checked});
		}else if(nextProps.defaultChecked) {
			this.setState({checked:nextProps.defaultChecked});
		}
	}

	//点击switch改变状态
	clickHandler(){
		if(this.props.checked !=undefined) {
			return;
		}
		let checked = this.state.checked;
		this.setState({
			checked:!checked
		})
		this.props.onChangeHandler(!checked);
		this.props.onChange(!checked);
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
				<span onClick = {this.clickHandler} className={classnames(className,classNames)} tabIndex="0">
					<span
						className={`${clsPrefix}-inner`}>
						{ checked?checkedChildren : unCheckedChildren}
					</span>
				</span>
		)
	}
}
Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
export default Switch;
