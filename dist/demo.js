/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(1);

	var _src2 = _interopRequireDefault(_src);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function demo1() {
	    return React.createElement(_src2['default'], null);
	}

	function demo2() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_src2['default'], { checked: true, size: 'small' }),
	        React.createElement(_src2['default'], { checked: true })
	    );
	}
	function changeHandle() {
	    alert('点我点我点我~');
	}

	function demo3() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_src2['default'], { onChangeHandler: changeHandle, checkedChildren: '开', unCheckedChildren: '关' }),
	        React.createElement(_src2['default'], { checked: true, onChangeHandler: changeHandle, checkedChildren: 'on', unCheckedChildren: 'off' })
	    );
	}

	_reactDom2['default'].render(demo1(), document.getElementById('beeSwitchDemo1'));
	_reactDom2['default'].render(demo2(), document.getElementById('beeSwitchDemo2'));
	_reactDom2['default'].render(demo3(), document.getElementById('beeSwitchDemo3'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switch = __webpack_require__(2);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Switch2['default'];
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		prefixCls: _react2['default'].PropTypes.string,
		disabled: _react2['default'].PropTypes.bool,
		checkedChildren: _react2['default'].PropTypes.any,
		unCheckedChildren: _react2['default'].PropTypes.any,
		onChangeHandler: _react2['default'].PropTypes.func
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
			var cls = (0, _classnames2['default'])(prefixCls, _defineProperty({}, preC, checked));
			var fontPosition = (0, _classnames2['default'])(ftP, _defineProperty({}, ftpChange, checked));
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'span',
					{ onClick: this.clickHandler, className: cls, tabIndex: '0' },
					_react2['default'].createElement(
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
	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 5 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZTEwODljMjhjOTgxNmFmYjAxYyIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL34vLjIuMi41QGNsYXNzbmFtZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTEwODljMjhjOTgxNmFmYjAxY1xuICoqLyIsIlxyXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uL3NyYyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZnVuY3Rpb24gZGVtbzEgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3dpdGNoIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbW8yICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBzaXplPSdzbWFsbCcgLz5cclxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUhhbmRsZSAoKSB7XHJcbiAgICBhbGVydCgn54K55oiR54K55oiR54K55oiRficpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZW1vMyAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTd2l0Y2ggb25DaGFuZ2VIYW5kbGVyID0ge2NoYW5nZUhhbmRsZX0gY2hlY2tlZENoaWxkcmVuPXsn5byAJ30gdW5DaGVja2VkQ2hpbGRyZW49eyflhbMnfSAvPlxyXG4gICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlSGFuZGxlciA9IHtjaGFuZ2VIYW5kbGV9IGNoZWNrZWRDaGlsZHJlbj17J29uJ30gdW5DaGVja2VkQ2hpbGRyZW49eydvZmYnfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKGRlbW8xKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWVTd2l0Y2hEZW1vMScpKTtcclxuUmVhY3RET00ucmVuZGVyKGRlbW8yKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWVTd2l0Y2hEZW1vMicpKTtcclxuUmVhY3RET00ucmVuZGVyKGRlbW8zKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWVTd2l0Y2hEZW1vMycpKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZGVtby9pbmRleC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIlxyXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG4gICAgcHJlZml4Q2xzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgY2hlY2tlZENoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxyXG4gICAgdW5DaGVja2VkQ2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5hbnksXHJcbiAgICBvbkNoYW5nZUhhbmRsZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcbn07XHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHByZWZpeENsczogJ2JlZS1zd2l0Y2gnLFxyXG5cdGNoZWNrZWRDaGlsZHJlbjogbnVsbCxcclxuXHR1bkNoZWNrZWRDaGlsZHJlbjogbnVsbCxcclxuXHRkZWZhdWx0Q2hlY2tlZDogZmFsc2UsXHJcblx0c2l6ZTonJyxcclxuXHRkaXNhYmxlZDpmYWxzZSxcclxuXHRvbkNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uKCl7fVxyXG59O1xyXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0aWYoJ2NoZWNrZWQnIGluIHRoaXMucHJvcHMpe1xyXG5cdFx0XHRjaGVja2VkID0gISF0aGlzLnByb3BzLmNoZWNrZWQ7XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGNoZWNrZWQgPSAhIXRoaXMucHJvcHMuZGVmYXVsdENoZWNrZWQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRjaGVja2VkOiBjaGVja2VkXHJcblx0XHR9XHJcblx0XHR0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcylcclxuXHR9XHJcblx0Ly/ngrnlh7tzd2l0Y2jmlLnlj5jnirbmgIFcclxuXHRjbGlja0hhbmRsZXIoKXtcclxuXHRcdGxldCBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGNoZWNrZWQ6IWNoZWNrZWRcclxuXHRcdH0pXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlSGFuZGxlcighY2hlY2tlZCk7XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgeyBjaGVja2VkQ2hpbGRyZW4sdW5DaGVja2VkQ2hpbGRyZW4sb25DaGFuZ2VIYW5kbGVyLHNpemUgfSA9IHRoaXMucHJvcHM7XHJcblx0XHQvL+iOt+WPlmNoZWNrZWRcclxuXHRcdGNvbnN0IGNoZWNrZWQgPSB0aGlzLnN0YXRlLmNoZWNrZWQ7XHJcblx0XHQvL3N3aXRjaOaYr+WQpuS4umNoZWNrZWRcclxuXHRcdGxldCBwcmVmaXhDbHNPcmlnaW4gPSB0aGlzLnByb3BzLnByZWZpeENscztcclxuXHRcdGNvbnN0IHByZUMgPSBzaXplP2Ake3ByZWZpeENsc09yaWdpbn0tY2hlY2tlZC0ke3NpemV9YDpgJHtwcmVmaXhDbHNPcmlnaW59LWNoZWNrZWRgO1xyXG5cdFx0bGV0IHByZWZpeENscyA9IHNpemU/YCR7cHJlZml4Q2xzT3JpZ2lufS0ke3NpemV9YDpgJHtwcmVmaXhDbHNPcmlnaW59YDtcclxuXHRcdC8vZm9udOS9jee9rlxyXG5cdFx0Y29uc3QgZnRQID0gYCR7cHJlZml4Q2xzfS1pbm5lcmA7XHJcblx0XHRjb25zdCBmdHBDaGFuZ2UgPSBzaXplP2BjaGFuZ2VQb3N0aW9uLSR7c2l6ZX1gOmBjaGFuZ2VQb3N0aW9uYFxyXG5cdFx0Ly/moLnmja5jaGVja2Vk5Yik5pat5piv5ZCm5re75Yqg54m55a6a55qE57G7XHJcblx0XHRjb25zdCBjbHMgPSBjbGFzc05hbWVzKHByZWZpeENscyx7W3ByZUNdOmNoZWNrZWR9KTtcclxuXHRcdGNvbnN0IGZvbnRQb3NpdGlvbiA9IGNsYXNzTmFtZXMoZnRQLHtbZnRwQ2hhbmdlXTpjaGVja2VkfSk7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PHNwYW4gb25DbGljayA9IHt0aGlzLmNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtjbHN9IHRhYkluZGV4PVwiMFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gIFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2ZvbnRQb3NpdGlvbn0+XHJcblx0XHRcdFx0XHRcdHsgY2hlY2tlZD9jaGVja2VkQ2hpbGRyZW4gOiB1bkNoZWNrZWRDaGlsZHJlbn1cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5Td2l0Y2gucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5Td2l0Y2guZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1N3aXRjaC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi8uMi4yLjVAY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFTQTtBQUNBOzs7O0FBQ0E7QUVDQTtBRkNBOzs7Ozs7O0FHdEVBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==