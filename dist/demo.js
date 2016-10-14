/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _SwitchDemo = __webpack_require__(1);
	
	var _SwitchDemo2 = _interopRequireDefault(_SwitchDemo);
	
	var _reactDom = __webpack_require__(5);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_reactDom2["default"].render(React.createElement(_SwitchDemo2["default"], null), document.getElementById('tinperBeeDemo'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _src = __webpack_require__(2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(5);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Demo = function (_Component) {
		_inherits(Demo, _Component);
	
		function Demo() {
			_classCallCheck(this, Demo);
	
			return _possibleConstructorReturn(this, _Component.apply(this, arguments));
		}
	
		Demo.prototype.changeHandle = function changeHandle(e) {
			console.log('switch to ' + e);
		};
	
		Demo.prototype.render = function render() {
			return _react2["default"].createElement(
				'div',
				{ style: { "width": "100px", "margin": "0 auto" } },
				_react2["default"].createElement(_src.Switch, null),
				_react2["default"].createElement(_src.Switch, { size: 'small' }),
				_react2["default"].createElement(_src.Switch, { onChange: this.changeHandle, checkedChildren: '开', unCheckedChildren: '关' }),
				_react2["default"].createElement(_src.Switch, { onChange: this.changeHandle, checkedChildren: 'on', unCheckedChildren: 'off' })
			);
		};
	
		return Demo;
	}(_react.Component);
	
	exports["default"] = Demo;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Switch = undefined;
	
	var _Switch2 = __webpack_require__(3);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Switch = _Switch3["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(5);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(6);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
			this.props.onChange(!checked);
		};
	
		Switch.prototype.render = function render() {
			var _classNames, _classNames2;
	
			var _props = this.props;
			var checkedChildren = _props.checkedChildren;
			var unCheckedChildren = _props.unCheckedChildren;
			var onChange = _props.onChange;
			var size = _props.size;
			//获取checked
	
			var checked = this.state.checked;
			//switch是否为checked
			var prefixClsOrigin = this.props.prefixCls;
			var preC = size ? prefixClsOrigin + '-checked' + '-' + size : prefixClsOrigin + '-checked';
			var prefixCls = size ? prefixClsOrigin + '-' + size : prefixClsOrigin;
			//font位置
			var ftP = prefixCls + "-inner";
			var ftpChange = size ? 'changePostion' + '-' + size : 'changePostion';
			//根据checked判断是否添加特定的类
			var cls = (0, _classnames2["default"])(prefixCls, (_classNames = {}, _classNames[preC] = checked, _classNames));
			var fontPosition = (0, _classnames2["default"])(ftP, (_classNames2 = {}, _classNames2[ftpChange] = checked, _classNames2));
			return _react2["default"].createElement(
				'div',
				null,
				onChange,
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
	
	Switch.propsType = {
		prefixCls: _react2["default"].PropTypes.string,
		disabled: _react2["default"].PropTypes.bool,
		checkedChildren: _react2["default"].PropTypes.any,
		unCheckedChildren: _react2["default"].PropTypes.any,
		onChange: _react2["default"].PropTypes.func,
		onMouseUp: _react2["default"].PropTypes.func
	};
	Switch.defaultProps = {
		prefixCls: 'bee-switch',
		checkedChildren: null,
		unCheckedChildren: null,
		defaultChecked: false,
		size: '',
		onChange: function onChange() {}
	};
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map