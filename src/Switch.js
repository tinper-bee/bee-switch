import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames';
const propTypes = {
    prefixCls: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    checkedChildren: React.PropTypes.any,
    unCheckedChildren: React.PropTypes.any,
    onChangeHandler: React.PropTypes.func
};
const defaultProps = {
    prefixCls: 'bee-switch',
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
		const { checkedChildren,unCheckedChildren,onChangeHandler,size } = this.props;
		//获取checked
		const checked = this.state.checked;
		//switch是否为checked
		let prefixClsOrigin = this.props.prefixCls;
		const preC = size?`${prefixClsOrigin}-checked-${size}`:`${prefixClsOrigin}-checked`;
		let prefixCls = size?`${prefixClsOrigin}-${size}`:`${prefixClsOrigin}`;
		//font位置
		const ftP = `${prefixCls}-inner`;
		const ftpChange = size?`changePostion-${size}`:`changePostion`
		//根据checked判断是否添加特定的类
		const cls = classNames(prefixCls,{[preC]:checked});
		const fontPosition = classNames(ftP,{[ftpChange]:checked});
		return(
			<div>
				<span onClick = {this.clickHandler} className={cls} tabIndex="0">
					<span  
						className={fontPosition}>
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