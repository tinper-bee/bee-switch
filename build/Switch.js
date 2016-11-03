'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	prefixCls: _react2["default"].PropTypes.string,
	disabled: _react2["default"].PropTypes.bool,
	checkedChildren: _react2["default"].PropTypes.any,
	unCheckedChildren: _react2["default"].PropTypes.any,
	onChangeHandler: _react2["default"].PropTypes.func
};
var defaultProps = {
	prefixCls: 'bee-switch',
	checkedChildren: null,
	unCheckedChildren: null,
	defaultChecked: false,
	size: '',
	disabled: false,
	onChangeHandler: function onChangeHandler() {}
};

var Switch = function (_Component) {
	_inherits(Switch, _Component);

	function Switch(props) {
		_classCallCheck(this, Switch);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		var checked = false;
		if ('checked' in _this.props) {
			checked = !!_this.props.checked;
		} else {
			checked = !!_this.props.defaultChecked;
		}
		_this.state = {
			checked: checked
		};
		_this.clickHandler = _this.clickHandler.bind(_this);
		return _this;
	}
	//点击switch改变状态


	Switch.prototype.clickHandler = function clickHandler() {
		var checked = this.state.checked;
		this.setState({
			checked: !checked
		});
		this.props.onChangeHandler(!checked);
	};

	Switch.prototype.render = function render() {
		var _props = this.props;
		var checkedChildren = _props.checkedChildren;
		var unCheckedChildren = _props.unCheckedChildren;
		var onChangeHandler = _props.onChangeHandler;
		var size = _props.size;
		//获取checked

		var checked = this.state.checked;
		//switch是否为checked
		var prefixClsOrigin = this.props.prefixCls;
		var preC = size ? prefixClsOrigin + '-checked-' + size : prefixClsOrigin + '-checked';
		var prefixCls = size ? prefixClsOrigin + '-' + size : '' + prefixClsOrigin;
		//font位置
		var ftP = prefixCls + '-inner';
		var ftpChange = size ? 'changePostion-' + size : 'changePostion';
		//根据checked判断是否添加特定的类
		var cls = (0, _classnames2["default"])(prefixCls, _defineProperty({}, preC, checked));
		var fontPosition = (0, _classnames2["default"])(ftP, _defineProperty({}, ftpChange, checked));
		return _react2["default"].createElement(
			'div',
			null,
			_react2["default"].createElement(
				'span',
				{ onClick: this.clickHandler, className: cls, tabIndex: '0' },
				_react2["default"].createElement(
					'span',
					{
						className: fontPosition },
					checked ? checkedChildren : unCheckedChildren
				)
			)
		);
	};

	return Switch;
}(_react.Component);

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
exports["default"] = Switch;
module.exports = exports['default'];