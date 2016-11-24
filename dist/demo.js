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
	        React.createElement(_src2['default'], { checked: true, size: 'sm', checkedChildren: '开', unCheckedChildren: '关' }),
	        React.createElement(_src2['default'], { checked: true, size: 'lg', checkedChildren: '开', unCheckedChildren: '关' })
	    );
	}
	function demo3() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_src2['default'], { colors: 'primary', checked: true }),
	        React.createElement(_src2['default'], { colors: 'success', checked: true }),
	        React.createElement(_src2['default'], { colors: 'info', checked: true }),
	        React.createElement(_src2['default'], { colors: 'danger', checked: true }),
	        React.createElement(_src2['default'], { colors: 'dark', checked: true })
	    );
	}
	function changeHandle() {
	    alert('点我点我点我~');
	}

	function demo4() {
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
	_reactDom2['default'].render(demo4(), document.getElementById('beeSwitchDemo4'));

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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		clsPrefix: _react.PropTypes.string,
		disabled: _react.PropTypes.bool,
		checkedChildren: _react.PropTypes.any,
		unCheckedChildren: _react.PropTypes.any,
		onChangeHandler: _react.PropTypes.func
	};
	var defaultProps = {
		clsPrefix: 'u-switch',
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
			var className = _props.className;
			var clsPrefix = _props.clsPrefix;
			var colors = _props.colors;
			//获取checked

			var checked = this.state.checked;
			var classes = {
				'is-checked': checked
			};
			if (size) {
				classes[clsPrefix + '-' + size] = true;
			}
			if (colors) {
				classes[clsPrefix + '-' + colors] = true;
			}
			var classNames = (0, _classnames2['default'])(clsPrefix, classes);

			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'span',
					{ onClick: this.clickHandler, className: (0, _classnames2['default'])(className, classNames), tabIndex: '0' },
					_react2['default'].createElement(
						'span',
						{
							className: clsPrefix + '-inner' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkOTliMTlhMDVkMWQ0NzYxN2U3YiIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQ5OWIxOWEwNWQxZDQ3NjE3ZTdiXG4gKiovIiwiXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uL3NyYyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gZGVtbzEgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2ggLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGRlbW8yICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBzaXplPSdzbScgY2hlY2tlZENoaWxkcmVuPXsn5byAJ30gdW5DaGVja2VkQ2hpbGRyZW49eyflhbMnfSAvPlxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBzaXplPVwibGdcIiBjaGVja2VkQ2hpbGRyZW49eyflvIAnfSB1bkNoZWNrZWRDaGlsZHJlbj17J+WFsyd9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZnVuY3Rpb24gZGVtbzMgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3dpdGNoIGNvbG9ycz1cInByaW1hcnlcIiBjaGVja2VkPXt0cnVlfSAvPlxuICAgICAgICAgICAgPFN3aXRjaCBjb2xvcnM9XCJzdWNjZXNzXCIgY2hlY2tlZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDxTd2l0Y2ggY29sb3JzPVwiaW5mb1wiIGNoZWNrZWQ9e3RydWV9IC8+XG4gICAgICAgICAgICA8U3dpdGNoIGNvbG9ycz1cImRhbmdlclwiIGNoZWNrZWQ9e3RydWV9IC8+XG4gICAgICAgICAgICA8U3dpdGNoIGNvbG9ycz1cImRhcmtcIiBjaGVja2VkPXt0cnVlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5mdW5jdGlvbiBjaGFuZ2VIYW5kbGUgKCkge1xuICAgIGFsZXJ0KCfngrnmiJHngrnmiJHngrnmiJF+Jyk7XG59XG5cbmZ1bmN0aW9uIGRlbW80ICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFN3aXRjaCBvbkNoYW5nZUhhbmRsZXIgPSB7Y2hhbmdlSGFuZGxlfSBjaGVja2VkQ2hpbGRyZW49eyflvIAnfSB1bkNoZWNrZWRDaGlsZHJlbj17J+WFsyd9IC8+XG4gICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlSGFuZGxlciA9IHtjaGFuZ2VIYW5kbGV9IGNoZWNrZWRDaGlsZHJlbj17J29uJ30gdW5DaGVja2VkQ2hpbGRyZW49eydvZmYnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuUmVhY3RET00ucmVuZGVyKGRlbW8xKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWVTd2l0Y2hEZW1vMScpKTtcblJlYWN0RE9NLnJlbmRlcihkZW1vMigpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVlU3dpdGNoRGVtbzInKSk7XG5SZWFjdERPTS5yZW5kZXIoZGVtbzMoKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlZVN3aXRjaERlbW8zJykpO1xuUmVhY3RET00ucmVuZGVyKGRlbW80KCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWVTd2l0Y2hEZW1vNCcpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGRlbW8vaW5kZXguanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi9Td2l0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNsc1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIHVuQ2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQ2hhbmdlSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xzUHJlZml4OiAndS1zd2l0Y2gnLFxuXHRjaGVja2VkQ2hpbGRyZW46IG51bGwsXG5cdHVuQ2hlY2tlZENoaWxkcmVuOiBudWxsLFxuXHRkZWZhdWx0Q2hlY2tlZDogZmFsc2UsXG5cdHNpemU6JycsXG5cdGRpc2FibGVkOmZhbHNlLFxuXHRvbkNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uKCl7fVxufTtcbmNsYXNzIFN3aXRjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xuXHRcdGlmKCdjaGVja2VkJyBpbiB0aGlzLnByb3BzKXtcblx0XHRcdGNoZWNrZWQgPSAhIXRoaXMucHJvcHMuY2hlY2tlZDtcblx0XHR9ZWxzZSB7XG5cdFx0XHRjaGVja2VkID0gISF0aGlzLnByb3BzLmRlZmF1bHRDaGVja2VkO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2hlY2tlZDogY2hlY2tlZFxuXHRcdH1cblx0XHR0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcylcblx0fVxuXHQvL+eCueWHu3N3aXRjaOaUueWPmOeKtuaAgVxuXHRjbGlja0hhbmRsZXIoKXtcblx0XHRsZXQgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNoZWNrZWQ6IWNoZWNrZWRcblx0XHR9KVxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2VIYW5kbGVyKCFjaGVja2VkKTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGNoZWNrZWRDaGlsZHJlbix1bkNoZWNrZWRDaGlsZHJlbixvbkNoYW5nZUhhbmRsZXIsc2l6ZSxjbGFzc05hbWUsY2xzUHJlZml4LGNvbG9ycyB9ID0gdGhpcy5wcm9wcztcblx0XHQvL+iOt+WPlmNoZWNrZWRcblx0XHRjb25zdCBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xuXHRcdGxldCBjbGFzc2VzID0ge1xuXHRcdFx0J2lzLWNoZWNrZWQnOmNoZWNrZWRcblx0XHR9XG5cdFx0aWYoc2l6ZSl7XG5cdFx0XHRjbGFzc2VzW2Ake2Nsc1ByZWZpeH0tJHtzaXplfWBdID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYoY29sb3JzKXtcblx0XHRcdGNsYXNzZXNbYCR7Y2xzUHJlZml4fS0ke2NvbG9yc31gXSA9IHRydWU7XG5cdFx0fVxuXHRcdGxldCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbHNQcmVmaXgsY2xhc3Nlcyk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3BhbiBvbkNsaWNrID0ge3RoaXMuY2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLGNsYXNzTmFtZXMpfSB0YWJJbmRleD1cIjBcIj5cblx0XHRcdFx0XHQ8c3BhbiAgXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake2Nsc1ByZWZpeH0taW5uZXJgfT5cblx0XHRcdFx0XHRcdHsgY2hlY2tlZD9jaGVja2VkQ2hpbGRyZW4gOiB1bkNoZWNrZWRDaGlsZHJlbn1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuU3dpdGNoLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1N3aXRjaC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FDQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVNBO0FBQ0E7Ozs7QUFDQTtBRUNBO0FGQ0E7Ozs7Ozs7QUd2RUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=demo.js.map