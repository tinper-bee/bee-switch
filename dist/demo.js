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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MTE3Mzg5N2E5NTI3ZmM5NTUyZiIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDYxMTczODk3YTk1MjdmYzk1NTJmXG4gKiovIiwiXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uL3NyYyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gZGVtbzEgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2ggLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGRlbW8yICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBzaXplPSdzbWFsbCcgLz5cbiAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17dHJ1ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZnVuY3Rpb24gY2hhbmdlSGFuZGxlICgpIHtcbiAgICBhbGVydCgn54K55oiR54K55oiR54K55oiRficpO1xufVxuXG5mdW5jdGlvbiBkZW1vMyAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTd2l0Y2ggb25DaGFuZ2VIYW5kbGVyID0ge2NoYW5nZUhhbmRsZX0gY2hlY2tlZENoaWxkcmVuPXsn5byAJ30gdW5DaGVja2VkQ2hpbGRyZW49eyflhbMnfSAvPlxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBvbkNoYW5nZUhhbmRsZXIgPSB7Y2hhbmdlSGFuZGxlfSBjaGVja2VkQ2hpbGRyZW49eydvbid9IHVuQ2hlY2tlZENoaWxkcmVuPXsnb2ZmJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcihkZW1vMSgpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVlU3dpdGNoRGVtbzEnKSk7XG5SZWFjdERPTS5yZW5kZXIoZGVtbzIoKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlZVN3aXRjaERlbW8yJykpO1xuUmVhY3RET00ucmVuZGVyKGRlbW8zKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWVTd2l0Y2hEZW1vMycpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGRlbW8vaW5kZXguanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi9Td2l0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgcHJlZml4Q2xzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjaGVja2VkQ2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgdW5DaGVja2VkQ2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgb25DaGFuZ2VIYW5kbGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdiZWUtc3dpdGNoJyxcblx0Y2hlY2tlZENoaWxkcmVuOiBudWxsLFxuXHR1bkNoZWNrZWRDaGlsZHJlbjogbnVsbCxcblx0ZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuXHRzaXplOicnLFxuXHRkaXNhYmxlZDpmYWxzZSxcblx0b25DaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbigpe31cbn07XG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcblx0XHRpZignY2hlY2tlZCcgaW4gdGhpcy5wcm9wcyl7XG5cdFx0XHRjaGVja2VkID0gISF0aGlzLnByb3BzLmNoZWNrZWQ7XG5cdFx0fWVsc2Uge1xuXHRcdFx0Y2hlY2tlZCA9ICEhdGhpcy5wcm9wcy5kZWZhdWx0Q2hlY2tlZDtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNoZWNrZWQ6IGNoZWNrZWRcblx0XHR9XG5cdFx0dGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpXG5cdH1cblx0Ly/ngrnlh7tzd2l0Y2jmlLnlj5jnirbmgIFcblx0Y2xpY2tIYW5kbGVyKCl7XG5cdFx0bGV0IGNoZWNrZWQgPSB0aGlzLnN0YXRlLmNoZWNrZWQ7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjaGVja2VkOiFjaGVja2VkXG5cdFx0fSlcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlSGFuZGxlcighY2hlY2tlZCk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgeyBjaGVja2VkQ2hpbGRyZW4sdW5DaGVja2VkQ2hpbGRyZW4sb25DaGFuZ2VIYW5kbGVyLHNpemUgfSA9IHRoaXMucHJvcHM7XG5cdFx0Ly/ojrflj5ZjaGVja2VkXG5cdFx0Y29uc3QgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcblx0XHQvL3N3aXRjaOaYr+WQpuS4umNoZWNrZWRcblx0XHRsZXQgcHJlZml4Q2xzT3JpZ2luID0gdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG5cdFx0Y29uc3QgcHJlQyA9IHNpemU/YCR7cHJlZml4Q2xzT3JpZ2lufS1jaGVja2VkLSR7c2l6ZX1gOmAke3ByZWZpeENsc09yaWdpbn0tY2hlY2tlZGA7XG5cdFx0bGV0IHByZWZpeENscyA9IHNpemU/YCR7cHJlZml4Q2xzT3JpZ2lufS0ke3NpemV9YDpgJHtwcmVmaXhDbHNPcmlnaW59YDtcblx0XHQvL2ZvbnTkvY3nva5cblx0XHRjb25zdCBmdFAgPSBgJHtwcmVmaXhDbHN9LWlubmVyYDtcblx0XHRjb25zdCBmdHBDaGFuZ2UgPSBzaXplP2BjaGFuZ2VQb3N0aW9uLSR7c2l6ZX1gOmBjaGFuZ2VQb3N0aW9uYFxuXHRcdC8v5qC55o2uY2hlY2tlZOWIpOaWreaYr+WQpua3u+WKoOeJueWumueahOexu1xuXHRcdGNvbnN0IGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLHtbcHJlQ106Y2hlY2tlZH0pO1xuXHRcdGNvbnN0IGZvbnRQb3NpdGlvbiA9IGNsYXNzTmFtZXMoZnRQLHtbZnRwQ2hhbmdlXTpjaGVja2VkfSk7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW4gb25DbGljayA9IHt0aGlzLmNsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtjbHN9IHRhYkluZGV4PVwiMFwiPlxuXHRcdFx0XHRcdDxzcGFuICBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Zm9udFBvc2l0aW9ufT5cblx0XHRcdFx0XHRcdHsgY2hlY2tlZD9jaGVja2VkQ2hpbGRyZW4gOiB1bkNoZWNrZWRDaGlsZHJlbn1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuU3dpdGNoLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1N3aXRjaC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FDQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBRkNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVNBO0FBQ0E7Ozs7QUFDQTtBRUNBO0FGQ0E7Ozs7Ozs7QUd0RUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9