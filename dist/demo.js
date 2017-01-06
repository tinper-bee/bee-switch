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

	var _beeLayout = __webpack_require__(1);

	var _beePanel = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _beeButton = __webpack_require__(60);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _src = __webpack_require__(62);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });

	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });

	/**
	 *
	 * @title 默认开关
	 * @description 
	 *
	 */

	var Demo1 = function (_Component) {
	    _inherits(Demo1, _Component);

	    function Demo1() {
	        _classCallCheck(this, Demo1);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    Demo1.prototype.render = function render() {
	        return _react2['default'].createElement(_src2['default'], null);
	    };

	    return Demo1;
	}(_react.Component);
	/**
	 *
	 * @title 不同大小的开关
	 * @description 通过`size`属性控制开关的大小
	 *
	 */

	var Demo2 = function (_Component2) {
	    _inherits(Demo2, _Component2);

	    function Demo2() {
	        _classCallCheck(this, Demo2);

	        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	    }

	    Demo2.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { sm: 2 },
	                _react2['default'].createElement(_src2['default'], { checked: true, size: 'sm' })
	            ),
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { sm: 2 },
	                _react2['default'].createElement(_src2['default'], { checked: true })
	            ),
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { sm: 2 },
	                _react2['default'].createElement(_src2['default'], { checked: true, size: 'lg' })
	            )
	        );
	    };

	    return Demo2;
	}(_react.Component);
	/**
	 *
	 * @title 事件开关
	 * @description 点击开关触发事件
	 *
	 */

	var Demo3 = function (_Component3) {
	    _inherits(Demo3, _Component3);

	    function Demo3(props) {
	        _classCallCheck(this, Demo3);

	        var _this3 = _possibleConstructorReturn(this, _Component3.call(this, props));

	        _this3.state = {
	            'switch': ""
	        };
	        _this3.changeHandle = _this3.changeHandle.bind(_this3);
	        return _this3;
	    }

	    Demo3.prototype.changeHandle = function changeHandle(e) {
	        this.setState({
	            'switch': '' + e
	        });
	    };

	    Demo3.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { sm: 2 },
	                _react2['default'].createElement(_src2['default'], { onChangeHandler: this.changeHandle, checkedChildren: '开', unCheckedChildren: '关' })
	            ),
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { sm: 2 },
	                _react2['default'].createElement(_src2['default'], { checked: true, onChangeHandler: this.changeHandle, checkedChildren: 'on', unCheckedChildren: 'off' })
	            ),
	            _react2['default'].createElement(
	                _beeLayout.Col,
	                { sm: 2 },
	                _react2['default'].createElement(
	                    'span',
	                    null,
	                    this.state['switch']
	                )
	            )
	        );
	    };

	    return Demo3;
	}(_react.Component);

	var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 默认开关", "code": "/**\r\n *\r\n * @title 默认开关\r\n * @description \r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <Switch />\r\n        )\r\n    }\r\n}\r\n", "desc": " " }, { "example": _react2['default'].createElement(Demo2, null), "title": " 不同大小的开关", "code": "/**\r\n *\r\n * @title 不同大小的开关\r\n * @description 通过`size`属性控制开关的大小\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} size='sm' />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} size='lg' />\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n", "desc": " 通过`size`属性控制开关的大小" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 事件开关", "code": "/**\r\n *\r\n * @title 事件开关\r\n * @description 点击开关触发事件\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            switch : \"\"\r\n        };\r\n        this.changeHandle = this.changeHandle.bind(this);\r\n    }\r\n    changeHandle(e){\r\n\t\tthis.setState({\r\n            switch: `${e}`\r\n        })\r\n\t}\r\n\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col sm={2}>\r\n                    <Switch onChangeHandler = {this.changeHandle} checkedChildren={'开'} unCheckedChildren={'关'} />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <Switch checked={true} onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />\r\n                </Col>\r\n                <Col sm={2}>\r\n                    <span>{ this.state.switch }</span>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n", "desc": " 点击开关触发事件" }];

	var Demo = function (_Component4) {
	    _inherits(Demo, _Component4);

	    function Demo(props) {
	        _classCallCheck(this, Demo);

	        var _this4 = _possibleConstructorReturn(this, _Component4.call(this, props));

	        _this4.state = {
	            open: false
	        };
	        _this4.handleClick = _this4.handleClick.bind(_this4);
	        return _this4;
	    }

	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };

	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc;

	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";

	        var footer = _react2['default'].createElement(
	            _beeButton2['default'],
	            { shape: 'block', onClick: this.handleClick },
	            caret,
	            text
	        );

	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { collapsible: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                )
	            )
	        );
	    };

	    return Demo;
	}(_react.Component);

	var DemoGroup = function (_Component5) {
	    _inherits(DemoGroup, _Component5);

	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);

	        return _possibleConstructorReturn(this, _Component5.call(this, props));
	    }

	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {

	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
	            })
	        );
	    };

	    return DemoGroup;
	}(_react.Component);

		_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;

	var _Col2 = __webpack_require__(2);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Row2 = __webpack_require__(5);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),

	  /**
	   * xs显示列数
	   */
	  xs: _react.PropTypes.number,
	  /**
	   * sm显示列数
	   */
	  sm: _react.PropTypes.number,
	  /**
	   * md显示列数
	   */
	  md: _react.PropTypes.number,
	  /**
	   * lg显示列数
	   */
	  lg: _react.PropTypes.number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _react.PropTypes.number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _react.PropTypes.number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _react.PropTypes.number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _react.PropTypes.number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _react.PropTypes.number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _react.PropTypes.number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _react.PropTypes.number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _react.PropTypes.number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _react.PropTypes.number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _react.PropTypes.number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _react.PropTypes.number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _react.PropTypes.number
	};

	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};

	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

	var Col = function (_Component) {
	  _inherits(Col, _Component);

	  function Col() {
	    _classCallCheck(this, Col);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);

	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];

	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }

	        delete others[propName];
	      }

	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });

	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };

	  return Col;
	}(_react.Component);

	Col.propTypes = propTypes;
	Col.defaultProps = defaultProps;

	exports["default"] = Col;
	module.exports = exports['default'];

/***/ },
/* 3 */
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};

	var Row = function (_Component) {
	  _inherits(Row, _Component);

	  function Row() {
	    _classCallCheck(this, Row);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);

	    var bsclass = '' + clsPrefix;

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };

	  return Row;
	}(_react.Component);

	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;

	exports["default"] = Row;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _react.PropTypes.bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};

	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);

	  function Con() {
	    _classCallCheck(this, Con);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Con.prototype.render = function render() {
	    var _tbclass;

	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);

	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };

	  return Con;
	}(_react2["default"].Component);

	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;

	exports["default"] = Con;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;

	var _Panel2 = __webpack_require__(8);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelGroup2 = __webpack_require__(59);

	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeTransition = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否添加折叠
	  collapsible: _react2["default"].PropTypes.bool,
	  onSelect: _react2["default"].PropTypes.func,
	  //头部组件
	  header: _react2["default"].PropTypes.node,
	  headerStyle: _react2["default"].PropTypes.object,
	  id: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
	  headerContent: _react2["default"].PropTypes.bool,
	  //footer组件
	  footer: _react2["default"].PropTypes.node,
	  footerStyle: _react2["default"].PropTypes.object,
	  //默认是否打开
	  defaultExpanded: _react2["default"].PropTypes.bool,
	  //是否打开
	  expanded: _react2["default"].PropTypes.bool,
	  //每个panel的标记
	  eventKey: _react2["default"].PropTypes.any,
	  headerRole: _react2["default"].PropTypes.string,
	  panelRole: _react2["default"].PropTypes.string,
	  //颜色
	  colors: _react2["default"].PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),

	  // From Collapse.的扩展动画
	  onEnter: _react2["default"].PropTypes.func,
	  onEntering: _react2["default"].PropTypes.func,
	  onEntered: _react2["default"].PropTypes.func,
	  onExit: _react2["default"].PropTypes.func,
	  onExiting: _react2["default"].PropTypes.func,
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel(props, context) {
	    _classCallCheck(this, Panel);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);

	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }

	  //头部点击事件


	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };

	  //渲染panelheader


	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';

	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }

	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };

	  //如果使用链接，渲染为a标签


	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };

	  //如果有折叠动画，渲染折叠动画


	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix)
	      )
	    );
	  };

	  //渲染panelbody


	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix) {
	    var children = [];
	    var bodyChildren = [];

	    var bodyClassName = clsPrefix + '-body';

	    //添加到body的children中
	    function maybeAddBody() {
	      if (!bodyChildren.length) {
	        return;
	      }

	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren
	      ));

	      bodyChildren = [];
	    }

	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody();

	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));

	        return;
	      }

	      bodyChildren.push(child);
	    });

	    maybeAddBody();

	    return children;
	  };

	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        style = _props.style,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'style', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);

	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;

	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;

	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };

	  return Panel;
	}(_react2["default"].Component);

	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;

	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;

	var _Transition2 = __webpack_require__(10);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _Collapse2 = __webpack_require__(15);

	var _Collapse3 = _interopRequireDefault(_Collapse2);

	var _Fade2 = __webpack_require__(58);

	var _Fade3 = _interopRequireDefault(_Fade2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(12);

	var _properties2 = _interopRequireDefault(_properties);

	var _on = __webpack_require__(14);

	var _on2 = _interopRequireDefault(_on);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var transitionEndEvent = _properties2["default"].end;

	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _react.PropTypes.bool,

	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _react.PropTypes.bool,

	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _react.PropTypes.bool,

	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _react.PropTypes.number,

	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _react.PropTypes.string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _react.PropTypes.string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _react.PropTypes.string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _react.PropTypes.string,

	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _react.PropTypes.func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _react.PropTypes.func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _react.PropTypes.func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _react.PropTypes.func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _react.PropTypes.func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _react.PropTypes.func
	};

	function noop() {}

	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	/**
	 * 动画组件
	 */

	var Transition = function (_Component) {
	  _inherits(Transition, _Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };

	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };

	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;

	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }

	      return;
	    }

	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;

	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };

	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    // 这里接收新props
	    props.onEnter(node);

	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);

	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    props.onExit(node);

	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);

	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };

	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;

	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);

	    if (node) {
	      (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };

	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);

	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });

	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }

	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };

	  return Transition;
	}(_react.Component);

	Transition.propTypes = propTypes;

	Transition.defaultProps = defaultProps;

	exports["default"] = Transition;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var style = document.createElement('div').style;

	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return 'moz' + e;
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };

	  var vendors = Object.keys(vendorMap);

	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';

	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];

	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }

	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

	  if (!animationEnd && 'animationName' in style) transitionEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}

	exports.default = on;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(16);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _capitalize = __webpack_require__(24);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};

	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}

	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];

	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}

	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _react2["default"].PropTypes.func,

	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(['height', 'width']), _react2["default"].PropTypes.func]),

	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _react2["default"].PropTypes.func,

	  /**
	   * ARIA role of collapsible element
	   */
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,

	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};

	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);

	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }

	  /* -- Expanding -- */


	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };

	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };

	  /* -- Collapsing -- */


	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };

	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };

	  // for testing


	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };

	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);

	    delete props.dimension;
	    delete props.getDimensionValue;

	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);

	    var classes = {
	      width: this._dimension() === 'width'
	    };

	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };

	  return Collapse;
	}(_react2["default"].Component);

	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;

	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	var _hyphenateStyle = __webpack_require__(19);

	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

	var _getComputedStyle2 = __webpack_require__(21);

	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

	var _removeStyle = __webpack_require__(22);

	var _removeStyle2 = _interopRequireDefault(_removeStyle);

	var _properties = __webpack_require__(12);

	var _isTransform = __webpack_require__(23);

	var _isTransform2 = _interopRequireDefault(_isTransform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;

	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }

	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });

	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }

	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;

	var _camelize = __webpack_require__(18);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;

	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;

	var _hyphenate = __webpack_require__(20);

	var _hyphenate2 = _interopRequireDefault(_hyphenate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */

	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;

	var rUpper = /([A-Z])/g;

	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _camelizeStyle2.default)(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;

	var _all2 = __webpack_require__(26);

	var _all3 = _interopRequireDefault(_all2);

	var _componentOrElement2 = __webpack_require__(28);

	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);

	var _deprecated2 = __webpack_require__(29);

	var _deprecated3 = _interopRequireDefault(_deprecated2);

	var _elementType2 = __webpack_require__(32);

	var _elementType3 = _interopRequireDefault(_elementType2);

	var _isRequiredForA11y2 = __webpack_require__(33);

	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);

	var _splitComponent2 = __webpack_require__(34);

	var _splitComponent3 = _interopRequireDefault(_splitComponent2);

	var _createChainedFunction2 = __webpack_require__(35);

	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

	var _keyCode = __webpack_require__(36);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _contains2 = __webpack_require__(37);

	var _contains3 = _interopRequireDefault(_contains2);

	var _addEventListener2 = __webpack_require__(38);

	var _addEventListener3 = _interopRequireDefault(_addEventListener2);

	var _cssAnimation2 = __webpack_require__(43);

	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);

	var _toArray2 = __webpack_require__(47);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _Align2 = __webpack_require__(48);

	var _Align3 = _interopRequireDefault(_Align2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';

	exports.Align = _Align3.default;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = all;

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }

	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var error = null;

	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }

	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });

	    return error;
	  }

	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Mostly taken from ReactPropTypes.

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }

	      return null;
	    }

	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }

	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }

	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = deprecated;

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;

	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

	      warned[messageKey] = true;
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}

	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;

	  var parentProps = {};
	  var childProps = {};

	  Object.entries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];

	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });

	  return [parentProps, childProps];
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(39);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventObject = __webpack_require__(40);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventBaseObject = __webpack_require__(41);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(42);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(44);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(45);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports.default = cssAnimation;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports.default = TransitionEvents;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(46);
	} catch (err) {
	  var index = __webpack_require__(46);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = toArray;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(49);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(38);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import isWindow from './isWindow';

	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	var Align = _react2.default.createClass({
	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},

	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2.default)(window, 'resize', this.bufferMonitor);
	    }
	  },
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	  forceAlign: function forceAlign() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;

	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports.default = Align;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(53);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(54);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(55);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(56);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// http://yiminghe.iteye.com/blog/1124720

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2["default"].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2["default"])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2["default"])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2["default"].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2["default"].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2["default"];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

	exports["default"] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _propertyUtils = __webpack_require__(51);

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	function force(x, y) {
	  return x + y;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports["default"] = utils;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2["default"].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2["default"].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports["default"] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2["default"])(element);
	  var scrollX = void 0;
	  var scrollY = void 0;
	  var winSize = void 0;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2["default"].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2["default"])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2["default"].getWindowScrollLeft(win);
	  scrollY = _utils2["default"].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2["default"].viewportWidth(win),
	    height: _utils2["default"].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports["default"] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2["default"].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2["default"].mix(pos, size);
	}

	exports["default"] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2["default"].offset(node);
	    w = _utils2["default"].outerWidth(node);
	    h = _utils2["default"].outerHeight(node);
	  } else {
	    var win = _utils2["default"].getWindow(node);
	    offset = {
	      left: _utils2["default"].getWindowScrollLeft(win),
	      top: _utils2["default"].getWindowScrollTop(win)
	    };
	    w = _utils2["default"].viewportWidth(win);
	    h = _utils2["default"].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports["default"] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(57);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = void 0;
	  var diff = void 0;
	  var p1 = void 0;
	  var p2 = void 0;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports["default"] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = void 0;
	  var y = void 0;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports["default"] = getAlignOffset;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};

	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);

	  function Fade() {
	    _classCallCheck(this, Fade);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };

	  return Fade;
	}(_react2["default"].Component);

	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;

	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否是手风琴效果
	  accordion: _react2["default"].PropTypes.bool,
	  //激活的项
	  activeKey: _react2["default"].PropTypes.any,
	  //默认的激活的项
	  defaultActiveKey: _react2["default"].PropTypes.any,
	  //选中函数
	  onSelect: _react2["default"].PropTypes.func,
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};

	// TODO: Use uncontrollable.

	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);

	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleSelect = _this.handleSelect.bind(_this);

	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }

	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();

	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({ activeKey: key });
	  };

	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);

	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }

	    var classes = {};
	    classes['' + clsPrefix] = true;

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };

	        if (accordion) {
	          Object.assign(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }

	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };

	  return PanelGroup;
	}(_react2["default"].Component);

	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;

	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'border', 'icon']),
	    /**
	    * @title 类型
	    */
	    colors: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,

	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button'

	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react.Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switch = __webpack_require__(63);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Switch2['default'];
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

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
			var _props = this.props,
			    checkedChildren = _props.checkedChildren,
			    unCheckedChildren = _props.unCheckedChildren,
			    onChangeHandler = _props.onChangeHandler,
			    size = _props.size,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    colors = _props.colors;
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYTgyYzFhMzUyYjBlNjgyMDhiOSIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvUm93LmpzIiwid2VicGFjazovLy8uL34vYmVlLWxheW91dC9idWlsZC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9zdHlsZS9yZW1vdmVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2RlcHJlY2F0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzLzM4NjYwL0FwcERhdGEvUm9hbWluZy9udm0vdjQuNS4wL34vYmVlLXRvb2xzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaXNSZXF1aXJlZEZvckExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3NwbGl0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9BbGlnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9wcm9wZXJ0eVV0aWxzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvYWRqdXN0Rm9yVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvZ2V0RWxGdXR1cmVQb3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldEFsaWduT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvRmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzIiwid2VicGFjazovLy8uL34vYmVlLWJ1dHRvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1idXR0b24vYnVpbGQvQnV0dG9uLmpzIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9Td2l0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWE4MmMxYTM1MmIwZTY4MjA4YjkiLCJcclxuaW1wb3J0IHsgQ29uLCBSb3csIENvbCB9IGZyb20gJ2JlZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBQYW5lbCB9IGZyb20gJ2JlZS1wYW5lbCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2JlZS1idXR0b24nO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uL3NyYyc7XHJcblxyXG5cclxuY29uc3QgQ0FSRVQgPSA8aSBjbGFzc05hbWU9XCJ1ZiB1Zi1hcnJvdy1kb3duXCI+PC9pPjtcclxuXHJcbmNvbnN0IENBUkVUVVAgPSA8aSBjbGFzc05hbWU9XCJ1ZiB1Zi1hcnJvdy11cFwiPjwvaT47XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEB0aXRsZSDpu5jorqTlvIDlhbNcclxuICogQGRlc2NyaXB0aW9uIFxyXG4gKlxyXG4gKi9cclxuXHJcbmNsYXNzIERlbW8xIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN3aXRjaCAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4vKipcclxuICpcclxuICogQHRpdGxlIOS4jeWQjOWkp+Wwj+eahOW8gOWFs1xyXG4gKiBAZGVzY3JpcHRpb24g6YCa6L+HYHNpemVg5bGe5oCn5o6n5Yi25byA5YWz55qE5aSn5bCPXHJcbiAqXHJcbiAqL1xyXG5cclxuY2xhc3MgRGVtbzIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17dHJ1ZX0gc2l6ZT0nc20nIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBzaXplPSdsZycgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEB0aXRsZSDkuovku7blvIDlhbNcclxuICogQGRlc2NyaXB0aW9uIOeCueWHu+W8gOWFs+inpuWPkeS6i+S7tlxyXG4gKlxyXG4gKi9cclxuXHJcbmNsYXNzIERlbW8zIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3dpdGNoIDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VIYW5kbGUgPSB0aGlzLmNoYW5nZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlSGFuZGxlKGUpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN3aXRjaDogYCR7ZX1gXHJcbiAgICAgICAgfSlcclxuXHR9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBvbkNoYW5nZUhhbmRsZXIgPSB7dGhpcy5jaGFuZ2VIYW5kbGV9IGNoZWNrZWRDaGlsZHJlbj17J+W8gCd9IHVuQ2hlY2tlZENoaWxkcmVuPXsn5YWzJ30gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBvbkNoYW5nZUhhbmRsZXIgPSB7dGhpcy5jaGFuZ2VIYW5kbGV9IGNoZWNrZWRDaGlsZHJlbj17J29uJ30gdW5DaGVja2VkQ2hpbGRyZW49eydvZmYnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IHRoaXMuc3RhdGUuc3dpdGNoIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbnZhciBEZW1vQXJyYXkgPSBbe1wiZXhhbXBsZVwiOjxEZW1vMSAvPixcInRpdGxlXCI6XCIg6buY6K6k5byA5YWzXCIsXCJjb2RlXCI6XCIvKipcXHJcXG4gKlxcclxcbiAqIEB0aXRsZSDpu5jorqTlvIDlhbNcXHJcXG4gKiBAZGVzY3JpcHRpb24gXFxyXFxuICpcXHJcXG4gKi9cXHJcXG5cXHJcXG5jbGFzcyBEZW1vMSBleHRlbmRzIENvbXBvbmVudCB7XFxyXFxuICAgIHJlbmRlciAoKSB7XFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIDxTd2l0Y2ggLz5cXHJcXG4gICAgICAgIClcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcImRlc2NcIjpcIiBcIn0se1wiZXhhbXBsZVwiOjxEZW1vMiAvPixcInRpdGxlXCI6XCIg5LiN5ZCM5aSn5bCP55qE5byA5YWzXCIsXCJjb2RlXCI6XCIvKipcXHJcXG4gKlxcclxcbiAqIEB0aXRsZSDkuI3lkIzlpKflsI/nmoTlvIDlhbNcXHJcXG4gKiBAZGVzY3JpcHRpb24g6YCa6L+HYHNpemVg5bGe5oCn5o6n5Yi25byA5YWz55qE5aSn5bCPXFxyXFxuICpcXHJcXG4gKi9cXHJcXG5cXHJcXG5jbGFzcyBEZW1vMiBleHRlbmRzIENvbXBvbmVudCB7XFxyXFxuXFxyXFxuICAgIHJlbmRlciAoKSB7XFxyXFxuICAgICAgICByZXR1cm4gKFxcclxcbiAgICAgICAgICAgIDxSb3c+XFxyXFxuICAgICAgICAgICAgICAgIDxDb2wgc209ezJ9PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSBzaXplPSdzbScgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9Db2w+XFxyXFxuICAgICAgICAgICAgICAgIDxDb2wgc209ezJ9PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0cnVlfSAvPlxcclxcbiAgICAgICAgICAgICAgICA8L0NvbD5cXHJcXG4gICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RydWV9IHNpemU9J2xnJyAvPlxcclxcbiAgICAgICAgICAgICAgICA8L0NvbD5cXHJcXG4gICAgICAgICAgICA8L1Jvdz5cXHJcXG4gICAgICAgIClcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcImRlc2NcIjpcIiDpgJrov4dgc2l6ZWDlsZ7mgKfmjqfliLblvIDlhbPnmoTlpKflsI9cIn0se1wiZXhhbXBsZVwiOjxEZW1vMyAvPixcInRpdGxlXCI6XCIg5LqL5Lu25byA5YWzXCIsXCJjb2RlXCI6XCIvKipcXHJcXG4gKlxcclxcbiAqIEB0aXRsZSDkuovku7blvIDlhbNcXHJcXG4gKiBAZGVzY3JpcHRpb24g54K55Ye75byA5YWz6Kem5Y+R5LqL5Lu2XFxyXFxuICpcXHJcXG4gKi9cXHJcXG5cXHJcXG5jbGFzcyBEZW1vMyBleHRlbmRzIENvbXBvbmVudCB7XFxyXFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcXHJcXG4gICAgICAgIHN1cGVyKHByb3BzKTtcXHJcXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XFxyXFxuICAgICAgICAgICAgc3dpdGNoIDogXFxcIlxcXCJcXHJcXG4gICAgICAgIH07XFxyXFxuICAgICAgICB0aGlzLmNoYW5nZUhhbmRsZSA9IHRoaXMuY2hhbmdlSGFuZGxlLmJpbmQodGhpcyk7XFxyXFxuICAgIH1cXHJcXG4gICAgY2hhbmdlSGFuZGxlKGUpe1xcclxcblxcdFxcdHRoaXMuc2V0U3RhdGUoe1xcclxcbiAgICAgICAgICAgIHN3aXRjaDogYCR7ZX1gXFxyXFxuICAgICAgICB9KVxcclxcblxcdH1cXHJcXG5cXHJcXG4gICAgcmVuZGVyICgpIHtcXHJcXG4gICAgICAgIHJldHVybiAoXFxyXFxuICAgICAgICAgICAgPFJvdz5cXHJcXG4gICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIG9uQ2hhbmdlSGFuZGxlciA9IHt0aGlzLmNoYW5nZUhhbmRsZX0gY2hlY2tlZENoaWxkcmVuPXsn5byAJ30gdW5DaGVja2VkQ2hpbGRyZW49eyflhbMnfSAvPlxcclxcbiAgICAgICAgICAgICAgICA8L0NvbD5cXHJcXG4gICAgICAgICAgICAgICAgPENvbCBzbT17Mn0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlSGFuZGxlciA9IHt0aGlzLmNoYW5nZUhhbmRsZX0gY2hlY2tlZENoaWxkcmVuPXsnb24nfSB1bkNoZWNrZWRDaGlsZHJlbj17J29mZid9IC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ29sPlxcclxcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXsyfT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgdGhpcy5zdGF0ZS5zd2l0Y2ggfTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9Db2w+XFxyXFxuICAgICAgICAgICAgPC9Sb3c+XFxyXFxuICAgICAgICApXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCJkZXNjXCI6XCIg54K55Ye75byA5YWz6Kem5Y+R5LqL5Lu2XCJ9XVxuXHJcblxyXG5jbGFzcyBEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBleGFtcGxlLCBjb2RlLCBkZXNjICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY2FyZXQgPSB0aGlzLnN0YXRlLm9wZW4gPyBDQVJFVFVQIDogQ0FSRVQ7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnN0YXRlLm9wZW4gPyBcIumakOiXj+S7o+eggVwiIDogXCLmn6XnnIvku6PnoIFcIjtcclxuXHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwiYmxvY2tcIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9PlxyXG4gICAgICAgICAgICAgICAgeyBjYXJldCB9XHJcbiAgICAgICAgICAgICAgICB7IHRleHQgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbCBtZD17MTJ9ID5cclxuICAgICAgICAgICAgICAgIDxoMz57IHRpdGxlIH08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+eyBkZXNjIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWwgY29sbGFwc2libGUgZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW4gfSBjb2xvcnM9J2JvcmRlcmVkJyBoZWFkZXI9eyBleGFtcGxlIH0gZm9vdGVyPXtmb290ZXJ9IGZvb3RlclN0eWxlID0ge3twYWRkaW5nOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHByZT48Y29kZSBjbGFzc05hbWU9XCJobGpzIGphdmFzY3JpcHRcIj57IGNvZGUgfTwvY29kZT48L3ByZT5cclxuICAgICAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGVtb0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAge0RlbW9BcnJheS5tYXAoKGNoaWxkLGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW8gZXhhbXBsZT0ge2NoaWxkLmV4YW1wbGV9IHRpdGxlPSB7Y2hpbGQudGl0bGV9IGNvZGU9IHtjaGlsZC5jb2RlfSBkZXNjPSB7Y2hpbGQuZGVzY30ga2V5PSB7aW5kZXh9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxEZW1vR3JvdXAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbnBlckJlZURlbW8nKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZW1vL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db24gPSBleHBvcnRzLlJvdyA9IGV4cG9ydHMuQ29sID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbDIgPSByZXF1aXJlKCcuL0NvbCcpO1xuXG52YXIgX0NvbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2wyKTtcblxudmFyIF9Sb3cyID0gcmVxdWlyZSgnLi9Sb3cnKTtcblxudmFyIF9Sb3czID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm93Mik7XG5cbnZhciBfTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcblxudmFyIF9MYXlvdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGF5b3V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQ29sID0gX0NvbDNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Sb3cgPSBfUm93M1tcImRlZmF1bHRcIl07XG5leHBvcnRzLkNvbiA9IF9MYXlvdXQyW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWxheW91dC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjb21wb25lbnRDbGFzczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5lbGVtZW50LCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIHhz5pi+56S65YiX5pWwXG4gICAqL1xuICB4czogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeaYvuekuuWIl+aVsFxuICAgKi9cbiAgc206IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTmmL7npLrliJfmlbBcbiAgICovXG4gIG1kOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5pi+56S65YiX5pWwXG4gICAqL1xuICBsZzogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB4c+WBj+enu+WIl+aVsFxuICAgKi9cbiAgeHNPZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc23lgY/np7vliJfmlbBcbiAgICovXG4gIHNtT2Zmc2V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1k5YGP56e75YiX5pWwXG4gICAqL1xuICBtZE9mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+WBj+enu+WIl+aVsFxuICAgKi9cbiAgbGdPZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogeHPlj7PlgY/np7vliJfmlbBcbiAgICovXG4gIHhzUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeWPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgc21QdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1k5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICBtZFB1c2g6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGflj7PlgY/np7vliJfmlbBcbiAgICovXG4gIGxnUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB4c+W3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgeHNQdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5bem5YGP56e75YiX5pWwXG4gICAqL1xuICBzbVB1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTlt6blgY/np7vliJfmlbBcbiAgICovXG4gIG1kUHVsbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+W3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgbGdQdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBjbHNQcmVmaXg6ICd1LWNvbCdcbn07XG5cbnZhciBERVZJQ0VfU0laRVMgPSBbJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5cbnZhciBDb2wgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2woKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50Q2xhc3MnLCAnY2xhc3NOYW1lJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciB0YkNsYXNzID0gW107XG4gICAgLyoqXG4gICAgICog5a+55Lyg5YWlcHJvcHPlgZrmoLflvI/ovazljJZcbiAgICAgKiBAdHlwZSB7W3R5cGVdfVxuICAgICAqL1xuICAgIERFVklDRV9TSVpFUy5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICBmdW5jdGlvbiBwb3BQcm9wKHByb3BTdWZmaXgsIG1vZGlmaWVyKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9ICcnICsgc2l6ZSArIHByb3BTdWZmaXg7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBvdGhlcnNbcHJvcE5hbWVdO1xuXG4gICAgICAgIGlmIChwcm9wVmFsdWUgIT0gdW5kZWZpbmVkICYmIHByb3BWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGJDbGFzcy5wdXNoKGNsc1ByZWZpeCArICctJyArIHNpemUgKyBtb2RpZmllciArICctJyArIHByb3BWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgb3RoZXJzW3Byb3BOYW1lXTtcbiAgICAgIH1cblxuICAgICAgcG9wUHJvcCgnJywgJycpO1xuICAgICAgcG9wUHJvcCgnT2Zmc2V0JywgJy1vZmZzZXQnKTtcbiAgICAgIHBvcFByb3AoJ1B1c2gnLCAnLXB1c2gnKTtcbiAgICAgIHBvcFByb3AoJ1B1bGwnLCAnLXB1bGwnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSh0YkNsYXNzLCBjbGFzc05hbWUpXG4gICAgICB9LCBvdGhlcnMpLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBjbHNQcmVmaXg6ICd1LXJvdydcbn07XG5cbnZhciBSb3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm93LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFJvdy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50Q2xhc3MnLCAnY2xzUHJlZml4JywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciBic2NsYXNzID0gJycgKyBjbHNQcmVmaXg7XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCBvdGhlcnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoYnNjbGFzcywgY2xhc3NOYW1lKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUm93O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUm93O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1sYXlvdXQvYnVpbGQvUm93LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxyXG4gICAqIEFkZHMgYGNvbnRhaW5lci1mbHVpZGAgY2xhc3MuXHJcbiAgICovXG4gIGZsdWlkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gdXNlIGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50XHJcbiAgICovXG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBmbHVpZDogZmFsc2UsXG4gIGNsc1ByZWZpeDogJ3UtY29udGFpbmVyJ1xufTtcblxudmFyIENvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90YmNsYXNzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZsdWlkID0gX3Byb3BzLmZsdWlkLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnZmx1aWQnLCAnY29tcG9uZW50Q2xhc3MnLCAnY2xzUHJlZml4JywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciB0YmNsYXNzID0gKF90YmNsYXNzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfdGJjbGFzcywgJycgKyBjbHNQcmVmaXgsICFmbHVpZCksIF9kZWZpbmVQcm9wZXJ0eShfdGJjbGFzcywgY2xzUHJlZml4ICsgJy1mbHVpZCcsIGZsdWlkKSwgX3RiY2xhc3MpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRiY2xhc3MsIGNsYXNzTmFtZSlcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbjtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ29uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1sYXlvdXQvYnVpbGQvTGF5b3V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUGFuZWxHcm91cCA9IGV4cG9ydHMuUGFuZWwgPSB1bmRlZmluZWQ7XG5cbnZhciBfUGFuZWwyID0gcmVxdWlyZSgnLi9QYW5lbCcpO1xuXG52YXIgX1BhbmVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsMik7XG5cbnZhciBfUGFuZWxHcm91cDIgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXAyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuUGFuZWwgPSBfUGFuZWwzW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuUGFuZWxHcm91cCA9IF9QYW5lbEdyb3VwM1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1wYW5lbC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfYmVlVHJhbnNpdGlvbiA9IHJlcXVpcmUoJ2JlZS10cmFuc2l0aW9uJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvL+aYr+WQpua3u+WKoOaKmOWPoFxuICBjb2xsYXBzaWJsZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2VsZWN0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLy/lpLTpg6jnu4Tku7ZcbiAgaGVhZGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubm9kZSxcbiAgaGVhZGVyU3R5bGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubnVtYmVyXSksXG4gIGhlYWRlckNvbnRlbnQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL2Zvb3Rlcue7hOS7tlxuICBmb290ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ub2RlLFxuICBmb290ZXJTdHlsZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9iamVjdCxcbiAgLy/pu5jorqTmmK/lkKbmiZPlvIBcbiAgZGVmYXVsdEV4cGFuZGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcbiAgLy/mmK/lkKbmiZPlvIBcbiAgZXhwYW5kZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+avj+S4qnBhbmVs55qE5qCH6K6wXG4gIGV2ZW50S2V5OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55LFxuICBoZWFkZXJSb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBwYW5lbFJvbGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gIC8v6aKc6ImyXG4gIGNvbG9yczogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdhY2NlbnQnLCAnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2RlZmF1bHQnLCAnYm9yZGVyZWQnXSksXG5cbiAgLy8gRnJvbSBDb2xsYXBzZS7nmoTmianlsZXliqjnlLtcbiAgb25FbnRlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW50ZXJpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkVudGVyZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkV4aXRpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkV4aXRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRFeHBhbmRlZDogZmFsc2UsXG4gIGNsc1ByZWZpeDogXCJ1LXBhbmVsXCIsXG4gIGNvbG9yczogXCJkZWZhdWx0XCJcbn07XG5cbnZhciBQYW5lbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWwocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFuZWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGlja1RpdGxlID0gX3RoaXMuaGFuZGxlQ2xpY2tUaXRsZS5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLy/lpLTpg6jngrnlh7vkuovku7ZcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5oYW5kbGVDbGlja1RpdGxlID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2tUaXRsZShlKSB7XG4gICAgLy8g5LiN6K6p5LqL5Lu26L+b5YWl5LqL5Lu25rGgXG4gICAgZS5wZXJzaXN0KCk7XG4gICAgZS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pO1xuICAgIH1cbiAgfTtcblxuICAvL+a4suafk3BhbmVsaGVhZGVyXG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGNvbGxhcHNpYmxlLCBoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZCwgY2xzUHJlZml4KSB7XG4gICAgdmFyIHRpdGxlQ2xhc3NOYW1lID0gY2xzUHJlZml4ICsgJy10aXRsZSc7XG5cbiAgICBpZiAoIWNvbGxhcHNpYmxlKSB7XG4gICAgICBpZiAoIV9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGhlYWRlcikpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIV9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGhlYWRlcikpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDQnLFxuICAgICAgICB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyQ29udGVudCkge1xuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpLFxuICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlci5wcm9wcy5jaGlsZHJlbiwgaWQsIHJvbGUsIGV4cGFuZGVkKVxuICAgIH0pO1xuICB9O1xuXG4gIC8v5aaC5p6c5L2/55So6ZO+5o6l77yM5riy5p+T5Li6Yeagh+etvlxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckFuY2hvciA9IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZCkge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICBocmVmOiBpZCAmJiAnIycgKyBpZCxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBpZCxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBleHBhbmRlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBleHBhbmRlZCA/IG51bGwgOiAnY29sbGFwc2VkJ1xuICAgICAgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH07XG5cbiAgLy/lpoLmnpzmnInmipjlj6DliqjnlLvvvIzmuLLmn5Pmipjlj6DliqjnlLtcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJDb2xsYXBzaWJsZUJvZHkgPSBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCByb2xlLCBjaGlsZHJlbiwgY2xzUHJlZml4LCBhbmltYXRpb25Ib29rcykge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX2JlZVRyYW5zaXRpb24uQ29sbGFwc2UsXG4gICAgICBfZXh0ZW5kcyh7ICdpbic6IGV4cGFuZGVkIH0sIGFuaW1hdGlvbkhvb2tzKSxcbiAgICAgIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHNQcmVmaXggKyAnLWNvbGxhcHNlJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhZXhwYW5kZWRcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICAvL+a4suafk3BhbmVsYm9keVxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckJvZHkgPSBmdW5jdGlvbiByZW5kZXJCb2R5KHJhd0NoaWxkcmVuLCBjbHNQcmVmaXgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gW107XG5cbiAgICB2YXIgYm9keUNsYXNzTmFtZSA9IGNsc1ByZWZpeCArICctYm9keSc7XG5cbiAgICAvL+a3u+WKoOWIsGJvZHnnmoRjaGlsZHJlbuS4rVxuICAgIGZ1bmN0aW9uIG1heWJlQWRkQm9keSgpIHtcbiAgICAgIGlmICghYm9keUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOe7meWtkOe7hOS7tua3u+WKoGtlee+8jOS4uuS6huS5i+WQjuinpuWPkeS6i+S7tuaXtuS9v+eUqFxuICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IGNoaWxkcmVuLmxlbmd0aCwgY2xhc3NOYW1lOiBib2R5Q2xhc3NOYW1lIH0sXG4gICAgICAgIGJvZHlDaGlsZHJlblxuICAgICAgKSk7XG5cbiAgICAgIGJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8v6L2s5o2i5Li65pWw57uE77yM5pa55L6/5aSN55SoXG4gICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4udG9BcnJheShyYXdDaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCkge1xuICAgICAgICBtYXliZUFkZEJvZHkoKTtcblxuICAgICAgICAvL+Wwhuagh+ekumZpbGzorr7nva7kuLp1bmRlZmluZWRcbiAgICAgICAgY2hpbGRyZW4ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHsgZmlsbDogdW5kZWZpbmVkIH0pKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIG1heWJlQWRkQm9keSgpO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbGxhcHNpYmxlID0gX3Byb3BzLmNvbGxhcHNpYmxlLFxuICAgICAgICBoZWFkZXIgPSBfcHJvcHMuaGVhZGVyLFxuICAgICAgICBpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgZm9vdGVyID0gX3Byb3BzLmZvb3RlcixcbiAgICAgICAgcHJvcHNFeHBhbmRlZCA9IF9wcm9wcy5leHBhbmRlZCxcbiAgICAgICAgZm9vdGVyU3R5bGUgPSBfcHJvcHMuZm9vdGVyU3R5bGUsXG4gICAgICAgIGhlYWRlclN0eWxlID0gX3Byb3BzLmhlYWRlclN0eWxlLFxuICAgICAgICBoZWFkZXJSb2xlID0gX3Byb3BzLmhlYWRlclJvbGUsXG4gICAgICAgIHBhbmVsUm9sZSA9IF9wcm9wcy5wYW5lbFJvbGUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbG9ycyA9IF9wcm9wcy5jb2xvcnMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBvbkVudGVyID0gX3Byb3BzLm9uRW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmcgPSBfcHJvcHMub25FbnRlcmluZyxcbiAgICAgICAgb25FbnRlcmVkID0gX3Byb3BzLm9uRW50ZXJlZCxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb25FeGl0ID0gX3Byb3BzLm9uRXhpdCxcbiAgICAgICAgaGVhZGVyQ29udGVudCA9IF9wcm9wcy5oZWFkZXJDb250ZW50LFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgb25FeGl0aW5nID0gX3Byb3BzLm9uRXhpdGluZyxcbiAgICAgICAgb25FeGl0ZWQgPSBfcHJvcHMub25FeGl0ZWQsXG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZCA9IF9wcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICAgIGV2ZW50S2V5ID0gX3Byb3BzLmV2ZW50S2V5LFxuICAgICAgICBvblNlbGVjdCA9IF9wcm9wcy5vblNlbGVjdCxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbGxhcHNpYmxlJywgJ2hlYWRlcicsICdpZCcsICdmb290ZXInLCAnZXhwYW5kZWQnLCAnZm9vdGVyU3R5bGUnLCAnaGVhZGVyU3R5bGUnLCAnaGVhZGVyUm9sZScsICdwYW5lbFJvbGUnLCAnY2xhc3NOYW1lJywgJ2NvbG9ycycsICdjaGlsZHJlbicsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ2Nsc1ByZWZpeCcsICdvbkV4aXQnLCAnaGVhZGVyQ29udGVudCcsICdzdHlsZScsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnLCAnZGVmYXVsdEV4cGFuZGVkJywgJ2V2ZW50S2V5JywgJ29uU2VsZWN0J10pO1xuXG4gICAgdmFyIGV4cGFuZGVkID0gcHJvcHNFeHBhbmRlZCAhPSBudWxsID8gcHJvcHNFeHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcbiAgICBjbGFzc2VzW2Nsc1ByZWZpeCArICctJyArIGNvbG9yc10gPSB0cnVlO1xuXG4gICAgdmFyIGhlYWRlckNsYXNzID0gX2RlZmluZVByb3BlcnR5KHt9LCBjbHNQcmVmaXggKyAnLWhlYWRpbmcnLCB0cnVlKTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgICAgaWQ6IGNvbGxhcHNpYmxlID8gbnVsbCA6IGlkXG4gICAgICB9KSxcbiAgICAgIGhlYWRlciAmJiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShoZWFkZXJDbGFzcyksIHN0eWxlOiBoZWFkZXJTdHlsZSwgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1RpdGxlIH0sXG4gICAgICAgIHRoaXMucmVuZGVySGVhZGVyKGNvbGxhcHNpYmxlLCBoZWFkZXIsIGlkLCBoZWFkZXJSb2xlLCBleHBhbmRlZCwgY2xzUHJlZml4KVxuICAgICAgKSxcbiAgICAgIGNvbGxhcHNpYmxlID8gdGhpcy5yZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCBwYW5lbFJvbGUsIGNoaWxkcmVuLCBjbHNQcmVmaXgsIHsgb25FbnRlcjogb25FbnRlciwgb25FbnRlcmluZzogb25FbnRlcmluZywgb25FbnRlcmVkOiBvbkVudGVyZWQsIG9uRXhpdDogb25FeGl0LCBvbkV4aXRpbmc6IG9uRXhpdGluZywgb25FeGl0ZWQ6IG9uRXhpdGVkIH0pIDogdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpLFxuICAgICAgZm9vdGVyICYmIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xzUHJlZml4ICsgJy1mb290ZXInLCBzdHlsZTogZm9vdGVyU3R5bGUgfSxcbiAgICAgICAgZm9vdGVyXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUGFuZWw7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBhbmVsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBQYW5lbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWwuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GYWRlID0gZXhwb3J0cy5Db2xsYXBzZSA9IGV4cG9ydHMuVHJhbnNpdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9UcmFuc2l0aW9uMiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbjIpO1xuXG52YXIgX0NvbGxhcHNlMiA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZTIpO1xuXG52YXIgX0ZhZGUyID0gcmVxdWlyZSgnLi9GYWRlJyk7XG5cbnZhciBfRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzLlRyYW5zaXRpb24gPSBfVHJhbnNpdGlvbjNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Db2xsYXBzZSA9IF9Db2xsYXBzZTNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5GYWRlID0gX0ZhZGUzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5FWElUSU5HID0gZXhwb3J0cy5FTlRFUkVEID0gZXhwb3J0cy5FTlRFUklORyA9IGV4cG9ydHMuRVhJVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9wcm9wZXJ0aWVzID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzJyk7XG5cbnZhciBfcHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wZXJ0aWVzKTtcblxudmFyIF9vbiA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2V2ZW50cy9vbicpO1xuXG52YXIgX29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0gX3Byb3BlcnRpZXMyW1wiZGVmYXVsdFwiXS5lbmQ7XG5cbi8v6K6+572u54q25oCB56CBXG52YXIgVU5NT1VOVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSAwO1xudmFyIEVYSVRFRCA9IGV4cG9ydHMuRVhJVEVEID0gMTtcbnZhciBFTlRFUklORyA9IGV4cG9ydHMuRU5URVJJTkcgPSAyO1xudmFyIEVOVEVSRUQgPSBleHBvcnRzLkVOVEVSRUQgPSAzO1xudmFyIEVYSVRJTkcgPSBleHBvcnRzLkVYSVRJTkcgPSA0O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6Kem5Y+R5Yqo55S7XG4gICAqL1xuICBcImluXCI6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICog5LiN5pi+56S655qE5pe25YCZ5piv5ZCm56e76Zmk57uE5Lu2XG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIOWmguaenOiuvue9ruS4uum7mOiupOaYvuekuu+8jOaMgui9veaXtuaYvuekuuWKqOeUu1xuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiDorr7nva7otoXml7bml7bpl7TvvIzpmLLmraLlh7rnjrDpl67popjvvIzlj6/orr7nva7kuLo+PeWKqOeUu+aXtumXtFxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIOmAgOWHuue7hOS7tuaXtua3u+WKoOeahGNsYXNzXG4gICAqL1xuICBleGl0ZWRDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6YCA5Ye657uE5Lu25Lit5re75Yqg55qEY2xhc3NcbiAgICovXG4gIGV4aXRpbmdDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75ZCO5re75Yqg55qEY2xhc3NcbiAgICovXG4gIGVudGVyZWRDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75pe25re75Yqg55qEY2xhc3NcbiAgICovXG4gIGVudGVyaW5nQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75byA5aeL5pe255qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkVudGVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvkuK3nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRW50ZXJpbmc6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+WQjueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FbnRlcmVkOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpgIDlh7rliqjnlLvlvIDlp4vml7bnmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75Lit55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmAgOWHuuWKqOeUu+WQjueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIFwiaW5cIjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgdGltZW91dDogNTAwMCxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5cbi8qKlxuICog5Yqo55S757uE5Lu2XG4gKi9cblxudmFyIFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgdmFyIGluaXRpYWxTdGF0dXMgPSB2b2lkIDA7XG4gICAgaWYgKHByb3BzW1wiaW5cIl0pIHtcbiAgICAgIC8vIOWcqGNvbXBvbmVudGRpZG1vdW505pe25byA5aeL5omn6KGM5Yqo55S7XG4gICAgICBpbml0aWFsU3RhdHVzID0gcHJvcHMudHJhbnNpdGlvbkFwcGVhciA/IEVYSVRFRCA6IEVOVEVSRUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxTdGF0dXMgPSBwcm9wcy51bm1vdW50T25FeGl0ID8gVU5NT1VOVEVEIDogRVhJVEVEO1xuICAgIH1cbiAgICBfdGhpcy5zdGF0ZSA9IHsgc3RhdHVzOiBpbml0aWFsU3RhdHVzIH07XG5cbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbkFwcGVhciAmJiB0aGlzLnByb3BzW1wiaW5cIl0pIHtcbiAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzW1wiaW5cIl0gJiYgdGhpcy5wcm9wcy51bm1vdW50T25FeGl0KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgICAvLyDlnKhjb21wb25lbnREaWRVcGRhdGXmiafooYzliqjnlLsuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiBzdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgLy8g5b2T5L2/55SodW5tb3VudE9uRXhpdOaXtu+8jGV4aXRlZOS4umV4aXRpbmflkox1bm1vbnTnmoTov4fmuKHnirbmgIFcbiAgICAgIGlmICh0aGlzLnByb3BzW1wiaW5cIl0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBVTk1PVU5URUQgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDnoa7kv53lj6rlk43lupRwcm9w5Y+Y5YyWXG4gICAgaWYgKHRoaXMuX25lZWRzVXBkYXRlKSB7XG4gICAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5wcm9wc1tcImluXCJdKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVYSVRJTkcpIHtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFtuS7lu+8jOW9k+aIkeS7rOW3sue7j+i+k+WFpeaIlui+k+WHulxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtRXhpdCh0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmiJHku6zlt7Lnu4/ovpPlhaXmiJbovpPlh7rlrozmiJBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihwcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTJbXCJkZWZhdWx0XCJdLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgLy8g6L+Z6YeM5o6l5pS25pawcHJvcHNcbiAgICBwcm9wcy5vbkVudGVyKG5vZGUpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMltcImRlZmF1bHRcIl0uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBwcm9wcy5vbkV4aXQobm9kZSk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVElORyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8g56Gu5L+d5Zyo57uE5Lu26ZSA5q+B5ZCO5oyC6LW355qEc2V0U3RhdGXooqvmtojpmaRcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgICgwLCBfb24yW1wiZGVmYXVsdFwiXSkobm9kZSwgdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aGlzLnByb3BzLnRpbWVvdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgT2JqZWN0LmtleXMoVHJhbnNpdGlvbi5wcm9wVHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGRlbGV0ZSBjaGlsZFByb3BzW2tleV07XG4gICAgfSk7XG5cbiAgICB2YXIgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHZvaWQgMDtcbiAgICBpZiAoc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4aXRlZENsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmVudGVyaW5nQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5lbnRlcmVkQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFWElUSU5HKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leGl0aW5nQ2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoY2hpbGQsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSwgdHJhbnNpdGlvbkNsYXNzTmFtZSlcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVHJhbnNpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xudmFyIHByZWZpeCA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkVuZCA9IHZvaWQgMDtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdm9pZCAwO1xudmFyIGFuaW1hdGlvbk5hbWUgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uVGltaW5nID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkRlbGF5ID0gdm9pZCAwO1xuXG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIHZhciBfZ2V0VHJhbnNpdGlvblByb3BlcnQgPSBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpO1xuXG4gIHByZWZpeCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5wcmVmaXg7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQudHJhbnNpdGlvbkVuZDtcbiAgZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQuYW5pbWF0aW9uRW5kO1xuXG5cbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyAnLScgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJztcblxuICBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lID0gcHJlZml4ICsgJy1hbmltYXRpb24tbmFtZSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbiA9IHByZWZpeCArICctYW5pbWF0aW9uLWR1cmF0aW9uJztcbiAgZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSA9IHByZWZpeCArICctYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbic7XG59XG5cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uVGltaW5nO1xuZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXk7XG5leHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG5leHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lO1xuZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmc7XG5leHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbkVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCkge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcblxuICB2YXIgdmVuZG9yTWFwID0ge1xuICAgIE86IGZ1bmN0aW9uIE8oZSkge1xuICAgICAgcmV0dXJuICdvJyArIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIE1vejogZnVuY3Rpb24gTW96KGUpIHtcbiAgICAgIHJldHVybiAnbW96JyArIGU7XG4gICAgfSxcbiAgICBXZWJraXQ6IGZ1bmN0aW9uIFdlYmtpdChlKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdCcgKyBlO1xuICAgIH0sXG4gICAgbXM6IGZ1bmN0aW9uIG1zKGUpIHtcbiAgICAgIHJldHVybiAnTVMnICsgZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlbmRvcnMgPSBPYmplY3Qua2V5cyh2ZW5kb3JNYXApO1xuXG4gIHZhciB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgICAgYW5pbWF0aW9uRW5kID0gdm9pZCAwO1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZlbmRvciA9IHZlbmRvcnNbaV07XG5cbiAgICBpZiAodmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHtcbiAgICAgIHByZWZpeCA9ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNpdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBhbmltYXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnQW5pbWF0aW9uRW5kJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIXRyYW5zaXRpb25FbmQgJiYgJ3RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgaWYgKCFhbmltYXRpb25FbmQgJiYgJ2FuaW1hdGlvbk5hbWUnIGluIHN0eWxlKSB0cmFuc2l0aW9uRW5kID0gJ2FuaW1hdGlvbmVuZCc7XG5cbiAgc3R5bGUgPSBudWxsO1xuXG4gIHJldHVybiB7IGFuaW1hdGlvbkVuZDogYW5pbWF0aW9uRW5kLCB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kLCBwcmVmaXg6IHByZWZpeCB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG9uID0gZnVuY3Rpb24gb24oKSB7fTtcbmlmIChfaW5ET00yLmRlZmF1bHQpIHtcbiAgb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlIHx8IGZhbHNlKTtcbiAgICB9O2Vsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgcmV0dXJuIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBlLnRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0ID0gbm9kZTtcbiAgICAgICAgaGFuZGxlci5jYWxsKG5vZGUsIGUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9ldmVudHMvb24uanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfc3R5bGUgPSByZXF1aXJlKCdkb20taGVscGVycy9zdHlsZScpO1xuXG52YXIgX3N0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgX2NhcGl0YWxpemUgPSByZXF1aXJlKCcuL3V0aWwvY2FwaXRhbGl6ZScpO1xuXG52YXIgX2NhcGl0YWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZSk7XG5cbnZhciBfdGlucGVyQmVlQ29yZSA9IHJlcXVpcmUoJ3RpbnBlci1iZWUtY29yZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIE1BUkdJTlMgPSB7XG4gIGhlaWdodDogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHdpZHRoOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXVxufTtcblxuLy8gcmVhZGluZyBhIGRpbWVuc2lvbiBwcm9wIHdpbGwgY2F1c2UgdGhlIGJyb3dzZXIgdG8gcmVjYWxjdWxhdGUsXG4vLyB3aGljaCB3aWxsIGxldCBvdXIgYW5pbWF0aW9ucyB3b3JrXG5mdW5jdGlvbiB0cmlnZ2VyQnJvd3NlclJlZmxvdyhub2RlKSB7XG4gIG5vZGUub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25WYWx1ZShkaW1lbnNpb24sIGVsZW0pIHtcbiAgdmFyIHZhbHVlID0gZWxlbVsnb2Zmc2V0JyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXTtcbiAgdmFyIG1hcmdpbnMgPSBNQVJHSU5TW2RpbWVuc2lvbl07XG5cbiAgcmV0dXJuIHZhbHVlICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzBdKSwgMTApICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzFdKSwgMTApO1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcclxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBleHBhbmQgb3IgY29sbGFwc2UgYW5pbWF0aW9uXHJcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGNvbGxhcHNlZFxyXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBSdW4gdGhlIGV4cGFuZCBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XHJcbiAgICogc2hvd25cclxuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogRHVyYXRpb24gb2YgdGhlIGNvbGxhcHNlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsIHRvIGVuc3VyZSB0aGF0XHJcbiAgICogZmluaXNoaW5nIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZFxyXG4gICAqIGV2ZW50cyBhcmUgY2FuY2VsZWRcclxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBleHBhbmRzXHJcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBleHBhbmRcclxuICAgKi9cbiAgb25FbnRlcmluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGV4cGFuZGVkXHJcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGNvbGxhcHNlc1xyXG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBjb2xsYXBzZVxyXG4gICAqL1xuICBvbkV4aXRpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBjb2xsYXBzZWRcclxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxyXG4gICAqIFRoZSBkaW1lbnNpb24gdXNlZCB3aGVuIGNvbGxhcHNpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxyXG4gICAqIGRpbWVuc2lvblxyXG4gICAqXHJcbiAgICogX05vdGU6IEJvb3RzdHJhcCBvbmx5IHBhcnRpYWxseSBzdXBwb3J0cyAnd2lkdGgnIVxyXG4gICAqIFlvdSB3aWxsIG5lZWQgdG8gc3VwcGx5IHlvdXIgb3duIENTUyBhbmltYXRpb24gZm9yIHRoZSBgLndpZHRoYCBDU1MgY2xhc3MuX1xyXG4gICAqL1xuICBkaW1lbnNpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZihbJ2hlaWdodCcsICd3aWR0aCddKSwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcclxuICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGhlaWdodCBvciB3aWR0aCBvZiB0aGUgYW5pbWF0aW5nIERPTSBub2RlXHJcbiAgICpcclxuICAgKiBBbGxvd3MgZm9yIHByb3ZpZGluZyBzb21lIGN1c3RvbSBsb2dpYyBmb3IgaG93IG11Y2ggdGhlIENvbGxhcHNlIGNvbXBvbmVudFxyXG4gICAqIHNob3VsZCBhbmltYXRlIGluIGl0cyBzcGVjaWZpZWQgZGltZW5zaW9uLiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudFxyXG4gICAqIGRpbWVuc2lvbiBwcm9wIHZhbHVlIGFuZCB0aGUgRE9NIG5vZGUuXHJcbiAgICovXG4gIGdldERpbWVuc2lvblZhbHVlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcclxuICAgKiBBUklBIHJvbGUgb2YgY29sbGFwc2libGUgZWxlbWVudFxyXG4gICAqL1xuICByb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBcImluXCI6IGZhbHNlLFxuICB0aW1lb3V0OiAzMDAsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcblxuICBkaW1lbnNpb246ICdoZWlnaHQnLFxuICBnZXREaW1lbnNpb25WYWx1ZTogZ2V0RGltZW5zaW9uVmFsdWVcbn07XG5cbnZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2xsYXBzZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sbGFwc2UocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGFwc2UpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlciA9IF90aGlzLmhhbmRsZUVudGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gX3RoaXMuaGFuZGxlRW50ZXJpbmcuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IF90aGlzLmhhbmRsZUVudGVyZWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRXhpdCA9IF90aGlzLmhhbmRsZUV4aXQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IF90aGlzLmhhbmRsZUV4aXRpbmcuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyogLS0gRXhwYW5kaW5nIC0tICovXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMuX2dldFNjcm9sbERpbWVuc2lvblZhbHVlKGVsZW0sIGRpbWVuc2lvbik7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmVkKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gbnVsbDtcbiAgfTtcblxuICAvKiAtLSBDb2xsYXBzaW5nIC0tICovXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRXhpdCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLnByb3BzLmdldERpbWVuc2lvblZhbHVlKGRpbWVuc2lvbiwgZWxlbSkgKyAncHgnO1xuICAgIHRyaWdnZXJCcm93c2VyUmVmbG93KGVsZW0pO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gaGFuZGxlRXhpdGluZyhlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9ICcwJztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuX2RpbWVuc2lvbiA9IGZ1bmN0aW9uIF9kaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLmRpbWVuc2lvbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuZGltZW5zaW9uKCkgOiB0aGlzLnByb3BzLmRpbWVuc2lvbjtcbiAgfTtcblxuICAvLyBmb3IgdGVzdGluZ1xuXG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLl9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZSA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZShlbGVtLCBkaW1lbnNpb24pIHtcbiAgICByZXR1cm4gZWxlbVsnc2Nyb2xsJyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXSArICdweCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25FbnRlciA9IF9wcm9wcy5vbkVudGVyLFxuICAgICAgICBvbkVudGVyaW5nID0gX3Byb3BzLm9uRW50ZXJpbmcsXG4gICAgICAgIG9uRW50ZXJlZCA9IF9wcm9wcy5vbkVudGVyZWQsXG4gICAgICAgIG9uRXhpdCA9IF9wcm9wcy5vbkV4aXQsXG4gICAgICAgIG9uRXhpdGluZyA9IF9wcm9wcy5vbkV4aXRpbmcsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgZGVsZXRlIHByb3BzLmRpbWVuc2lvbjtcbiAgICBkZWxldGUgcHJvcHMuZ2V0RGltZW5zaW9uVmFsdWU7XG5cbiAgICB2YXIgaGFuZGxlRW50ZXIgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUVudGVyLCBvbkVudGVyKTtcbiAgICB2YXIgaGFuZGxlRW50ZXJpbmcgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUVudGVyaW5nLCBvbkVudGVyaW5nKTtcbiAgICB2YXIgaGFuZGxlRW50ZXJlZCA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRW50ZXJlZCwgb25FbnRlcmVkKTtcbiAgICB2YXIgaGFuZGxlRXhpdCA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRXhpdCwgb25FeGl0KTtcbiAgICB2YXIgaGFuZGxlRXhpdGluZyA9ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKHRoaXMuaGFuZGxlRXhpdGluZywgb25FeGl0aW5nKTtcblxuICAgIHZhciBjbGFzc2VzID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2RpbWVuc2lvbigpID09PSAnd2lkdGgnXG4gICAgfTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uMltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBwcm9wcy5yb2xlID8gcHJvcHNbXCJpblwiXSA6IG51bGwsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgZXhpdGVkQ2xhc3NOYW1lOiAnY29sbGFwc2UnLFxuICAgICAgZXhpdGluZ0NsYXNzTmFtZTogJ2NvbGxhcHNpbmcnLFxuICAgICAgZW50ZXJlZENsYXNzTmFtZTogJ2NvbGxhcHNlIGluJyxcbiAgICAgIGVudGVyaW5nQ2xhc3NOYW1lOiAnY29sbGFwc2luZycsXG4gICAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IGhhbmRsZUVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiBoYW5kbGVFbnRlcmVkLFxuICAgICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgICAgb25FeGl0aW5nOiBoYW5kbGVFeGl0aW5nXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDb2xsYXBzZTtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ29sbGFwc2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ29sbGFwc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbGxhcHNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL0NvbGxhcHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdHlsZTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbC9jYW1lbGl6ZVN0eWxlJyk7XG5cbnZhciBfY2FtZWxpemVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZVN0eWxlKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvaHlwaGVuYXRlU3R5bGUnKTtcblxudmFyIF9oeXBoZW5hdGVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGVTdHlsZSk7XG5cbnZhciBfZ2V0Q29tcHV0ZWRTdHlsZTIgPSByZXF1aXJlKCcuL2dldENvbXB1dGVkU3R5bGUnKTtcblxudmFyIF9nZXRDb21wdXRlZFN0eWxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldENvbXB1dGVkU3R5bGUyKTtcblxudmFyIF9yZW1vdmVTdHlsZSA9IHJlcXVpcmUoJy4vcmVtb3ZlU3R5bGUnKTtcblxudmFyIF9yZW1vdmVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW1vdmVTdHlsZSk7XG5cbnZhciBfcHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb24vcHJvcGVydGllcycpO1xuXG52YXIgX2lzVHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbi9pc1RyYW5zZm9ybScpO1xuXG52YXIgX2lzVHJhbnNmb3JtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVHJhbnNmb3JtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3R5bGUobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHZhciBjc3MgPSAnJztcbiAgdmFyIHRyYW5zZm9ybXMgPSAnJztcbiAgdmFyIHByb3BzID0gcHJvcGVydHk7XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5vZGUuc3R5bGVbKDAsIF9jYW1lbGl6ZVN0eWxlMi5kZWZhdWx0KShwcm9wZXJ0eSldIHx8ICgwLCBfZ2V0Q29tcHV0ZWRTdHlsZTMuZGVmYXVsdCkobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgoMCwgX2h5cGhlbmF0ZVN0eWxlMi5kZWZhdWx0KShwcm9wZXJ0eSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAocHJvcHMgPSB7fSlbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW2tleV07XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgICAgKDAsIF9yZW1vdmVTdHlsZTIuZGVmYXVsdCkobm9kZSwgKDAsIF9oeXBoZW5hdGVTdHlsZTIuZGVmYXVsdCkoa2V5KSk7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzVHJhbnNmb3JtMi5kZWZhdWx0KShrZXkpKSB7XG4gICAgICB0cmFuc2Zvcm1zICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzICs9ICgwLCBfaHlwaGVuYXRlU3R5bGUyLmRlZmF1bHQpKGtleSkgKyAnOiAnICsgdmFsdWUgKyAnOyc7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHJhbnNmb3Jtcykge1xuICAgIGNzcyArPSBfcHJvcGVydGllcy50cmFuc2Zvcm0gKyAnOiAnICsgdHJhbnNmb3JtcyArICc7JztcbiAgfVxuXG4gIG5vZGUuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBjc3M7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvc3R5bGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbWVsaXplU3R5bGVOYW1lO1xuXG52YXIgX2NhbWVsaXplID0gcmVxdWlyZSgnLi9jYW1lbGl6ZScpO1xuXG52YXIgX2NhbWVsaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1zUGF0dGVybiA9IC9eLW1zLS87IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9jYW1lbGl6ZVN0eWxlTmFtZS5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuZnVuY3Rpb24gY2FtZWxpemVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiAoMCwgX2NhbWVsaXplMi5kZWZhdWx0KShzdHJpbmcucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbWVsaXplO1xudmFyIHJIeXBoZW4gPSAvLSguKS9nO1xuXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJIeXBoZW4sIGZ1bmN0aW9uIChfLCBjaHIpIHtcbiAgICByZXR1cm4gY2hyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuXG52YXIgX2h5cGhlbmF0ZSA9IHJlcXVpcmUoJy4vaHlwaGVuYXRlJyk7XG5cbnZhciBfaHlwaGVuYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9oeXBoZW5hdGVTdHlsZU5hbWUuanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiAoMCwgX2h5cGhlbmF0ZTIuZGVmYXVsdCkoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZVN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGU7XG5cbnZhciByVXBwZXIgPSAvKFtBLVpdKS9nO1xuXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShyVXBwZXIsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbC9jYW1lbGl6ZVN0eWxlJyk7XG5cbnZhciBfY2FtZWxpemVTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZVN0eWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJwb3NpdGlvbiA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBybnVtbm9ucHggPSAvXihbKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkpKD8hcHgpW2EteiVdKyQvaTtcblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUobm9kZSkge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIEVsZW1lbnQgcGFzc2VkIHRvIGBnZXRDb21wdXRlZFN0eWxlKClgJyk7XG4gIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG5cbiAgcmV0dXJuICdkZWZhdWx0VmlldycgaW4gZG9jID8gZG9jLmRlZmF1bHRWaWV3Lm9wZW5lciA/IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpIDogd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkgOiB7XG4gICAgLy9pZSA4IFwibWFnaWNcIiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuMTEtc3RhYmxlL3NyYy9jc3MvY3VyQ1NTLmpzI0w3MlxuICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUocHJvcCkge1xuICAgICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcblxuICAgICAgcHJvcCA9ICgwLCBfY2FtZWxpemVTdHlsZTIuZGVmYXVsdCkocHJvcCk7XG5cbiAgICAgIGlmIChwcm9wID09ICdmbG9hdCcpIHByb3AgPSAnc3R5bGVGbG9hdCc7XG5cbiAgICAgIHZhciBjdXJyZW50ID0gbm9kZS5jdXJyZW50U3R5bGVbcHJvcF0gfHwgbnVsbDtcblxuICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbCAmJiBzdHlsZSAmJiBzdHlsZVtwcm9wXSkgY3VycmVudCA9IHN0eWxlW3Byb3BdO1xuXG4gICAgICBpZiAocm51bW5vbnB4LnRlc3QoY3VycmVudCkgJiYgIXJwb3NpdGlvbi50ZXN0KHByb3ApKSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICAgICAgdmFyIGxlZnQgPSBzdHlsZS5sZWZ0O1xuICAgICAgICB2YXIgcnVuU3R5bGUgPSBub2RlLnJ1bnRpbWVTdHlsZTtcbiAgICAgICAgdmFyIHJzTGVmdCA9IHJ1blN0eWxlICYmIHJ1blN0eWxlLmxlZnQ7XG5cbiAgICAgICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgICAgICBpZiAocnNMZWZ0KSBydW5TdHlsZS5sZWZ0ID0gbm9kZS5jdXJyZW50U3R5bGUubGVmdDtcblxuICAgICAgICBzdHlsZS5sZWZ0ID0gcHJvcCA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogY3VycmVudDtcbiAgICAgICAgY3VycmVudCA9IHN0eWxlLnBpeGVsTGVmdCArICdweCc7XG5cbiAgICAgICAgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuICAgICAgICBzdHlsZS5sZWZ0ID0gbGVmdDtcbiAgICAgICAgaWYgKHJzTGVmdCkgcnVuU3R5bGUubGVmdCA9IHJzTGVmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlbW92ZVN0eWxlO1xuZnVuY3Rpb24gcmVtb3ZlU3R5bGUobm9kZSwga2V5KSB7XG4gIHJldHVybiAncmVtb3ZlUHJvcGVydHknIGluIG5vZGUuc3R5bGUgPyBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSkgOiBub2RlLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3N0eWxlL3JlbW92ZVN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVHJhbnNmb3JtO1xudmFyIHN1cHBvcnRlZFRyYW5zZm9ybXMgPSAvXigodHJhbnNsYXRlfHJvdGF0ZXxzY2FsZSkoWHxZfFp8M2QpP3xtYXRyaXgoM2QpP3xwZXJzcGVjdGl2ZXxza2V3KFh8WSk/KSQvaTtcblxuZnVuY3Rpb24gaXNUcmFuc2Zvcm0ocHJvcGVydHkpIHtcbiAgcmV0dXJuICEhKHByb3BlcnR5ICYmIHN1cHBvcnRlZFRyYW5zZm9ybXMudGVzdChwcm9wZXJ0eSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9pc1RyYW5zZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNhcGl0YWxpemU7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gXCJcIiArIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL3V0aWwvY2FwaXRhbGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BbGlnbiA9IGV4cG9ydHMudG9BcnJheSA9IGV4cG9ydHMuY3NzQW5pbWF0aW9uID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5jb250YWlucyA9IGV4cG9ydHMuS2V5Q29kZSA9IGV4cG9ydHMuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gZXhwb3J0cy5zcGxpdENvbXBvbmVudCA9IGV4cG9ydHMuaXNSZXF1aXJlZEZvckExMXkgPSBleHBvcnRzLmVsZW1lbnRUeXBlID0gZXhwb3J0cy5kZXByZWNhdGVkID0gZXhwb3J0cy5jb21wb25lbnRPckVsZW1lbnQgPSBleHBvcnRzLmFsbCA9IHVuZGVmaW5lZDtcblxudmFyIF9hbGwyID0gcmVxdWlyZSgnLi9hbGwnKTtcblxudmFyIF9hbGwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxsMik7XG5cbnZhciBfY29tcG9uZW50T3JFbGVtZW50MiA9IHJlcXVpcmUoJy4vY29tcG9uZW50T3JFbGVtZW50Jyk7XG5cbnZhciBfY29tcG9uZW50T3JFbGVtZW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudE9yRWxlbWVudDIpO1xuXG52YXIgX2RlcHJlY2F0ZWQyID0gcmVxdWlyZSgnLi9kZXByZWNhdGVkJyk7XG5cbnZhciBfZGVwcmVjYXRlZDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGVkMik7XG5cbnZhciBfZWxlbWVudFR5cGUyID0gcmVxdWlyZSgnLi9lbGVtZW50VHlwZScpO1xuXG52YXIgX2VsZW1lbnRUeXBlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VsZW1lbnRUeXBlMik7XG5cbnZhciBfaXNSZXF1aXJlZEZvckExMXkyID0gcmVxdWlyZSgnLi9pc1JlcXVpcmVkRm9yQTExeScpO1xuXG52YXIgX2lzUmVxdWlyZWRGb3JBMTF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVxdWlyZWRGb3JBMTF5Mik7XG5cbnZhciBfc3BsaXRDb21wb25lbnQyID0gcmVxdWlyZSgnLi9zcGxpdENvbXBvbmVudCcpO1xuXG52YXIgX3NwbGl0Q29tcG9uZW50MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwbGl0Q29tcG9uZW50Mik7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIpO1xuXG52YXIgX2tleUNvZGUgPSByZXF1aXJlKCcuL2tleUNvZGUnKTtcblxudmFyIF9rZXlDb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleUNvZGUpO1xuXG52YXIgX2NvbnRhaW5zMiA9IHJlcXVpcmUoJy4vY29udGFpbnMnKTtcblxudmFyIF9jb250YWluczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluczIpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIyID0gcmVxdWlyZSgnLi9hZGRFdmVudExpc3RlbmVyJyk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRFdmVudExpc3RlbmVyMik7XG5cbnZhciBfY3NzQW5pbWF0aW9uMiA9IHJlcXVpcmUoJy4vY3NzQW5pbWF0aW9uJyk7XG5cbnZhciBfY3NzQW5pbWF0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FuaW1hdGlvbjIpO1xuXG52YXIgX3RvQXJyYXkyID0gcmVxdWlyZSgnLi90b0FycmF5Jyk7XG5cbnZhciBfdG9BcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0FycmF5Mik7XG5cbnZhciBfQWxpZ24yID0gcmVxdWlyZSgnLi9BbGlnbicpO1xuXG52YXIgX0FsaWduMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FsaWduMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuYWxsID0gX2FsbDMuZGVmYXVsdDtcbmV4cG9ydHMuY29tcG9uZW50T3JFbGVtZW50ID0gX2NvbXBvbmVudE9yRWxlbWVudDMuZGVmYXVsdDtcbmV4cG9ydHMuZGVwcmVjYXRlZCA9IF9kZXByZWNhdGVkMy5kZWZhdWx0O1xuZXhwb3J0cy5lbGVtZW50VHlwZSA9IF9lbGVtZW50VHlwZTMuZGVmYXVsdDtcbmV4cG9ydHMuaXNSZXF1aXJlZEZvckExMXkgPSBfaXNSZXF1aXJlZEZvckExMXkzLmRlZmF1bHQ7XG5leHBvcnRzLnNwbGl0Q29tcG9uZW50ID0gX3NwbGl0Q29tcG9uZW50My5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMy5kZWZhdWx0O1xuZXhwb3J0cy5LZXlDb2RlID0gX2tleUNvZGUyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbnRhaW5zID0gX2NvbnRhaW5zMy5kZWZhdWx0O1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gX2FkZEV2ZW50TGlzdGVuZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmNzc0FuaW1hdGlvbiA9IF9jc3NBbmltYXRpb24zLmRlZmF1bHQ7XG5leHBvcnRzLnRvQXJyYXkgPSBfdG9BcnJheTMuZGVmYXVsdDtcbi8vZXhwb3J0IGdldENvbnRhaW5lclJlbmRlck1peGluIGZyb20gJy4vZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4nO1xuXG5leHBvcnRzLkFsaWduID0gX0FsaWduMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhbGw7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhbGwoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFByb3BUeXBlcygpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBlcnJvciA9IG51bGw7XG5cbiAgICB2YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cblxuICByZXR1cm4gKDAsIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIuZGVmYXVsdCkoYWxsUHJvcFR5cGVzKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyO1xuLyoqXHJcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcclxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXHJcbiAqL1xuXG4vLyBNb3N0bHkgdGFrZW4gZnJvbSBSZWFjdFByb3BUeXBlcy5cblxuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lU2FmZSArICdgIHdhcyBub3Qgc3BlY2lmaWVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYC4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDYgPyBfbGVuIC0gNiA6IDApLCBfa2V5ID0gNjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gNl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZVNhZmUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVTYWZlXS5jb25jYXQoYXJncykpO1xuICB9XG5cbiAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBSZWFjdEVsZW1lbnQgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LiBZb3UgY2FuIHVzdWFsbHkgb2J0YWluIGEgUmVhY3RDb21wb25lbnQgb3IgRE9NRWxlbWVudCAnICsgJ2Zyb20gYSBSZWFjdEVsZW1lbnQgYnkgYXR0YWNoaW5nIGEgcmVmIHRvIGl0LicpO1xuICB9XG5cbiAgaWYgKChwcm9wVHlwZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BWYWx1ZS5yZW5kZXIgIT09ICdmdW5jdGlvbicpICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LicpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKHZhbGlkYXRlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlcHJlY2F0ZWQ7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2FybmVkID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQodmFsaWRhdG9yLCByZWFzb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAhPSBudWxsKSB7XG4gICAgICB2YXIgbWVzc2FnZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBwcm9wTmFtZTtcblxuICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSh3YXJuZWRbbWVzc2FnZUtleV0sICdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCBvZiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWVTYWZlICsgJ2AgaXMgZGVwcmVjYXRlZC4gJyArIHJlYXNvbiArICcuJykpO1xuXG4gICAgICB3YXJuZWRbbWVzc2FnZUtleV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDUgPyBfbGVuIC0gNSA6IDApLCBfa2V5ID0gNTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gNV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVdLmNvbmNhdChhcmdzKSk7XG4gIH07XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5mdW5jdGlvbiBfcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufVxuXG5kZXByZWNhdGVkLl9yZXNldFdhcm5lZCA9IF9yZXNldFdhcm5lZDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9kZXByZWNhdGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93YXJuaW5nL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBDOi9Vc2Vycy8zODY2MC9BcHBEYXRhL1JvYW1pbmcvbnZtL3Y0LjUuMC9+L2JlZS10b29scy9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXInKTtcblxudmFyIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVsZW1lbnRUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwcm9wVmFsdWUpO1xuXG4gIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgUmVhY3RFbGVtZW50ICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBlbGVtZW50IHR5cGUgKGEgc3RyaW5nICcpICsgJ29yIGEgUmVhY3RDbGFzcykuJyk7XG4gIH1cblxuICBpZiAocHJvcFR5cGUgIT09ICdmdW5jdGlvbicgJiYgcHJvcFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gZWxlbWVudCB0eXBlIChhIHN0cmluZyAnKSArICdvciBhIFJlYWN0Q2xhc3MpLicpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGVsZW1lbnRUeXBlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNSZXF1aXJlZEZvckExMXk7XG5mdW5jdGlvbiBpc1JlcXVpcmVkRm9yQTExeSh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCBpcyByZXF1aXJlZCB0byBtYWtlICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBhY2Nlc3NpYmxlIGZvciB1c2VycyBvZiBhc3Npc3RpdmUgJykgKyAndGVjaG5vbG9naWVzIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9pc1JlcXVpcmVkRm9yQTExeS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzcGxpdENvbXBvbmVudFByb3BzO1xuLyoqXHJcbiAqIOWIhuWJsuimgeS8oOWFpeeItuWFg+e0oOWSjOWtkOWFg+e0oOeahHByb3BzXHJcbiAqIEBwYXJhbSAge1tvYmplY3RdfSBwcm9wcyAgICAg5Lyg5YWl55qE5bGe5oCnXHJcbiAqIEBwYXJhbSAge1tyZWFjdEVsZW1lbnRdfSBDb21wb25lbnQg57uE5Lu2XHJcbiAqIEByZXR1cm4ge1thcnJheV19ICAgICAgICAgICDov5Tlm57mlbDnu4TvvIznrKzkuIDkuKrlhYPntKDkuLrniLblhYPntKBwcm9wc+Wvueixoe+8jOesrOS6jOS4quWtkOWFg+e0oHByb3Bz5a+56LGhXHJcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb21wb25lbnRQcm9wcyhwcm9wcywgQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnRQcm9wVHlwZXMgPSBDb21wb25lbnQucHJvcFR5cGVzO1xuXG4gIHZhciBwYXJlbnRQcm9wcyA9IHt9O1xuICB2YXIgY2hpbGRQcm9wcyA9IHt9O1xuXG4gIE9iamVjdC5lbnRyaWVzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHByb3BOYW1lID0gX3JlZlswXSxcbiAgICAgICAgcHJvcFZhbHVlID0gX3JlZlsxXTtcblxuICAgIGlmIChjb21wb25lbnRQcm9wVHlwZXNbcHJvcE5hbWVdKSB7XG4gICAgICBwYXJlbnRQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkUHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtwYXJlbnRQcm9wcywgY2hpbGRQcm9wc107XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvc3BsaXRDb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYgIT0gbnVsbDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGYpIHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIG51bGwpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcclxuICogQGlnbm9yZVxyXG4gKiBzb21lIGtleS1jb2RlcyBkZWZpbml0aW9uIGFuZCB1dGlscyBmcm9tIGNsb3N1cmUtbGlicmFyeVxyXG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxyXG4gKi9cblxudmFyIEtleUNvZGUgPSB7XG4gIC8qKlxyXG4gICAqIE1BQ19FTlRFUlxyXG4gICAqL1xuICBNQUNfRU5URVI6IDMsXG4gIC8qKlxyXG4gICAqIEJBQ0tTUEFDRVxyXG4gICAqL1xuICBCQUNLU1BBQ0U6IDgsXG4gIC8qKlxyXG4gICAqIFRBQlxyXG4gICAqL1xuICBUQUI6IDksXG4gIC8qKlxyXG4gICAqIE5VTUxPQ0sgb24gRkYvU2FmYXJpIE1hY1xyXG4gICAqL1xuICBOVU1fQ0VOVEVSOiAxMiwgLy8gTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gIC8qKlxyXG4gICAqIEVOVEVSXHJcbiAgICovXG4gIEVOVEVSOiAxMyxcbiAgLyoqXHJcbiAgICogU0hJRlRcclxuICAgKi9cbiAgU0hJRlQ6IDE2LFxuICAvKipcclxuICAgKiBDVFJMXHJcbiAgICovXG4gIENUUkw6IDE3LFxuICAvKipcclxuICAgKiBBTFRcclxuICAgKi9cbiAgQUxUOiAxOCxcbiAgLyoqXHJcbiAgICogUEFVU0VcclxuICAgKi9cbiAgUEFVU0U6IDE5LFxuICAvKipcclxuICAgKiBDQVBTX0xPQ0tcclxuICAgKi9cbiAgQ0FQU19MT0NLOiAyMCxcbiAgLyoqXHJcbiAgICogRVNDXHJcbiAgICovXG4gIEVTQzogMjcsXG4gIC8qKlxyXG4gICAqIFNQQUNFXHJcbiAgICovXG4gIFNQQUNFOiAzMixcbiAgLyoqXHJcbiAgICogUEFHRV9VUFxyXG4gICAqL1xuICBQQUdFX1VQOiAzMywgLy8gYWxzbyBOVU1fTk9SVEhfRUFTVFxuICAvKipcclxuICAgKiBQQUdFX0RPV05cclxuICAgKi9cbiAgUEFHRV9ET1dOOiAzNCwgLy8gYWxzbyBOVU1fU09VVEhfRUFTVFxuICAvKipcclxuICAgKiBFTkRcclxuICAgKi9cbiAgRU5EOiAzNSwgLy8gYWxzbyBOVU1fU09VVEhfV0VTVFxuICAvKipcclxuICAgKiBIT01FXHJcbiAgICovXG4gIEhPTUU6IDM2LCAvLyBhbHNvIE5VTV9OT1JUSF9XRVNUXG4gIC8qKlxyXG4gICAqIExFRlRcclxuICAgKi9cbiAgTEVGVDogMzcsIC8vIGFsc28gTlVNX1dFU1RcbiAgLyoqXHJcbiAgICogVVBcclxuICAgKi9cbiAgVVA6IDM4LCAvLyBhbHNvIE5VTV9OT1JUSFxuICAvKipcclxuICAgKiBSSUdIVFxyXG4gICAqL1xuICBSSUdIVDogMzksIC8vIGFsc28gTlVNX0VBU1RcbiAgLyoqXHJcbiAgICogRE9XTlxyXG4gICAqL1xuICBET1dOOiA0MCwgLy8gYWxzbyBOVU1fU09VVEhcbiAgLyoqXHJcbiAgICogUFJJTlRfU0NSRUVOXHJcbiAgICovXG4gIFBSSU5UX1NDUkVFTjogNDQsXG4gIC8qKlxyXG4gICAqIElOU0VSVFxyXG4gICAqL1xuICBJTlNFUlQ6IDQ1LCAvLyBhbHNvIE5VTV9JTlNFUlRcbiAgLyoqXHJcbiAgICogREVMRVRFXHJcbiAgICovXG4gIERFTEVURTogNDYsIC8vIGFsc28gTlVNX0RFTEVURVxuICAvKipcclxuICAgKiBaRVJPXHJcbiAgICovXG4gIFpFUk86IDQ4LFxuICAvKipcclxuICAgKiBPTkVcclxuICAgKi9cbiAgT05FOiA0OSxcbiAgLyoqXHJcbiAgICogVFdPXHJcbiAgICovXG4gIFRXTzogNTAsXG4gIC8qKlxyXG4gICAqIFRIUkVFXHJcbiAgICovXG4gIFRIUkVFOiA1MSxcbiAgLyoqXHJcbiAgICogRk9VUlxyXG4gICAqL1xuICBGT1VSOiA1MixcbiAgLyoqXHJcbiAgICogRklWRVxyXG4gICAqL1xuICBGSVZFOiA1MyxcbiAgLyoqXHJcbiAgICogU0lYXHJcbiAgICovXG4gIFNJWDogNTQsXG4gIC8qKlxyXG4gICAqIFNFVkVOXHJcbiAgICovXG4gIFNFVkVOOiA1NSxcbiAgLyoqXHJcbiAgICogRUlHSFRcclxuICAgKi9cbiAgRUlHSFQ6IDU2LFxuICAvKipcclxuICAgKiBOSU5FXHJcbiAgICovXG4gIE5JTkU6IDU3LFxuICAvKipcclxuICAgKiBRVUVTVElPTl9NQVJLXHJcbiAgICovXG4gIFFVRVNUSU9OX01BUks6IDYzLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogQVxyXG4gICAqL1xuICBBOiA2NSxcbiAgLyoqXHJcbiAgICogQlxyXG4gICAqL1xuICBCOiA2NixcbiAgLyoqXHJcbiAgICogQ1xyXG4gICAqL1xuICBDOiA2NyxcbiAgLyoqXHJcbiAgICogRFxyXG4gICAqL1xuICBEOiA2OCxcbiAgLyoqXHJcbiAgICogRVxyXG4gICAqL1xuICBFOiA2OSxcbiAgLyoqXHJcbiAgICogRlxyXG4gICAqL1xuICBGOiA3MCxcbiAgLyoqXHJcbiAgICogR1xyXG4gICAqL1xuICBHOiA3MSxcbiAgLyoqXHJcbiAgICogSFxyXG4gICAqL1xuICBIOiA3MixcbiAgLyoqXHJcbiAgICogSVxyXG4gICAqL1xuICBJOiA3MyxcbiAgLyoqXHJcbiAgICogSlxyXG4gICAqL1xuICBKOiA3NCxcbiAgLyoqXHJcbiAgICogS1xyXG4gICAqL1xuICBLOiA3NSxcbiAgLyoqXHJcbiAgICogTFxyXG4gICAqL1xuICBMOiA3NixcbiAgLyoqXHJcbiAgICogTVxyXG4gICAqL1xuICBNOiA3NyxcbiAgLyoqXHJcbiAgICogTlxyXG4gICAqL1xuICBOOiA3OCxcbiAgLyoqXHJcbiAgICogT1xyXG4gICAqL1xuICBPOiA3OSxcbiAgLyoqXHJcbiAgICogUFxyXG4gICAqL1xuICBQOiA4MCxcbiAgLyoqXHJcbiAgICogUVxyXG4gICAqL1xuICBROiA4MSxcbiAgLyoqXHJcbiAgICogUlxyXG4gICAqL1xuICBSOiA4MixcbiAgLyoqXHJcbiAgICogU1xyXG4gICAqL1xuICBTOiA4MyxcbiAgLyoqXHJcbiAgICogVFxyXG4gICAqL1xuICBUOiA4NCxcbiAgLyoqXHJcbiAgICogVVxyXG4gICAqL1xuICBVOiA4NSxcbiAgLyoqXHJcbiAgICogVlxyXG4gICAqL1xuICBWOiA4NixcbiAgLyoqXHJcbiAgICogV1xyXG4gICAqL1xuICBXOiA4NyxcbiAgLyoqXHJcbiAgICogWFxyXG4gICAqL1xuICBYOiA4OCxcbiAgLyoqXHJcbiAgICogWVxyXG4gICAqL1xuICBZOiA4OSxcbiAgLyoqXHJcbiAgICogWlxyXG4gICAqL1xuICBaOiA5MCxcbiAgLyoqXHJcbiAgICogTUVUQVxyXG4gICAqL1xuICBNRVRBOiA5MSwgLy8gV0lOX0tFWV9MRUZUXG4gIC8qKlxyXG4gICAqIFdJTl9LRVlfUklHSFRcclxuICAgKi9cbiAgV0lOX0tFWV9SSUdIVDogOTIsXG4gIC8qKlxyXG4gICAqIENPTlRFWFRfTUVOVVxyXG4gICAqL1xuICBDT05URVhUX01FTlU6IDkzLFxuICAvKipcclxuICAgKiBOVU1fWkVST1xyXG4gICAqL1xuICBOVU1fWkVSTzogOTYsXG4gIC8qKlxyXG4gICAqIE5VTV9PTkVcclxuICAgKi9cbiAgTlVNX09ORTogOTcsXG4gIC8qKlxyXG4gICAqIE5VTV9UV09cclxuICAgKi9cbiAgTlVNX1RXTzogOTgsXG4gIC8qKlxyXG4gICAqIE5VTV9USFJFRVxyXG4gICAqL1xuICBOVU1fVEhSRUU6IDk5LFxuICAvKipcclxuICAgKiBOVU1fRk9VUlxyXG4gICAqL1xuICBOVU1fRk9VUjogMTAwLFxuICAvKipcclxuICAgKiBOVU1fRklWRVxyXG4gICAqL1xuICBOVU1fRklWRTogMTAxLFxuICAvKipcclxuICAgKiBOVU1fU0lYXHJcbiAgICovXG4gIE5VTV9TSVg6IDEwMixcbiAgLyoqXHJcbiAgICogTlVNX1NFVkVOXHJcbiAgICovXG4gIE5VTV9TRVZFTjogMTAzLFxuICAvKipcclxuICAgKiBOVU1fRUlHSFRcclxuICAgKi9cbiAgTlVNX0VJR0hUOiAxMDQsXG4gIC8qKlxyXG4gICAqIE5VTV9OSU5FXHJcbiAgICovXG4gIE5VTV9OSU5FOiAxMDUsXG4gIC8qKlxyXG4gICAqIE5VTV9NVUxUSVBMWVxyXG4gICAqL1xuICBOVU1fTVVMVElQTFk6IDEwNixcbiAgLyoqXHJcbiAgICogTlVNX1BMVVNcclxuICAgKi9cbiAgTlVNX1BMVVM6IDEwNyxcbiAgLyoqXHJcbiAgICogTlVNX01JTlVTXHJcbiAgICovXG4gIE5VTV9NSU5VUzogMTA5LFxuICAvKipcclxuICAgKiBOVU1fUEVSSU9EXHJcbiAgICovXG4gIE5VTV9QRVJJT0Q6IDExMCxcbiAgLyoqXHJcbiAgICogTlVNX0RJVklTSU9OXHJcbiAgICovXG4gIE5VTV9ESVZJU0lPTjogMTExLFxuICAvKipcclxuICAgKiBGMVxyXG4gICAqL1xuICBGMTogMTEyLFxuICAvKipcclxuICAgKiBGMlxyXG4gICAqL1xuICBGMjogMTEzLFxuICAvKipcclxuICAgKiBGM1xyXG4gICAqL1xuICBGMzogMTE0LFxuICAvKipcclxuICAgKiBGNFxyXG4gICAqL1xuICBGNDogMTE1LFxuICAvKipcclxuICAgKiBGNVxyXG4gICAqL1xuICBGNTogMTE2LFxuICAvKipcclxuICAgKiBGNlxyXG4gICAqL1xuICBGNjogMTE3LFxuICAvKipcclxuICAgKiBGN1xyXG4gICAqL1xuICBGNzogMTE4LFxuICAvKipcclxuICAgKiBGOFxyXG4gICAqL1xuICBGODogMTE5LFxuICAvKipcclxuICAgKiBGOVxyXG4gICAqL1xuICBGOTogMTIwLFxuICAvKipcclxuICAgKiBGMTBcclxuICAgKi9cbiAgRjEwOiAxMjEsXG4gIC8qKlxyXG4gICAqIEYxMVxyXG4gICAqL1xuICBGMTE6IDEyMixcbiAgLyoqXHJcbiAgICogRjEyXHJcbiAgICovXG4gIEYxMjogMTIzLFxuICAvKipcclxuICAgKiBOVU1MT0NLXHJcbiAgICovXG4gIE5VTUxPQ0s6IDE0NCxcbiAgLyoqXHJcbiAgICogU0VNSUNPTE9OXHJcbiAgICovXG4gIFNFTUlDT0xPTjogMTg2LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogREFTSFxyXG4gICAqL1xuICBEQVNIOiAxODksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcclxuICAgKiBFUVVBTFNcclxuICAgKi9cbiAgRVFVQUxTOiAxODcsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcclxuICAgKiBDT01NQVxyXG4gICAqL1xuICBDT01NQTogMTg4LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogUEVSSU9EXHJcbiAgICovXG4gIFBFUklPRDogMTkwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogU0xBU0hcclxuICAgKi9cbiAgU0xBU0g6IDE5MSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxyXG4gICAqIEFQT1NUUk9QSEVcclxuICAgKi9cbiAgQVBPU1RST1BIRTogMTkyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogU0lOR0xFX1FVT1RFXHJcbiAgICovXG4gIFNJTkdMRV9RVU9URTogMjIyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogT1BFTl9TUVVBUkVfQlJBQ0tFVFxyXG4gICAqL1xuICBPUEVOX1NRVUFSRV9CUkFDS0VUOiAyMTksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcclxuICAgKiBCQUNLU0xBU0hcclxuICAgKi9cbiAgQkFDS1NMQVNIOiAyMjAsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcclxuICAgKiBDTE9TRV9TUVVBUkVfQlJBQ0tFVFxyXG4gICAqL1xuICBDTE9TRV9TUVVBUkVfQlJBQ0tFVDogMjIxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXHJcbiAgICogV0lOX0tFWVxyXG4gICAqL1xuICBXSU5fS0VZOiAyMjQsXG4gIC8qKlxyXG4gICAqIE1BQ19GRl9NRVRBXHJcbiAgICovXG4gIE1BQ19GRl9NRVRBOiAyMjQsIC8vIEZpcmVmb3ggKEdlY2tvKSBmaXJlcyB0aGlzIGZvciB0aGUgbWV0YSBrZXkgaW5zdGVhZCBvZiA5MVxuICAvKipcclxuICAgKiBXSU5fSU1FXHJcbiAgICovXG4gIFdJTl9JTUU6IDIyOVxufTtcblxuLypcclxuIHdoZXRoZXIgdGV4dCBhbmQgbW9kaWZpZWQga2V5IGlzIGVudGVyZWQgYXQgdGhlIHNhbWUgdGltZS5cclxuICovXG5LZXlDb2RlLmlzVGV4dE1vZGlmeWluZ0tleUV2ZW50ID0gZnVuY3Rpb24gaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQoZSkge1xuICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgaWYgKGUuYWx0S2V5ICYmICFlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8XG4gIC8vIEZ1bmN0aW9uIGtleXMgZG9uJ3QgZ2VuZXJhdGUgdGV4dFxuICBrZXlDb2RlID49IEtleUNvZGUuRjEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLkYxMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRoZSBmb2xsb3dpbmcga2V5cyBhcmUgcXVpdGUgaGFybWxlc3MsIGV2ZW4gaW4gY29tYmluYXRpb24gd2l0aFxuICAvLyBDVFJMLCBBTFQgb3IgU0hJRlQuXG4gIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgS2V5Q29kZS5BTFQ6XG4gICAgY2FzZSBLZXlDb2RlLkNBUFNfTE9DSzpcbiAgICBjYXNlIEtleUNvZGUuQ09OVEVYVF9NRU5VOlxuICAgIGNhc2UgS2V5Q29kZS5DVFJMOlxuICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgIGNhc2UgS2V5Q29kZS5FTkQ6XG4gICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICBjYXNlIEtleUNvZGUuSE9NRTpcbiAgICBjYXNlIEtleUNvZGUuSU5TRVJUOlxuICAgIGNhc2UgS2V5Q29kZS5MRUZUOlxuICAgIGNhc2UgS2V5Q29kZS5NQUNfRkZfTUVUQTpcbiAgICBjYXNlIEtleUNvZGUuTUVUQTpcbiAgICBjYXNlIEtleUNvZGUuTlVNTE9DSzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX0NFTlRFUjpcbiAgICBjYXNlIEtleUNvZGUuUEFHRV9ET1dOOlxuICAgIGNhc2UgS2V5Q29kZS5QQUdFX1VQOlxuICAgIGNhc2UgS2V5Q29kZS5QQVVTRTpcbiAgICBjYXNlIEtleUNvZGUuUFJJTlRfU0NSRUVOOlxuICAgIGNhc2UgS2V5Q29kZS5SSUdIVDpcbiAgICBjYXNlIEtleUNvZGUuU0hJRlQ6XG4gICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZOlxuICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZX1JJR0hUOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLypcclxuIHdoZXRoZXIgY2hhcmFjdGVyIGlzIGVudGVyZWQuXHJcbiAqL1xuS2V5Q29kZS5pc0NoYXJhY3RlcktleSA9IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyS2V5KGtleUNvZGUpIHtcbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OSU5FKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLk5VTV9aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OVU1fTVVMVElQTFkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuQSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuWikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gU2FmYXJpIHNlbmRzIHplcm8ga2V5IGNvZGUgZm9yIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuICBpZiAod2luZG93Lm5hdmlnYXRpb24udXNlckFnZW50LmluZGV4T2YoJ1dlYktpdCcpICE9PSAtMSAmJiBrZXlDb2RlID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgY2FzZSBLZXlDb2RlLlFVRVNUSU9OX01BUks6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9QTFVTOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fTUlOVVM6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9QRVJJT0Q6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9ESVZJU0lPTjpcbiAgICBjYXNlIEtleUNvZGUuU0VNSUNPTE9OOlxuICAgIGNhc2UgS2V5Q29kZS5EQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5FUVVBTFM6XG4gICAgY2FzZSBLZXlDb2RlLkNPTU1BOlxuICAgIGNhc2UgS2V5Q29kZS5QRVJJT0Q6XG4gICAgY2FzZSBLZXlDb2RlLlNMQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5BUE9TVFJPUEhFOlxuICAgIGNhc2UgS2V5Q29kZS5TSU5HTEVfUVVPVEU6XG4gICAgY2FzZSBLZXlDb2RlLk9QRU5fU1FVQVJFX0JSQUNLRVQ6XG4gICAgY2FzZSBLZXlDb2RlLkJBQ0tTTEFTSDpcbiAgICBjYXNlIEtleUNvZGUuQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtleUNvZGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIva2V5Q29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjb250YWlucztcbmZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgdmFyIG5vZGUgPSBuO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb250YWlucy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkRXZlbnRMaXN0ZW5lcldyYXA7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2FkZC1kb20tZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZERvbUV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IpIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuICgwLCBfYWRkRG9tRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hZGRFdmVudExpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYWRkRXZlbnRMaXN0ZW5lcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0V2ZW50T2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudE9iamVjdCcpO1xuXG52YXIgX0V2ZW50T2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50T2JqZWN0KTtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gd3JhcENhbGxiYWNrKGUpIHtcbiAgICB2YXIgbmUgPSBuZXcgX0V2ZW50T2JqZWN0MlsnZGVmYXVsdCddKGUpO1xuICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCBuZSk7XG4gIH1cblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHdyYXBDYWxsYmFjaywgZmFsc2UpO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgIHRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIHdyYXBDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGlnbm9yZVxuICogZXZlbnQgb2JqZWN0IGZvciBkb21cbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0V2ZW50QmFzZU9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRCYXNlT2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50QmFzZU9iamVjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgVFJVRSA9IHRydWU7XG52YXIgRkFMU0UgPSBmYWxzZTtcbnZhciBjb21tb25Qcm9wcyA9IFsnYWx0S2V5JywgJ2J1YmJsZXMnLCAnY2FuY2VsYWJsZScsICdjdHJsS2V5JywgJ2N1cnJlbnRUYXJnZXQnLCAnZXZlbnRQaGFzZScsICdtZXRhS2V5JywgJ3NoaWZ0S2V5JywgJ3RhcmdldCcsICd0aW1lU3RhbXAnLCAndmlldycsICd0eXBlJ107XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHcpIHtcbiAgcmV0dXJuIHcgPT09IG51bGwgfHwgdyA9PT0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnROb3JtYWxpemVycyA9IFt7XG4gIHJlZzogL15rZXkvLFxuICBwcm9wczogWydjaGFyJywgJ2NoYXJDb2RlJywgJ2tleScsICdrZXlDb2RlJywgJ3doaWNoJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChldmVudC53aGljaCkpIHtcbiAgICAgIGV2ZW50LndoaWNoID0gIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNoYXJDb2RlKSA/IG5hdGl2ZUV2ZW50LmNoYXJDb2RlIDogbmF0aXZlRXZlbnQua2V5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWV0YUtleSB0byBub24tTWFjIGJyb3dzZXJzICh1c2UgY3RybCBmb3IgUEMgJ3MgYW5kIE1ldGEgZm9yIE1hY3MpXG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQubWV0YUtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL150b3VjaC8sXG4gIHByb3BzOiBbJ3RvdWNoZXMnLCAnY2hhbmdlZFRvdWNoZXMnLCAndGFyZ2V0VG91Y2hlcyddXG59LCB7XG4gIHJlZzogL15oYXNoY2hhbmdlJC8sXG4gIHByb3BzOiBbJ25ld1VSTCcsICdvbGRVUkwnXVxufSwge1xuICByZWc6IC9eZ2VzdHVyZWNoYW5nZSQvaSxcbiAgcHJvcHM6IFsncm90YXRpb24nLCAnc2NhbGUnXVxufSwge1xuICByZWc6IC9eKG1vdXNld2hlZWx8RE9NTW91c2VTY3JvbGwpJC8sXG4gIHByb3BzOiBbXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZGVsdGFZID0gdW5kZWZpbmVkO1xuICAgIHZhciBkZWx0YSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgd2hlZWxEZWx0YSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGE7XG4gICAgdmFyIGF4aXMgPSBuYXRpdmVFdmVudC5heGlzO1xuICAgIHZhciB3aGVlbERlbHRhWSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFZO1xuICAgIHZhciB3aGVlbERlbHRhWCA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFYO1xuICAgIHZhciBkZXRhaWwgPSBuYXRpdmVFdmVudC5kZXRhaWw7XG5cbiAgICAvLyBpZS93ZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSB3aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIGdlY2tvXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgLy8gcHJlc3MgY29udHJvbCBlLmRldGFpbCA9PSAxIGVsc2UgZS5kZXRhaWwgPT0gM1xuICAgICAgZGVsdGEgPSAwIC0gKGRldGFpbCAlIDMgPT09IDAgPyBkZXRhaWwgLyAzIDogZGV0YWlsKTtcbiAgICB9XG5cbiAgICAvLyBHZWNrb1xuICAgIGlmIChheGlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChheGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgZGVsdGFYID0gMCAtIGRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSBldmVudC5WRVJUSUNBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVkgPSB3aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKHdoZWVsRGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWCA9IC0xICogd2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8g6buY6K6kIGRlbHRhWSAoaWUpXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWCBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFYXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVggPSBkZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFZXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGEgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9ebW91c2V8Y29udGV4dG1lbnV8Y2xpY2t8bXNwb2ludGVyfCheRE9NTW91c2VTY3JvbGwkKS9pLFxuICBwcm9wczogWydidXR0b25zJywgJ2NsaWVudFgnLCAnY2xpZW50WScsICdidXR0b24nLCAnb2Zmc2V0WCcsICdyZWxhdGVkVGFyZ2V0JywgJ3doaWNoJywgJ2Zyb21FbGVtZW50JywgJ3RvRWxlbWVudCcsICdvZmZzZXRZJywgJ3BhZ2VYJywgJ3BhZ2VZJywgJ3NjcmVlblgnLCAnc2NyZWVuWSddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZXZlbnREb2MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRvYyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgYm9keSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBidXR0b24gPSBuYXRpdmVFdmVudC5idXR0b247XG5cbiAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgaWYgKHRhcmdldCAmJiBpc051bGxPclVuZGVmaW5lZChldmVudC5wYWdlWCkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNsaWVudFgpKSB7XG4gICAgICBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgYm9keSA9IGV2ZW50RG9jLmJvZHk7XG4gICAgICBldmVudC5wYWdlWCA9IG5hdGl2ZUV2ZW50LmNsaWVudFggKyAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50TGVmdCB8fCBib2R5ICYmIGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgIGV2ZW50LnBhZ2VZID0gbmF0aXZlRXZlbnQuY2xpZW50WSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMCk7XG4gICAgfVxuXG4gICAgLy8gd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG4gICAgLy8gZG8gbm90IHVzZSBidXR0b25cbiAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYnV0dG9uICYgMSkge1xuICAgICAgICBldmVudC53aGljaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDIpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAzO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVsYXRlZFRhcmdldCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LmZyb21FbGVtZW50KSB7XG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQuZnJvbUVsZW1lbnQgPT09IHRhcmdldCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIHJldFRydWUoKSB7XG4gIHJldHVybiBUUlVFO1xufVxuXG5mdW5jdGlvbiByZXRGYWxzZSgpIHtcbiAgcmV0dXJuIEZBTFNFO1xufVxuXG5mdW5jdGlvbiBEb21FdmVudE9iamVjdChuYXRpdmVFdmVudCkge1xuICB2YXIgdHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGU7XG5cbiAgdmFyIGlzTmF0aXZlID0gdHlwZW9mIG5hdGl2ZUV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF0aXZlRXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbic7XG5cbiAgX0V2ZW50QmFzZU9iamVjdDJbJ2RlZmF1bHQnXS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubmF0aXZlRXZlbnQgPSBuYXRpdmVFdmVudDtcblxuICAvLyBpbiBjYXNlIGRvbSBldmVudCBoYXMgYmVlbiBtYXJrIGFzIGRlZmF1bHQgcHJldmVudGVkIGJ5IGxvd2VyIGRvbSBub2RlXG4gIHZhciBpc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXRGYWxzZTtcbiAgaWYgKCdkZWZhdWx0UHJldmVudGVkJyBpbiBuYXRpdmVFdmVudCkge1xuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH0gZWxzZSBpZiAoJ2dldFByZXZlbnREZWZhdWx0JyBpbiBuYXRpdmVFdmVudCkge1xuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5MTE1MVxuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LmdldFByZXZlbnREZWZhdWx0KCkgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH0gZWxzZSBpZiAoJ3JldHVyblZhbHVlJyBpbiBuYXRpdmVFdmVudCkge1xuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LnJldHVyblZhbHVlID09PSBGQUxTRSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfVxuXG4gIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gaXNEZWZhdWx0UHJldmVudGVkO1xuXG4gIHZhciBmaXhGbnMgPSBbXTtcbiAgdmFyIGZpeEZuID0gdW5kZWZpbmVkO1xuICB2YXIgbCA9IHVuZGVmaW5lZDtcbiAgdmFyIHByb3AgPSB1bmRlZmluZWQ7XG4gIHZhciBwcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdCgpO1xuXG4gIGV2ZW50Tm9ybWFsaXplcnMuZm9yRWFjaChmdW5jdGlvbiAobm9ybWFsaXplcikge1xuICAgIGlmICh0eXBlLm1hdGNoKG5vcm1hbGl6ZXIucmVnKSkge1xuICAgICAgcHJvcHMgPSBwcm9wcy5jb25jYXQobm9ybWFsaXplci5wcm9wcyk7XG4gICAgICBpZiAobm9ybWFsaXplci5maXgpIHtcbiAgICAgICAgZml4Rm5zLnB1c2gobm9ybWFsaXplci5maXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbCA9IHByb3BzLmxlbmd0aDtcblxuICAvLyBjbG9uZSBwcm9wZXJ0aWVzIG9mIHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgd2hpbGUgKGwpIHtcbiAgICBwcm9wID0gcHJvcHNbLS1sXTtcbiAgICB0aGlzW3Byb3BdID0gbmF0aXZlRXZlbnRbcHJvcF07XG4gIH1cblxuICAvLyBmaXggdGFyZ2V0IHByb3BlcnR5LCBpZiBuZWNlc3NhcnlcbiAgaWYgKCF0aGlzLnRhcmdldCAmJiBpc05hdGl2ZSkge1xuICAgIHRoaXMudGFyZ2V0ID0gbmF0aXZlRXZlbnQuc3JjRWxlbWVudCB8fCBkb2N1bWVudDsgLy8gc3JjRWxlbWVudCBtaWdodCBub3QgYmUgZGVmaW5lZCBlaXRoZXJcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHRhcmdldCBpcyBhIHRleHQgbm9kZSAoc2FmYXJpKVxuICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQubm9kZVR5cGUgPT09IDMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0LnBhcmVudE5vZGU7XG4gIH1cblxuICBsID0gZml4Rm5zLmxlbmd0aDtcblxuICB3aGlsZSAobCkge1xuICAgIGZpeEZuID0gZml4Rm5zWy0tbF07XG4gICAgZml4Rm4odGhpcywgbmF0aXZlRXZlbnQpO1xuICB9XG5cbiAgdGhpcy50aW1lU3RhbXAgPSBuYXRpdmVFdmVudC50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcbn1cblxudmFyIEV2ZW50QmFzZU9iamVjdFByb3RvID0gX0V2ZW50QmFzZU9iamVjdDJbJ2RlZmF1bHQnXS5wcm90b3R5cGU7XG5cbigwLCBfb2JqZWN0QXNzaWduMlsnZGVmYXVsdCddKShEb21FdmVudE9iamVjdC5wcm90b3R5cGUsIEV2ZW50QmFzZU9iamVjdFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBEb21FdmVudE9iamVjdCxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgcHJldmVudERlZmF1bHQgZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gRkFMU0UgKElFKVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IEZBTFNFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgc3RvcFByb3BhZ2F0aW9uIGV4aXN0cyBydW4gaXQgb24gdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSBjYW5jZWxCdWJibGUgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIFRSVUUgKElFKVxuICAgICAgZS5jYW5jZWxCdWJibGUgPSBUUlVFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRG9tRXZlbnRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGlnbm9yZVxuICogYmFzZSBldmVudCBvYmplY3QgZm9yIGN1c3RvbSBhbmQgZG9tIGV2ZW50LlxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICAgIC8vIGZpeGVkIDEuMlxuICAgIC8vIGNhbGwgc3RvcFByb3BhZ2F0aW9uIGltcGxpY2l0bHlcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX0V2ZW50ID0gcmVxdWlyZSgnLi9FdmVudCcpO1xuXG52YXIgX0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50KTtcblxudmFyIF9jb21wb25lbnRDbGFzc2VzID0gcmVxdWlyZSgnY29tcG9uZW50LWNsYXNzZXMnKTtcblxudmFyIF9jb21wb25lbnRDbGFzc2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudENsYXNzZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBfRXZlbnQyLmRlZmF1bHQuZW5kRXZlbnRzLmxlbmd0aCAhPT0gMDtcblxuXG52YXIgY2FwaXRhbFByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLFxuLy8gbXMgaXMgc3BlY2lhbCAuLi4uICFcbidtcyddO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnbXMtJywgJyddO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KG5vZGUsIG5hbWUpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgdmFyIHJldCA9ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXhlc1tpXSArIG5hbWUpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpIHtcbiAgaWYgKGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkKSB7XG4gICAgdmFyIHRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kZWxheScpKSB8fCAwO1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kZWxheScpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIHRpbWUgPSBNYXRoLm1heCh0cmFuc2l0aW9uRHVyYXRpb24gKyB0cmFuc2l0aW9uRGVsYXksIGFuaW1hdGlvbkR1cmF0aW9uICsgYW5pbWF0aW9uRGVsYXkpO1xuICAgIC8vIHNvbWV0aW1lcywgYnJvd3NlciBidWdcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IG51bGw7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH0sIHRpbWUgKiAxMDAwICsgMjAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpIHtcbiAgaWYgKG5vZGUucmNFbmRBbmltVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChub2RlLnJjRW5kQW5pbVRpbWVvdXQpO1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IG51bGw7XG4gIH1cbn1cblxudmFyIGNzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGNzc0FuaW1hdGlvbihub2RlLCB0cmFuc2l0aW9uTmFtZSwgZW5kQ2FsbGJhY2spIHtcbiAgdmFyIG5hbWVJc09iaiA9ICh0eXBlb2YgdHJhbnNpdGlvbk5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRyYW5zaXRpb25OYW1lKSkgPT09ICdvYmplY3QnO1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWUubmFtZSA6IHRyYW5zaXRpb25OYW1lO1xuICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWUuYWN0aXZlIDogdHJhbnNpdGlvbk5hbWUgKyAnLWFjdGl2ZSc7XG4gIHZhciBlbmQgPSBlbmRDYWxsYmFjaztcbiAgdmFyIHN0YXJ0ID0gdm9pZCAwO1xuICB2YXIgYWN0aXZlID0gdm9pZCAwO1xuICB2YXIgbm9kZUNsYXNzZXMgPSAoMCwgX2NvbXBvbmVudENsYXNzZXMyLmRlZmF1bHQpKG5vZGUpO1xuXG4gIGlmIChlbmRDYWxsYmFjayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW5kQ2FsbGJhY2spID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGVuZCA9IGVuZENhbGxiYWNrLmVuZDtcbiAgICBzdGFydCA9IGVuZENhbGxiYWNrLnN0YXJ0O1xuICAgIGFjdGl2ZSA9IGVuZENhbGxiYWNrLmFjdGl2ZTtcbiAgfVxuXG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShjbGFzc05hbWUpO1xuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgX0V2ZW50Mi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGVuZCBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChlbmQpIHtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBfRXZlbnQyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIGlmIChzdGFydCkge1xuICAgIHN0YXJ0KCk7XG4gIH1cbiAgbm9kZUNsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBub2RlQ2xhc3Nlcy5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGFjdGl2ZSwgMCk7XG4gICAgfVxuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gICAgLy8gMzBtcyBmb3IgZmlyZWZveFxuICB9LCAzMCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jc3NBbmltYXRpb24uc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgc3R5bGUsIGNhbGxiYWNrKSB7XG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIF9FdmVudDIuZGVmYXVsdC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgX0V2ZW50Mi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzIGluIHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgbm9kZS5zdHlsZVtzXSA9IHN0eWxlW3NdO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gIH0sIDApO1xufTtcblxuY3NzQW5pbWF0aW9uLnNldFRyYW5zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgcCwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5ID0gcDtcbiAgdmFyIHYgPSB2YWx1ZTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2ID0gcHJvcGVydHk7XG4gICAgcHJvcGVydHkgPSAnJztcbiAgfVxuICBwcm9wZXJ0eSA9IHByb3BlcnR5IHx8ICcnO1xuICBjYXBpdGFsUHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgbm9kZS5zdHlsZVtwcmVmaXggKyAnVHJhbnNpdGlvbicgKyBwcm9wZXJ0eV0gPSB2O1xuICB9KTtcbn07XG5cbmNzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjc3NBbmltYXRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvY3NzQW5pbWF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25FdmVudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG50cnkge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG59IGNhdGNoIChlcnIpIHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnY29tcG9uZW50LWluZGV4b2YnKTtcbn1cblxuLyoqXG4gKiBXaGl0ZXNwYWNlIHJlZ2V4cC5cbiAqL1xuXG52YXIgcmUgPSAvXFxzKy87XG5cbi8qKlxuICogdG9TdHJpbmcgcmVmZXJlbmNlLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV3JhcCBgZWxgIGluIGEgYENsYXNzTGlzdGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKXtcbiAgcmV0dXJuIG5ldyBDbGFzc0xpc3QoZWwpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IENsYXNzTGlzdCBmb3IgYGVsYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBDbGFzc0xpc3QoZWwpIHtcbiAgaWYgKCFlbCB8fCAhZWwubm9kZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxpc3QgPSBlbC5jbGFzc0xpc3Q7XG59XG5cbi8qKlxuICogQWRkIGNsYXNzIGBuYW1lYCBpZiBub3QgYWxyZWFkeSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obmFtZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LmFkZChuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKCF+aSkgYXJyLnB1c2gobmFtZSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyBgbmFtZWAgd2hlbiBwcmVzZW50LCBvclxuICogcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZW1vdmVcbiAqIGFueSB3aGljaCBtYXRjaC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgaWYgKCdbb2JqZWN0IFJlZ0V4cF0nID09IHRvU3RyaW5nLmNhbGwobmFtZSkpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVNYXRjaGluZyhuYW1lKTtcbiAgfVxuXG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LnJlbW92ZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKH5pKSBhcnIuc3BsaWNlKGksIDEpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGNsYXNzZXMgbWF0Y2hpbmcgYHJlYC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlTWF0Y2hpbmcgPSBmdW5jdGlvbihyZSl7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlLnRlc3QoYXJyW2ldKSkge1xuICAgICAgdGhpcy5yZW1vdmUoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBjbGFzcyBgbmFtZWAsIGNhbiBmb3JjZSBzdGF0ZSB2aWEgYGZvcmNlYC5cbiAqXG4gKiBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGNsYXNzTGlzdCwgYnV0IGRvIG5vdCBzdXBwb3J0IGBmb3JjZWAgeWV0LFxuICogdGhlIG1pc3Rha2Ugd2lsbCBiZSBkZXRlY3RlZCBhbmQgY29ycmVjdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24obmFtZSwgZm9yY2Upe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICAgIGlmIChmb3JjZSAhPT0gdGhpcy5saXN0LnRvZ2dsZShuYW1lLCBmb3JjZSkpIHtcbiAgICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTsgLy8gdG9nZ2xlIGFnYWluIHRvIGNvcnJlY3RcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIGNsYXNzZXMuXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbigpe1xuICB2YXIgY2xhc3NOYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gIHZhciBzdHIgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB2YXIgYXJyID0gc3RyLnNwbGl0KHJlKTtcbiAgaWYgKCcnID09PSBhcnJbMF0pIGFyci5zaGlmdCgpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBjbGFzcyBgbmFtZWAgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmhhcyA9XG5DbGFzc0xpc3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiB0aGlzLmxpc3RcbiAgICA/IHRoaXMubGlzdC5jb250YWlucyhuYW1lKVxuICAgIDogISEgfmluZGV4KHRoaXMuYXJyYXkoKSwgbmFtZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvbXBvbmVudC1jbGFzc2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0b0FycmF5O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXQucHVzaChjKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvdG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfZG9tQWxpZ24gPSByZXF1aXJlKCdkb20tYWxpZ24nKTtcblxudmFyIF9kb21BbGlnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21BbGlnbik7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJy4vYWRkRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRXZlbnRMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vaW1wb3J0IGlzV2luZG93IGZyb20gJy4vaXNXaW5kb3cnO1xuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLyogZXNsaW50IG5vLWVxLW51bGw6IDAgKi9cbiAgLyogZXNsaW50IGVxZXFlcTogMCAqL1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlcihmbiwgbXMpIHtcbiAgdmFyIHRpbWVyID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJGbigpIHtcbiAgICBjbGVhcigpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmbiwgbXMpO1xuICB9XG5cbiAgYnVmZmVyRm4uY2xlYXIgPSBjbGVhcjtcblxuICByZXR1cm4gYnVmZmVyRm47XG59XG5cbnZhciBBbGlnbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGNoaWxkcmVuUHJvcHM6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGFsaWduOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRhcmdldDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQWxpZ246IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBtb25pdG9yQnVmZmVyVGltZTogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMuYW55XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldDogZnVuY3Rpb24gdGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgfSxcbiAgICAgIG9uQWxpZ246IGZ1bmN0aW9uIG9uQWxpZ24oKSB7fSxcblxuICAgICAgbW9uaXRvckJ1ZmZlclRpbWU6IDUwLFxuICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAvLyBpZiBwYXJlbnQgcmVmIG5vdCBhdHRhY2hlZCAuLi4uIHVzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxuICAgIHRoaXMuZm9yY2VBbGlnbigpO1xuICAgIGlmICghcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciByZUFsaWduID0gZmFsc2U7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMuZGlzYWJsZWQgfHwgcHJldlByb3BzLmFsaWduICE9PSBwcm9wcy5hbGlnbikge1xuICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsYXN0VGFyZ2V0ID0gcHJldlByb3BzLnRhcmdldCgpO1xuICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IHByb3BzLnRhcmdldCgpO1xuICAgICAgICBpZiAoaXNXaW5kb3cobGFzdFRhcmdldCkgJiYgaXNXaW5kb3coY3VycmVudFRhcmdldCkpIHtcbiAgICAgICAgICByZUFsaWduID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdFRhcmdldCAhPT0gY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJlQWxpZ24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlQWxpZ24pIHtcbiAgICAgIHRoaXMuZm9yY2VBbGlnbigpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5tb25pdG9yV2luZG93UmVzaXplICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgfSxcbiAgc3RhcnRNb25pdG9yV2luZG93UmVzaXplOiBmdW5jdGlvbiBzdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyTW9uaXRvciA9IGJ1ZmZlcih0aGlzLmZvcmNlQWxpZ24sIHRoaXMucHJvcHMubW9uaXRvckJ1ZmZlclRpbWUpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMi5kZWZhdWx0KSh3aW5kb3csICdyZXNpemUnLCB0aGlzLmJ1ZmZlck1vbml0b3IpO1xuICAgIH1cbiAgfSxcbiAgc3RvcE1vbml0b3JXaW5kb3dSZXNpemU6IGZ1bmN0aW9uIHN0b3BNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyTW9uaXRvci5jbGVhcigpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGZvcmNlQWxpZ246IGZ1bmN0aW9uIGZvcmNlQWxpZ24oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICB2YXIgc291cmNlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgcHJvcHMub25BbGlnbihzb3VyY2UsICgwLCBfZG9tQWxpZ24yLmRlZmF1bHQpKHNvdXJjZSwgcHJvcHMudGFyZ2V0KCksIHByb3BzLmFsaWduKSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW5Qcm9wcyA9IF9wcm9wcy5jaGlsZHJlblByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGRyZW5Qcm9wcykge1xuICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICBmb3IgKHZhciBwcm9wIGluIGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBuZXdQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbY2hpbGRyZW5Qcm9wc1twcm9wXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdQcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFsaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL0FsaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudCA9IHJlcXVpcmUoJy4vZ2V0T2Zmc2V0UGFyZW50Jyk7XG5cbnZhciBfZ2V0T2Zmc2V0UGFyZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE9mZnNldFBhcmVudCk7XG5cbnZhciBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50ID0gcmVxdWlyZSgnLi9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQnKTtcblxudmFyIF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KTtcblxudmFyIF9hZGp1c3RGb3JWaWV3cG9ydCA9IHJlcXVpcmUoJy4vYWRqdXN0Rm9yVmlld3BvcnQnKTtcblxudmFyIF9hZGp1c3RGb3JWaWV3cG9ydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGp1c3RGb3JWaWV3cG9ydCk7XG5cbnZhciBfZ2V0UmVnaW9uID0gcmVxdWlyZSgnLi9nZXRSZWdpb24nKTtcblxudmFyIF9nZXRSZWdpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UmVnaW9uKTtcblxudmFyIF9nZXRFbEZ1dHVyZVBvcyA9IHJlcXVpcmUoJy4vZ2V0RWxGdXR1cmVQb3MnKTtcblxudmFyIF9nZXRFbEZ1dHVyZVBvczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRFbEZ1dHVyZVBvcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBodHRwOi8veWltaW5naGUuaXRleWUuY29tL2Jsb2cvMTEyNDcyMFxuXG4vKipcbiAqIGFsaWduIGRvbSBub2RlIGZsZXhpYmx5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbmZ1bmN0aW9uIGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wIDwgdmlzaWJsZVJlY3QudG9wIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPiB2aXNpYmxlUmVjdC5yaWdodCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPCB2aXNpYmxlUmVjdC5sZWZ0O1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wID4gdmlzaWJsZVJlY3QuYm90dG9tIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA8IHZpc2libGVSZWN0LnRvcDtcbn1cblxuZnVuY3Rpb24gZmxpcChwb2ludHMsIHJlZywgbWFwKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgX3V0aWxzMltcImRlZmF1bHRcIl0uZWFjaChwb2ludHMsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0LnB1c2gocC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtYXBbbV07XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmxpcE9mZnNldChvZmZzZXQsIGluZGV4KSB7XG4gIG9mZnNldFtpbmRleF0gPSAtb2Zmc2V0W2luZGV4XTtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldChzdHIsIG9mZnNldExlbikge1xuICB2YXIgbiA9IHZvaWQgMDtcbiAgaWYgKC8lJC8udGVzdChzdHIpKSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpLCAxMCkgLyAxMDAgKiBvZmZzZXRMZW47XG4gIH0gZWxzZSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ciwgMTApO1xuICB9XG4gIHJldHVybiBuIHx8IDA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsKSB7XG4gIG9mZnNldFswXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzBdLCBlbC53aWR0aCk7XG4gIG9mZnNldFsxXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzFdLCBlbC5oZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBkb21BbGlnbihlbCwgcmVmTm9kZSwgYWxpZ24pIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gIHZhciB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgb3ZlcmZsb3cgPSBhbGlnbi5vdmVyZmxvdztcbiAgdmFyIHRhcmdldCA9IGFsaWduLnRhcmdldCB8fCByZWZOb2RlO1xuICB2YXIgc291cmNlID0gYWxpZ24uc291cmNlIHx8IGVsO1xuICBvZmZzZXQgPSBbXS5jb25jYXQob2Zmc2V0KTtcbiAgdGFyZ2V0T2Zmc2V0ID0gW10uY29uY2F0KHRhcmdldE9mZnNldCk7XG4gIG92ZXJmbG93ID0gb3ZlcmZsb3cgfHwge307XG4gIHZhciBuZXdPdmVyZmxvd0NmZyA9IHt9O1xuXG4gIHZhciBmYWlsID0gMDtcbiAgLy8g5b2T5YmN6IqC54K55Y+v5Lul6KKr5pS+572u55qE5pi+56S65Yy65Z+fXG4gIHZhciB2aXNpYmxlUmVjdCA9ICgwLCBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50MltcImRlZmF1bHRcIl0pKHNvdXJjZSk7XG4gIC8vIOW9k+WJjeiKgueCueaJgOWNoOeahOWMuuWfnywgbGVmdC90b3Avd2lkdGgvaGVpZ2h0XG4gIHZhciBlbFJlZ2lvbiA9ICgwLCBfZ2V0UmVnaW9uMltcImRlZmF1bHRcIl0pKHNvdXJjZSk7XG4gIC8vIOWPgueFp+iKgueCueaJgOWNoOeahOWMuuWfnywgbGVmdC90b3Avd2lkdGgvaGVpZ2h0XG4gIHZhciByZWZOb2RlUmVnaW9uID0gKDAsIF9nZXRSZWdpb24yW1wiZGVmYXVsdFwiXSkodGFyZ2V0KTtcbiAgLy8g5bCGIG9mZnNldCDovazmjaLmiJDmlbDlgLzvvIzmlK/mjIHnmb7liIbmr5RcbiAgbm9ybWFsaXplT2Zmc2V0KG9mZnNldCwgZWxSZWdpb24pO1xuICBub3JtYWxpemVPZmZzZXQodGFyZ2V0T2Zmc2V0LCByZWZOb2RlUmVnaW9uKTtcbiAgLy8g5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG4gIHZhciBlbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAvLyDlvZPliY3oioLngrnlsIbopoHmiYDlpITnmoTljLrln59cbiAgdmFyIG5ld0VsUmVnaW9uID0gX3V0aWxzMltcImRlZmF1bHRcIl0ubWVyZ2UoZWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcblxuICAvLyDlpoLmnpzlj6/op4bljLrln5/kuI3og73lrozlhajmlL7nva7lvZPliY3oioLngrnml7blhYHorrjosIPmlbRcbiAgaWYgKHZpc2libGVSZWN0ICYmIChvdmVyZmxvdy5hZGp1c3RYIHx8IG92ZXJmbG93LmFkanVzdFkpKSB7XG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFgpIHtcbiAgICAgIC8vIOWmguaenOaoquWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1tscl0vaWcsIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlgY/np7vph4/kuZ/lj43kuItcbiAgICAgICAgdmFyIG5ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAwKTtcbiAgICAgICAgdmFyIG5ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAwKTtcbiAgICAgICAgdmFyIG5ld0VsRnV0dXJlUG9zID0gKDAsIF9nZXRFbEZ1dHVyZVBvczJbXCJkZWZhdWx0XCJdKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgbmV3UG9pbnRzLCBuZXdPZmZzZXQsIG5ld1RhcmdldE9mZnNldCk7XG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxYKG5ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IG5ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBuZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WSkge1xuICAgICAgLy8g5aaC5p6c57q15ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIF9uZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1t0Yl0vaWcsIHtcbiAgICAgICAgICB0OiAnYicsXG4gICAgICAgICAgYjogJ3QnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlgY/np7vph4/kuZ/lj43kuItcbiAgICAgICAgdmFyIF9uZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMSk7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDEpO1xuICAgICAgICB2YXIgX25ld0VsRnV0dXJlUG9zID0gKDAsIF9nZXRFbEZ1dHVyZVBvczJbXCJkZWZhdWx0XCJdKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgX25ld1BvaW50cywgX25ld09mZnNldCwgX25ld1RhcmdldE9mZnNldCk7XG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxZKF9uZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IF9uZXdQb2ludHM7XG4gICAgICAgICAgb2Zmc2V0ID0gX25ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBfbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c5aSx6LSl77yM6YeN5paw6K6h566X5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG4gICAgaWYgKGZhaWwpIHtcbiAgICAgIGVsRnV0dXJlUG9zID0gKDAsIF9nZXRFbEZ1dHVyZVBvczJbXCJkZWZhdWx0XCJdKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7XG4gICAgICBfdXRpbHMyW1wiZGVmYXVsdFwiXS5taXgobmV3RWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6Xlj43kuIvlkI7nmoTkvY3nva7mmK/lkKblj6/ku6XmlL7kuIvkuoZcbiAgICAvLyDlpoLmnpzku43nhLbmlL7kuI3kuIvlj6rmnInmjIflrprkuoblj6/ku6XosIPmlbTlvZPliY3mlrnlkJHmiY3osIPmlbRcbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RYID0gb3ZlcmZsb3cuYWRqdXN0WCAmJiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpO1xuXG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSA9IG92ZXJmbG93LmFkanVzdFkgJiYgaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcblxuICAgIC8vIOehruWunuimgeiwg+aVtO+8jOeUmuiHs+WPr+iDveS8muiwg+aVtOmrmOW6puWuveW6plxuICAgIGlmIChuZXdPdmVyZmxvd0NmZy5hZGp1c3RYIHx8IG5ld092ZXJmbG93Q2ZnLmFkanVzdFkpIHtcbiAgICAgIG5ld0VsUmVnaW9uID0gKDAsIF9hZGp1c3RGb3JWaWV3cG9ydDJbXCJkZWZhdWx0XCJdKShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBuZXdPdmVyZmxvd0NmZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gbmVlZCBqdWRnZSB0byBpbiBjYXNlIHNldCBmaXhlZCB3aXRoIGluIGNzcyBvbiBoZWlnaHQgYXV0byBlbGVtZW50XG4gIGlmIChuZXdFbFJlZ2lvbi53aWR0aCAhPT0gZWxSZWdpb24ud2lkdGgpIHtcbiAgICBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jc3Moc291cmNlLCAnd2lkdGgnLCBfdXRpbHMyW1wiZGVmYXVsdFwiXS53aWR0aChzb3VyY2UpICsgbmV3RWxSZWdpb24ud2lkdGggLSBlbFJlZ2lvbi53aWR0aCk7XG4gIH1cblxuICBpZiAobmV3RWxSZWdpb24uaGVpZ2h0ICE9PSBlbFJlZ2lvbi5oZWlnaHQpIHtcbiAgICBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jc3Moc291cmNlLCAnaGVpZ2h0JywgX3V0aWxzMltcImRlZmF1bHRcIl0uaGVpZ2h0KHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi5oZWlnaHQgLSBlbFJlZ2lvbi5oZWlnaHQpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTkwXG4gIC8vIOebuOWvueS6juWxj+W5leS9jee9ruayoeWPmO+8jOiAjCBsZWZ0L3RvcCDlj5jkuoZcbiAgLy8g5L6L5aaCIDxkaXYgJ3JlbGF0aXZlJz48ZWwgYWJzb2x1dGU+PC9kaXY+XG4gIF91dGlsczJbXCJkZWZhdWx0XCJdLm9mZnNldChzb3VyY2UsIHtcbiAgICBsZWZ0OiBuZXdFbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogbmV3RWxSZWdpb24udG9wXG4gIH0sIHtcbiAgICB1c2VDc3NSaWdodDogYWxpZ24udXNlQ3NzUmlnaHQsXG4gICAgdXNlQ3NzQm90dG9tOiBhbGlnbi51c2VDc3NCb3R0b20sXG4gICAgdXNlQ3NzVHJhbnNmb3JtOiBhbGlnbi51c2VDc3NUcmFuc2Zvcm1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb2ludHM6IHBvaW50cyxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldCxcbiAgICBvdmVyZmxvdzogbmV3T3ZlcmZsb3dDZmdcbiAgfTtcbn1cblxuZG9tQWxpZ24uX19nZXRPZmZzZXRQYXJlbnQgPSBfZ2V0T2Zmc2V0UGFyZW50MltcImRlZmF1bHRcIl07XG5cbmRvbUFsaWduLl9fZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50ID0gX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudDJbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGRvbUFsaWduO1xuLyoqXG4gKiAgMjAxMi0wNC0yNiB5aW1pbmdoZUBnbWFpbC5jb21cbiAqICAgLSDkvJjljJbmmbrog73lr7npvZDnrpfms5VcbiAqICAgLSDmhY7nlKggcmVzaXplWFhcbiAqXG4gKiAgMjAxMS0wNy0xMyB5aW1pbmdoZUBnbWFpbC5jb20gbm90ZTpcbiAqICAgLSDlop7liqDmmbrog73lr7npvZDvvIzku6Xlj4rlpKflsI/osIPmlbTpgInpoblcbiAqKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcHJvcGVydHlVdGlscyA9IHJlcXVpcmUoJy4vcHJvcGVydHlVdGlscycpO1xuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcblxudmFyIGdldENvbXB1dGVkU3R5bGVYID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBmb3JjZSh4LCB5KSB7XG4gIHJldHVybiB4ICsgeTtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG4gIGlmICgodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSArICdweCc7XG4gICAgfVxuICAgIGVsLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWwsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3NpdGlvbihlbGVtKSB7XG4gIHZhciBib3ggPSB2b2lkIDA7XG4gIHZhciB4ID0gdm9pZCAwO1xuICB2YXIgeSA9IHZvaWQgMDtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgLy8g5qC55o2uIEdCUyDmnIDmlrDmlbDmja7vvIxBLUdyYWRlIEJyb3dzZXJzIOmDveW3suaUr+aMgSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qg5pa55rOV77yM5LiN55So5YaN6ICD6JmR5Lyg57uf55qE5a6e546w5pa55byPXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8g5rOo77yaalF1ZXJ5IOi/mOiAg+iZkeWHj+WOuyBkb2NFbGVtLmNsaWVudExlZnQvY2xpZW50VG9wXG4gIC8vIOS9hua1i+ivleWPkeeOsO+8jOi/meagt+WPjeiAjOS8muWvvOiHtOW9kyBodG1sIOWSjCBib2R5IOaciei+uei3nS/ovrnmoYbmoLflvI/ml7bvvIzojrflj5bnmoTlgLzkuI3mraPnoa5cbiAgLy8g5q2k5aSW77yMaWU2IOS8muW/veeVpSBodG1sIOeahCBtYXJnaW4g5YC877yM5bm46L+Q5Zyw5piv5rKh5pyJ6LCB5Lya5Y676K6+572uIGh0bWwg55qEIG1hcmdpblxuXG4gIHggPSBib3gubGVmdDtcbiAgeSA9IGJveC50b3A7XG5cbiAgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG5cbiAgLy8gaWUg5LiL5bqU6K+l5YeP5Y6756qX5Y+j55qE6L655qGG5ZCn77yM5q+V56uf6buY6K6kIGFic29sdXRlIOmDveaYr+ebuOWvueeql+WPo+WumuS9jeeahFxuICAvLyDnqpflj6PovrnmoYbmoIflh4bmmK/orr4gZG9jdW1lbnRFbGVtZW50ICxxdWlya3Mg5pe26K6+572uIGJvZHlcbiAgLy8g5pyA5aW956aB5q2i5ZyoIGJvZHkg5ZKMIGh0bWwg5LiK6L655qGGIO+8jOS9hiBpZSA8IDkgaHRtbCDpu5jorqTmnIkgMnB4IO+8jOWHj+WOu1xuICAvLyDkvYbmmK/pnZ4gaWUg5LiN5Y+v6IO96K6+572u56qX5Y+j6L655qGG77yMYm9keSBodG1sIOS5n+S4jeaYr+eql+WPoyAsaWUg5Y+v5Lul6YCa6L+HIGh0bWwsYm9keSDorr7nva5cbiAgLy8g5qCH5YeGIGllIOS4iyBkb2NFbGVtLmNsaWVudFRvcCDlsLHmmK8gYm9yZGVyLXRvcFxuICAvLyBpZTcgaHRtbCDljbPnqpflj6PovrnmoYbmlLnlj5jkuI3kuobjgILmsLjov5zkuLogMlxuICAvLyDkvYbmoIflh4YgZmlyZWZveC9jaHJvbWUvaWU5IOS4iyBkb2NFbGVtLmNsaWVudFRvcCDmmK/nqpflj6PovrnmoYbvvIzljbPkvb/orr7kuoYgYm9yZGVyLXRvcCDkuZ/kuLogMFxuXG4gIHggLT0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICB5IC09IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjcykge1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNzO1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZWxlbS5vd25lckRvY3VtZW50O1xuICBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZSB8fCBkLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvNjFcbiAgaWYgKGNvbXB1dGVkU3R5bGUpIHtcbiAgICB2YWwgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgY29tcHV0ZWRTdHlsZVtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBfUkVfTlVNX05PX1BYID0gbmV3IFJlZ0V4cCgnXignICsgUkVfTlVNICsgJykoPyFweClbYS16JV0rJCcsICdpJyk7XG52YXIgUkVfUE9TID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIENVUlJFTlRfU1RZTEUgPSAnY3VycmVudFN0eWxlJztcbnZhciBSVU5USU1FX1NUWUxFID0gJ3J1bnRpbWVTdHlsZSc7XG52YXIgTEVGVCA9ICdsZWZ0JztcbnZhciBQWCA9ICdweCc7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlSUUoZWxlbSwgbmFtZSkge1xuICAvLyBjdXJyZW50U3R5bGUgbWF5YmUgbnVsbFxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzUyMzEuYXNweFxuICB2YXIgcmV0ID0gZWxlbVtDVVJSRU5UX1NUWUxFXSAmJiBlbGVtW0NVUlJFTlRfU1RZTEVdW25hbWVdO1xuXG4gIC8vIOW9kyB3aWR0aC9oZWlnaHQg6K6+572u5Li655m+5YiG5q+U5pe277yM6YCa6L+HIHBpeGVsTGVmdCDmlrnlvI/ovazmjaLnmoQgd2lkdGgvaGVpZ2h0IOWAvFxuICAvLyDkuIDlvIDlp4vlsLHlpITnkIbkuoYhIENVU1RPTV9TVFlMRS5oZWlnaHQsQ1VTVE9NX1NUWUxFLndpZHRoICxjc3NIb29rIOino+WGs0AyMDExLTA4LTE5XG4gIC8vIOWcqCBpZSDkuIvkuI3lr7nvvIzpnIDopoHnm7TmjqXnlKggb2Zmc2V0IOaWueW8j1xuICAvLyBib3JkZXJXaWR0aCDnrYnlgLzkuZ/mnInpl67popjvvIzkvYbogIPomZHliLAgYm9yZGVyV2lkdGgg6K6+5Li655m+5YiG5q+U55qE5qaC546H5b6I5bCP77yM6L+Z6YeM5bCx5LiN6ICD6JmR5LqGXG5cbiAgLy8gRnJvbSB0aGUgYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1xuICAvLyBodHRwOi8vZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDcvMDcvMjcvMTguNTQuMTUvI2NvbW1lbnQtMTAyMjkxXG4gIC8vIElmIHdlJ3JlIG5vdCBkZWFsaW5nIHdpdGggYSByZWd1bGFyIHBpeGVsIG51bWJlclxuICAvLyBidXQgYSBudW1iZXIgdGhhdCBoYXMgYSB3ZWlyZCBlbmRpbmcsIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBwaXhlbHNcbiAgLy8gZXhjbHVkZSBsZWZ0IHJpZ2h0IGZvciByZWxhdGl2aXR5XG4gIGlmIChfUkVfTlVNX05PX1BYLnRlc3QocmV0KSAmJiAhUkVfUE9TLnRlc3QobmFtZSkpIHtcbiAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgICB2YXIgbGVmdCA9IHN0eWxlW0xFRlRdO1xuICAgIHZhciByc0xlZnQgPSBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gcHJldmVudCBmbGFzaGluZyBvZiBjb250ZW50XG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IGVsZW1bQ1VSUkVOVF9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG4gICAgc3R5bGVbTEVGVF0gPSBuYW1lID09PSAnZm9udFNpemUnID8gJzFlbScgOiByZXQgfHwgMDtcbiAgICByZXQgPSBzdHlsZS5waXhlbExlZnQgKyBQWDtcblxuICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICBzdHlsZVtMRUZUXSA9IGxlZnQ7XG5cbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gcnNMZWZ0O1xuICB9XG4gIHJldHVybiByZXQgPT09ICcnID8gJ2F1dG8nIDogcmV0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2V0Q29tcHV0ZWRTdHlsZVggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IF9nZXRDb21wdXRlZFN0eWxlIDogX2dldENvbXB1dGVkU3R5bGVJRTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0RGlyZWN0aW9uKGRpciwgb3B0aW9uKSB7XG4gIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiBvcHRpb24udXNlQ3NzUmlnaHQgPyAncmlnaHQnIDogZGlyO1xuICB9XG4gIHJldHVybiBvcHRpb24udXNlQ3NzQm90dG9tID8gJ2JvdHRvbScgOiBkaXI7XG59XG5cbmZ1bmN0aW9uIG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGRpcikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ3JpZ2h0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICByZXR1cm4gJ2xlZnQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAnYm90dG9tJykge1xuICAgIHJldHVybiAndG9wJztcbiAgfVxufVxuXG4vLyDorr7nva4gZWxlbSDnm7jlr7kgZWxlbS5vd25lckRvY3VtZW50IOeahOWdkOagh1xuZnVuY3Rpb24gc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICAvLyBzZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG4gIGlmIChjc3MoZWxlbSwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIH1cbiAgdmFyIHByZXNldEggPSAtOTk5O1xuICB2YXIgcHJlc2V0ViA9IC05OTk7XG4gIHZhciBob3Jpem9udGFsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ2xlZnQnLCBvcHRpb24pO1xuICB2YXIgdmVydGljYWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbigndG9wJywgb3B0aW9uKTtcbiAgdmFyIG9wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oaG9yaXpvbnRhbFByb3BlcnR5KTtcbiAgdmFyIG9wcG9zaXRlVmVydGljYWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKHZlcnRpY2FsUHJvcGVydHkpO1xuXG4gIGlmIChob3Jpem9udGFsUHJvcGVydHkgIT09ICdsZWZ0Jykge1xuICAgIHByZXNldEggPSA5OTk7XG4gIH1cblxuICBpZiAodmVydGljYWxQcm9wZXJ0eSAhPT0gJ3RvcCcpIHtcbiAgICBwcmVzZXRWID0gOTk5O1xuICB9XG4gIHZhciBvcmlnaW5hbFRyYW5zaXRpb24gPSAnJztcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBvcmlnaW5hbFRyYW5zaXRpb24gPSAoMCwgX3Byb3BlcnR5VXRpbHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5KShlbGVtKSB8fCAnJztcbiAgICAoMCwgX3Byb3BlcnR5VXRpbHMuc2V0VHJhbnNpdGlvblByb3BlcnR5KShlbGVtLCAnbm9uZScpO1xuICB9XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW2hvcml6b250YWxQcm9wZXJ0eV0gPSBwcmVzZXRIICsgJ3B4JztcbiAgfVxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IHByZXNldFYgKyAncHgnO1xuICB9XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIHByZXNldCA9IGtleSA9PT0gJ2xlZnQnID8gcHJlc2V0SCA6IHByZXNldFY7XG4gICAgICB2YXIgb2ZmID0gb3JpZ2luYWxPZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuICAgICAgaWYgKGRpciA9PT0ga2V5KSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCArIG9mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCAtIG9mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpO1xuICAvLyBmb3JjZSByZWxheW91dFxuICBmb3JjZShlbGVtLm9mZnNldFRvcCwgZWxlbS5vZmZzZXRMZWZ0KTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgKDAsIF9wcm9wZXJ0eVV0aWxzLnNldFRyYW5zaXRpb25Qcm9wZXJ0eSkoZWxlbSwgb3JpZ2luYWxUcmFuc2l0aW9uKTtcbiAgfVxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIF9rZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgdmFyIF9kaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oX2tleSwgb3B0aW9uKTtcbiAgICAgIHZhciBfb2ZmID0gb2Zmc2V0W19rZXldIC0gb3JpZ2luYWxPZmZzZXRbX2tleV07XG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCkge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFhZID0gKDAsIF9wcm9wZXJ0eVV0aWxzLmdldFRyYW5zZm9ybVhZKShlbGVtKTtcbiAgdmFyIHJlc3VsdFhZID0geyB4OiBvcmlnaW5hbFhZLngsIHk6IG9yaWdpbmFsWFkueSB9O1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnggPSBvcmlnaW5hbFhZLnggKyBvZmZzZXQubGVmdCAtIG9yaWdpbmFsT2Zmc2V0LmxlZnQ7XG4gIH1cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIHJlc3VsdFhZLnkgPSBvcmlnaW5hbFhZLnkgKyBvZmZzZXQudG9wIC0gb3JpZ2luYWxPZmZzZXQudG9wO1xuICB9XG4gICgwLCBfcHJvcGVydHlVdGlscy5zZXRUcmFuc2Zvcm1YWSkoZWxlbSwgcmVzdWx0WFkpO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXQoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgaWYgKG9wdGlvbi51c2VDc3NSaWdodCB8fCBvcHRpb24udXNlQ3NzQm90dG9tKSB7XG4gICAgc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH0gZWxzZSBpZiAob3B0aW9uLnVzZUNzc1RyYW5zZm9ybSAmJiAoMCwgX3Byb3BlcnR5VXRpbHMuZ2V0VHJhbnNmb3JtTmFtZSkoKSBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKSB7XG4gICAgc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7XG5cbiAgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3AgPSB2b2lkIDA7XG4gIHZhciBqID0gdm9pZCAwO1xuICB2YXIgaSA9IHZvaWQgMDtcbiAgZm9yIChqID0gMDsgaiA8IHByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB2b2lkIDA7XG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSAnJyArIHByb3AgKyB3aGljaFtpXSArICdXaWR0aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIGNzc1Byb3ApKSB8fCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQSBjcnVkZSB3YXkgb2YgZGV0ZXJtaW5pbmcgaWYgYW4gb2JqZWN0IGlzIGEgd2luZG93XG4gKiBAbWVtYmVyIHV0aWxcbiAqL1xuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8vIG11c3QgdXNlID09IGZvciBpZThcbiAgLyogZXNsaW50IGVxZXFlcTowICovXG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbnZhciBkb21VdGlscyA9IHt9O1xuXG5lYWNoKFsnV2lkdGgnLCAnSGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRvbVV0aWxzWydkb2MnICsgbmFtZV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC8vIGZpcmVmb3ggY2hyb21lIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ8IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgLy8gaWUgc3RhbmRhcmQgbW9kZSA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ+IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgZC5kb2N1bWVudEVsZW1lbnRbJ3Njcm9sbCcgKyBuYW1lXSxcbiAgICAvLyBxdWlya3MgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IOacgOWkp+etieS6juWPr+inhueql+WPo+WkmuS4gOeCue+8n1xuICAgIGQuYm9keVsnc2Nyb2xsJyArIG5hbWVdLCBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXSA9IGZ1bmN0aW9uICh3aW4pIHtcbiAgICAvLyBwYyBicm93c2VyIGluY2x1ZGVzIHNjcm9sbGJhciBpbiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHZhciBwcm9wID0gJ2NsaWVudCcgKyBuYW1lO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTtcbiAgICAvLyDmoIflh4bmqKHlvI/lj5YgZG9jdW1lbnRFbGVtZW50XG4gICAgLy8gYmFja2NvbXBhdCDlj5YgYm9keVxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcblxuLypcbiDlvpfliLDlhYPntKDnmoTlpKflsI/kv6Hmga9cbiBAcGFyYW0gZWxlbVxuIEBwYXJhbSBuYW1lXG4gQHBhcmFtIHtTdHJpbmd9IFtleHRyYV0gICdwYWRkaW5nJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZ1xuICdib3JkZXInIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyXG4gJ21hcmdpbicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXIgKyBtYXJnaW5cbiAqL1xuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXgpIHtcbiAgdmFyIGV4dHJhID0gZXg7XG4gIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMudmlld3BvcnRXaWR0aChlbGVtKSA6IGRvbVV0aWxzLnZpZXdwb3J0SGVpZ2h0KGVsZW0pO1xuICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLmRvY1dpZHRoKGVsZW0pIDogZG9tVXRpbHMuZG9jSGVpZ2h0KGVsZW0pO1xuICB9XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuICB2YXIgYm9yZGVyQm94VmFsdWUgPSBuYW1lID09PSAnd2lkdGgnID8gZWxlbS5vZmZzZXRXaWR0aCA6IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0sIGNvbXB1dGVkU3R5bGUpO1xuICB2YXIgY3NzQm94VmFsdWUgPSAwO1xuICBpZiAoYm9yZGVyQm94VmFsdWUgPT09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgLy8gRmFsbCBiYWNrIHRvIGNvbXB1dGVkIHRoZW4gdW4gY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG4gICAgaWYgKGNzc0JveFZhbHVlID09PSBudWxsIHx8IGNzc0JveFZhbHVlID09PSB1bmRlZmluZWQgfHwgTnVtYmVyKGNzc0JveFZhbHVlKSA8IDApIHtcbiAgICAgIGNzc0JveFZhbHVlID0gZWxlbS5zdHlsZVtuYW1lXSB8fCAwO1xuICAgIH1cbiAgICAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuICAgIGNzc0JveFZhbHVlID0gcGFyc2VGbG9hdChjc3NCb3hWYWx1ZSkgfHwgMDtcbiAgfVxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG4gIHZhciBib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3ggPSBib3JkZXJCb3hWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGlzQm9yZGVyQm94O1xuICB2YXIgdmFsID0gYm9yZGVyQm94VmFsdWUgfHwgY3NzQm94VmFsdWU7XG4gIGlmIChleHRyYSA9PT0gQ09OVEVOVF9JTkRFWCkge1xuICAgIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICAgIHJldHVybiB2YWwgLSBnZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlcicsICdwYWRkaW5nJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9IGVsc2UgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIGlmIChleHRyYSA9PT0gQk9SREVSX0lOREVYKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gdmFsICsgKGV4dHJhID09PSBQQURESU5HX0lOREVYID8gLWdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSA6IGdldFBCTVdpZHRoKGVsZW0sIFsnbWFyZ2luJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSk7XG4gIH1cbiAgcmV0dXJuIGNzc0JveFZhbHVlICsgZ2V0UEJNV2lkdGgoZWxlbSwgQk9YX01PREVMUy5zbGljZShleHRyYSksIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbn1cblxudmFyIGNzc1Nob3cgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuLy8gZml4ICMxMTkgOiBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xMTlcbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW47IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgdmFsID0gdm9pZCAwO1xuICB2YXIgZWxlbSA9IGFyZ3NbMF07XG4gIC8vIGluIGNhc2UgZWxlbSBpcyB3aW5kb3dcbiAgLy8gZWxlbS5vZmZzZXRXaWR0aCA9PT0gdW5kZWZpbmVkXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZWFjaChbJ3dpZHRoJywgJ2hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgZG9tVXRpbHNbJ291dGVyJyArIGZpcnN0XSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcblxuICBkb21VdGlsc1tuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCB2KSB7XG4gICAgdmFyIHZhbCA9IHY7XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICAgICAgICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1peCh0bywgZnJvbSkge1xuICBmb3IgKHZhciBpIGluIGZyb20pIHtcbiAgICBpZiAoZnJvbS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdG9baV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5cbnZhciB1dGlscyA9IHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuZG9jdW1lbnQgJiYgbm9kZS5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlO1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgfSxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcbiAgICBpZiAob3ZlcmZsb3cpIHtcbiAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHJldC5vdmVyZmxvd1tpXSA9IG9iai5vdmVyZmxvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIG1peDogbWl4LFxuICBnZXRXaW5kb3dTY3JvbGxMZWZ0OiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxMZWZ0KHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgfSxcbiAgZ2V0V2luZG93U2Nyb2xsVG9wOiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxUb3Aodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxUb3Aodyk7XG4gIH0sXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMjsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdXRpbHMubWl4KHJldCwgYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5cbm1peCh1dGlscywgZG9tVXRpbHMpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHV0aWxzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VHJhbnNmb3JtTmFtZSA9IGdldFRyYW5zZm9ybU5hbWU7XG5leHBvcnRzLnNldFRyYW5zaXRpb25Qcm9wZXJ0eSA9IHNldFRyYW5zaXRpb25Qcm9wZXJ0eTtcbmV4cG9ydHMuZ2V0VHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0VHJhbnNpdGlvblByb3BlcnR5O1xuZXhwb3J0cy5nZXRUcmFuc2Zvcm1YWSA9IGdldFRyYW5zZm9ybVhZO1xuZXhwb3J0cy5zZXRUcmFuc2Zvcm1YWSA9IHNldFRyYW5zZm9ybVhZO1xudmFyIHZlbmRvclByZWZpeCA9IHZvaWQgMDtcblxudmFyIGpzQ3NzTWFwID0ge1xuICBXZWJraXQ6ICctd2Via2l0LScsXG4gIE1vejogJy1tb3otJyxcbiAgLy8gSUUgZGlkIGl0IHdyb25nIGFnYWluIC4uLlxuICBtczogJy1tcy0nLFxuICBPOiAnLW8tJ1xufTtcblxuZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4KCkge1xuICBpZiAodmVuZG9yUHJlZml4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmVuZG9yUHJlZml4O1xuICB9XG4gIHZlbmRvclByZWZpeCA9ICcnO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGU7XG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuICBmb3IgKHZhciBrZXkgaW4ganNDc3NNYXApIHtcbiAgICBpZiAoa2V5ICsgdGVzdFByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZlbmRvclByZWZpeCA9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZlbmRvclByZWZpeDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUoKSB7XG4gIHJldHVybiBnZXRWZW5kb3JQcmVmaXgoKSA/IGdldFZlbmRvclByZWZpeCgpICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eScgOiAndHJhbnNpdGlvblByb3BlcnR5Jztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gZ2V0VmVuZG9yUHJlZml4KCkgKyAnVHJhbnNmb3JtJyA6ICd0cmFuc2Zvcm0nO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZSgpO1xuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zaXRpb25Qcm9wZXJ0eScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zZm9ybU5hbWUoKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgfHwgbm9kZS5zdHlsZVtnZXRUcmFuc2l0aW9uTmFtZSgpXTtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtWFkobm9kZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBtYXRyaXggPSB0cmFuc2Zvcm0ucmVwbGFjZSgvW14wLTlcXC0uLF0vZywgJycpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHsgeDogcGFyc2VGbG9hdChtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSwgMCksIHk6IHBhcnNlRmxvYXQobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0sIDApIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn1cblxudmFyIG1hdHJpeDJkID0gL21hdHJpeFxcKCguKilcXCkvO1xudmFyIG1hdHJpeDNkID0gL21hdHJpeDNkXFwoKC4qKVxcKS87XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybVhZKG5vZGUsIHh5KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGFyciA9IHZvaWQgMDtcbiAgICB2YXIgbWF0Y2gyZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgyZCk7XG4gICAgaWYgKG1hdGNoMmQpIHtcbiAgICAgIG1hdGNoMmQgPSBtYXRjaDJkWzFdO1xuICAgICAgYXJyID0gbWF0Y2gyZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFycls0XSA9IHh5Lng7XG4gICAgICBhcnJbNV0gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsICdtYXRyaXgoJyArIGFyci5qb2luKCcsJykgKyAnKScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gzZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgzZClbMV07XG4gICAgICBhcnIgPSBtYXRjaDNkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzEyXSA9IHh5Lng7XG4gICAgICBhcnJbMTNdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCAnbWF0cml4M2QoJyArIGFyci5qb2luKCcsJykgKyAnKScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ3RyYW5zbGF0ZVgoJyArIHh5LnggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHh5LnkgKyAncHgpIHRyYW5zbGF0ZVooMCknKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL3Byb3BlcnR5VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKipcbiAqIOW+l+WIsOS8muWvvOiHtOWFg+e0oOaYvuekuuS4jeWFqOeahOelluWFiOWFg+e0oFxuICovXG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIGllIOi/meS4quS5n+S4jeaYr+WujOWFqOWPr+ihjFxuICAvKlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7b3ZlcmZsb3c6IGhpZGRlblwiPlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7cG9zaXRpb246IHJlbGF0aXZlO1wiIGlkPVwiZDZcIj5cbiAgIOWFg+e0oCA2IOmrmCAxMDBweCDlrr0gNTBweDxici8+XG4gICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgKi9cbiAgLy8gZWxlbWVudC5vZmZzZXRQYXJlbnQgZG9lcyB0aGUgcmlnaHQgdGhpbmcgaW4gaWU3IGFuZCBiZWxvdy4gUmV0dXJuIHBhcmVudCB3aXRoIGxheW91dCFcbiAgLy8gIEluIG90aGVyIGJyb3dzZXJzIGl0IG9ubHkgaW5jbHVkZXMgZWxlbWVudHMgd2l0aCBwb3NpdGlvbiBhYnNvbHV0ZSwgcmVsYXRpdmUgb3JcbiAgLy8gZml4ZWQsIG5vdCBlbGVtZW50cyB3aXRoIG92ZXJmbG93IHNldCB0byBhdXRvIG9yIHNjcm9sbC5cbiAgLy8gICAgICAgIGlmIChVQS5pZSAmJiBpZU1vZGUgPCA4KSB7XG4gIC8vICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAvLyAgICAgICAgfVxuICAvLyDnu5/kuIDnmoQgb2Zmc2V0UGFyZW50IOaWueazlVxuICB2YXIgZG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuICB2YXIgcG9zaXRpb25TdHlsZSA9IF91dGlsczJbXCJkZWZhdWx0XCJdLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcbiAgdmFyIHNraXBTdGF0aWMgPSBwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnIHx8IHBvc2l0aW9uU3R5bGUgPT09ICdhYnNvbHV0ZSc7XG5cbiAgaWYgKCFza2lwU3RhdGljKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnID8gbnVsbCA6IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGZvciAocGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgIHBvc2l0aW9uU3R5bGUgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb25TdHlsZSAhPT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldE9mZnNldFBhcmVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldE9mZnNldFBhcmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQgPSByZXF1aXJlKCcuL2dldE9mZnNldFBhcmVudCcpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPZmZzZXRQYXJlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiDojrflvpflhYPntKDnmoTmmL7npLrpg6jliIbnmoTljLrln59cbiAqL1xuZnVuY3Rpb24gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IEluZmluaXR5LFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IEluZmluaXR5XG4gIH07XG4gIHZhciBlbCA9ICgwLCBfZ2V0T2Zmc2V0UGFyZW50MltcImRlZmF1bHRcIl0pKGVsZW1lbnQpO1xuICB2YXIgc2Nyb2xsWCA9IHZvaWQgMDtcbiAgdmFyIHNjcm9sbFkgPSB2b2lkIDA7XG4gIHZhciB3aW5TaXplID0gdm9pZCAwO1xuICB2YXIgZG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cbiAgd2hpbGUgKGVsKSB7XG4gICAgLy8gY2xpZW50V2lkdGggaXMgemVybyBmb3IgaW5saW5lIGJsb2NrIGVsZW1lbnRzIGluIGllLlxuICAgIGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPT09IC0xIHx8IGVsLmNsaWVudFdpZHRoICE9PSAwKSAmJlxuICAgIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gX3V0aWxzMltcImRlZmF1bHRcIl0ub2Zmc2V0KGVsKTtcbiAgICAgIC8vIGFkZCBib3JkZXJcbiAgICAgIHBvcy5sZWZ0ICs9IGVsLmNsaWVudExlZnQ7XG4gICAgICBwb3MudG9wICs9IGVsLmNsaWVudFRvcDtcbiAgICAgIHZpc2libGVSZWN0LnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnRvcCwgcG9zLnRvcCk7XG4gICAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LFxuICAgICAgLy8gY29uc2lkZXIgYXJlYSB3aXRob3V0IHNjcm9sbEJhclxuICAgICAgcG9zLmxlZnQgKyBlbC5jbGllbnRXaWR0aCk7XG4gICAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHBvcy50b3AgKyBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHBvcy5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKGVsID09PSBib2R5IHx8IGVsID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBlbCA9ICgwLCBfZ2V0T2Zmc2V0UGFyZW50MltcImRlZmF1bHRcIl0pKGVsKTtcbiAgfVxuXG4gIC8vIENsaXAgYnkgd2luZG93J3Mgdmlld3BvcnQuXG4gIHNjcm9sbFggPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbik7XG4gIHNjcm9sbFkgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHNjcm9sbFgpO1xuICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHNjcm9sbFkpO1xuICB3aW5TaXplID0ge1xuICAgIHdpZHRoOiBfdXRpbHMyW1wiZGVmYXVsdFwiXS52aWV3cG9ydFdpZHRoKHdpbiksXG4gICAgaGVpZ2h0OiBfdXRpbHMyW1wiZGVmYXVsdFwiXS52aWV3cG9ydEhlaWdodCh3aW4pXG4gIH07XG4gIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIHNjcm9sbFggKyB3aW5TaXplLndpZHRoKTtcbiAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBzY3JvbGxZICsgd2luU2l6ZS5oZWlnaHQpO1xuICByZXR1cm4gdmlzaWJsZVJlY3QudG9wID49IDAgJiYgdmlzaWJsZVJlY3QubGVmdCA+PSAwICYmIHZpc2libGVSZWN0LmJvdHRvbSA+IHZpc2libGVSZWN0LnRvcCAmJiB2aXNpYmxlUmVjdC5yaWdodCA+IHZpc2libGVSZWN0LmxlZnQgPyB2aXNpYmxlUmVjdCA6IG51bGw7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgb3ZlcmZsb3cpIHtcbiAgdmFyIHBvcyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLmNsb25lKGVsRnV0dXJlUG9zKTtcbiAgdmFyIHNpemUgPSB7XG4gICAgd2lkdGg6IGVsUmVnaW9uLndpZHRoLFxuICAgIGhlaWdodDogZWxSZWdpb24uaGVpZ2h0XG4gIH07XG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0KSB7XG4gICAgcG9zLmxlZnQgPSB2aXNpYmxlUmVjdC5sZWZ0O1xuICB9XG5cbiAgLy8gTGVmdCBlZGdlIGluc2lkZSBhbmQgcmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuICBpZiAob3ZlcmZsb3cucmVzaXplV2lkdGggJiYgcG9zLmxlZnQgPj0gdmlzaWJsZVJlY3QubGVmdCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIHNpemUud2lkdGggLT0gcG9zLmxlZnQgKyBzaXplLndpZHRoIC0gdmlzaWJsZVJlY3QucmlnaHQ7XG4gIH1cblxuICAvLyBSaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIC8vIOS/neivgeW3pui+ueeVjOWSjOWPr+inhuWMuuWfn+W3pui+ueeVjOWvuem9kFxuICAgIHBvcy5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QucmlnaHQgLSBzaXplLndpZHRoLCB2aXNpYmxlUmVjdC5sZWZ0KTtcbiAgfVxuXG4gIC8vIFRvcCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wIDwgdmlzaWJsZVJlY3QudG9wKSB7XG4gICAgcG9zLnRvcCA9IHZpc2libGVSZWN0LnRvcDtcbiAgfVxuXG4gIC8vIFRvcCBlZGdlIGluc2lkZSBhbmQgYm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZUhlaWdodCAmJiBwb3MudG9wID49IHZpc2libGVSZWN0LnRvcCAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICBzaXplLmhlaWdodCAtPSBwb3MudG9wICsgc2l6ZS5oZWlnaHQgLSB2aXNpYmxlUmVjdC5ib3R0b207XG4gIH1cblxuICAvLyBCb3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgLy8g5L+d6K+B5LiK6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5LiK6L6555WM5a+56b2QXG4gICAgcG9zLnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmJvdHRvbSAtIHNpemUuaGVpZ2h0LCB2aXNpYmxlUmVjdC50b3ApO1xuICB9XG5cbiAgcmV0dXJuIF91dGlsczJbXCJkZWZhdWx0XCJdLm1peChwb3MsIHNpemUpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGFkanVzdEZvclZpZXdwb3J0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1hbGlnbi9saWIvYWRqdXN0Rm9yVmlld3BvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRSZWdpb24obm9kZSkge1xuICB2YXIgb2Zmc2V0ID0gdm9pZCAwO1xuICB2YXIgdyA9IHZvaWQgMDtcbiAgdmFyIGggPSB2b2lkIDA7XG4gIGlmICghX3V0aWxzMltcImRlZmF1bHRcIl0uaXNXaW5kb3cobm9kZSkgJiYgbm9kZS5ub2RlVHlwZSAhPT0gOSkge1xuICAgIG9mZnNldCA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm9mZnNldChub2RlKTtcbiAgICB3ID0gX3V0aWxzMltcImRlZmF1bHRcIl0ub3V0ZXJXaWR0aChub2RlKTtcbiAgICBoID0gX3V0aWxzMltcImRlZmF1bHRcIl0ub3V0ZXJIZWlnaHQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHdpbiA9IF91dGlsczJbXCJkZWZhdWx0XCJdLmdldFdpbmRvdyhub2RlKTtcbiAgICBvZmZzZXQgPSB7XG4gICAgICBsZWZ0OiBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbiksXG4gICAgICB0b3A6IF91dGlsczJbXCJkZWZhdWx0XCJdLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pXG4gICAgfTtcbiAgICB3ID0gX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRXaWR0aCh3aW4pO1xuICAgIGggPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS52aWV3cG9ydEhlaWdodCh3aW4pO1xuICB9XG4gIG9mZnNldC53aWR0aCA9IHc7XG4gIG9mZnNldC5oZWlnaHQgPSBoO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFJlZ2lvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldFJlZ2lvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEFsaWduT2Zmc2V0ID0gcmVxdWlyZSgnLi9nZXRBbGlnbk9mZnNldCcpO1xuXG52YXIgX2dldEFsaWduT2Zmc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEFsaWduT2Zmc2V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KSB7XG4gIHZhciB4eSA9IHZvaWQgMDtcbiAgdmFyIGRpZmYgPSB2b2lkIDA7XG4gIHZhciBwMSA9IHZvaWQgMDtcbiAgdmFyIHAyID0gdm9pZCAwO1xuXG4gIHh5ID0ge1xuICAgIGxlZnQ6IGVsUmVnaW9uLmxlZnQsXG4gICAgdG9wOiBlbFJlZ2lvbi50b3BcbiAgfTtcblxuICBwMSA9ICgwLCBfZ2V0QWxpZ25PZmZzZXQyW1wiZGVmYXVsdFwiXSkocmVmTm9kZVJlZ2lvbiwgcG9pbnRzWzFdKTtcbiAgcDIgPSAoMCwgX2dldEFsaWduT2Zmc2V0MltcImRlZmF1bHRcIl0pKGVsUmVnaW9uLCBwb2ludHNbMF0pO1xuXG4gIGRpZmYgPSBbcDIubGVmdCAtIHAxLmxlZnQsIHAyLnRvcCAtIHAxLnRvcF07XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4eS5sZWZ0IC0gZGlmZlswXSArIG9mZnNldFswXSAtIHRhcmdldE9mZnNldFswXSxcbiAgICB0b3A6IHh5LnRvcCAtIGRpZmZbMV0gKyBvZmZzZXRbMV0gLSB0YXJnZXRPZmZzZXRbMV1cbiAgfTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRFbEZ1dHVyZVBvcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldEVsRnV0dXJlUG9zLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIOiOt+WPliBub2RlIOS4iueahCBhbGlnbiDlr7npvZDngrkg55u45a+55LqO6aG16Z2i55qE5Z2Q5qCHXG4gKi9cblxuZnVuY3Rpb24gZ2V0QWxpZ25PZmZzZXQocmVnaW9uLCBhbGlnbikge1xuICB2YXIgViA9IGFsaWduLmNoYXJBdCgwKTtcbiAgdmFyIEggPSBhbGlnbi5jaGFyQXQoMSk7XG4gIHZhciB3ID0gcmVnaW9uLndpZHRoO1xuICB2YXIgaCA9IHJlZ2lvbi5oZWlnaHQ7XG4gIHZhciB4ID0gdm9pZCAwO1xuICB2YXIgeSA9IHZvaWQgMDtcblxuICB4ID0gcmVnaW9uLmxlZnQ7XG4gIHkgPSByZWdpb24udG9wO1xuXG4gIGlmIChWID09PSAnYycpIHtcbiAgICB5ICs9IGggLyAyO1xuICB9IGVsc2UgaWYgKFYgPT09ICdiJykge1xuICAgIHkgKz0gaDtcbiAgfVxuXG4gIGlmIChIID09PSAnYycpIHtcbiAgICB4ICs9IHcgLyAyO1xuICB9IGVsc2UgaWYgKEggPT09ICdyJykge1xuICAgIHggKz0gdztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRBbGlnbk9mZnNldDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldEFsaWduT2Zmc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZmFkZSBpbiBvciBmYWRlIG91dCBhbmltYXRpb25cclxuICAgKi9cbiAgXCJpblwiOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcclxuICAgKiBVbm1vdW50IHRoZSBjb21wb25lbnQgKHJlbW92ZSBpdCBmcm9tIHRoZSBET00pIHdoZW4gaXQgaXMgZmFkZWQgb3V0XHJcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxyXG4gICAqIFJ1biB0aGUgZmFkZSBpbiBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XHJcbiAgICogc2hvd25cclxuICAgKi9cbiAgdHJhbnNpdGlvbkFwcGVhcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXHJcbiAgICogRHVyYXRpb24gb2YgdGhlIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXQgZmluaXNoaW5nXHJcbiAgICogY2FsbGJhY2tzIGFyZSBmaXJlZCBldmVuIGlmIHRoZSBvcmlnaW5hbCBicm93c2VyIHRyYW5zaXRpb24gZW5kIGV2ZW50cyBhcmVcclxuICAgKiBjYW5jZWxlZFxyXG4gICAqL1xuICB0aW1lb3V0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGZhZGVzIGluXHJcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBmYWRlIGluXHJcbiAgICovXG4gIG9uRW50ZXJpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgaGFzIGNvbXBvbmVudCBmYWRlZCBpblxyXG4gICAqL1xuICBvbkVudGVyZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBvdXRcclxuICAgKi9cbiAgb25FeGl0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBvdXRcclxuICAgKi9cbiAgb25FeGl0aW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZmFkZWQgb3V0XHJcbiAgICovXG4gIG9uRXhpdGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdGltZW91dDogMzAwLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2Vcbn07XG5cbnZhciBGYWRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZhZGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBGYWRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZmFkZScpLFxuICAgICAgZW50ZXJlZENsYXNzTmFtZTogJ2luJyxcbiAgICAgIGVudGVyaW5nQ2xhc3NOYW1lOiAnaW4nXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGYWRlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5GYWRlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZhZGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZhZGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvRmFkZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3RpbnBlckJlZUNvcmUgPSByZXF1aXJlKCd0aW5wZXItYmVlLWNvcmUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8v5piv5ZCm5piv5omL6aOO55C05pWI5p6cXG4gIGFjY29yZGlvbjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8v5r+A5rS755qE6aG5XG4gIGFjdGl2ZUtleTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueSxcbiAgLy/pu5jorqTnmoTmv4DmtLvnmoTpoblcbiAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueSxcbiAgLy/pgInkuK3lh73mlbBcbiAgb25TZWxlY3Q6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICByb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY2NvcmRpb246IGZhbHNlLFxuICBjbHNQcmVmaXg6ICd1LXBhbmVsLWdyb3VwJ1xufTtcblxuLy8gVE9ETzogVXNlIHVuY29udHJvbGxhYmxlLlxuXG52YXIgUGFuZWxHcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbEdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lbEdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmVsR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVTZWxlY3QgPSBfdGhpcy5oYW5kbGVTZWxlY3QuYmluZChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUtleTogcHJvcHMuZGVmYXVsdEFjdGl2ZUtleVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGFuZWxHcm91cC5wcm90b3R5cGUuaGFuZGxlU2VsZWN0ID0gZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGtleSwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSwgZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlS2V5ID09PSBrZXkpIHtcbiAgICAgIGtleSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleToga2V5IH0pO1xuICB9O1xuXG4gIFBhbmVsR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY2NvcmRpb24gPSBfcHJvcHMuYWNjb3JkaW9uLFxuICAgICAgICBwcm9wc0FjdGl2ZUtleSA9IF9wcm9wcy5hY3RpdmVLZXksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBkZWZhdWx0QWN0aXZlS2V5ID0gX3Byb3BzLmRlZmF1bHRBY3RpdmVLZXksXG4gICAgICAgIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0LFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY2NvcmRpb24nLCAnYWN0aXZlS2V5JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkZWZhdWx0QWN0aXZlS2V5JywgJ29uU2VsZWN0JywgJ3N0eWxlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB2b2lkIDA7XG4gICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHNBY3RpdmVLZXkgIT0gbnVsbCA/IHByb3BzQWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgICBvdGhlcnMucm9sZSA9IG90aGVycy5yb2xlIHx8ICd0YWJsaXN0JztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkLnByb3BzLnN0eWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGRQcm9wcywge1xuICAgICAgICAgICAgaGVhZGVyUm9sZTogJ3RhYicsXG4gICAgICAgICAgICBwYW5lbFJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKF90aGlzMi5oYW5kbGVTZWxlY3QsIGNoaWxkLnByb3BzLm9uU2VsZWN0KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBhbmVsR3JvdXA7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGFuZWxHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGFuZWxHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWxHcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9CdXR0b24yW1wiZGVmYXVsdFwiXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtYnV0dG9uL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5bC65a+4XHJcbiAgICAgKi9cbiAgICBzaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAneGcnLCAnbGcnXSksXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5qC35byPXHJcbiAgICAgKi9cbiAgICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5b2i54q2XHJcbiAgICAgKi9cbiAgICBzaGFwZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Jsb2NrJywgJ3JvdW5kJywgJ3NxdWFyZWQnLCAnZmxvYXRpbmcnLCAncGlsbFJpZ2h0JywgJ3BpbGxMZWZ0JywgJ2JvcmRlcicsICdpY29uJ10pLFxuICAgIC8qKlxyXG4gICAgKiBAdGl0bGUg57G75Z6LXHJcbiAgICAqL1xuICAgIGNvbG9yczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnYWNjZW50JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdkZWZhdWx0J10pLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOaYr+WQpuemgeeUqFxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOexu+WQjVxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUgPGJ1dHRvbj4g55qEIHR5cGVcclxuICAgICAqIEB2ZUlnbm9yZVxyXG4gICAgICovXG4gICAgaHRtbFR5cGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0J10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgY2xzUHJlZml4OiAndS1idXR0b24nXG5cbn07XG5cbnZhciBzaXplTWFwID0ge1xuICAgIHNtOiAnc20nLFxuICAgIHhnOiAneGcnLFxuICAgIGxnOiAnbGcnXG59LFxuICAgIGNvbG9yc01hcCA9IHtcbiAgICBwcmltYXJ5OiAncHJpbWFyeScsXG4gICAgYWNjZW50OiAnYWNjZW50JyxcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgaW5mbzogJ2luZm8nLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBkYW5nZXI6ICdkYW5nZXInXG59LFxuICAgIHNoYXBlTWFwID0ge1xuICAgIGJsb2NrOiAnYmxvY2snLFxuICAgIHJvdW5kOiAncm91bmQnLFxuICAgIGJvcmRlcjogJ2JvcmRlcicsXG4gICAgc3F1YXJlZDogJ3NxdWFyZWQnLFxuICAgIGZsb2F0aW5nOiAnZmxvYXRpbmcnLFxuICAgIHBpbGxSaWdodDogJ3BpbGwtcmlnaHQnLFxuICAgIHBpbGxMZWZ0OiAncGlsbC1sZWZ0JyxcbiAgICBpY29uOiAnaWNvbidcbn07XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICBCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb2xvcnMgPSBfcHJvcHMuY29sb3JzLFxuICAgICAgICAgICAgc2hhcGUgPSBfcHJvcHMuc2hhcGUsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzaXplID0gX3Byb3BzLnNpemUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGh0bWxUeXBlID0gX3Byb3BzLmh0bWxUeXBlLFxuICAgICAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29sb3JzJywgJ3NoYXBlJywgJ2Rpc2FibGVkJywgJ2NsYXNzTmFtZScsICdzaXplJywgJ2NoaWxkcmVuJywgJ2h0bWxUeXBlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgICAgICB2YXIgY2xzT2JqID0ge307XG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsc09ialtjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZU1hcFtzaXplXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIHNpemVNYXBbc2l6ZV1dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhcGVNYXBbc2hhcGVdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgc2hhcGVNYXBbc2hhcGVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yc01hcFtjb2xvcnNdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgY29sb3JzTWFwW2NvbG9yc11dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbHNQcmVmaXgsIGNsc09iaik7XG4gICAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgdHlwZTogaHRtbFR5cGUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtYnV0dG9uL2J1aWxkL0J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi9Td2l0Y2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAgIGNsc1ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNoZWNrZWRDaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcclxuICAgIHVuQ2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgb25DaGFuZ2VIYW5kbGVyOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbHNQcmVmaXg6ICd1LXN3aXRjaCcsXHJcblx0Y2hlY2tlZENoaWxkcmVuOiBudWxsLFxyXG5cdHVuQ2hlY2tlZENoaWxkcmVuOiBudWxsLFxyXG5cdGRlZmF1bHRDaGVja2VkOiBmYWxzZSxcclxuXHRzaXplOicnLFxyXG5cdGRpc2FibGVkOmZhbHNlLFxyXG5cdG9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24oKXt9XHJcbn07XHJcbmNsYXNzIFN3aXRjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRpZignY2hlY2tlZCcgaW4gdGhpcy5wcm9wcyl7XHJcblx0XHRcdGNoZWNrZWQgPSAhIXRoaXMucHJvcHMuY2hlY2tlZDtcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0Y2hlY2tlZCA9ICEhdGhpcy5wcm9wcy5kZWZhdWx0Q2hlY2tlZDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGNoZWNrZWQ6IGNoZWNrZWRcclxuXHRcdH1cclxuXHRcdHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG5cdH1cclxuXHQvL+eCueWHu3N3aXRjaOaUueWPmOeKtuaAgVxyXG5cdGNsaWNrSGFuZGxlcigpe1xyXG5cdFx0bGV0IGNoZWNrZWQgPSB0aGlzLnN0YXRlLmNoZWNrZWQ7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0Y2hlY2tlZDohY2hlY2tlZFxyXG5cdFx0fSlcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2VIYW5kbGVyKCFjaGVja2VkKTtcclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zdCB7IGNoZWNrZWRDaGlsZHJlbix1bkNoZWNrZWRDaGlsZHJlbixvbkNoYW5nZUhhbmRsZXIsc2l6ZSxjbGFzc05hbWUsY2xzUHJlZml4LGNvbG9ycyB9ID0gdGhpcy5wcm9wcztcclxuXHRcdC8v6I635Y+WY2hlY2tlZFxyXG5cdFx0Y29uc3QgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcclxuXHRcdGxldCBjbGFzc2VzID0ge1xyXG5cdFx0XHQnaXMtY2hlY2tlZCc6Y2hlY2tlZFxyXG5cdFx0fVxyXG5cdFx0aWYoc2l6ZSl7XHJcblx0XHRcdGNsYXNzZXNbYCR7Y2xzUHJlZml4fS0ke3NpemV9YF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYoY29sb3JzKXtcclxuXHRcdFx0Y2xhc3Nlc1tgJHtjbHNQcmVmaXh9LSR7Y29sb3JzfWBdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGxldCBjbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbHNQcmVmaXgsY2xhc3Nlcyk7XHJcblxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxzcGFuIG9uQ2xpY2sgPSB7dGhpcy5jbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWUsY2xhc3NOYW1lcyl9IHRhYkluZGV4PVwiMFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gIFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake2Nsc1ByZWZpeH0taW5uZXJgfT5cclxuXHRcdFx0XHRcdFx0eyBjaGVja2VkP2NoZWNrZWRDaGlsZHJlbiA6IHVuQ2hlY2tlZENoaWxkcmVufVxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblN3aXRjaC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1N3aXRjaC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUNBOzs7Ozs7O0FBT0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBOzs7QUFDQTs7Ozs7OztBQU9BOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFZQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFRQTtBQUNBOzs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFQQTtBQVVBO0FBQ0E7Ozs7QUFFQTs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0NBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzVUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBU0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=demo.js.map