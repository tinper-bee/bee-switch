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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _beeLayout = __webpack_require__(1);

	var _beePanel = __webpack_require__(8);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _beeButton = __webpack_require__(103);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _src = __webpack_require__(105);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });

	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });

	var Demo1 = __webpack_require__(107);var Demo2 = __webpack_require__(108);var Demo3 = __webpack_require__(109);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 默认开关", "code": "/**\n *\n * @title 默认开关\n * @description\n *\n */\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport Switch from \"../../src\";\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      defaultChecked: true\n    };\n  }\n  onChange = () => {\n    this.setState({\n      defaultChecked: !this.state.defaultChecked\n    });\n  };\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch />\n        </Col>\n        <Col sm={2}>\n          <Switch\n            defaultChecked={this.state.defaultChecked}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n", "desc": "" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 不同大小的开关", "code": "/**\n *\n * @title 不同大小的开关\n * @description 通过`size`属性控制开关的大小\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport Switch from \"../../src\";\n\nclass Demo2 extends Component {\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch size=\"sm\" />\n        </Col>\n        <Col sm={2}>\n          <Switch />\n        </Col>\n        <Col sm={2}>\n          <Switch size=\"lg\" />\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n", "desc": " 通过`size`属性控制开关的大小" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 事件开关", "code": "/**\n *\n * @title 事件开关\n * @description 点击开关触发事件\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Row, Col } from \"bee-layout\";\nimport Switch from \"../../src\";\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      switch: \"\",\n      checked: false\n    };\n  }\n  onChange = e => {\n    this.setState({\n      switch: `${e}`,\n      checked: !this.state.checked\n    });\n  };\n\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch\n            defaultChecked={this.state.checked}\n            onChange={this.onChange}\n            checkedChildren={\"on\"}\n            unCheckedChildren={\"off\"}\n          />\n        </Col>\n        <Col sm={2}>\n          <span>{this.state.switch}</span>\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n", "desc": " 点击开关触发事件" }];

	var Demo = function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props) {
	        _classCallCheck(this, Demo);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
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

	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);

	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);

	        return _possibleConstructorReturn(this, _Component2.call(this, props));
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;

	var _Col2 = __webpack_require__(2);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Row2 = __webpack_require__(6);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Layout = __webpack_require__(7);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),

	  /**
	   * xs显示列数
	   */
	  xs: _propTypes2["default"].number,
	  /**
	   * sm显示列数
	   */
	  sm: _propTypes2["default"].number,
	  /**
	   * md显示列数
	   */
	  md: _propTypes2["default"].number,
	  /**
	   * lg显示列数
	   */
	  lg: _propTypes2["default"].number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _propTypes2["default"].number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _propTypes2["default"].number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _propTypes2["default"].number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _propTypes2["default"].number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _propTypes2["default"].number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _propTypes2["default"].number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _propTypes2["default"].number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _propTypes2["default"].number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _propTypes2["default"].number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _propTypes2["default"].number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _propTypes2["default"].number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _propTypes2["default"].number
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

	Col.defaultProps = defaultProps;
	Col.propTypes = propTypes;

	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

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
	  fluid: _propTypes2["default"].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;

	var _Panel2 = __webpack_require__(9);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelGroup2 = __webpack_require__(102);

	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeTransition = __webpack_require__(10);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),

	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func
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
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;

	var _Transition2 = __webpack_require__(11);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _Collapse2 = __webpack_require__(16);

	var _Collapse3 = _interopRequireDefault(_Collapse2);

	var _Fade2 = __webpack_require__(101);

	var _Fade3 = _interopRequireDefault(_Fade2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(13);

	var _properties2 = _interopRequireDefault(_properties);

	var _on = __webpack_require__(15);

	var _on2 = _interopRequireDefault(_on);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

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
	  "in": _propTypes2["default"].bool,

	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,

	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,

	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,

	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,

	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
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
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(14);

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
	      return e.toLowerCase();
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

	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(14);

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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(17);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Transition = __webpack_require__(11);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _capitalize = __webpack_require__(25);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _tinperBeeCore = __webpack_require__(26);

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
	  "in": _propTypes2["default"].bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,

	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,

	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,

	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,

	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),

	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,

	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;

	var _camelizeStyle = __webpack_require__(18);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	var _hyphenateStyle = __webpack_require__(20);

	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

	var _getComputedStyle2 = __webpack_require__(22);

	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

	var _removeStyle = __webpack_require__(23);

	var _removeStyle2 = _interopRequireDefault(_removeStyle);

	var _properties = __webpack_require__(13);

	var _isTransform = __webpack_require__(24);

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;

	var _camelize = __webpack_require__(19);

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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;

	var _hyphenate = __webpack_require__(21);

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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;

	var _camelizeStyle = __webpack_require__(18);

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

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

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

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;

	var _all2 = __webpack_require__(27);

	var _all3 = _interopRequireDefault(_all2);

	var _componentOrElement2 = __webpack_require__(29);

	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);

	var _deprecated2 = __webpack_require__(30);

	var _deprecated3 = _interopRequireDefault(_deprecated2);

	var _elementType2 = __webpack_require__(33);

	var _elementType3 = _interopRequireDefault(_elementType2);

	var _isRequiredForA11y2 = __webpack_require__(34);

	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);

	var _splitComponent2 = __webpack_require__(35);

	var _splitComponent3 = _interopRequireDefault(_splitComponent2);

	var _createChainedFunction2 = __webpack_require__(71);

	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

	var _keyCode = __webpack_require__(72);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _contains2 = __webpack_require__(73);

	var _contains3 = _interopRequireDefault(_contains2);

	var _addEventListener2 = __webpack_require__(74);

	var _addEventListener3 = _interopRequireDefault(_addEventListener2);

	var _cssAnimation2 = __webpack_require__(79);

	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);

	var _toArray2 = __webpack_require__(83);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _Align2 = __webpack_require__(84);

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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = all;

	var _createChainableTypeChecker = __webpack_require__(28);

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

/***/ }),
/* 28 */
/***/ (function(module, exports) {

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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(28);

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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = deprecated;

	var _warning = __webpack_require__(31);

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

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

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
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(28);

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

/***/ }),
/* 34 */
/***/ (function(module, exports) {

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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _entries = __webpack_require__(36);

	var _entries2 = _interopRequireDefault(_entries);

	exports.default = splitComponentProps;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	  (0, _entries2.default)(props).forEach(function (_ref) {
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	module.exports = __webpack_require__(41).Object.entries;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(39);
	var $entries = __webpack_require__(54)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(40);
	var core = __webpack_require__(41);
	var ctx = __webpack_require__(42);
	var hide = __webpack_require__(44);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(43);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(45);
	var createDesc = __webpack_require__(53);
	module.exports = __webpack_require__(49) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(46);
	var IE8_DOM_DEFINE = __webpack_require__(48);
	var toPrimitive = __webpack_require__(52);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(49) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(49) && !__webpack_require__(50)(function () {
	  return Object.defineProperty(__webpack_require__(51)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(50)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47);
	var document = __webpack_require__(40).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(47);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(55);
	var toIObject = __webpack_require__(58);
	var isEnum = __webpack_require__(70).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(56);
	var enumBugKeys = __webpack_require__(69);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(57);
	var toIObject = __webpack_require__(58);
	var arrayIndexOf = __webpack_require__(62)(false);
	var IE_PROTO = __webpack_require__(66)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(59);
	var defined = __webpack_require__(61);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(60);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(58);
	var toLength = __webpack_require__(63);
	var toAbsoluteIndex = __webpack_require__(65);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(64);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(64);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(67)('keys');
	var uid = __webpack_require__(68);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(40);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

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

/***/ }),
/* 72 */
/***/ (function(module, exports) {

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

/***/ }),
/* 73 */
/***/ (function(module, exports) {

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

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(75);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;

	var _EventObject = __webpack_require__(76);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
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

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EventBaseObject = __webpack_require__(77);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(78);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

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
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
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
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
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

	  _EventBaseObject2["default"].call(this);

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
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
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

	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
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

	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

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
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		} catch (err) {
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

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(80);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(81);

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

/***/ }),
/* 80 */
/***/ (function(module, exports) {

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

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(82);
	} catch (err) {
	  var index = __webpack_require__(82);
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


/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _createReactClass = __webpack_require__(85);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _domAlign = __webpack_require__(91);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(74);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};

	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},

	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};

	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);

	  function Align(props) {
	    _classCallCheck(this, Align);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _initialiseProps.call(_this);

	    return _this;
	  }

	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };

	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
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
	  };

	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };

	  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2.default)(window, 'resize', this.bufferMonitor);
	    }
	  };

	  Align.prototype.render = function render() {
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
	  };

	  return Align;
	}(_react2.default.Component);

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };

	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};

	;

	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	exports.default = Align;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var React = __webpack_require__(4);
	var factory = __webpack_require__(86);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(78);

	var emptyObject = __webpack_require__(87);
	var _invariant = __webpack_require__(88);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(89);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(90);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(92);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(94);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(95);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(97);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(98);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(99);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);

	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
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
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);

	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTargetNotOutOfVisible) {
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
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);

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
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);

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
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
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

	domAlign.__getOffsetParent = _getOffsetParent2['default'];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];

	exports['default'] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _propertyUtils = __webpack_require__(93);

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

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}

	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
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
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
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

	  getDocument: getDocument,
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

	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports) {

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

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(92);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
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
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(92);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(94);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _isAncestorFixed = __webpack_require__(96);

	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
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
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
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
	    el = (0, _getOffsetParent2['default'])(el);
	  }

	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }

	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;

	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }

	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }

	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;

	var _utils = __webpack_require__(92);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }

	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(92);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
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

	  return _utils2['default'].mix(pos, size);
	}

	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(92);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(100);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports) {

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

	  var x = region.left;
	  var y = region.top;

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

	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Transition = __webpack_require__(11);

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
	  "in": _propTypes2["default"].bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,

	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,

	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,

	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
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

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _tinperBeeCore = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
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
	          _extends(childProps, {
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

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(104);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

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
	    size: _propTypes2["default"].oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),

	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,

	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false

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
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix']);

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
	        //clsObj[`${clsPrefix}-border`] = bordered;
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

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switch = __webpack_require__(106);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Switch2['default'];
	module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  clsPrefix: _propTypes2["default"].string,
	  disabled: _propTypes2["default"].bool,
	  checkedChildren: _propTypes2["default"].any,
	  unCheckedChildren: _propTypes2["default"].any,
	  onChangeHandler: _propTypes2["default"].func,
	  onChange: _propTypes2["default"].func
	};
	var defaultProps = {
	  clsPrefix: "u-switch",
	  checkedChildren: null,
	  unCheckedChildren: null,
	  defaultChecked: false,
	  size: "",
	  disabled: false,
	  onChangeHandler: function onChangeHandler() {},
	  onChange: function onChange() {}
	};

	var Switch = function (_Component) {
	  _inherits(Switch, _Component);

	  function Switch(props) {
	    _classCallCheck(this, Switch);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _initialiseProps.call(_this);

	    var checked = false;
	    if ("checked" in _this.props) {
	      checked = !!_this.props.checked;
	    } else {
	      checked = !!_this.props.defaultChecked;
	    }
	    _this.state = {
	      checked: checked
	    };
	    return _this;
	  }

	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
	    if (nextProps.checked) {
	      this.setState({ checked: nextProps.checked });
	    } else if (nextProps.defaultChecked) {
	      this.setState({ checked: nextProps.defaultChecked });
	    }
	  };

	  //点击switch改变状态


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
	      "is-checked": checked
	    };
	    if (size) {
	      classes[clsPrefix + "-" + size] = true;
	    }
	    if (colors) {
	      classes[clsPrefix + "-" + colors] = true;
	    }
	    var classNames = (0, _classnames2["default"])(clsPrefix, classes);

	    return _react2["default"].createElement(
	      "span",
	      {
	        onClick: this.clickHandler,
	        className: (0, _classnames2["default"])(className, classNames),
	        tabIndex: "0"
	      },
	      _react2["default"].createElement(
	        "span",
	        { className: clsPrefix + "-inner" },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  };

	  return Switch;
	}(_react.Component);

	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;

	  this.clickHandler = function () {
	    if (_this2.props.checked != undefined) {
	      return;
	    }
	    var checked = _this2.state.checked;
	    _this2.setState({
	      checked: !checked
	    });
	    _this2.props.onChangeHandler(!checked);
	    _this2.props.onChange(!checked);
	  };
	};

	Switch.propTypes = propTypes;
	Switch.defaultProps = defaultProps;
	exports["default"] = Switch;
	module.exports = exports["default"];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeLayout = __webpack_require__(1);

	var _src = __webpack_require__(105);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 默认开关
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Demo1 = function (_Component) {
	  _inherits(Demo1, _Component);

	  function Demo1(props) {
	    _classCallCheck(this, Demo1);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.onChange = function () {
	      _this.setState({
	        defaultChecked: !_this.state.defaultChecked
	      });
	    };

	    _this.state = {
	      defaultChecked: true
	    };
	    return _this;
	  }

	  Demo1.prototype.render = function render() {
	    return _react2["default"].createElement(
	      _beeLayout.Row,
	      null,
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(_src2["default"], null)
	      ),
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(_src2["default"], {
	          defaultChecked: this.state.defaultChecked,
	          onChange: this.onChange
	        })
	      )
	    );
	  };

	  return Demo1;
	}(_react.Component);

	exports["default"] = Demo1;
	module.exports = exports["default"];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeLayout = __webpack_require__(1);

	var _src = __webpack_require__(105);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 不同大小的开关
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 通过`size`属性控制开关的大小
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Demo2 = function (_Component) {
	  _inherits(Demo2, _Component);

	  function Demo2() {
	    _classCallCheck(this, Demo2);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Demo2.prototype.render = function render() {
	    return _react2["default"].createElement(
	      _beeLayout.Row,
	      null,
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(_src2["default"], { size: "sm" })
	      ),
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(_src2["default"], null)
	      ),
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(_src2["default"], { size: "lg" })
	      )
	    );
	  };

	  return Demo2;
	}(_react.Component);

	exports["default"] = Demo2;
	module.exports = exports["default"];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeLayout = __webpack_require__(1);

	var _src = __webpack_require__(105);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 事件开关
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 点击开关触发事件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Demo3 = function (_Component) {
	  _inherits(Demo3, _Component);

	  function Demo3(props) {
	    _classCallCheck(this, Demo3);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.onChange = function (e) {
	      _this.setState({
	        "switch": "" + e,
	        checked: !_this.state.checked
	      });
	    };

	    _this.state = {
	      "switch": "",
	      checked: false
	    };
	    return _this;
	  }

	  Demo3.prototype.render = function render() {
	    return _react2["default"].createElement(
	      _beeLayout.Row,
	      null,
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(_src2["default"], {
	          defaultChecked: this.state.checked,
	          onChange: this.onChange,
	          checkedChildren: "on",
	          unCheckedChildren: "off"
	        })
	      ),
	      _react2["default"].createElement(
	        _beeLayout.Col,
	        { sm: 2 },
	        _react2["default"].createElement(
	          "span",
	          null,
	          this.state["switch"]
	        )
	      )
	    );
	  };

	  return Demo3;
	}(_react.Component);

	exports["default"] = Demo3;
	module.exports = exports["default"];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MGFjZWE3YzljZmUxMWRjMmQ1YiIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjIuN0BiZWUtbGF5b3V0L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vLjEuMi43QGJlZS1sYXlvdXQvYnVpbGQvQ29sLmpzIiwid2VicGFjazovLy8uL34vLjIuMi41QGNsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIiIsIndlYnBhY2s6Ly8vLi9+Ly4xLjIuN0BiZWUtbGF5b3V0L2J1aWxkL1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjIuN0BiZWUtbGF5b3V0L2J1aWxkL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjAuMEBiZWUtcGFuZWwvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjBAYmVlLXBhbmVsL2J1aWxkL1BhbmVsLmpzIiwid2VicGFjazovLy8uL34vLjEuMC4wQGJlZS10cmFuc2l0aW9uL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vLjEuMC4wQGJlZS10cmFuc2l0aW9uL2J1aWxkL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9+Ly4zLjIuMUBkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMy4yLjFAZG9tLWhlbHBlcnMvdXRpbC9pbkRPTS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4zLjIuMUBkb20taGVscGVycy9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjBAYmVlLXRyYW5zaXRpb24vYnVpbGQvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMy4yLjFAZG9tLWhlbHBlcnMvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMy4yLjFAZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vLjMuMi4xQGRvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMy4yLjFAZG9tLWhlbHBlcnMvdXRpbC9oeXBoZW5hdGVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4zLjIuMUBkb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4zLjIuMUBkb20taGVscGVycy9zdHlsZS9nZXRDb21wdXRlZFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vLjMuMi4xQGRvbS1oZWxwZXJzL3N0eWxlL3JlbW92ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vLjMuMi4xQGRvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjBAYmVlLXRyYW5zaXRpb24vYnVpbGQvdXRpbC9jYXBpdGFsaXplLmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvZGVwcmVjYXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4zLjAuMEB3YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2xpdXNoYW96aGVuL0FwcERhdGEvUm9hbWluZy9ucG0vfi9iZWUtdG9vbHMvfi8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvZWxlbWVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvaXNSZXF1aXJlZEZvckExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvc3BsaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uNi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi9rZXlDb2RlLmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjJAYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjJAYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjJAYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRCYXNlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLjQuMS4xQG9iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvY3NzQW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL0V2ZW50LmpzIiwid2VicGFjazovLy8uL34vLjEuMi42QGNvbXBvbmVudC1jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vLjAuMC4zQGNvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMTUuNi4yQGNyZWF0ZS1yZWFjdC1jbGFzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xNS42LjJAY3JlYXRlLXJlYWN0LWNsYXNzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC44LjE2QGZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vLjAuOC4xNkBmYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC44LjE2QGZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMC44LjE2QGZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS42LjVAZG9tLWFsaWduL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vLjEuNi41QGRvbS1hbGlnbi9saWIvcHJvcGVydHlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL2lzQW5jZXN0b3JGaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL2FkanVzdEZvclZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL34vLjEuNi41QGRvbS1hbGlnbi9saWIvZ2V0UmVnaW9uLmpzIiwid2VicGFjazovLy8uL34vLjEuNi41QGRvbS1hbGlnbi9saWIvZ2V0RWxGdXR1cmVQb3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS42LjVAZG9tLWFsaWduL2xpYi9nZXRBbGlnbk9mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly4xLjAuMEBiZWUtdHJhbnNpdGlvbi9idWlsZC9GYWRlLmpzIiwid2VicGFjazovLy8uL34vLjEuMC4wQGJlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzIiwid2VicGFjazovLy8uL34vLjEuMC4yQGJlZS1idXR0b24vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi8uMS4wLjJAYmVlLWJ1dHRvbi9idWlsZC9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vZGVtby9kZW1vbGlzdC9EZW1vMS5qcyIsIndlYnBhY2s6Ly8vZGVtby9kZW1vbGlzdC9EZW1vMi5qcyIsIndlYnBhY2s6Ly8vZGVtby9kZW1vbGlzdC9EZW1vMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MGFjZWE3YzljZmUxMWRjMmQ1YiIsIlxuaW1wb3J0IHsgQ29uLCBSb3csIENvbCB9IGZyb20gJ2JlZS1sYXlvdXQnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdiZWUtcGFuZWwnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdiZWUtYnV0dG9uJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi4vc3JjJztcblxuXG5jb25zdCBDQVJFVCA9IDxpIGNsYXNzTmFtZT1cInVmIHVmLWFycm93LWRvd25cIj48L2k+O1xuXG5jb25zdCBDQVJFVFVQID0gPGkgY2xhc3NOYW1lPVwidWYgdWYtYXJyb3ctdXBcIj48L2k+O1xuXG5cbnZhciBEZW1vMSA9IHJlcXVpcmUoXCIuL2RlbW9saXN0L0RlbW8xXCIpO3ZhciBEZW1vMiA9IHJlcXVpcmUoXCIuL2RlbW9saXN0L0RlbW8yXCIpO3ZhciBEZW1vMyA9IHJlcXVpcmUoXCIuL2RlbW9saXN0L0RlbW8zXCIpO3ZhciBEZW1vQXJyYXkgPSBbe1wiZXhhbXBsZVwiOjxEZW1vMSAvPixcInRpdGxlXCI6XCIg6buY6K6k5byA5YWzXCIsXCJjb2RlXCI6XCIvKipcXG4gKlxcbiAqIEB0aXRsZSDpu5jorqTlvIDlhbNcXG4gKiBAZGVzY3JpcHRpb25cXG4gKlxcbiAqL1xcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFxcXCJiZWUtbGF5b3V0XFxcIjtcXG5pbXBvcnQgU3dpdGNoIGZyb20gXFxcIi4uLy4uL3NyY1xcXCI7XFxuXFxuY2xhc3MgRGVtbzEgZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcXG4gICAgc3VwZXIocHJvcHMpO1xcbiAgICB0aGlzLnN0YXRlID0ge1xcbiAgICAgIGRlZmF1bHRDaGVja2VkOiB0cnVlXFxuICAgIH07XFxuICB9XFxuICBvbkNoYW5nZSA9ICgpID0+IHtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgZGVmYXVsdENoZWNrZWQ6ICF0aGlzLnN0YXRlLmRlZmF1bHRDaGVja2VkXFxuICAgIH0pO1xcbiAgfTtcXG4gIHJlbmRlcigpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICA8Um93PlxcbiAgICAgICAgPENvbCBzbT17Mn0+XFxuICAgICAgICAgIDxTd2l0Y2ggLz5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgICAgPENvbCBzbT17Mn0+XFxuICAgICAgICAgIDxTd2l0Y2hcXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGhpcy5zdGF0ZS5kZWZhdWx0Q2hlY2tlZH1cXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cXG4gICAgICAgICAgLz5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgIDwvUm93PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5cXG5cIixcImRlc2NcIjpcIlwifSx7XCJleGFtcGxlXCI6PERlbW8yIC8+LFwidGl0bGVcIjpcIiDkuI3lkIzlpKflsI/nmoTlvIDlhbNcIixcImNvZGVcIjpcIi8qKlxcbiAqXFxuICogQHRpdGxlIOS4jeWQjOWkp+Wwj+eahOW8gOWFs1xcbiAqIEBkZXNjcmlwdGlvbiDpgJrov4dgc2l6ZWDlsZ7mgKfmjqfliLblvIDlhbPnmoTlpKflsI9cXG4gKlxcbiAqL1xcblxcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFxcXCJiZWUtbGF5b3V0XFxcIjtcXG5pbXBvcnQgU3dpdGNoIGZyb20gXFxcIi4uLy4uL3NyY1xcXCI7XFxuXFxuY2xhc3MgRGVtbzIgZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxSb3c+XFxuICAgICAgICA8Q29sIHNtPXsyfT5cXG4gICAgICAgICAgPFN3aXRjaCBzaXplPVxcXCJzbVxcXCIgLz5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgICAgPENvbCBzbT17Mn0+XFxuICAgICAgICAgIDxTd2l0Y2ggLz5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgICAgPENvbCBzbT17Mn0+XFxuICAgICAgICAgIDxTd2l0Y2ggc2l6ZT1cXFwibGdcXFwiIC8+XFxuICAgICAgICA8L0NvbD5cXG4gICAgICA8L1Jvdz5cXG4gICAgKTtcXG4gIH1cXG59XFxuXFxuXFxuXCIsXCJkZXNjXCI6XCIg6YCa6L+HYHNpemVg5bGe5oCn5o6n5Yi25byA5YWz55qE5aSn5bCPXCJ9LHtcImV4YW1wbGVcIjo8RGVtbzMgLz4sXCJ0aXRsZVwiOlwiIOS6i+S7tuW8gOWFs1wiLFwiY29kZVwiOlwiLyoqXFxuICpcXG4gKiBAdGl0bGUg5LqL5Lu25byA5YWzXFxuICogQGRlc2NyaXB0aW9uIOeCueWHu+W8gOWFs+inpuWPkeS6i+S7tlxcbiAqXFxuICovXFxuXFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXFxcInJlYWN0XFxcIjtcXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXFxcImJlZS1sYXlvdXRcXFwiO1xcbmltcG9ydCBTd2l0Y2ggZnJvbSBcXFwiLi4vLi4vc3JjXFxcIjtcXG5cXG5jbGFzcyBEZW1vMyBleHRlbmRzIENvbXBvbmVudCB7XFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xcbiAgICBzdXBlcihwcm9wcyk7XFxuICAgIHRoaXMuc3RhdGUgPSB7XFxuICAgICAgc3dpdGNoOiBcXFwiXFxcIixcXG4gICAgICBjaGVja2VkOiBmYWxzZVxcbiAgICB9O1xcbiAgfVxcbiAgb25DaGFuZ2UgPSBlID0+IHtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgc3dpdGNoOiBgJHtlfWAsXFxuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxcbiAgICB9KTtcXG4gIH07XFxuXFxuICByZW5kZXIoKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgPFJvdz5cXG4gICAgICAgIDxDb2wgc209ezJ9PlxcbiAgICAgICAgICA8U3dpdGNoXFxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cXG4gICAgICAgICAgICBjaGVja2VkQ2hpbGRyZW49e1xcXCJvblxcXCJ9XFxuICAgICAgICAgICAgdW5DaGVja2VkQ2hpbGRyZW49e1xcXCJvZmZcXFwifVxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9Db2w+XFxuICAgICAgICA8Q29sIHNtPXsyfT5cXG4gICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUuc3dpdGNofTwvc3Bhbj5cXG4gICAgICAgIDwvQ29sPlxcbiAgICAgIDwvUm93PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cXG5cXG5cIixcImRlc2NcIjpcIiDngrnlh7vlvIDlhbPop6blj5Hkuovku7ZcIn1dXG5cblxuY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGV4YW1wbGUsIGNvZGUsIGRlc2MgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY2FyZXQgPSB0aGlzLnN0YXRlLm9wZW4gPyBDQVJFVFVQIDogQ0FSRVQ7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5zdGF0ZS5vcGVuID8gXCLpmpDol4/ku6PnoIFcIiA6IFwi5p+l55yL5Luj56CBXCI7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gKFxuICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT1cImJsb2NrXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cbiAgICAgICAgICAgICAgICB7IGNhcmV0IH1cbiAgICAgICAgICAgICAgICB7IHRleHQgfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbCBtZD17MTJ9ID5cbiAgICAgICAgICAgICAgICA8aDM+eyB0aXRsZSB9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57IGRlc2MgfTwvcD5cbiAgICAgICAgICAgICAgICA8UGFuZWwgY29sbGFwc2libGUgZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW4gfSBjb2xvcnM9J2JvcmRlcmVkJyBoZWFkZXI9eyBleGFtcGxlIH0gZm9vdGVyPXtmb290ZXJ9IGZvb3RlclN0eWxlID0ge3twYWRkaW5nOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxwcmU+PGNvZGUgY2xhc3NOYW1lPVwiaGxqcyBqYXZhc2NyaXB0XCI+eyBjb2RlIH08L2NvZGU+PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jbGFzcyBEZW1vR3JvdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAge0RlbW9BcnJheS5tYXAoKGNoaWxkLGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW8gZXhhbXBsZT0ge2NoaWxkLmV4YW1wbGV9IHRpdGxlPSB7Y2hpbGQudGl0bGV9IGNvZGU9IHtjaGlsZC5jb2RlfSBkZXNjPSB7Y2hpbGQuZGVzY30ga2V5PSB7aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxEZW1vR3JvdXAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbnBlckJlZURlbW8nKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGVtby9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29uID0gZXhwb3J0cy5Sb3cgPSBleHBvcnRzLkNvbCA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2wyID0gcmVxdWlyZSgnLi9Db2wnKTtcblxudmFyIF9Db2wzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sMik7XG5cbnZhciBfUm93MiA9IHJlcXVpcmUoJy4vUm93Jyk7XG5cbnZhciBfUm93MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdzIpO1xuXG52YXIgX0xheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG5cbnZhciBfTGF5b3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xheW91dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzLkNvbCA9IF9Db2wzW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuUm93ID0gX1JvdzNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Db24gPSBfTGF5b3V0MltcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjIuN0BiZWUtbGF5b3V0L2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjb21wb25lbnRDbGFzczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmVsZW1lbnQsIF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKipcbiAgICogeHPmmL7npLrliJfmlbBcbiAgICovXG4gIHhzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogc23mmL7npLrliJfmlbBcbiAgICovXG4gIHNtOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogbWTmmL7npLrliJfmlbBcbiAgICovXG4gIG1kOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogbGfmmL7npLrliJfmlbBcbiAgICovXG4gIGxnOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogeHPlgY/np7vliJfmlbBcbiAgICovXG4gIHhzT2Zmc2V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogc23lgY/np7vliJfmlbBcbiAgICovXG4gIHNtT2Zmc2V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogbWTlgY/np7vliJfmlbBcbiAgICovXG4gIG1kT2Zmc2V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogbGflgY/np7vliJfmlbBcbiAgICovXG4gIGxnT2Zmc2V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogeHPlj7PlgY/np7vliJfmlbBcbiAgICovXG4gIHhzUHVzaDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICBzbVB1c2g6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIC8qKlxuICAgKiBtZOWPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgbWRQdXNoOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogbGflj7PlgY/np7vliJfmlbBcbiAgICovXG4gIGxnUHVzaDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgLyoqXG4gICAqIHhz5bem5YGP56e75YiX5pWwXG4gICAqL1xuICB4c1B1bGw6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeW3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgc21QdWxsOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAvKipcbiAgICogbWTlt6blgY/np7vliJfmlbBcbiAgICovXG4gIG1kUHVsbDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5bem5YGP56e75YiX5pWwXG4gICAqL1xuICBsZ1B1bGw6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5udW1iZXJcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiAnZGl2JyxcbiAgY2xzUHJlZml4OiAndS1jb2wnXG59O1xuXG52YXIgREVWSUNFX1NJWkVTID0gWydsZycsICdtZCcsICdzbScsICd4cyddO1xuXG52YXIgQ29sID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2wpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3Byb3BzLmNvbXBvbmVudENsYXNzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjbHNQcmVmaXggPSBfcHJvcHMuY2xzUHJlZml4LFxuICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbXBvbmVudENsYXNzJywgJ2NsYXNzTmFtZScsICdjbHNQcmVmaXgnXSk7XG5cbiAgICB2YXIgdGJDbGFzcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIOWvueS8oOWFpXByb3Bz5YGa5qC35byP6L2s5YyWXG4gICAgICogQHR5cGUge1t0eXBlXX1cbiAgICAgKi9cbiAgICBERVZJQ0VfU0laRVMuZm9yRWFjaChmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgZnVuY3Rpb24gcG9wUHJvcChwcm9wU3VmZml4LCBtb2RpZmllcikge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSAnJyArIHNpemUgKyBwcm9wU3VmZml4O1xuICAgICAgICB2YXIgcHJvcFZhbHVlID0gb3RoZXJzW3Byb3BOYW1lXTtcblxuICAgICAgICBpZiAocHJvcFZhbHVlICE9IHVuZGVmaW5lZCAmJiBwcm9wVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHRiQ2xhc3MucHVzaChjbHNQcmVmaXggKyAnLScgKyBzaXplICsgbW9kaWZpZXIgKyAnLScgKyBwcm9wVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIG90aGVyc1twcm9wTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHBvcFByb3AoJycsICcnKTtcbiAgICAgIHBvcFByb3AoJ09mZnNldCcsICctb2Zmc2V0Jyk7XG4gICAgICBwb3BQcm9wKCdQdXNoJywgJy1wdXNoJyk7XG4gICAgICBwb3BQcm9wKCdQdWxsJywgJy1wdWxsJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkodGJDbGFzcywgY2xhc3NOYW1lKVxuICAgICAgfSwgb3RoZXJzKSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb2w7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2w7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMi43QGJlZS1sYXlvdXQvYnVpbGQvQ29sLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjIuNUBjbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvcFR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZWxlbWVudCwgX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZ10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2RpdicsXG4gIGNsc1ByZWZpeDogJ3Utcm93J1xufTtcblxudmFyIFJvdyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJvdygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm93KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUm93LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnRDbGFzcyxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb21wb25lbnRDbGFzcycsICdjbHNQcmVmaXgnLCAnY2xhc3NOYW1lJ10pO1xuXG4gICAgdmFyIGJzY2xhc3MgPSAnJyArIGNsc1ByZWZpeDtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShic2NsYXNzLCBjbGFzc05hbWUpXG4gICAgICB9KSxcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBSb3c7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Sb3cucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUm93LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSb3c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMi43QGJlZS1sYXlvdXQvYnVpbGQvUm93LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQWRkcyBgY29udGFpbmVyLWZsdWlkYCBjbGFzcy5cbiAgICovXG4gIGZsdWlkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgLyoqXG4gICAqIFlvdSBjYW4gdXNlIGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICBjb21wb25lbnRDbGFzczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmVsZW1lbnQsIF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBmbHVpZDogZmFsc2UsXG4gIGNsc1ByZWZpeDogJ3UtY29udGFpbmVyJ1xufTtcblxudmFyIENvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90YmNsYXNzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZsdWlkID0gX3Byb3BzLmZsdWlkLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnZmx1aWQnLCAnY29tcG9uZW50Q2xhc3MnLCAnY2xzUHJlZml4JywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciB0YmNsYXNzID0gKF90YmNsYXNzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfdGJjbGFzcywgJycgKyBjbHNQcmVmaXgsICFmbHVpZCksIF9kZWZpbmVQcm9wZXJ0eShfdGJjbGFzcywgY2xzUHJlZml4ICsgJy1mbHVpZCcsIGZsdWlkKSwgX3RiY2xhc3MpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRiY2xhc3MsIGNsYXNzTmFtZSlcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbjtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ29uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjIuN0BiZWUtbGF5b3V0L2J1aWxkL0xheW91dC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBhbmVsR3JvdXAgPSBleHBvcnRzLlBhbmVsID0gdW5kZWZpbmVkO1xuXG52YXIgX1BhbmVsMiA9IHJlcXVpcmUoJy4vUGFuZWwnKTtcblxudmFyIF9QYW5lbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lbDIpO1xuXG52YXIgX1BhbmVsR3JvdXAyID0gcmVxdWlyZSgnLi9QYW5lbEdyb3VwJyk7XG5cbnZhciBfUGFuZWxHcm91cDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYW5lbEdyb3VwMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzLlBhbmVsID0gX1BhbmVsM1tcImRlZmF1bHRcIl07XG5leHBvcnRzLlBhbmVsR3JvdXAgPSBfUGFuZWxHcm91cDNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS4wLjBAYmVlLXBhbmVsL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9iZWVUcmFuc2l0aW9uID0gcmVxdWlyZSgnYmVlLXRyYW5zaXRpb24nKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvL+aYr+WQpua3u+WKoOaKmOWPoFxuICBjb2xsYXBzaWJsZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uU2VsZWN0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgLy/lpLTpg6jnu4Tku7ZcbiAgaGVhZGVyOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubm9kZSxcbiAgaGVhZGVyU3R5bGU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nLCBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGhlYWRlckNvbnRlbnQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICAvL2Zvb3Rlcue7hOS7tlxuICBmb290ZXI6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ub2RlLFxuICBmb290ZXJTdHlsZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgLy/pu5jorqTmmK/lkKbmiZPlvIBcbiAgZGVmYXVsdEV4cGFuZGVkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgLy/mmK/lkKbmiZPlvIBcbiAgZXhwYW5kZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICAvL+avj+S4qnBhbmVs55qE5qCH6K6wXG4gIGV2ZW50S2V5OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYW55LFxuICBoZWFkZXJSb2xlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBwYW5lbFJvbGU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIC8v6aKc6ImyXG4gIGNvbG9yczogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mKFsncHJpbWFyeScsICdhY2NlbnQnLCAnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2RlZmF1bHQnLCAnYm9yZGVyZWQnXSksXG5cbiAgLy8gRnJvbSBDb2xsYXBzZS7nmoTmianlsZXliqjnlLtcbiAgb25FbnRlcjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRW50ZXJpbmc6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkVudGVyZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkV4aXQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkV4aXRpbmc6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkV4aXRlZDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRFeHBhbmRlZDogZmFsc2UsXG4gIGNsc1ByZWZpeDogXCJ1LXBhbmVsXCIsXG4gIGNvbG9yczogXCJkZWZhdWx0XCJcbn07XG5cbnZhciBQYW5lbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWwocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFuZWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGlja1RpdGxlID0gX3RoaXMuaGFuZGxlQ2xpY2tUaXRsZS5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLy/lpLTpg6jngrnlh7vkuovku7ZcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5oYW5kbGVDbGlja1RpdGxlID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2tUaXRsZShlKSB7XG4gICAgLy8g5LiN6K6p5LqL5Lu26L+b5YWl5LqL5Lu25rGgXG4gICAgZS5wZXJzaXN0KCk7XG4gICAgZS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pO1xuICAgIH1cbiAgfTtcblxuICAvL+a4suafk3BhbmVsaGVhZGVyXG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGNvbGxhcHNpYmxlLCBoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZCwgY2xzUHJlZml4KSB7XG4gICAgdmFyIHRpdGxlQ2xhc3NOYW1lID0gY2xzUHJlZml4ICsgJy10aXRsZSc7XG5cbiAgICBpZiAoIWNvbGxhcHNpYmxlKSB7XG4gICAgICBpZiAoIV9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGhlYWRlcikpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIV9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGhlYWRlcikpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDQnLFxuICAgICAgICB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyQ29udGVudCkge1xuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpLFxuICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlci5wcm9wcy5jaGlsZHJlbiwgaWQsIHJvbGUsIGV4cGFuZGVkKVxuICAgIH0pO1xuICB9O1xuXG4gIC8v5aaC5p6c5L2/55So6ZO+5o6l77yM5riy5p+T5Li6Yeagh+etvlxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckFuY2hvciA9IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZCkge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICBocmVmOiBpZCAmJiAnIycgKyBpZCxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBpZCxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBleHBhbmRlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBleHBhbmRlZCA/IG51bGwgOiAnY29sbGFwc2VkJ1xuICAgICAgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH07XG5cbiAgLy/lpoLmnpzmnInmipjlj6DliqjnlLvvvIzmuLLmn5Pmipjlj6DliqjnlLtcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJDb2xsYXBzaWJsZUJvZHkgPSBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCByb2xlLCBjaGlsZHJlbiwgY2xzUHJlZml4LCBhbmltYXRpb25Ib29rcykge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX2JlZVRyYW5zaXRpb24uQ29sbGFwc2UsXG4gICAgICBfZXh0ZW5kcyh7ICdpbic6IGV4cGFuZGVkIH0sIGFuaW1hdGlvbkhvb2tzKSxcbiAgICAgIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHNQcmVmaXggKyAnLWNvbGxhcHNlJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhZXhwYW5kZWRcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICAvL+a4suafk3BhbmVsYm9keVxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckJvZHkgPSBmdW5jdGlvbiByZW5kZXJCb2R5KHJhd0NoaWxkcmVuLCBjbHNQcmVmaXgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gW107XG5cbiAgICB2YXIgYm9keUNsYXNzTmFtZSA9IGNsc1ByZWZpeCArICctYm9keSc7XG5cbiAgICAvL+a3u+WKoOWIsGJvZHnnmoRjaGlsZHJlbuS4rVxuICAgIGZ1bmN0aW9uIG1heWJlQWRkQm9keSgpIHtcbiAgICAgIGlmICghYm9keUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOe7meWtkOe7hOS7tua3u+WKoGtlee+8jOS4uuS6huS5i+WQjuinpuWPkeS6i+S7tuaXtuS9v+eUqFxuICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IGNoaWxkcmVuLmxlbmd0aCwgY2xhc3NOYW1lOiBib2R5Q2xhc3NOYW1lIH0sXG4gICAgICAgIGJvZHlDaGlsZHJlblxuICAgICAgKSk7XG5cbiAgICAgIGJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8v6L2s5o2i5Li65pWw57uE77yM5pa55L6/5aSN55SoXG4gICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4udG9BcnJheShyYXdDaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCkge1xuICAgICAgICBtYXliZUFkZEJvZHkoKTtcblxuICAgICAgICAvL+Wwhuagh+ekumZpbGzorr7nva7kuLp1bmRlZmluZWRcbiAgICAgICAgY2hpbGRyZW4ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHsgZmlsbDogdW5kZWZpbmVkIH0pKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIG1heWJlQWRkQm9keSgpO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbGxhcHNpYmxlID0gX3Byb3BzLmNvbGxhcHNpYmxlLFxuICAgICAgICBoZWFkZXIgPSBfcHJvcHMuaGVhZGVyLFxuICAgICAgICBpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgZm9vdGVyID0gX3Byb3BzLmZvb3RlcixcbiAgICAgICAgcHJvcHNFeHBhbmRlZCA9IF9wcm9wcy5leHBhbmRlZCxcbiAgICAgICAgZm9vdGVyU3R5bGUgPSBfcHJvcHMuZm9vdGVyU3R5bGUsXG4gICAgICAgIGhlYWRlclN0eWxlID0gX3Byb3BzLmhlYWRlclN0eWxlLFxuICAgICAgICBoZWFkZXJSb2xlID0gX3Byb3BzLmhlYWRlclJvbGUsXG4gICAgICAgIHBhbmVsUm9sZSA9IF9wcm9wcy5wYW5lbFJvbGUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbG9ycyA9IF9wcm9wcy5jb2xvcnMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBvbkVudGVyID0gX3Byb3BzLm9uRW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmcgPSBfcHJvcHMub25FbnRlcmluZyxcbiAgICAgICAgb25FbnRlcmVkID0gX3Byb3BzLm9uRW50ZXJlZCxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb25FeGl0ID0gX3Byb3BzLm9uRXhpdCxcbiAgICAgICAgaGVhZGVyQ29udGVudCA9IF9wcm9wcy5oZWFkZXJDb250ZW50LFxuICAgICAgICBvbkV4aXRpbmcgPSBfcHJvcHMub25FeGl0aW5nLFxuICAgICAgICBvbkV4aXRlZCA9IF9wcm9wcy5vbkV4aXRlZCxcbiAgICAgICAgZGVmYXVsdEV4cGFuZGVkID0gX3Byb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgICAgZXZlbnRLZXkgPSBfcHJvcHMuZXZlbnRLZXksXG4gICAgICAgIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29sbGFwc2libGUnLCAnaGVhZGVyJywgJ2lkJywgJ2Zvb3RlcicsICdleHBhbmRlZCcsICdmb290ZXJTdHlsZScsICdoZWFkZXJTdHlsZScsICdoZWFkZXJSb2xlJywgJ3BhbmVsUm9sZScsICdjbGFzc05hbWUnLCAnY29sb3JzJywgJ2NoaWxkcmVuJywgJ29uRW50ZXInLCAnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnY2xzUHJlZml4JywgJ29uRXhpdCcsICdoZWFkZXJDb250ZW50JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCcsICdkZWZhdWx0RXhwYW5kZWQnLCAnZXZlbnRLZXknLCAnb25TZWxlY3QnXSk7XG5cbiAgICB2YXIgZXhwYW5kZWQgPSBwcm9wc0V4cGFuZGVkICE9IG51bGwgPyBwcm9wc0V4cGFuZGVkIDogdGhpcy5zdGF0ZS5leHBhbmRlZDtcblxuICAgIHZhciBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1snJyArIGNsc1ByZWZpeF0gPSB0cnVlO1xuICAgIGNsYXNzZXNbY2xzUHJlZml4ICsgJy0nICsgY29sb3JzXSA9IHRydWU7XG5cbiAgICB2YXIgaGVhZGVyQ2xhc3MgPSBfZGVmaW5lUHJvcGVydHkoe30sIGNsc1ByZWZpeCArICctaGVhZGluZycsIHRydWUpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBpZDogY29sbGFwc2libGUgPyBudWxsIDogaWRcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyICYmIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGhlYWRlckNsYXNzKSwgc3R5bGU6IGhlYWRlclN0eWxlLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrVGl0bGUgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXIoY29sbGFwc2libGUsIGhlYWRlciwgaWQsIGhlYWRlclJvbGUsIGV4cGFuZGVkLCBjbHNQcmVmaXgpXG4gICAgICApLFxuICAgICAgY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlQm9keShpZCwgZXhwYW5kZWQsIHBhbmVsUm9sZSwgY2hpbGRyZW4sIGNsc1ByZWZpeCwgeyBvbkVudGVyOiBvbkVudGVyLCBvbkVudGVyaW5nOiBvbkVudGVyaW5nLCBvbkVudGVyZWQ6IG9uRW50ZXJlZCwgb25FeGl0OiBvbkV4aXQsIG9uRXhpdGluZzogb25FeGl0aW5nLCBvbkV4aXRlZDogb25FeGl0ZWQgfSkgOiB0aGlzLnJlbmRlckJvZHkoY2hpbGRyZW4sIGNsc1ByZWZpeCksXG4gICAgICBmb290ZXIgJiYgX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbHNQcmVmaXggKyAnLWZvb3RlcicsIHN0eWxlOiBmb290ZXJTdHlsZSB9LFxuICAgICAgICBmb290ZXJcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQYW5lbDtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuUGFuZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGFuZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhbmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjAuMEBiZWUtcGFuZWwvYnVpbGQvUGFuZWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GYWRlID0gZXhwb3J0cy5Db2xsYXBzZSA9IGV4cG9ydHMuVHJhbnNpdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9UcmFuc2l0aW9uMiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xuXG52YXIgX1RyYW5zaXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbjIpO1xuXG52YXIgX0NvbGxhcHNlMiA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZTIpO1xuXG52YXIgX0ZhZGUyID0gcmVxdWlyZSgnLi9GYWRlJyk7XG5cbnZhciBfRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzLlRyYW5zaXRpb24gPSBfVHJhbnNpdGlvbjNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Db2xsYXBzZSA9IF9Db2xsYXBzZTNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5GYWRlID0gX0ZhZGUzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMC4wQGJlZS10cmFuc2l0aW9uL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCdkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9wcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BlcnRpZXMpO1xuXG52YXIgX29uID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvZXZlbnRzL29uJyk7XG5cbnZhciBfb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb24pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0gX3Byb3BlcnRpZXMyW1wiZGVmYXVsdFwiXS5lbmQ7XG5cbi8v6K6+572u54q25oCB56CBXG52YXIgVU5NT1VOVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSAwO1xudmFyIEVYSVRFRCA9IGV4cG9ydHMuRVhJVEVEID0gMTtcbnZhciBFTlRFUklORyA9IGV4cG9ydHMuRU5URVJJTkcgPSAyO1xudmFyIEVOVEVSRUQgPSBleHBvcnRzLkVOVEVSRUQgPSAzO1xudmFyIEVYSVRJTkcgPSBleHBvcnRzLkVYSVRJTkcgPSA0O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6Kem5Y+R5Yqo55S7XG4gICAqL1xuICBcImluXCI6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKlxuICAgKiDkuI3mmL7npLrnmoTml7blgJnmmK/lkKbnp7vpmaTnu4Tku7ZcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKlxuICAgKiDlpoLmnpzorr7nva7kuLrpu5jorqTmmL7npLrvvIzmjILovb3ml7bmmL7npLrliqjnlLtcbiAgICovXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKlxuICAgKiDorr7nva7otoXml7bml7bpl7TvvIzpmLLmraLlh7rnjrDpl67popjvvIzlj6/orr7nva7kuLo+PeWKqOeUu+aXtumXtFxuICAgKi9cbiAgdGltZW91dDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm51bWJlcixcblxuICAvKipcbiAgICog6YCA5Ye657uE5Lu25pe25re75Yqg55qEY2xhc3NcbiAgICovXG4gIGV4aXRlZENsYXNzTmFtZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgLyoqXG4gICAqIOmAgOWHuue7hOS7tuS4rea3u+WKoOeahGNsYXNzXG4gICAqL1xuICBleGl0aW5nQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75ZCO5re75Yqg55qEY2xhc3NcbiAgICovXG4gIGVudGVyZWRDbGFzc05hbWU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvml7bmt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZW50ZXJpbmdDbGFzc05hbWU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+W8gOWni+aXtueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FbnRlcjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvkuK3nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRW50ZXJpbmc6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75ZCO55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkVudGVyZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75byA5aeL5pe255qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75Lit55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXRpbmc6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75ZCO55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXRlZDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmNcbn07XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBcImluXCI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIHRpbWVvdXQ6IDUwMDAsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuXG4vKipcbiAqIOWKqOeUu+e7hOS7tlxuICovXG5cbnZhciBUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyYW5zaXRpb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIHZhciBpbml0aWFsU3RhdHVzID0gdm9pZCAwO1xuICAgIGlmIChwcm9wc1tcImluXCJdKSB7XG4gICAgICAvLyDlnKhjb21wb25lbnRkaWRtb3VudOaXtuW8gOWni+aJp+ihjOWKqOeUu1xuICAgICAgaW5pdGlhbFN0YXR1cyA9IHByb3BzLnRyYW5zaXRpb25BcHBlYXIgPyBFWElURUQgOiBFTlRFUkVEO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0aWFsU3RhdHVzID0gcHJvcHMudW5tb3VudE9uRXhpdCA/IFVOTU9VTlRFRCA6IEVYSVRFRDtcbiAgICB9XG4gICAgX3RoaXMuc3RhdGUgPSB7IHN0YXR1czogaW5pdGlhbFN0YXR1cyB9O1xuXG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyYW5zaXRpb25BcHBlYXIgJiYgdGhpcy5wcm9wc1tcImluXCJdKSB7XG4gICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wc1tcImluXCJdICYmIHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgICAgLy8g5ZyoY29tcG9uZW50RGlkVXBkYXRl5omn6KGM5Yqo55S7LlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIC8vIOW9k+S9v+eUqHVubW91bnRPbkV4aXTml7bvvIxleGl0ZWTkuLpleGl0aW5n5ZKMdW5tb25055qE6L+H5rih54q25oCBXG4gICAgICBpZiAodGhpcy5wcm9wc1tcImluXCJdKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogVU5NT1VOVEVEIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g56Gu5L+d5Y+q5ZON5bqUcHJvcOWPmOWMllxuICAgIGlmICh0aGlzLl9uZWVkc1VwZGF0ZSkge1xuICAgICAgdGhpcy5fbmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMucHJvcHNbXCJpblwiXSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFWElUSU5HKSB7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlhbbku5bvvIzlvZPmiJHku6zlt7Lnu4/ovpPlhaXmiJbovpPlh7pcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUV4aXQodGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5oiR5Lus5bey57uP6L6T5YWl5oiW6L6T5Ye65a6M5oiQXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIC8vIOi/memHjOaOpeaUtuaWsHByb3BzXG4gICAgcHJvcHMub25FbnRlcihub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUklORyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlKTtcblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVOVEVSRUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChwcm9wcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTJbXCJkZWZhdWx0XCJdLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgcHJvcHMub25FeGl0KG5vZGUpO1xuXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoeyBzdGF0dXM6IEVYSVRFRCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIOehruS/neWcqOe7hOS7tumUgOavgeWQjuaMgui1t+eahHNldFN0YXRl6KKr5raI6ZmkXG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbkVuZEV2ZW50ID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm5leHRDYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF9vbjJbXCJkZWZhdWx0XCJdKShub2RlLCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRoaXMucHJvcHMudGltZW91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjaGlsZHJlbicsICdjbGFzc05hbWUnXSk7XG5cbiAgICBPYmplY3Qua2V5cyhUcmFuc2l0aW9uLnByb3BUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZGVsZXRlIGNoaWxkUHJvcHNba2V5XTtcbiAgICB9KTtcblxuICAgIHZhciB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdm9pZCAwO1xuICAgIGlmIChzdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZXhpdGVkQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZW50ZXJpbmdDbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmVudGVyZWRDbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVYSVRJTkcpIHtcbiAgICAgIHRyYW5zaXRpb25DbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4aXRpbmdDbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudChjaGlsZCwgX2V4dGVuZHMoe30sIGNoaWxkUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NOYW1lLCB0cmFuc2l0aW9uQ2xhc3NOYW1lKVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUcmFuc2l0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS4wLjBAYmVlLXRyYW5zaXRpb24vYnVpbGQvVHJhbnNpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYW5pbWF0aW9uRW5kID0gZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGV4cG9ydHMudHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuXG52YXIgX2luRE9NID0gcmVxdWlyZSgnLi4vdXRpbC9pbkRPTScpO1xuXG52YXIgX2luRE9NMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luRE9NKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xudmFyIHByZWZpeCA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkVuZCA9IHZvaWQgMDtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25UaW1pbmcgPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdm9pZCAwO1xudmFyIGFuaW1hdGlvbk5hbWUgPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSB2b2lkIDAsXG4gICAgYW5pbWF0aW9uVGltaW5nID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkRlbGF5ID0gdm9pZCAwO1xuXG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIHZhciBfZ2V0VHJhbnNpdGlvblByb3BlcnQgPSBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpO1xuXG4gIHByZWZpeCA9IF9nZXRUcmFuc2l0aW9uUHJvcGVydC5wcmVmaXg7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQudHJhbnNpdGlvbkVuZDtcbiAgZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQgPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQuYW5pbWF0aW9uRW5kO1xuXG5cbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyAnLScgKyB0cmFuc2Zvcm07XG4gIGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5ID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXByb3BlcnR5JztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZHVyYXRpb24nO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IHRyYW5zaXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJztcblxuICBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lID0gcHJlZml4ICsgJy1hbmltYXRpb24tbmFtZSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbiA9IHByZWZpeCArICctYW5pbWF0aW9uLWR1cmF0aW9uJztcbiAgZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmcgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1kZWxheSc7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBhbmltYXRpb25EZWxheSA9IHByZWZpeCArICctYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbic7XG59XG5cbmV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uVGltaW5nO1xuZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXk7XG5leHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG5leHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBhbmltYXRpb25OYW1lO1xuZXhwb3J0cy5hbmltYXRpb25EdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmc7XG5leHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIGVuZDogdHJhbnNpdGlvbkVuZCxcbiAgcHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdGltaW5nOiB0cmFuc2l0aW9uVGltaW5nLFxuICBkZWxheTogdHJhbnNpdGlvbkRlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG59O1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0aWVzKCkge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcblxuICB2YXIgdmVuZG9yTWFwID0ge1xuICAgIE86IGZ1bmN0aW9uIE8oZSkge1xuICAgICAgcmV0dXJuICdvJyArIGUudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIE1vejogZnVuY3Rpb24gTW96KGUpIHtcbiAgICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICBXZWJraXQ6IGZ1bmN0aW9uIFdlYmtpdChlKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdCcgKyBlO1xuICAgIH0sXG4gICAgbXM6IGZ1bmN0aW9uIG1zKGUpIHtcbiAgICAgIHJldHVybiAnTVMnICsgZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlbmRvcnMgPSBPYmplY3Qua2V5cyh2ZW5kb3JNYXApO1xuXG4gIHZhciB0cmFuc2l0aW9uRW5kID0gdm9pZCAwLFxuICAgICAgYW5pbWF0aW9uRW5kID0gdm9pZCAwO1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZlbmRvciA9IHZlbmRvcnNbaV07XG5cbiAgICBpZiAodmVuZG9yICsgJ1RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHtcbiAgICAgIHByZWZpeCA9ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgdHJhbnNpdGlvbkVuZCA9IHZlbmRvck1hcFt2ZW5kb3JdKCdUcmFuc2l0aW9uRW5kJyk7XG4gICAgICBhbmltYXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnQW5pbWF0aW9uRW5kJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIXRyYW5zaXRpb25FbmQgJiYgJ3RyYW5zaXRpb25Qcm9wZXJ0eScgaW4gc3R5bGUpIHRyYW5zaXRpb25FbmQgPSAndHJhbnNpdGlvbmVuZCc7XG5cbiAgaWYgKCFhbmltYXRpb25FbmQgJiYgJ2FuaW1hdGlvbk5hbWUnIGluIHN0eWxlKSBhbmltYXRpb25FbmQgPSAnYW5pbWF0aW9uZW5kJztcblxuICBzdHlsZSA9IG51bGw7XG5cbiAgcmV0dXJuIHsgYW5pbWF0aW9uRW5kOiBhbmltYXRpb25FbmQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsIHByZWZpeDogcHJlZml4IH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4zLjIuMUBkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjMuMi4xQGRvbS1oZWxwZXJzL3V0aWwvaW5ET00uanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbkRPTSA9IHJlcXVpcmUoJy4uL3V0aWwvaW5ET00nKTtcblxudmFyIF9pbkRPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbkRPTSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBvbiA9IGZ1bmN0aW9uIG9uKCkge307XG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIG9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfTtlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS50YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgIGUuY3VycmVudFRhcmdldCA9IG5vZGU7XG4gICAgICAgIGhhbmRsZXIuY2FsbChub2RlLCBlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0oKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjMuMi4xQGRvbS1oZWxwZXJzL2V2ZW50cy9vbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9zdHlsZSA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3N0eWxlJyk7XG5cbnZhciBfc3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGUpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG52YXIgX2NhcGl0YWxpemUgPSByZXF1aXJlKCcuL3V0aWwvY2FwaXRhbGl6ZScpO1xuXG52YXIgX2NhcGl0YWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FwaXRhbGl6ZSk7XG5cbnZhciBfdGlucGVyQmVlQ29yZSA9IHJlcXVpcmUoJ3RpbnBlci1iZWUtY29yZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIE1BUkdJTlMgPSB7XG4gIGhlaWdodDogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHdpZHRoOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXVxufTtcblxuLy8gcmVhZGluZyBhIGRpbWVuc2lvbiBwcm9wIHdpbGwgY2F1c2UgdGhlIGJyb3dzZXIgdG8gcmVjYWxjdWxhdGUsXG4vLyB3aGljaCB3aWxsIGxldCBvdXIgYW5pbWF0aW9ucyB3b3JrXG5mdW5jdGlvbiB0cmlnZ2VyQnJvd3NlclJlZmxvdyhub2RlKSB7XG4gIG5vZGUub2Zmc2V0SGVpZ2h0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25WYWx1ZShkaW1lbnNpb24sIGVsZW0pIHtcbiAgdmFyIHZhbHVlID0gZWxlbVsnb2Zmc2V0JyArICgwLCBfY2FwaXRhbGl6ZTJbXCJkZWZhdWx0XCJdKShkaW1lbnNpb24pXTtcbiAgdmFyIG1hcmdpbnMgPSBNQVJHSU5TW2RpbWVuc2lvbl07XG5cbiAgcmV0dXJuIHZhbHVlICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzBdKSwgMTApICsgcGFyc2VJbnQoKDAsIF9zdHlsZTJbXCJkZWZhdWx0XCJdKShlbGVtLCBtYXJnaW5zWzFdKSwgMTApO1xufVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZXhwYW5kIG9yIGNvbGxhcHNlIGFuaW1hdGlvblxuICAgKi9cbiAgXCJpblwiOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKipcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGNvbGxhcHNlZFxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgZXhwYW5kIGFuaW1hdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLCBpZiBpdCBpcyBpbml0aWFsbHlcbiAgICogc2hvd25cbiAgICovXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKlxuICAgKiBEdXJhdGlvbiBvZiB0aGUgY29sbGFwc2UgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXRcbiAgICogZmluaXNoaW5nIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZFxuICAgKiBldmVudHMgYXJlIGNhbmNlbGVkXG4gICAqL1xuICB0aW1lb3V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBleHBhbmRzXG4gICAqL1xuICBvbkVudGVyOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGV4cGFuZFxuICAgKi9cbiAgb25FbnRlcmluZzogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBleHBhbmRlZFxuICAgKi9cbiAgb25FbnRlcmVkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGNvbGxhcHNlc1xuICAgKi9cbiAgb25FeGl0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgc3RhcnRzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBvbkV4aXRpbmc6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgY29sbGFwc2VkXG4gICAqL1xuICBvbkV4aXRlZDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBkaW1lbnNpb24gdXNlZCB3aGVuIGNvbGxhcHNpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgKiBkaW1lbnNpb25cbiAgICpcbiAgICogX05vdGU6IEJvb3RzdHJhcCBvbmx5IHBhcnRpYWxseSBzdXBwb3J0cyAnd2lkdGgnIVxuICAgKiBZb3Ugd2lsbCBuZWVkIHRvIHN1cHBseSB5b3VyIG93biBDU1MgYW5pbWF0aW9uIGZvciB0aGUgYC53aWR0aGAgQ1NTIGNsYXNzLl9cbiAgICovXG4gIGRpbWVuc2lvbjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mKFsnaGVpZ2h0JywgJ3dpZHRoJ10pLCBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGhlaWdodCBvciB3aWR0aCBvZiB0aGUgYW5pbWF0aW5nIERPTSBub2RlXG4gICAqXG4gICAqIEFsbG93cyBmb3IgcHJvdmlkaW5nIHNvbWUgY3VzdG9tIGxvZ2ljIGZvciBob3cgbXVjaCB0aGUgQ29sbGFwc2UgY29tcG9uZW50XG4gICAqIHNob3VsZCBhbmltYXRlIGluIGl0cyBzcGVjaWZpZWQgZGltZW5zaW9uLiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudFxuICAgKiBkaW1lbnNpb24gcHJvcCB2YWx1ZSBhbmQgdGhlIERPTSBub2RlLlxuICAgKi9cbiAgZ2V0RGltZW5zaW9uVmFsdWU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKlxuICAgKiBBUklBIHJvbGUgb2YgY29sbGFwc2libGUgZWxlbWVudFxuICAgKi9cbiAgcm9sZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdGltZW91dDogMzAwLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG5cbiAgZGltZW5zaW9uOiAnaGVpZ2h0JyxcbiAgZ2V0RGltZW5zaW9uVmFsdWU6IGdldERpbWVuc2lvblZhbHVlXG59O1xuXG52YXIgQ29sbGFwc2UgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sbGFwc2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbGxhcHNlKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbGxhcHNlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXIgPSBfdGhpcy5oYW5kbGVFbnRlci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFbnRlcmluZyA9IF90aGlzLmhhbmRsZUVudGVyaW5nLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUVudGVyZWQgPSBfdGhpcy5oYW5kbGVFbnRlcmVkLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUV4aXQgPSBfdGhpcy5oYW5kbGVFeGl0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUV4aXRpbmcgPSBfdGhpcy5oYW5kbGVFeGl0aW5nLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qIC0tIEV4cGFuZGluZyAtLSAqL1xuXG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUVudGVyID0gZnVuY3Rpb24gaGFuZGxlRW50ZXIoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSAnMCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJpbmcoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9nZXRTY3JvbGxEaW1lbnNpb25WYWx1ZShlbGVtLCBkaW1lbnNpb24pO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFbnRlcmVkID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJlZChlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IG51bGw7XG4gIH07XG5cbiAgLyogLS0gQ29sbGFwc2luZyAtLSAqL1xuXG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0KGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5wcm9wcy5nZXREaW1lbnNpb25WYWx1ZShkaW1lbnNpb24sIGVsZW0pICsgJ3B4JztcbiAgICB0cmlnZ2VyQnJvd3NlclJlZmxvdyhlbGVtKTtcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRXhpdGluZyA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRpbmcoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSAnMCc7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLl9kaW1lbnNpb24gPSBmdW5jdGlvbiBfZGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wcm9wcy5kaW1lbnNpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLnByb3BzLmRpbWVuc2lvbigpIDogdGhpcy5wcm9wcy5kaW1lbnNpb247XG4gIH07XG5cbiAgLy8gZm9yIHRlc3RpbmdcblxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5fZ2V0U2Nyb2xsRGltZW5zaW9uVmFsdWUgPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsRGltZW5zaW9uVmFsdWUoZWxlbSwgZGltZW5zaW9uKSB7XG4gICAgcmV0dXJuIGVsZW1bJ3Njcm9sbCcgKyAoMCwgX2NhcGl0YWxpemUyW1wiZGVmYXVsdFwiXSkoZGltZW5zaW9uKV0gKyAncHgnO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uRW50ZXIgPSBfcHJvcHMub25FbnRlcixcbiAgICAgICAgb25FbnRlcmluZyA9IF9wcm9wcy5vbkVudGVyaW5nLFxuICAgICAgICBvbkVudGVyZWQgPSBfcHJvcHMub25FbnRlcmVkLFxuICAgICAgICBvbkV4aXQgPSBfcHJvcHMub25FeGl0LFxuICAgICAgICBvbkV4aXRpbmcgPSBfcHJvcHMub25FeGl0aW5nLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb25FbnRlcicsICdvbkVudGVyaW5nJywgJ29uRW50ZXJlZCcsICdvbkV4aXQnLCAnb25FeGl0aW5nJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5kaW1lbnNpb247XG4gICAgZGVsZXRlIHByb3BzLmdldERpbWVuc2lvblZhbHVlO1xuXG4gICAgdmFyIGhhbmRsZUVudGVyID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlciwgb25FbnRlcik7XG4gICAgdmFyIGhhbmRsZUVudGVyaW5nID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlcmluZywgb25FbnRlcmluZyk7XG4gICAgdmFyIGhhbmRsZUVudGVyZWQgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUVudGVyZWQsIG9uRW50ZXJlZCk7XG4gICAgdmFyIGhhbmRsZUV4aXQgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUV4aXQsIG9uRXhpdCk7XG4gICAgdmFyIGhhbmRsZUV4aXRpbmcgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUV4aXRpbmcsIG9uRXhpdGluZyk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLl9kaW1lbnNpb24oKSA9PT0gJ3dpZHRoJ1xuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbjJbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogcHJvcHMucm9sZSA/IHByb3BzW1wiaW5cIl0gOiBudWxsLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgIGV4aXRlZENsYXNzTmFtZTogJ2NvbGxhcHNlJyxcbiAgICAgIGV4aXRpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgIGVudGVyZWRDbGFzc05hbWU6ICdjb2xsYXBzZSBpbicsXG4gICAgICBlbnRlcmluZ0NsYXNzTmFtZTogJ2NvbGxhcHNpbmcnLFxuICAgICAgb25FbnRlcjogaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogaGFuZGxlRW50ZXJlZCxcbiAgICAgIG9uRXhpdDogaGFuZGxlRXhpdCxcbiAgICAgIG9uRXhpdGluZzogaGFuZGxlRXhpdGluZ1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkNvbGxhcHNlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2xsYXBzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS4wLjBAYmVlLXRyYW5zaXRpb24vYnVpbGQvQ29sbGFwc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0eWxlO1xuXG52YXIgX2NhbWVsaXplU3R5bGUgPSByZXF1aXJlKCcuLi91dGlsL2NhbWVsaXplU3R5bGUnKTtcblxudmFyIF9jYW1lbGl6ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplU3R5bGUpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbC9oeXBoZW5hdGVTdHlsZScpO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlKTtcblxudmFyIF9nZXRDb21wdXRlZFN0eWxlMiA9IHJlcXVpcmUoJy4vZ2V0Q29tcHV0ZWRTdHlsZScpO1xuXG52YXIgX2dldENvbXB1dGVkU3R5bGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Q29tcHV0ZWRTdHlsZTIpO1xuXG52YXIgX3JlbW92ZVN0eWxlID0gcmVxdWlyZSgnLi9yZW1vdmVTdHlsZScpO1xuXG52YXIgX3JlbW92ZVN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZVN0eWxlKTtcblxudmFyIF9wcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbi9wcm9wZXJ0aWVzJyk7XG5cbnZhciBfaXNUcmFuc2Zvcm0gPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uL2lzVHJhbnNmb3JtJyk7XG5cbnZhciBfaXNUcmFuc2Zvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHlsZShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIGNzcyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtcyA9ICcnO1xuICB2YXIgcHJvcHMgPSBwcm9wZXJ0eTtcblxuICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbm9kZS5zdHlsZVsoMCwgX2NhbWVsaXplU3R5bGUyLmRlZmF1bHQpKHByb3BlcnR5KV0gfHwgKDAsIF9nZXRDb21wdXRlZFN0eWxlMy5kZWZhdWx0KShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCgwLCBfaHlwaGVuYXRlU3R5bGUyLmRlZmF1bHQpKHByb3BlcnR5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChwcm9wcyA9IHt9KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICAoMCwgX3JlbW92ZVN0eWxlMi5kZWZhdWx0KShub2RlLCAoMCwgX2h5cGhlbmF0ZVN0eWxlMi5kZWZhdWx0KShrZXkpKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNUcmFuc2Zvcm0yLmRlZmF1bHQpKGtleSkpIHtcbiAgICAgIHRyYW5zZm9ybXMgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3MgKz0gKDAsIF9oeXBoZW5hdGVTdHlsZTIuZGVmYXVsdCkoa2V5KSArICc6ICcgKyB2YWx1ZSArICc7JztcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0cmFuc2Zvcm1zKSB7XG4gICAgY3NzICs9IF9wcm9wZXJ0aWVzLnRyYW5zZm9ybSArICc6ICcgKyB0cmFuc2Zvcm1zICsgJzsnO1xuICB9XG5cbiAgbm9kZS5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGNzcztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMy4yLjFAZG9tLWhlbHBlcnMvc3R5bGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbWVsaXplU3R5bGVOYW1lO1xuXG52YXIgX2NhbWVsaXplID0gcmVxdWlyZSgnLi9jYW1lbGl6ZScpO1xuXG52YXIgX2NhbWVsaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbWVsaXplKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1zUGF0dGVybiA9IC9eLW1zLS87IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8yYWViOGEyYTZiZWIwMDYxN2E0MjE3ZjdmODI4NDkyNGZhMmFkODE5L3NyYy92ZW5kb3IvY29yZS9jYW1lbGl6ZVN0eWxlTmFtZS5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuZnVuY3Rpb24gY2FtZWxpemVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiAoMCwgX2NhbWVsaXplMi5kZWZhdWx0KShzdHJpbmcucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjMuMi4xQGRvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbGl6ZTtcbnZhciBySHlwaGVuID0gLy0oLikvZztcblxuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShySHlwaGVuLCBmdW5jdGlvbiAoXywgY2hyKSB7XG4gICAgcmV0dXJuIGNoci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4zLjIuMUBkb20taGVscGVycy91dGlsL2NhbWVsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG5cbnZhciBfaHlwaGVuYXRlID0gcmVxdWlyZSgnLi9oeXBoZW5hdGUnKTtcblxudmFyIF9oeXBoZW5hdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1zUGF0dGVybiA9IC9ebXMtLzsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxMy0yMDE0LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzJhZWI4YTJhNmJlYjAwNjE3YTQyMTdmN2Y4Mjg0OTI0ZmEyYWQ4MTkvc3JjL3ZlbmRvci9jb3JlL2h5cGhlbmF0ZVN0eWxlTmFtZS5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgcmV0dXJuICgwLCBfaHlwaGVuYXRlMi5kZWZhdWx0KShzdHJpbmcpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4zLjIuMUBkb20taGVscGVycy91dGlsL2h5cGhlbmF0ZVN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoeXBoZW5hdGU7XG5cbnZhciByVXBwZXIgPSAvKFtBLVpdKS9nO1xuXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShyVXBwZXIsICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4zLjIuMUBkb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2dldENvbXB1dGVkU3R5bGU7XG5cbnZhciBfY2FtZWxpemVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2FtZWxpemVTdHlsZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBycG9zaXRpb24gPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgcm51bW5vbnB4ID0gL14oWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpKSg/IXB4KVthLXolXSskL2k7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBFbGVtZW50IHBhc3NlZCB0byBgZ2V0Q29tcHV0ZWRTdHlsZSgpYCcpO1xuICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHJldHVybiAnZGVmYXVsdFZpZXcnIGluIGRvYyA/IGRvYy5kZWZhdWx0Vmlldy5vcGVuZXIgPyBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpIDoge1xuICAgIC8vaWUgOCBcIm1hZ2ljXCIgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjExLXN0YWJsZS9zcmMvY3NzL2N1ckNTUy5qcyNMNzJcbiAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHByb3ApIHtcbiAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG5cbiAgICAgIHByb3AgPSAoMCwgX2NhbWVsaXplU3R5bGUyLmRlZmF1bHQpKHByb3ApO1xuXG4gICAgICBpZiAocHJvcCA9PSAnZmxvYXQnKSBwcm9wID0gJ3N0eWxlRmxvYXQnO1xuXG4gICAgICB2YXIgY3VycmVudCA9IG5vZGUuY3VycmVudFN0eWxlW3Byb3BdIHx8IG51bGw7XG5cbiAgICAgIGlmIChjdXJyZW50ID09IG51bGwgJiYgc3R5bGUgJiYgc3R5bGVbcHJvcF0pIGN1cnJlbnQgPSBzdHlsZVtwcm9wXTtcblxuICAgICAgaWYgKHJudW1ub25weC50ZXN0KGN1cnJlbnQpICYmICFycG9zaXRpb24udGVzdChwcm9wKSkge1xuICAgICAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgICAgIHZhciBsZWZ0ID0gc3R5bGUubGVmdDtcbiAgICAgICAgdmFyIHJ1blN0eWxlID0gbm9kZS5ydW50aW1lU3R5bGU7XG4gICAgICAgIHZhciByc0xlZnQgPSBydW5TdHlsZSAmJiBydW5TdHlsZS5sZWZ0O1xuXG4gICAgICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICAgICAgaWYgKHJzTGVmdCkgcnVuU3R5bGUubGVmdCA9IG5vZGUuY3VycmVudFN0eWxlLmxlZnQ7XG5cbiAgICAgICAgc3R5bGUubGVmdCA9IHByb3AgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQgPSBzdHlsZS5waXhlbExlZnQgKyAncHgnO1xuXG4gICAgICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgc3R5bGUubGVmdCA9IGxlZnQ7XG4gICAgICAgIGlmIChyc0xlZnQpIHJ1blN0eWxlLmxlZnQgPSByc0xlZnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMy4yLjFAZG9tLWhlbHBlcnMvc3R5bGUvZ2V0Q29tcHV0ZWRTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVtb3ZlU3R5bGU7XG5mdW5jdGlvbiByZW1vdmVTdHlsZShub2RlLCBrZXkpIHtcbiAgcmV0dXJuICdyZW1vdmVQcm9wZXJ0eScgaW4gbm9kZS5zdHlsZSA/IG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KSA6IG5vZGUuc3R5bGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjMuMi4xQGRvbS1oZWxwZXJzL3N0eWxlL3JlbW92ZVN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVHJhbnNmb3JtO1xudmFyIHN1cHBvcnRlZFRyYW5zZm9ybXMgPSAvXigodHJhbnNsYXRlfHJvdGF0ZXxzY2FsZSkoWHxZfFp8M2QpP3xtYXRyaXgoM2QpP3xwZXJzcGVjdGl2ZXxza2V3KFh8WSk/KSQvaTtcblxuZnVuY3Rpb24gaXNUcmFuc2Zvcm0ocHJvcGVydHkpIHtcbiAgcmV0dXJuICEhKHByb3BlcnR5ICYmIHN1cHBvcnRlZFRyYW5zZm9ybXMudGVzdChwcm9wZXJ0eSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjMuMi4xQGRvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjYXBpdGFsaXplO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIFwiXCIgKyBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS4wLjBAYmVlLXRyYW5zaXRpb24vYnVpbGQvdXRpbC9jYXBpdGFsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFsaWduID0gZXhwb3J0cy50b0FycmF5ID0gZXhwb3J0cy5jc3NBbmltYXRpb24gPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmNvbnRhaW5zID0gZXhwb3J0cy5LZXlDb2RlID0gZXhwb3J0cy5jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBleHBvcnRzLnNwbGl0Q29tcG9uZW50ID0gZXhwb3J0cy5pc1JlcXVpcmVkRm9yQTExeSA9IGV4cG9ydHMuZWxlbWVudFR5cGUgPSBleHBvcnRzLmRlcHJlY2F0ZWQgPSBleHBvcnRzLmNvbXBvbmVudE9yRWxlbWVudCA9IGV4cG9ydHMuYWxsID0gdW5kZWZpbmVkO1xuXG52YXIgX2FsbDIgPSByZXF1aXJlKCcuL2FsbCcpO1xuXG52YXIgX2FsbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbGwyKTtcblxudmFyIF9jb21wb25lbnRPckVsZW1lbnQyID0gcmVxdWlyZSgnLi9jb21wb25lbnRPckVsZW1lbnQnKTtcblxudmFyIF9jb21wb25lbnRPckVsZW1lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50T3JFbGVtZW50Mik7XG5cbnZhciBfZGVwcmVjYXRlZDIgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZWQnKTtcblxudmFyIF9kZXByZWNhdGVkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZWQyKTtcblxudmFyIF9lbGVtZW50VHlwZTIgPSByZXF1aXJlKCcuL2VsZW1lbnRUeXBlJyk7XG5cbnZhciBfZWxlbWVudFR5cGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZWxlbWVudFR5cGUyKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeTIgPSByZXF1aXJlKCcuL2lzUmVxdWlyZWRGb3JBMTF5Jyk7XG5cbnZhciBfaXNSZXF1aXJlZEZvckExMXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNSZXF1aXJlZEZvckExMXkyKTtcblxudmFyIF9zcGxpdENvbXBvbmVudDIgPSByZXF1aXJlKCcuL3NwbGl0Q29tcG9uZW50Jyk7XG5cbnZhciBfc3BsaXRDb21wb25lbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BsaXRDb21wb25lbnQyKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yID0gcmVxdWlyZSgnLi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMik7XG5cbnZhciBfa2V5Q29kZSA9IHJlcXVpcmUoJy4va2V5Q29kZScpO1xuXG52YXIgX2tleUNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Q29kZSk7XG5cbnZhciBfY29udGFpbnMyID0gcmVxdWlyZSgnLi9jb250YWlucycpO1xuXG52YXIgX2NvbnRhaW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5zMik7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSByZXF1aXJlKCcuL2FkZEV2ZW50TGlzdGVuZXInKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZEV2ZW50TGlzdGVuZXIyKTtcblxudmFyIF9jc3NBbmltYXRpb24yID0gcmVxdWlyZSgnLi9jc3NBbmltYXRpb24nKTtcblxudmFyIF9jc3NBbmltYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQW5pbWF0aW9uMik7XG5cbnZhciBfdG9BcnJheTIgPSByZXF1aXJlKCcuL3RvQXJyYXknKTtcblxudmFyIF90b0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQXJyYXkyKTtcblxudmFyIF9BbGlnbjIgPSByZXF1aXJlKCcuL0FsaWduJyk7XG5cbnZhciBfQWxpZ24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWxpZ24yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5hbGwgPSBfYWxsMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb25lbnRPckVsZW1lbnQgPSBfY29tcG9uZW50T3JFbGVtZW50My5kZWZhdWx0O1xuZXhwb3J0cy5kZXByZWNhdGVkID0gX2RlcHJlY2F0ZWQzLmRlZmF1bHQ7XG5leHBvcnRzLmVsZW1lbnRUeXBlID0gX2VsZW1lbnRUeXBlMy5kZWZhdWx0O1xuZXhwb3J0cy5pc1JlcXVpcmVkRm9yQTExeSA9IF9pc1JlcXVpcmVkRm9yQTExeTMuZGVmYXVsdDtcbmV4cG9ydHMuc3BsaXRDb21wb25lbnQgPSBfc3BsaXRDb21wb25lbnQzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24zLmRlZmF1bHQ7XG5leHBvcnRzLktleUNvZGUgPSBfa2V5Q29kZTIuZGVmYXVsdDtcbmV4cG9ydHMuY29udGFpbnMgPSBfY29udGFpbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBfYWRkRXZlbnRMaXN0ZW5lcjMuZGVmYXVsdDtcbmV4cG9ydHMuY3NzQW5pbWF0aW9uID0gX2Nzc0FuaW1hdGlvbjMuZGVmYXVsdDtcbmV4cG9ydHMudG9BcnJheSA9IF90b0FycmF5My5kZWZhdWx0O1xuLy9leHBvcnQgZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4gZnJvbSAnLi9nZXRDb250YWluZXJSZW5kZXJNaXhpbic7XG5cbmV4cG9ydHMuQWxpZ24gPSBfQWxpZ24zLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWxsO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWxsKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxQcm9wVHlwZXMoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGFsbFByb3BUeXBlcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi9hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuLy8gTW9zdGx5IHRha2VuIGZyb20gUmVhY3RQcm9wVHlwZXMuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZVNhZmUgPSBjb21wb25lbnROYW1lIHx8ICc8PGFub255bW91cz4+JztcbiAgICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCB3YXMgbm90IHNwZWNpZmllZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWVTYWZlICsgJ2AuJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiA2ID8gX2xlbiAtIDYgOiAwKSwgX2tleSA9IDY7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDZdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZS5hcHBseSh1bmRlZmluZWQsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVTYWZlLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lU2FmZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBSZWFjdEVsZW1lbnQgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LiBZb3UgY2FuIHVzdWFsbHkgb2J0YWluIGEgUmVhY3RDb21wb25lbnQgb3IgRE9NRWxlbWVudCAnICsgJ2Zyb20gYSBSZWFjdEVsZW1lbnQgYnkgYXR0YWNoaW5nIGEgcmVmIHRvIGl0LicpO1xuICB9XG5cbiAgaWYgKChwcm9wVHlwZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BWYWx1ZS5yZW5kZXIgIT09ICdmdW5jdGlvbicpICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3RDb21wb25lbnQgb3IgYSAnKSArICdET01FbGVtZW50LicpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKHZhbGlkYXRlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2NvbXBvbmVudE9yRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVwcmVjYXRlZDtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3YXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gZGVwcmVjYXRlZCh2YWxpZGF0b3IsIHJlYXNvbikge1xuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9IG51bGwpIHtcbiAgICAgIHZhciBtZXNzYWdlS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIHByb3BOYW1lO1xuXG4gICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHdhcm5lZFttZXNzYWdlS2V5XSwgJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lU2FmZSArICdgIG9mICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBpcyBkZXByZWNhdGVkLiAnICsgcmVhc29uICsgJy4nKSk7XG5cbiAgICAgIHdhcm5lZFttZXNzYWdlS2V5XSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmZ1bmN0aW9uIF9yZXNldFdhcm5lZCgpIHtcbiAgd2FybmVkID0ge307XG59XG5cbmRlcHJlY2F0ZWQuX3Jlc2V0V2FybmVkID0gX3Jlc2V0V2FybmVkO1xuLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvZGVwcmVjYXRlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjMuMC4wQHdhcm5pbmcvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEM6L1VzZXJzL2xpdXNoYW96aGVuL0FwcERhdGEvUm9hbWluZy9ucG0vfi9iZWUtdG9vbHMvfi8uMC4xMS4xMEBwcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlbGVtZW50VHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocHJvcFZhbHVlKTtcblxuICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIFJlYWN0RWxlbWVudCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gZWxlbWVudCB0eXBlIChhIHN0cmluZyAnKSArICdvciBhIFJlYWN0Q2xhc3MpLicpO1xuICB9XG5cbiAgaWYgKHByb3BUeXBlICE9PSAnZnVuY3Rpb24nICYmIHByb3BUeXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgcHJvcFZhbHVlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGVsZW1lbnQgdHlwZSAoYSBzdHJpbmcgJykgKyAnb3IgYSBSZWFjdENsYXNzKS4nKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMi5kZWZhdWx0KShlbGVtZW50VHlwZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNSZXF1aXJlZEZvckExMXk7XG5mdW5jdGlvbiBpc1JlcXVpcmVkRm9yQTExeSh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBjb21wb25lbnROYW1lU2FmZSA9IGNvbXBvbmVudE5hbWUgfHwgJzw8YW5vbnltb3VzPj4nO1xuICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZVNhZmUgKyAnYCBpcyByZXF1aXJlZCB0byBtYWtlICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBhY2Nlc3NpYmxlIGZvciB1c2VycyBvZiBhc3Npc3RpdmUgJykgKyAndGVjaG5vbG9naWVzIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2lzUmVxdWlyZWRGb3JBMTF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9lbnRyaWVzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZW50cmllc1wiKTtcblxudmFyIF9lbnRyaWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VudHJpZXMpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzcGxpdENvbXBvbmVudFByb3BzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIOWIhuWJsuimgeS8oOWFpeeItuWFg+e0oOWSjOWtkOWFg+e0oOeahHByb3BzXG4gKiBAcGFyYW0gIHtbb2JqZWN0XX0gcHJvcHMgICAgIOS8oOWFpeeahOWxnuaAp1xuICogQHBhcmFtICB7W3JlYWN0RWxlbWVudF19IENvbXBvbmVudCDnu4Tku7ZcbiAqIEByZXR1cm4ge1thcnJheV19ICAgICAgICAgICDov5Tlm57mlbDnu4TvvIznrKzkuIDkuKrlhYPntKDkuLrniLblhYPntKBwcm9wc+Wvueixoe+8jOesrOS6jOS4quWtkOWFg+e0oHByb3Bz5a+56LGhXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29tcG9uZW50UHJvcHMocHJvcHMsIENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50UHJvcFR5cGVzID0gQ29tcG9uZW50LnByb3BUeXBlcztcblxuICB2YXIgcGFyZW50UHJvcHMgPSB7fTtcbiAgdmFyIGNoaWxkUHJvcHMgPSB7fTtcblxuICAoMCwgX2VudHJpZXMyLmRlZmF1bHQpKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHByb3BOYW1lID0gX3JlZlswXSxcbiAgICAgICAgcHJvcFZhbHVlID0gX3JlZlsxXTtcblxuICAgIGlmIChjb21wb25lbnRQcm9wVHlwZXNbcHJvcE5hbWVdKSB7XG4gICAgICBwYXJlbnRQcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkUHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFtwYXJlbnRQcm9wcywgY2hpbGRQcm9wc107XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMTFAdGlucGVyLWJlZS1jb3JlL2xpYi9zcGxpdENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9lbnRyaWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly42LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9lbnRyaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmVudHJpZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZW50cmllcy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjUuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNS4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi41LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYgIT0gbnVsbDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGYpIHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYWNjID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZjtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIG51bGwpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGlnbm9yZVxuICogc29tZSBrZXktY29kZXMgZGVmaW5pdGlvbiBhbmQgdXRpbHMgZnJvbSBjbG9zdXJlLWxpYnJhcnlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxudmFyIEtleUNvZGUgPSB7XG4gIC8qKlxuICAgKiBNQUNfRU5URVJcbiAgICovXG4gIE1BQ19FTlRFUjogMyxcbiAgLyoqXG4gICAqIEJBQ0tTUEFDRVxuICAgKi9cbiAgQkFDS1NQQUNFOiA4LFxuICAvKipcbiAgICogVEFCXG4gICAqL1xuICBUQUI6IDksXG4gIC8qKlxuICAgKiBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgICovXG4gIE5VTV9DRU5URVI6IDEyLCAvLyBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgLyoqXG4gICAqIEVOVEVSXG4gICAqL1xuICBFTlRFUjogMTMsXG4gIC8qKlxuICAgKiBTSElGVFxuICAgKi9cbiAgU0hJRlQ6IDE2LFxuICAvKipcbiAgICogQ1RSTFxuICAgKi9cbiAgQ1RSTDogMTcsXG4gIC8qKlxuICAgKiBBTFRcbiAgICovXG4gIEFMVDogMTgsXG4gIC8qKlxuICAgKiBQQVVTRVxuICAgKi9cbiAgUEFVU0U6IDE5LFxuICAvKipcbiAgICogQ0FQU19MT0NLXG4gICAqL1xuICBDQVBTX0xPQ0s6IDIwLFxuICAvKipcbiAgICogRVNDXG4gICAqL1xuICBFU0M6IDI3LFxuICAvKipcbiAgICogU1BBQ0VcbiAgICovXG4gIFNQQUNFOiAzMixcbiAgLyoqXG4gICAqIFBBR0VfVVBcbiAgICovXG4gIFBBR0VfVVA6IDMzLCAvLyBhbHNvIE5VTV9OT1JUSF9FQVNUXG4gIC8qKlxuICAgKiBQQUdFX0RPV05cbiAgICovXG4gIFBBR0VfRE9XTjogMzQsIC8vIGFsc28gTlVNX1NPVVRIX0VBU1RcbiAgLyoqXG4gICAqIEVORFxuICAgKi9cbiAgRU5EOiAzNSwgLy8gYWxzbyBOVU1fU09VVEhfV0VTVFxuICAvKipcbiAgICogSE9NRVxuICAgKi9cbiAgSE9NRTogMzYsIC8vIGFsc28gTlVNX05PUlRIX1dFU1RcbiAgLyoqXG4gICAqIExFRlRcbiAgICovXG4gIExFRlQ6IDM3LCAvLyBhbHNvIE5VTV9XRVNUXG4gIC8qKlxuICAgKiBVUFxuICAgKi9cbiAgVVA6IDM4LCAvLyBhbHNvIE5VTV9OT1JUSFxuICAvKipcbiAgICogUklHSFRcbiAgICovXG4gIFJJR0hUOiAzOSwgLy8gYWxzbyBOVU1fRUFTVFxuICAvKipcbiAgICogRE9XTlxuICAgKi9cbiAgRE9XTjogNDAsIC8vIGFsc28gTlVNX1NPVVRIXG4gIC8qKlxuICAgKiBQUklOVF9TQ1JFRU5cbiAgICovXG4gIFBSSU5UX1NDUkVFTjogNDQsXG4gIC8qKlxuICAgKiBJTlNFUlRcbiAgICovXG4gIElOU0VSVDogNDUsIC8vIGFsc28gTlVNX0lOU0VSVFxuICAvKipcbiAgICogREVMRVRFXG4gICAqL1xuICBERUxFVEU6IDQ2LCAvLyBhbHNvIE5VTV9ERUxFVEVcbiAgLyoqXG4gICAqIFpFUk9cbiAgICovXG4gIFpFUk86IDQ4LFxuICAvKipcbiAgICogT05FXG4gICAqL1xuICBPTkU6IDQ5LFxuICAvKipcbiAgICogVFdPXG4gICAqL1xuICBUV086IDUwLFxuICAvKipcbiAgICogVEhSRUVcbiAgICovXG4gIFRIUkVFOiA1MSxcbiAgLyoqXG4gICAqIEZPVVJcbiAgICovXG4gIEZPVVI6IDUyLFxuICAvKipcbiAgICogRklWRVxuICAgKi9cbiAgRklWRTogNTMsXG4gIC8qKlxuICAgKiBTSVhcbiAgICovXG4gIFNJWDogNTQsXG4gIC8qKlxuICAgKiBTRVZFTlxuICAgKi9cbiAgU0VWRU46IDU1LFxuICAvKipcbiAgICogRUlHSFRcbiAgICovXG4gIEVJR0hUOiA1NixcbiAgLyoqXG4gICAqIE5JTkVcbiAgICovXG4gIE5JTkU6IDU3LFxuICAvKipcbiAgICogUVVFU1RJT05fTUFSS1xuICAgKi9cbiAgUVVFU1RJT05fTUFSSzogNjMsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQVxuICAgKi9cbiAgQTogNjUsXG4gIC8qKlxuICAgKiBCXG4gICAqL1xuICBCOiA2NixcbiAgLyoqXG4gICAqIENcbiAgICovXG4gIEM6IDY3LFxuICAvKipcbiAgICogRFxuICAgKi9cbiAgRDogNjgsXG4gIC8qKlxuICAgKiBFXG4gICAqL1xuICBFOiA2OSxcbiAgLyoqXG4gICAqIEZcbiAgICovXG4gIEY6IDcwLFxuICAvKipcbiAgICogR1xuICAgKi9cbiAgRzogNzEsXG4gIC8qKlxuICAgKiBIXG4gICAqL1xuICBIOiA3MixcbiAgLyoqXG4gICAqIElcbiAgICovXG4gIEk6IDczLFxuICAvKipcbiAgICogSlxuICAgKi9cbiAgSjogNzQsXG4gIC8qKlxuICAgKiBLXG4gICAqL1xuICBLOiA3NSxcbiAgLyoqXG4gICAqIExcbiAgICovXG4gIEw6IDc2LFxuICAvKipcbiAgICogTVxuICAgKi9cbiAgTTogNzcsXG4gIC8qKlxuICAgKiBOXG4gICAqL1xuICBOOiA3OCxcbiAgLyoqXG4gICAqIE9cbiAgICovXG4gIE86IDc5LFxuICAvKipcbiAgICogUFxuICAgKi9cbiAgUDogODAsXG4gIC8qKlxuICAgKiBRXG4gICAqL1xuICBROiA4MSxcbiAgLyoqXG4gICAqIFJcbiAgICovXG4gIFI6IDgyLFxuICAvKipcbiAgICogU1xuICAgKi9cbiAgUzogODMsXG4gIC8qKlxuICAgKiBUXG4gICAqL1xuICBUOiA4NCxcbiAgLyoqXG4gICAqIFVcbiAgICovXG4gIFU6IDg1LFxuICAvKipcbiAgICogVlxuICAgKi9cbiAgVjogODYsXG4gIC8qKlxuICAgKiBXXG4gICAqL1xuICBXOiA4NyxcbiAgLyoqXG4gICAqIFhcbiAgICovXG4gIFg6IDg4LFxuICAvKipcbiAgICogWVxuICAgKi9cbiAgWTogODksXG4gIC8qKlxuICAgKiBaXG4gICAqL1xuICBaOiA5MCxcbiAgLyoqXG4gICAqIE1FVEFcbiAgICovXG4gIE1FVEE6IDkxLCAvLyBXSU5fS0VZX0xFRlRcbiAgLyoqXG4gICAqIFdJTl9LRVlfUklHSFRcbiAgICovXG4gIFdJTl9LRVlfUklHSFQ6IDkyLFxuICAvKipcbiAgICogQ09OVEVYVF9NRU5VXG4gICAqL1xuICBDT05URVhUX01FTlU6IDkzLFxuICAvKipcbiAgICogTlVNX1pFUk9cbiAgICovXG4gIE5VTV9aRVJPOiA5NixcbiAgLyoqXG4gICAqIE5VTV9PTkVcbiAgICovXG4gIE5VTV9PTkU6IDk3LFxuICAvKipcbiAgICogTlVNX1RXT1xuICAgKi9cbiAgTlVNX1RXTzogOTgsXG4gIC8qKlxuICAgKiBOVU1fVEhSRUVcbiAgICovXG4gIE5VTV9USFJFRTogOTksXG4gIC8qKlxuICAgKiBOVU1fRk9VUlxuICAgKi9cbiAgTlVNX0ZPVVI6IDEwMCxcbiAgLyoqXG4gICAqIE5VTV9GSVZFXG4gICAqL1xuICBOVU1fRklWRTogMTAxLFxuICAvKipcbiAgICogTlVNX1NJWFxuICAgKi9cbiAgTlVNX1NJWDogMTAyLFxuICAvKipcbiAgICogTlVNX1NFVkVOXG4gICAqL1xuICBOVU1fU0VWRU46IDEwMyxcbiAgLyoqXG4gICAqIE5VTV9FSUdIVFxuICAgKi9cbiAgTlVNX0VJR0hUOiAxMDQsXG4gIC8qKlxuICAgKiBOVU1fTklORVxuICAgKi9cbiAgTlVNX05JTkU6IDEwNSxcbiAgLyoqXG4gICAqIE5VTV9NVUxUSVBMWVxuICAgKi9cbiAgTlVNX01VTFRJUExZOiAxMDYsXG4gIC8qKlxuICAgKiBOVU1fUExVU1xuICAgKi9cbiAgTlVNX1BMVVM6IDEwNyxcbiAgLyoqXG4gICAqIE5VTV9NSU5VU1xuICAgKi9cbiAgTlVNX01JTlVTOiAxMDksXG4gIC8qKlxuICAgKiBOVU1fUEVSSU9EXG4gICAqL1xuICBOVU1fUEVSSU9EOiAxMTAsXG4gIC8qKlxuICAgKiBOVU1fRElWSVNJT05cbiAgICovXG4gIE5VTV9ESVZJU0lPTjogMTExLFxuICAvKipcbiAgICogRjFcbiAgICovXG4gIEYxOiAxMTIsXG4gIC8qKlxuICAgKiBGMlxuICAgKi9cbiAgRjI6IDExMyxcbiAgLyoqXG4gICAqIEYzXG4gICAqL1xuICBGMzogMTE0LFxuICAvKipcbiAgICogRjRcbiAgICovXG4gIEY0OiAxMTUsXG4gIC8qKlxuICAgKiBGNVxuICAgKi9cbiAgRjU6IDExNixcbiAgLyoqXG4gICAqIEY2XG4gICAqL1xuICBGNjogMTE3LFxuICAvKipcbiAgICogRjdcbiAgICovXG4gIEY3OiAxMTgsXG4gIC8qKlxuICAgKiBGOFxuICAgKi9cbiAgRjg6IDExOSxcbiAgLyoqXG4gICAqIEY5XG4gICAqL1xuICBGOTogMTIwLFxuICAvKipcbiAgICogRjEwXG4gICAqL1xuICBGMTA6IDEyMSxcbiAgLyoqXG4gICAqIEYxMVxuICAgKi9cbiAgRjExOiAxMjIsXG4gIC8qKlxuICAgKiBGMTJcbiAgICovXG4gIEYxMjogMTIzLFxuICAvKipcbiAgICogTlVNTE9DS1xuICAgKi9cbiAgTlVNTE9DSzogMTQ0LFxuICAvKipcbiAgICogU0VNSUNPTE9OXG4gICAqL1xuICBTRU1JQ09MT046IDE4NiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBEQVNIXG4gICAqL1xuICBEQVNIOiAxODksIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogRVFVQUxTXG4gICAqL1xuICBFUVVBTFM6IDE4NywgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBDT01NQVxuICAgKi9cbiAgQ09NTUE6IDE4OCwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBQRVJJT0RcbiAgICovXG4gIFBFUklPRDogMTkwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFNMQVNIXG4gICAqL1xuICBTTEFTSDogMTkxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEFQT1NUUk9QSEVcbiAgICovXG4gIEFQT1NUUk9QSEU6IDE5MiwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBTSU5HTEVfUVVPVEVcbiAgICovXG4gIFNJTkdMRV9RVU9URTogMjIyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIE9QRU5fU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIE9QRU5fU1FVQVJFX0JSQUNLRVQ6IDIxOSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBCQUNLU0xBU0hcbiAgICovXG4gIEJBQ0tTTEFTSDogMjIwLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIENMT1NFX1NRVUFSRV9CUkFDS0VUXG4gICAqL1xuICBDTE9TRV9TUVVBUkVfQlJBQ0tFVDogMjIxLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFdJTl9LRVlcbiAgICovXG4gIFdJTl9LRVk6IDIyNCxcbiAgLyoqXG4gICAqIE1BQ19GRl9NRVRBXG4gICAqL1xuICBNQUNfRkZfTUVUQTogMjI0LCAvLyBGaXJlZm94IChHZWNrbykgZmlyZXMgdGhpcyBmb3IgdGhlIG1ldGEga2V5IGluc3RlYWQgb2YgOTFcbiAgLyoqXG4gICAqIFdJTl9JTUVcbiAgICovXG4gIFdJTl9JTUU6IDIyOVxufTtcblxuLypcbiB3aGV0aGVyIHRleHQgYW5kIG1vZGlmaWVkIGtleSBpcyBlbnRlcmVkIGF0IHRoZSBzYW1lIHRpbWUuXG4gKi9cbktleUNvZGUuaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQgPSBmdW5jdGlvbiBpc1RleHRNb2RpZnlpbmdLZXlFdmVudChlKSB7XG4gIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICBpZiAoZS5hbHRLZXkgJiYgIWUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHxcbiAgLy8gRnVuY3Rpb24ga2V5cyBkb24ndCBnZW5lcmF0ZSB0ZXh0XG4gIGtleUNvZGUgPj0gS2V5Q29kZS5GMSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuRjEyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGhlIGZvbGxvd2luZyBrZXlzIGFyZSBxdWl0ZSBoYXJtbGVzcywgZXZlbiBpbiBjb21iaW5hdGlvbiB3aXRoXG4gIC8vIENUUkwsIEFMVCBvciBTSElGVC5cbiAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBLZXlDb2RlLkFMVDpcbiAgICBjYXNlIEtleUNvZGUuQ0FQU19MT0NLOlxuICAgIGNhc2UgS2V5Q29kZS5DT05URVhUX01FTlU6XG4gICAgY2FzZSBLZXlDb2RlLkNUUkw6XG4gICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgY2FzZSBLZXlDb2RlLkVORDpcbiAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgIGNhc2UgS2V5Q29kZS5IT01FOlxuICAgIGNhc2UgS2V5Q29kZS5JTlNFUlQ6XG4gICAgY2FzZSBLZXlDb2RlLkxFRlQ6XG4gICAgY2FzZSBLZXlDb2RlLk1BQ19GRl9NRVRBOlxuICAgIGNhc2UgS2V5Q29kZS5NRVRBOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1MT0NLOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fQ0VOVEVSOlxuICAgIGNhc2UgS2V5Q29kZS5QQUdFX0RPV046XG4gICAgY2FzZSBLZXlDb2RlLlBBR0VfVVA6XG4gICAgY2FzZSBLZXlDb2RlLlBBVVNFOlxuICAgIGNhc2UgS2V5Q29kZS5QUklOVF9TQ1JFRU46XG4gICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgIGNhc2UgS2V5Q29kZS5TSElGVDpcbiAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgY2FzZSBLZXlDb2RlLldJTl9LRVk6XG4gICAgY2FzZSBLZXlDb2RlLldJTl9LRVlfUklHSFQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vKlxuIHdoZXRoZXIgY2hhcmFjdGVyIGlzIGVudGVyZWQuXG4gKi9cbktleUNvZGUuaXNDaGFyYWN0ZXJLZXkgPSBmdW5jdGlvbiBpc0NoYXJhY3RlcktleShrZXlDb2RlKSB7XG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTklORSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5OVU1fWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTlVNX01VTFRJUExZKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLkEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLlopIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNhZmFyaSBzZW5kcyB6ZXJvIGtleSBjb2RlIGZvciBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAgaWYgKHdpbmRvdy5uYXZpZ2F0aW9uLnVzZXJBZ2VudC5pbmRleE9mKCdXZWJLaXQnKSAhPT0gLTEgJiYga2V5Q29kZSA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgIGNhc2UgS2V5Q29kZS5RVUVTVElPTl9NQVJLOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fUExVUzpcbiAgICBjYXNlIEtleUNvZGUuTlVNX01JTlVTOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fUEVSSU9EOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fRElWSVNJT046XG4gICAgY2FzZSBLZXlDb2RlLlNFTUlDT0xPTjpcbiAgICBjYXNlIEtleUNvZGUuREFTSDpcbiAgICBjYXNlIEtleUNvZGUuRVFVQUxTOlxuICAgIGNhc2UgS2V5Q29kZS5DT01NQTpcbiAgICBjYXNlIEtleUNvZGUuUEVSSU9EOlxuICAgIGNhc2UgS2V5Q29kZS5TTEFTSDpcbiAgICBjYXNlIEtleUNvZGUuQVBPU1RST1BIRTpcbiAgICBjYXNlIEtleUNvZGUuU0lOR0xFX1FVT1RFOlxuICAgIGNhc2UgS2V5Q29kZS5PUEVOX1NRVUFSRV9CUkFDS0VUOlxuICAgIGNhc2UgS2V5Q29kZS5CQUNLU0xBU0g6XG4gICAgY2FzZSBLZXlDb2RlLkNMT1NFX1NRVUFSRV9CUkFDS0VUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLZXlDb2RlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIva2V5Q29kZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjb250YWlucztcbmZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgdmFyIG5vZGUgPSBuO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRFdmVudExpc3RlbmVyV3JhcDtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyID0gcmVxdWlyZSgnYWRkLWRvbS1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRG9tRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYikge1xuICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAyICovXG4gIHZhciBjYWxsYmFjayA9IF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA/IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuICByZXR1cm4gKDAsIF9hZGREb21FdmVudExpc3RlbmVyMi5kZWZhdWx0KSh0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvYWRkRXZlbnRMaXN0ZW5lci5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhZGRFdmVudExpc3RlbmVyO1xuXG52YXIgX0V2ZW50T2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudE9iamVjdCcpO1xuXG52YXIgX0V2ZW50T2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50T2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjayhlKSB7XG4gICAgdmFyIG5lID0gbmV3IF9FdmVudE9iamVjdDJbXCJkZWZhdWx0XCJdKGUpO1xuICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCBuZSk7XG4gIH1cblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHdyYXBDYWxsYmFjaywgZmFsc2UpO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgIHRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIHdyYXBDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjAuMkBhZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0V2ZW50QmFzZU9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRCYXNlT2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50QmFzZU9iamVjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBldmVudCBvYmplY3QgZm9yIGRvbVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG52YXIgVFJVRSA9IHRydWU7XG52YXIgRkFMU0UgPSBmYWxzZTtcbnZhciBjb21tb25Qcm9wcyA9IFsnYWx0S2V5JywgJ2J1YmJsZXMnLCAnY2FuY2VsYWJsZScsICdjdHJsS2V5JywgJ2N1cnJlbnRUYXJnZXQnLCAnZXZlbnRQaGFzZScsICdtZXRhS2V5JywgJ3NoaWZ0S2V5JywgJ3RhcmdldCcsICd0aW1lU3RhbXAnLCAndmlldycsICd0eXBlJ107XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHcpIHtcbiAgcmV0dXJuIHcgPT09IG51bGwgfHwgdyA9PT0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnROb3JtYWxpemVycyA9IFt7XG4gIHJlZzogL15rZXkvLFxuICBwcm9wczogWydjaGFyJywgJ2NoYXJDb2RlJywgJ2tleScsICdrZXlDb2RlJywgJ3doaWNoJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChldmVudC53aGljaCkpIHtcbiAgICAgIGV2ZW50LndoaWNoID0gIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNoYXJDb2RlKSA/IG5hdGl2ZUV2ZW50LmNoYXJDb2RlIDogbmF0aXZlRXZlbnQua2V5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWV0YUtleSB0byBub24tTWFjIGJyb3dzZXJzICh1c2UgY3RybCBmb3IgUEMgJ3MgYW5kIE1ldGEgZm9yIE1hY3MpXG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQubWV0YUtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL150b3VjaC8sXG4gIHByb3BzOiBbJ3RvdWNoZXMnLCAnY2hhbmdlZFRvdWNoZXMnLCAndGFyZ2V0VG91Y2hlcyddXG59LCB7XG4gIHJlZzogL15oYXNoY2hhbmdlJC8sXG4gIHByb3BzOiBbJ25ld1VSTCcsICdvbGRVUkwnXVxufSwge1xuICByZWc6IC9eZ2VzdHVyZWNoYW5nZSQvaSxcbiAgcHJvcHM6IFsncm90YXRpb24nLCAnc2NhbGUnXVxufSwge1xuICByZWc6IC9eKG1vdXNld2hlZWx8RE9NTW91c2VTY3JvbGwpJC8sXG4gIHByb3BzOiBbXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWCA9IHZvaWQgMDtcbiAgICB2YXIgZGVsdGFZID0gdm9pZCAwO1xuICAgIHZhciBkZWx0YSA9IHZvaWQgMDtcbiAgICB2YXIgd2hlZWxEZWx0YSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGE7XG4gICAgdmFyIGF4aXMgPSBuYXRpdmVFdmVudC5heGlzO1xuICAgIHZhciB3aGVlbERlbHRhWSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFZO1xuICAgIHZhciB3aGVlbERlbHRhWCA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFYO1xuICAgIHZhciBkZXRhaWwgPSBuYXRpdmVFdmVudC5kZXRhaWw7XG5cbiAgICAvLyBpZS93ZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSB3aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIGdlY2tvXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgLy8gcHJlc3MgY29udHJvbCBlLmRldGFpbCA9PSAxIGVsc2UgZS5kZXRhaWwgPT0gM1xuICAgICAgZGVsdGEgPSAwIC0gKGRldGFpbCAlIDMgPT09IDAgPyBkZXRhaWwgLyAzIDogZGV0YWlsKTtcbiAgICB9XG5cbiAgICAvLyBHZWNrb1xuICAgIGlmIChheGlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChheGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgZGVsdGFYID0gMCAtIGRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSBldmVudC5WRVJUSUNBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVkgPSB3aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKHdoZWVsRGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWCA9IC0xICogd2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8g6buY6K6kIGRlbHRhWSAoaWUpXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWCBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFYXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVggPSBkZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFZXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGEgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9ebW91c2V8Y29udGV4dG1lbnV8Y2xpY2t8bXNwb2ludGVyfCheRE9NTW91c2VTY3JvbGwkKS9pLFxuICBwcm9wczogWydidXR0b25zJywgJ2NsaWVudFgnLCAnY2xpZW50WScsICdidXR0b24nLCAnb2Zmc2V0WCcsICdyZWxhdGVkVGFyZ2V0JywgJ3doaWNoJywgJ2Zyb21FbGVtZW50JywgJ3RvRWxlbWVudCcsICdvZmZzZXRZJywgJ3BhZ2VYJywgJ3BhZ2VZJywgJ3NjcmVlblgnLCAnc2NyZWVuWSddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZXZlbnREb2MgPSB2b2lkIDA7XG4gICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICB2YXIgYm9keSA9IHZvaWQgMDtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBidXR0b24gPSBuYXRpdmVFdmVudC5idXR0b247XG5cbiAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgaWYgKHRhcmdldCAmJiBpc051bGxPclVuZGVmaW5lZChldmVudC5wYWdlWCkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNsaWVudFgpKSB7XG4gICAgICBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgYm9keSA9IGV2ZW50RG9jLmJvZHk7XG4gICAgICBldmVudC5wYWdlWCA9IG5hdGl2ZUV2ZW50LmNsaWVudFggKyAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50TGVmdCB8fCBib2R5ICYmIGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgIGV2ZW50LnBhZ2VZID0gbmF0aXZlRXZlbnQuY2xpZW50WSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMCk7XG4gICAgfVxuXG4gICAgLy8gd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG4gICAgLy8gZG8gbm90IHVzZSBidXR0b25cbiAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYnV0dG9uICYgMSkge1xuICAgICAgICBldmVudC53aGljaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDIpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAzO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVsYXRlZFRhcmdldCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LmZyb21FbGVtZW50KSB7XG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQuZnJvbUVsZW1lbnQgPT09IHRhcmdldCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIHJldFRydWUoKSB7XG4gIHJldHVybiBUUlVFO1xufVxuXG5mdW5jdGlvbiByZXRGYWxzZSgpIHtcbiAgcmV0dXJuIEZBTFNFO1xufVxuXG5mdW5jdGlvbiBEb21FdmVudE9iamVjdChuYXRpdmVFdmVudCkge1xuICB2YXIgdHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGU7XG5cbiAgdmFyIGlzTmF0aXZlID0gdHlwZW9mIG5hdGl2ZUV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF0aXZlRXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbic7XG5cbiAgX0V2ZW50QmFzZU9iamVjdDJbXCJkZWZhdWx0XCJdLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIC8vIGluIGNhc2UgZG9tIGV2ZW50IGhhcyBiZWVuIG1hcmsgYXMgZGVmYXVsdCBwcmV2ZW50ZWQgYnkgbG93ZXIgZG9tIG5vZGVcbiAgdmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IHJldEZhbHNlO1xuICBpZiAoJ2RlZmF1bHRQcmV2ZW50ZWQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgnZ2V0UHJldmVudERlZmF1bHQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjkxMTUxXG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZ2V0UHJldmVudERlZmF1bHQoKSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgncmV0dXJuVmFsdWUnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQucmV0dXJuVmFsdWUgPT09IEZBTFNFID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9XG5cbiAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgdmFyIGZpeEZucyA9IFtdO1xuICB2YXIgZml4Rm4gPSB2b2lkIDA7XG4gIHZhciBsID0gdm9pZCAwO1xuICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgdmFyIHByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KCk7XG5cbiAgZXZlbnROb3JtYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChub3JtYWxpemVyKSB7XG4gICAgaWYgKHR5cGUubWF0Y2gobm9ybWFsaXplci5yZWcpKSB7XG4gICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChub3JtYWxpemVyLnByb3BzKTtcbiAgICAgIGlmIChub3JtYWxpemVyLmZpeCkge1xuICAgICAgICBmaXhGbnMucHVzaChub3JtYWxpemVyLmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsID0gcHJvcHMubGVuZ3RoO1xuXG4gIC8vIGNsb25lIHByb3BlcnRpZXMgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICB3aGlsZSAobCkge1xuICAgIHByb3AgPSBwcm9wc1stLWxdO1xuICAgIHRoaXNbcHJvcF0gPSBuYXRpdmVFdmVudFtwcm9wXTtcbiAgfVxuXG4gIC8vIGZpeCB0YXJnZXQgcHJvcGVydHksIGlmIG5lY2Vzc2FyeVxuICBpZiAoIXRoaXMudGFyZ2V0ICYmIGlzTmF0aXZlKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50OyAvLyBzcmNFbGVtZW50IG1pZ2h0IG5vdCBiZSBkZWZpbmVkIGVpdGhlclxuICB9XG5cbiAgLy8gY2hlY2sgaWYgdGFyZ2V0IGlzIGEgdGV4dCBub2RlIChzYWZhcmkpXG4gIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGwgPSBmaXhGbnMubGVuZ3RoO1xuXG4gIHdoaWxlIChsKSB7XG4gICAgZml4Rm4gPSBmaXhGbnNbLS1sXTtcbiAgICBmaXhGbih0aGlzLCBuYXRpdmVFdmVudCk7XG4gIH1cblxuICB0aGlzLnRpbWVTdGFtcCA9IG5hdGl2ZUV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufVxuXG52YXIgRXZlbnRCYXNlT2JqZWN0UHJvdG8gPSBfRXZlbnRCYXNlT2JqZWN0MltcImRlZmF1bHRcIl0ucHJvdG90eXBlO1xuXG4oMCwgX29iamVjdEFzc2lnbjJbXCJkZWZhdWx0XCJdKShEb21FdmVudE9iamVjdC5wcm90b3R5cGUsIEV2ZW50QmFzZU9iamVjdFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBEb21FdmVudE9iamVjdCxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgcHJldmVudERlZmF1bHQgZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gRkFMU0UgKElFKVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IEZBTFNFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7XG4gIH0sXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5uYXRpdmVFdmVudDtcblxuICAgIC8vIGlmIHN0b3BQcm9wYWdhdGlvbiBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIHNldCB0aGUgY2FuY2VsQnViYmxlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBUUlVFIChJRSlcbiAgICAgIGUuY2FuY2VsQnViYmxlID0gVFJVRTtcbiAgICB9XG5cbiAgICBFdmVudEJhc2VPYmplY3RQcm90by5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRG9tRXZlbnRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMC4yQGFkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQGlnbm9yZVxuICogYmFzZSBldmVudCBvYmplY3QgZm9yIGN1c3RvbSBhbmQgZG9tIGV2ZW50LlxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRCYXNlT2JqZWN0KCkge1xuICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbkV2ZW50QmFzZU9iamVjdC5wcm90b3R5cGUgPSB7XG4gIGlzRXZlbnRPYmplY3Q6IDEsXG5cbiAgY29uc3RydWN0b3I6IEV2ZW50QmFzZU9iamVjdCxcblxuICBpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cbiAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcbiAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG4gIH0sXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICAgIC8vIGZpeGVkIDEuMlxuICAgIC8vIGNhbGwgc3RvcFByb3BhZ2F0aW9uIGltcGxpY2l0bHlcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuICBoYWx0OiBmdW5jdGlvbiBoYWx0KGltbWVkaWF0ZSkge1xuICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgIHRoaXMuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudEJhc2VPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMC4yQGFkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uNC4xLjFAb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfRXZlbnQgPSByZXF1aXJlKCcuL0V2ZW50Jyk7XG5cbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnQpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMgPSByZXF1aXJlKCdjb21wb25lbnQtY2xhc3NlcycpO1xuXG52YXIgX2NvbXBvbmVudENsYXNzZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50Q2xhc3Nlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IF9FdmVudDIuZGVmYXVsdC5lbmRFdmVudHMubGVuZ3RoICE9PSAwO1xuXG5cbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICB2YXIgcmV0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgaWYgKHJldCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSkge1xuICBpZiAoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQpIHtcbiAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgdGltZSA9IE1hdGgubWF4KHRyYW5zaXRpb25EdXJhdGlvbiArIHRyYW5zaXRpb25EZWxheSwgYW5pbWF0aW9uRHVyYXRpb24gKyBhbmltYXRpb25EZWxheSk7XG4gICAgLy8gc29tZXRpbWVzLCBicm93c2VyIGJ1Z1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSkge1xuICBpZiAobm9kZS5yY0VuZEFuaW1UaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KG5vZGUucmNFbmRBbmltVGltZW91dCk7XG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG52YXIgY3NzQW5pbWF0aW9uID0gZnVuY3Rpb24gY3NzQW5pbWF0aW9uKG5vZGUsIHRyYW5zaXRpb25OYW1lLCBlbmRDYWxsYmFjaykge1xuICB2YXIgbmFtZUlzT2JqID0gKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJhbnNpdGlvbk5hbWUpKSA9PT0gJ29iamVjdCc7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5uYW1lIDogdHJhbnNpdGlvbk5hbWU7XG4gIHZhciBhY3RpdmVDbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5hY3RpdmUgOiB0cmFuc2l0aW9uTmFtZSArICctYWN0aXZlJztcbiAgdmFyIGVuZCA9IGVuZENhbGxiYWNrO1xuICB2YXIgc3RhcnQgPSB2b2lkIDA7XG4gIHZhciBhY3RpdmUgPSB2b2lkIDA7XG4gIHZhciBub2RlQ2xhc3NlcyA9ICgwLCBfY29tcG9uZW50Q2xhc3NlczIuZGVmYXVsdCkobm9kZSk7XG5cbiAgaWYgKGVuZENhbGxiYWNrICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbmRDYWxsYmFjaykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZW5kID0gZW5kQ2FsbGJhY2suZW5kO1xuICAgIHN0YXJ0ID0gZW5kQ2FsbGJhY2suc3RhcnQ7XG4gICAgYWN0aXZlID0gZW5kQ2FsbGJhY2suYWN0aXZlO1xuICB9XG5cbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICBfRXZlbnQyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGVDbGFzc2VzLmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoYWN0aXZlLCAwKTtcbiAgICB9XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgICAvLyAzMG1zIGZvciBmaXJlZm94XG4gIH0sIDMwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgX0V2ZW50Mi5kZWZhdWx0LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBfRXZlbnQyLmRlZmF1bHQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNzc0FuaW1hdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICBlbmRFdmVudHM6IGVuZEV2ZW50cyxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uRXZlbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjExQHRpbnBlci1iZWUtY29yZS9saWIvRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG50cnkge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG59IGNhdGNoIChlcnIpIHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnY29tcG9uZW50LWluZGV4b2YnKTtcbn1cblxuLyoqXG4gKiBXaGl0ZXNwYWNlIHJlZ2V4cC5cbiAqL1xuXG52YXIgcmUgPSAvXFxzKy87XG5cbi8qKlxuICogdG9TdHJpbmcgcmVmZXJlbmNlLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV3JhcCBgZWxgIGluIGEgYENsYXNzTGlzdGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKXtcbiAgcmV0dXJuIG5ldyBDbGFzc0xpc3QoZWwpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IENsYXNzTGlzdCBmb3IgYGVsYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBDbGFzc0xpc3QoZWwpIHtcbiAgaWYgKCFlbCB8fCAhZWwubm9kZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxpc3QgPSBlbC5jbGFzc0xpc3Q7XG59XG5cbi8qKlxuICogQWRkIGNsYXNzIGBuYW1lYCBpZiBub3QgYWxyZWFkeSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obmFtZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LmFkZChuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKCF+aSkgYXJyLnB1c2gobmFtZSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyBgbmFtZWAgd2hlbiBwcmVzZW50LCBvclxuICogcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZW1vdmVcbiAqIGFueSB3aGljaCBtYXRjaC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgaWYgKCdbb2JqZWN0IFJlZ0V4cF0nID09IHRvU3RyaW5nLmNhbGwobmFtZSkpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVNYXRjaGluZyhuYW1lKTtcbiAgfVxuXG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LnJlbW92ZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKH5pKSBhcnIuc3BsaWNlKGksIDEpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGNsYXNzZXMgbWF0Y2hpbmcgYHJlYC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlTWF0Y2hpbmcgPSBmdW5jdGlvbihyZSl7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlLnRlc3QoYXJyW2ldKSkge1xuICAgICAgdGhpcy5yZW1vdmUoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBjbGFzcyBgbmFtZWAsIGNhbiBmb3JjZSBzdGF0ZSB2aWEgYGZvcmNlYC5cbiAqXG4gKiBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGNsYXNzTGlzdCwgYnV0IGRvIG5vdCBzdXBwb3J0IGBmb3JjZWAgeWV0LFxuICogdGhlIG1pc3Rha2Ugd2lsbCBiZSBkZXRlY3RlZCBhbmQgY29ycmVjdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24obmFtZSwgZm9yY2Upe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICAgIGlmIChmb3JjZSAhPT0gdGhpcy5saXN0LnRvZ2dsZShuYW1lLCBmb3JjZSkpIHtcbiAgICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTsgLy8gdG9nZ2xlIGFnYWluIHRvIGNvcnJlY3RcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIGNsYXNzZXMuXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbigpe1xuICB2YXIgY2xhc3NOYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gIHZhciBzdHIgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB2YXIgYXJyID0gc3RyLnNwbGl0KHJlKTtcbiAgaWYgKCcnID09PSBhcnJbMF0pIGFyci5zaGlmdCgpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBjbGFzcyBgbmFtZWAgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmhhcyA9XG5DbGFzc0xpc3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiB0aGlzLmxpc3RcbiAgICA/IHRoaXMubGlzdC5jb250YWlucyhuYW1lKVxuICAgIDogISEgfmluZGV4KHRoaXMuYXJyYXkoKSwgbmFtZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjIuNkBjb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4wLjNAY29tcG9uZW50LWluZGV4b2YvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQXJyYXk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG4gIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldC5wdXNoKGMpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWFjdENsYXNzKTtcblxudmFyIF9kb21BbGlnbiA9IHJlcXVpcmUoJ2RvbS1hbGlnbicpO1xuXG52YXIgX2RvbUFsaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbUFsaWduKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyID0gcmVxdWlyZSgnLi9hZGRFdmVudExpc3RlbmVyJyk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRFdmVudExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vL2ltcG9ydCBpc1dpbmRvdyBmcm9tICcuL2lzV2luZG93JztcblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8qIGVzbGludCBuby1lcS1udWxsOiAwICovXG4gIC8qIGVzbGludCBlcWVxZXE6IDAgKi9cbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBidWZmZXIoZm4sIG1zKSB7XG4gIHZhciB0aW1lciA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyRm4oKSB7XG4gICAgY2xlYXIoKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgfVxuXG4gIGJ1ZmZlckZuLmNsZWFyID0gY2xlYXI7XG5cbiAgcmV0dXJuIGJ1ZmZlckZuO1xufVxudmFyIHByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW5Qcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGFsaWduOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICB0YXJnZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25BbGlnbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBtb25pdG9yQnVmZmVyVGltZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1vbml0b3JXaW5kb3dSZXNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9LFxuICBvbkFsaWduOiBmdW5jdGlvbiBvbkFsaWduKCkge30sXG5cbiAgbW9uaXRvckJ1ZmZlclRpbWU6IDUwLFxuICBtb25pdG9yV2luZG93UmVzaXplOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWxpZ24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFsaWduKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFsaWduKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEFsaWduLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgLy8gaWYgcGFyZW50IHJlZiBub3QgYXR0YWNoZWQgLi4uLiB1c2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcbiAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkICYmIHByb3BzLm1vbml0b3JXaW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfVxuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIHJlQWxpZ24gPSBmYWxzZTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHByZXZQcm9wcy5kaXNhYmxlZCB8fCBwcmV2UHJvcHMuYWxpZ24gIT09IHByb3BzLmFsaWduKSB7XG4gICAgICAgIHJlQWxpZ24gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxhc3RUYXJnZXQgPSBwcmV2UHJvcHMudGFyZ2V0KCk7XG4gICAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gcHJvcHMudGFyZ2V0KCk7XG4gICAgICAgIGlmIChpc1dpbmRvdyhsYXN0VGFyZ2V0KSAmJiBpc1dpbmRvdyhjdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgIHJlQWxpZ24gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0VGFyZ2V0ICE9PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVBbGlnbikge1xuICAgICAgdGhpcy5mb3JjZUFsaWduKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1vbml0b3JXaW5kb3dSZXNpemUgJiYgIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3BNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfVxuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgfTtcblxuICBBbGlnbi5wcm90b3R5cGUuc3RhcnRNb25pdG9yV2luZG93UmVzaXplID0gZnVuY3Rpb24gc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlck1vbml0b3IgPSBidWZmZXIodGhpcy5mb3JjZUFsaWduLCB0aGlzLnByb3BzLm1vbml0b3JCdWZmZXJUaW1lKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkod2luZG93LCAncmVzaXplJywgdGhpcy5idWZmZXJNb25pdG9yKTtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW5Qcm9wcyA9IF9wcm9wcy5jaGlsZHJlblByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGRyZW5Qcm9wcykge1xuICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICBmb3IgKHZhciBwcm9wIGluIGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuUHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBuZXdQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbY2hpbGRyZW5Qcm9wc1twcm9wXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdQcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbiAgfTtcblxuICByZXR1cm4gQWxpZ247XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF90aGlzMi5yZXNpemVIYW5kbGVyKSB7XG4gICAgICBfdGhpczIuYnVmZmVyTW9uaXRvci5jbGVhcigpO1xuICAgICAgX3RoaXMyLnJlc2l6ZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICBfdGhpczIucmVzaXplSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZm9yY2VBbGlnbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdmFyIHNvdXJjZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpczIpO1xuICAgICAgcHJvcHMub25BbGlnbihzb3VyY2UsICgwLCBfZG9tQWxpZ24yLmRlZmF1bHQpKHNvdXJjZSwgcHJvcHMudGFyZ2V0KCksIHByb3BzLmFsaWduKSk7XG4gICAgfVxuICB9O1xufTtcblxuO1xuXG5BbGlnbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5BbGlnbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5leHBvcnRzLmRlZmF1bHQgPSBBbGlnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4xMUB0aW5wZXItYmVlLWNvcmUvbGliL0FsaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yeScpO1xuXG5pZiAodHlwZW9mIFJlYWN0ID09PSAndW5kZWZpbmVkJykge1xuICB0aHJvdyBFcnJvcihcbiAgICAnY3JlYXRlLXJlYWN0LWNsYXNzIGNvdWxkIG5vdCBmaW5kIHRoZSBSZWFjdCBvYmplY3QuIElmIHlvdSBhcmUgdXNpbmcgc2NyaXB0IHRhZ3MsICcgK1xuICAgICAgJ21ha2Ugc3VyZSB0aGF0IFJlYWN0IGlzIGJlaW5nIGxvYWRlZCBiZWZvcmUgY3JlYXRlLXJlYWN0LWNsYXNzLidcbiAgKTtcbn1cblxuLy8gSGFjayB0byBncmFiIE5vb3BVcGRhdGVRdWV1ZSBmcm9tIGlzb21vcnBoaWMgUmVhY3RcbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IG5ldyBSZWFjdC5Db21wb25lbnQoKS51cGRhdGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gIFJlYWN0LkNvbXBvbmVudCxcbiAgUmVhY3QuaXNWYWxpZEVsZW1lbnQsXG4gIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xNS42LjJAY3JlYXRlLXJlYWN0LWNsYXNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG59XG5cbnZhciBNSVhJTlNfS0VZID0gJ21peGlucyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBhbGxvdyB0aGUgY3JlYXRpb24gb2YgYW5vbnltb3VzIGZ1bmN0aW9ucyB3aGljaCBkbyBub3Rcbi8vIGhhdmUgLm5hbWUgc2V0IHRvIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBiZWluZyBhc3NpZ25lZCB0by5cbmZ1bmN0aW9uIGlkZW50aXR5KGZuKSB7XG4gIHJldHVybiBmbjtcbn1cblxudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7XG4gICAgcHJvcDogJ3Byb3AnLFxuICAgIGNvbnRleHQ6ICdjb250ZXh0JyxcbiAgICBjaGlsZENvbnRleHQ6ICdjaGlsZCBjb250ZXh0J1xuICB9O1xufSBlbHNlIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7fTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeShSZWFjdENvbXBvbmVudCwgaXNWYWxpZEVsZW1lbnQsIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlKSB7XG4gIC8qKlxuICAgKiBQb2xpY2llcyB0aGF0IGRlc2NyaWJlIG1ldGhvZHMgaW4gYFJlYWN0Q2xhc3NJbnRlcmZhY2VgLlxuICAgKi9cblxuICB2YXIgaW5qZWN0ZWRNaXhpbnMgPSBbXTtcblxuICAvKipcbiAgICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAgICogb3IgaG9zdCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gICAqIHlvdXIgbmV3IGNsYXNzIHRvIGBSZWFjdC5jcmVhdGVDbGFzc2AuIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHlvdXIgY2xhc3NcbiAgICogc3BlY2lmaWNhdGlvbiBpcyB0aGF0IHlvdSBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuXG4gICAqXG4gICAqICAgdmFyIE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAqICAgICB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIFRoZSBjbGFzcyBzcGVjaWZpY2F0aW9uIHN1cHBvcnRzIGEgc3BlY2lmaWMgcHJvdG9jb2wgb2YgbWV0aG9kcyB0aGF0IGhhdmVcbiAgICogc3BlY2lhbCBtZWFuaW5nIChlLmcuIGByZW5kZXJgKS4gU2VlIGBSZWFjdENsYXNzSW50ZXJmYWNlYCBmb3JcbiAgICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gICAqIGNsYXNzIHNwZWNpZmljYXRpb24gd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIHByb3RvdHlwZS5cbiAgICpcbiAgICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgTWl4aW4gb2JqZWN0cyB0byBpbmNsdWRlIHdoZW4gZGVmaW5pbmcgeW91ciBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IHNob3VsZCBiZSBkZWZpbmVkIG9uXG4gICAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBzdGF0aWNzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBwcm9wIHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29udGV4dFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBWYWx1ZXMgaW4gdGhlIG1hcHBpbmcgd2lsbCBiZSBzZXQgb25cbiAgICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJlZm9yZSBgZ2V0SW5pdGlhbFN0YXRlYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCByZWx5XG4gICAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb25jZSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdXNlZFxuICAgICAqIGFzIHRoZSBpbml0aWFsIHZhbHVlIG9mIGB0aGlzLnN0YXRlYC5cbiAgICAgKlxuICAgICAqICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICAgKiAgICAgICBmb29CYXo6IG5ldyBCYXpGb28oKVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBnZXRDaGlsZENvbnRleHQ6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgLyoqXG4gICAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgICAqIHN0cnVjdHVyZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgICAqIGl0IG11c3Qgbm90IGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAqXG4gICAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAqICAgICB2YXIgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICAgKiAgICAgcmV0dXJuIDxkaXY+SGVsbG8sIHtuYW1lfSE8L2Rpdj47XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtSZWFjdENvbXBvbmVudH1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICByZW5kZXI6ICdERUZJTkVfT05DRScsXG5cbiAgICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGx5IGNyZWF0ZWQgYW5kIGFib3V0IHRvIGJlIG1vdW50ZWQuXG4gICAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICAgKiBieSB0aGlzIG1ldGhvZCBtdXN0IGJlIGNsZWFuZWQgdXAgaW4gYGNvbXBvbmVudFdpbGxVbm1vdW50YC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgYW5kIGhhcyBhIERPTSByZXByZXNlbnRhdGlvbi5cbiAgICAgKiBIb3dldmVyLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgRE9NIG5vZGUgaXMgaW4gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgKiBiZWVuIG1vdW50ZWQgKGluaXRpYWxpemVkIGFuZCByZW5kZXJlZCkgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcmVhY3QgdG8gYSBwcm9wIHRyYW5zaXRpb24gYnkgdXBkYXRpbmcgdGhlXG4gICAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgICAqXG4gICAgICogICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAqICAgICAgIGxpa2VzSW5jcmVhc2luZzogbmV4dFByb3BzLmxpa2VDb3VudCA+IHRoaXMucHJvcHMubGlrZUNvdW50XG4gICAgICogICAgIH0pO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogTk9URTogVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBgY29tcG9uZW50V2lsbFJlY2VpdmVTdGF0ZWAuIEFuIGluY29taW5nIHByb3BcbiAgICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAgICogbmVlZCBpdCwgeW91IGFyZSBwcm9iYWJseSBsb29raW5nIGZvciBgY29tcG9uZW50V2lsbFVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hpbGUgZGVjaWRpbmcgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZlxuICAgICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gYHJldHVybiBmYWxzZWAgd2hlbiB5b3UncmUgY2VydGFpbiB0aGF0IHRoZVxuICAgICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICAgKiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHJldHVybiAhZXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fFxuICAgICAqICAgICAgICFlcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHVwZGF0ZSBkdWUgdG8gYSB0cmFuc2l0aW9uIGZyb21cbiAgICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAgICogYW5kIGBuZXh0Q29udGV4dGAuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgICAqXG4gICAgICogTk9URTogWW91ICoqY2Fubm90KiogdXNlIGB0aGlzLnNldFN0YXRlKClgIGluIHRoaXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogYmVlbiB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByZXZQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBwcmV2Q29udGV4dFxuICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQgYW5kIGhhdmVcbiAgICAgKiBpdHMgRE9NIHJlcHJlc2VudGF0aW9uIGRlc3Ryb3llZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIGRlYWxsb2NhdGUgYW55IGV4dGVybmFsIHJlc291cmNlcy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgICAqIGRlc3Ryb3llZCBieSB0aGF0IHBvaW50LlxuICAgICAqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IEFkdmFuY2VkIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50J3MgY3VycmVudGx5IG1vdW50ZWQgRE9NIHJlcHJlc2VudGF0aW9uLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBpbXBsZW1lbnRzIFJlYWN0J3MgcmVuZGVyaW5nIGFuZCByZWNvbmNpbGlhdGlvbiBhbGdvcml0aG0uXG4gICAgICogU29waGlzdGljYXRlZCBjbGllbnRzIG1heSB3aXNoIHRvIG92ZXJyaWRlIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICogQGludGVybmFsXG4gICAgICogQG92ZXJyaWRhYmxlXG4gICAgICovXG4gICAgdXBkYXRlQ29tcG9uZW50OiAnT1ZFUlJJREVfQkFTRSdcbiAgfTtcblxuICAvKipcbiAgICogTWFwcGluZyBmcm9tIGNsYXNzIHNwZWNpZmljYXRpb24ga2V5cyB0byBzcGVjaWFsIHByb2Nlc3NpbmcgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAqIHdoZW4gZGVmaW5pbmcgY2xhc3NlcyB1c2luZyBgUmVhY3QuY3JlYXRlQ2xhc3NgLCB0aGV5IGFyZSBhY3R1YWxseSBzdGF0aWNcbiAgICogYW5kIGFyZSBhY2Nlc3NpYmxlIG9uIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIHRoZSBwcm90b3R5cGUuIERlc3BpdGVcbiAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICogd2hpY2ggYWxsIG90aGVyIHN0YXRpYyBtZXRob2RzIGFyZSBkZWZpbmVkLlxuICAgKi9cbiAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICBkaXNwbGF5TmFtZTogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIH0sXG4gICAgbWl4aW5zOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgbWl4aW5zKSB7XG4gICAgICBpZiAobWl4aW5zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIG1peGluc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMsICdjaGlsZENvbnRleHQnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzID0gX2Fzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICBjaGlsZENvbnRleHRUeXBlc1xuICAgICAgKTtcbiAgICB9LFxuICAgIGNvbnRleHRUeXBlczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMsICdjb250ZXh0Jyk7XG4gICAgICB9XG4gICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzLFxuICAgICAgICBjb250ZXh0VHlwZXNcbiAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGNhc2UgZ2V0RGVmYXVsdFByb3BzIHdoaWNoIHNob3VsZCBtb3ZlIGludG8gc3RhdGljcyBidXQgcmVxdWlyZXNcbiAgICAgKiBhdXRvbWF0aWMgbWVyZ2luZy5cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBnZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24oXG4gICAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLFxuICAgICAgICAgIGdldERlZmF1bHRQcm9wc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvcFR5cGVzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHByb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLnByb3BUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLnByb3BUeXBlcywgcHJvcFR5cGVzKTtcbiAgICB9LFxuICAgIHN0YXRpY3M6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcyk7XG4gICAgfSxcbiAgICBhdXRvYmluZDogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgdHlwZURlZiwgbG9jYXRpb24pIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiB0eXBlRGVmKSB7XG4gICAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgLy8gdXNlIGEgd2FybmluZyBpbnN0ZWFkIG9mIGFuIF9pbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgICAvLyBkb24ndCBzaG93IHVwIGluIHByb2QgYnV0IG9ubHkgaW4gX19ERVZfX1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICB0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICtcbiAgICAgICAgICAgICAgJ1JlYWN0LlByb3BUeXBlcy4nLFxuICAgICAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgICAgICAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLFxuICAgICAgICAgICAgcHJvcE5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVNZXRob2RPdmVycmlkZShpc0FscmVhZHlEZWZpbmVkLCBuYW1lKSB7XG4gICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICA/IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV1cbiAgICAgIDogbnVsbDtcblxuICAgIC8vIERpc2FsbG93IG92ZXJyaWRpbmcgb2YgYmFzZSBjbGFzcyBtZXRob2RzIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgaWYgKFJlYWN0Q2xhc3NNaXhpbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgc3BlY1BvbGljeSA9PT0gJ09WRVJSSURFX0JBU0UnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIG92ZXJyaWRlICcgK1xuICAgICAgICAgICdgJXNgIGZyb20geW91ciBjbGFzcyBzcGVjaWZpY2F0aW9uLiBFbnN1cmUgdGhhdCB5b3VyIG1ldGhvZCBuYW1lcyAnICtcbiAgICAgICAgICAnZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWxsb3cgZGVmaW5pbmcgbWV0aG9kcyBtb3JlIHRoYW4gb25jZSB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSAnICtcbiAgICAgICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlICcgK1xuICAgICAgICAgICd0byBhIG1peGluLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1peGluIGhlbHBlciB3aGljaCBoYW5kbGVzIHBvbGljeSB2YWxpZGF0aW9uIGFuZCByZXNlcnZlZFxuICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgKi9cbiAgZnVuY3Rpb24gbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpIHtcbiAgICBpZiAoIXNwZWMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWM7XG4gICAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIGlzTWl4aW5WYWxpZCxcbiAgICAgICAgICAgIFwiJXM6IFlvdSdyZSBhdHRlbXB0aW5nIHRvIGluY2x1ZGUgYSBtaXhpbiB0aGF0IGlzIGVpdGhlciBudWxsIFwiICtcbiAgICAgICAgICAgICAgJ29yIG5vdCBhbiBvYmplY3QuIENoZWNrIHRoZSBtaXhpbnMgaW5jbHVkZWQgYnkgdGhlIGNvbXBvbmVudCwgJyArXG4gICAgICAgICAgICAgICdhcyB3ZWxsIGFzIGFueSBtaXhpbnMgdGhleSBpbmNsdWRlIHRoZW1zZWx2ZXMuICcgK1xuICAgICAgICAgICAgICAnRXhwZWN0ZWQgb2JqZWN0IGJ1dCBnb3QgJXMuJyxcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJyxcbiAgICAgICAgICAgIHNwZWMgPT09IG51bGwgPyBudWxsIDogdHlwZW9mU3BlY1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9pbnZhcmlhbnQoXG4gICAgICB0eXBlb2Ygc3BlYyAhPT0gJ2Z1bmN0aW9uJyxcbiAgICAgIFwiUmVhY3RDbGFzczogWW91J3JlIGF0dGVtcHRpbmcgdG8gXCIgK1xuICAgICAgICAndXNlIGEgY29tcG9uZW50IGNsYXNzIG9yIGZ1bmN0aW9uIGFzIGEgbWl4aW4uIEluc3RlYWQsIGp1c3QgdXNlIGEgJyArXG4gICAgICAgICdyZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcbiAgICBfaW52YXJpYW50KFxuICAgICAgIWlzVmFsaWRFbGVtZW50KHNwZWMpLFxuICAgICAgXCJSZWFjdENsYXNzOiBZb3UncmUgYXR0ZW1wdGluZyB0byBcIiArXG4gICAgICAgICd1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcblxuICAgIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB2YXIgYXV0b0JpbmRQYWlycyA9IHByb3RvLl9fcmVhY3RBdXRvQmluZFBhaXJzO1xuXG4gICAgLy8gQnkgaGFuZGxpbmcgbWl4aW5zIGJlZm9yZSBhbnkgb3RoZXIgcHJvcGVydGllcywgd2UgZW5zdXJlIHRoZSBzYW1lXG4gICAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gICAgLy8gbWl4aW5zIGFyZSBsaXN0ZWQgYmVmb3JlIG9yIGFmdGVyIHRoZXNlIG1ldGhvZHMgaW4gdGhlIHNwZWMuXG4gICAgaWYgKHNwZWMuaGFzT3duUHJvcGVydHkoTUlYSU5TX0tFWSkpIHtcbiAgICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHNwZWMpIHtcbiAgICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBhbHJlYWR5IGhhbmRsZWQgbWl4aW5zIGluIGEgc3BlY2lhbCBjYXNlIGFib3ZlLlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BlcnR5ID0gc3BlY1tuYW1lXTtcbiAgICAgIHZhciBpc0FscmVhZHlEZWZpbmVkID0gcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgICBpZiAoUkVTRVJWRURfU1BFQ19LRVlTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIFJFU0VSVkVEX1NQRUNfS0VZU1tuYW1lXShDb25zdHJ1Y3RvciwgcHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0dXAgbWV0aG9kcyBvbiBwcm90b3R5cGU6XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbWVtYmVyIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhdXRvbWF0aWNhbGx5IGJvdW5kOlxuICAgICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgICAgLy8gMi4gT3ZlcnJpZGRlbiBtZXRob2RzICh0aGF0IHdlcmUgbWl4ZWQgaW4pLlxuICAgICAgICB2YXIgaXNSZWFjdENsYXNzTWV0aG9kID0gUmVhY3RDbGFzc0ludGVyZmFjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIHZhciBzaG91bGRBdXRvQmluZCA9XG4gICAgICAgICAgaXNGdW5jdGlvbiAmJlxuICAgICAgICAgICFpc1JlYWN0Q2xhc3NNZXRob2QgJiZcbiAgICAgICAgICAhaXNBbHJlYWR5RGVmaW5lZCAmJlxuICAgICAgICAgIHNwZWMuYXV0b2JpbmQgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICAgIGF1dG9CaW5kUGFpcnMucHVzaChuYW1lLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNBbHJlYWR5RGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdO1xuXG4gICAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgICAgIGlzUmVhY3RDbGFzc01ldGhvZCAmJlxuICAgICAgICAgICAgICAgIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJyB8fFxuICAgICAgICAgICAgICAgICAgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJyksXG4gICAgICAgICAgICAgICdSZWFjdENsYXNzOiBVbmV4cGVjdGVkIHNwZWMgcG9saWN5ICVzIGZvciBrZXkgJXMgJyArXG4gICAgICAgICAgICAgICAgJ3doZW4gbWl4aW5nIGluIGNvbXBvbmVudCBzcGVjcy4nLFxuICAgICAgICAgICAgICBzcGVjUG9saWN5LFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIG1ldGhvZHMgYmVmb3JlIGNhbGxpbmcgdGhlIG5ldyBwcm9wZXJ0eSwgbWVyZ2luZyBpZiBhcHByb3ByaWF0ZS5cbiAgICAgICAgICAgIGlmIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJykge1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWScpIHtcbiAgICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIEFkZCB2ZXJib3NlIGRpc3BsYXlOYW1lIHRvIHRoZSBmdW5jdGlvbiwgd2hpY2ggaGVscHMgd2hlbiBsb29raW5nXG4gICAgICAgICAgICAgIC8vIGF0IHByb2ZpbGluZyB0b29scy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyAmJiBzcGVjLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bbmFtZV0uZGlzcGxheU5hbWUgPSBzcGVjLmRpc3BsYXlOYW1lICsgJ18nICsgbmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1peFN0YXRpY1NwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgaWYgKCFzdGF0aWNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIG5hbWUgaW4gc3RhdGljcykge1xuICAgICAgdmFyIHByb3BlcnR5ID0gc3RhdGljc1tuYW1lXTtcbiAgICAgIGlmICghc3RhdGljcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzUmVzZXJ2ZWQgPSBuYW1lIGluIFJFU0VSVkVEX1NQRUNfS0VZUztcbiAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICFpc1Jlc2VydmVkLFxuICAgICAgICAnUmVhY3RDbGFzczogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBhIHJlc2VydmVkICcgK1xuICAgICAgICAgICdwcm9wZXJ0eSwgYCVzYCwgdGhhdCBzaG91bGRuXFwndCBiZSBvbiB0aGUgXCJzdGF0aWNzXCIga2V5LiBEZWZpbmUgaXQgJyArXG4gICAgICAgICAgJ2FzIGFuIGluc3RhbmNlIHByb3BlcnR5IGluc3RlYWQ7IGl0IHdpbGwgc3RpbGwgYmUgYWNjZXNzaWJsZSBvbiB0aGUgJyArXG4gICAgICAgICAgJ2NvbnN0cnVjdG9yLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG5cbiAgICAgIHZhciBpc0luaGVyaXRlZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICAhaXNJbmhlcml0ZWQsXG4gICAgICAgICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lICcgK1xuICAgICAgICAgICdgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSAnICtcbiAgICAgICAgICAnZHVlIHRvIGEgbWl4aW4uJyxcbiAgICAgICAgbmFtZVxuICAgICAgKTtcbiAgICAgIENvbnN0cnVjdG9yW25hbWVdID0gcHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHR3byBvYmplY3RzLCBidXQgdGhyb3cgaWYgYm90aCBjb250YWluIHRoZSBzYW1lIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9uZSBUaGUgZmlyc3Qgb2JqZWN0LCB3aGljaCBpcyBtdXRhdGVkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdHdvIFRoZSBzZWNvbmQgb2JqZWN0XG4gICAqIEByZXR1cm4ge29iamVjdH0gb25lIGFmdGVyIGl0IGhhcyBiZWVuIG11dGF0ZWQgdG8gY29udGFpbiBldmVyeXRoaW5nIGluIHR3by5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMob25lLCB0d28pIHtcbiAgICBfaW52YXJpYW50KFxuICAgICAgb25lICYmIHR3byAmJiB0eXBlb2Ygb25lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdHdvID09PSAnb2JqZWN0JyxcbiAgICAgICdtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKCk6IENhbm5vdCBtZXJnZSBub24tb2JqZWN0cy4nXG4gICAgKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0d28pIHtcbiAgICAgIGlmICh0d28uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBfaW52YXJpYW50KFxuICAgICAgICAgIG9uZVtrZXldID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogJyArXG4gICAgICAgICAgICAnVHJpZWQgdG8gbWVyZ2UgdHdvIG9iamVjdHMgd2l0aCB0aGUgc2FtZSBrZXk6IGAlc2AuIFRoaXMgY29uZmxpY3QgJyArXG4gICAgICAgICAgICAnbWF5IGJlIGR1ZSB0byBhIG1peGluOyBpbiBwYXJ0aWN1bGFyLCB0aGlzIG1heSBiZSBjYXVzZWQgYnkgdHdvICcgK1xuICAgICAgICAgICAgJ2dldEluaXRpYWxTdGF0ZSgpIG9yIGdldERlZmF1bHRQcm9wcygpIG1ldGhvZHMgcmV0dXJuaW5nIG9iamVjdHMgJyArXG4gICAgICAgICAgICAnd2l0aCBjbGFzaGluZyBrZXlzLicsXG4gICAgICAgICAga2V5XG4gICAgICAgICk7XG4gICAgICAgIG9uZVtrZXldID0gdHdvW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBtZXJnZXMgdGhlaXIgcmV0dXJuIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGludm9rZXMgdGhlIHR3byBhcmd1bWVudCBmdW5jdGlvbnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihvbmUsIHR3bykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRSZXN1bHQoKSB7XG4gICAgICB2YXIgYSA9IG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdmFyIGIgPSB0d28uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgICB9IGVsc2UgaWYgKGIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICAgIHZhciBjID0ge307XG4gICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGEpO1xuICAgICAgbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhjLCBiKTtcbiAgICAgIHJldHVybiBjO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBpZ25vcmVzIHRoZWlyIHJldHVybiB2YWxlcy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGludm9rZXMgdGhlIHR3byBhcmd1bWVudCBmdW5jdGlvbnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ob25lLCB0d28pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0d28uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIGEgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kIE1ldGhvZCB0byBiZSBib3VuZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBib3VuZCBtZXRob2QuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpIHtcbiAgICB2YXIgYm91bmRNZXRob2QgPSBtZXRob2QuYmluZChjb21wb25lbnQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICAgICAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQXJndW1lbnRzID0gbnVsbDtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lO1xuICAgICAgdmFyIF9iaW5kID0gYm91bmRNZXRob2QuYmluZDtcbiAgICAgIGJvdW5kTWV0aG9kLmJpbmQgPSBmdW5jdGlvbihuZXdUaGlzKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICAgIF9rZXkrK1xuICAgICAgICApIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZXIgaXMgdHJ5aW5nIHRvIGJpbmQoKSBhbiBhdXRvYm91bmQgbWV0aG9kOyB3ZSBlZmZlY3RpdmVseSB3aWxsXG4gICAgICAgIC8vIGlnbm9yZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gdXNlLCBzb1xuICAgICAgICAvLyBsZXQncyB3YXJuLlxuICAgICAgICBpZiAobmV3VGhpcyAhPT0gY29tcG9uZW50ICYmIG5ld1RoaXMgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdiaW5kKCk6IFJlYWN0IGNvbXBvbmVudCBtZXRob2RzIG1heSBvbmx5IGJlIGJvdW5kIHRvIHRoZSAnICtcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50IGluc3RhbmNlLiBTZWUgJXMnLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdiaW5kKCk6IFlvdSBhcmUgYmluZGluZyBhIGNvbXBvbmVudCBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC4gJyArXG4gICAgICAgICAgICAgICAgJ1JlYWN0IGRvZXMgdGhpcyBmb3IgeW91IGF1dG9tYXRpY2FsbHkgaW4gYSBoaWdoLXBlcmZvcm1hbmNlICcgK1xuICAgICAgICAgICAgICAgICd3YXksIHNvIHlvdSBjYW4gc2FmZWx5IHJlbW92ZSB0aGlzIGNhbGwuIFNlZSAlcycsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBib3VuZE1ldGhvZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVib3VuZE1ldGhvZCA9IF9iaW5kLmFwcGx5KGJvdW5kTWV0aG9kLCBhcmd1bWVudHMpO1xuICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHJldHVybiByZWJvdW5kTWV0aG9kO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGJvdW5kTWV0aG9kO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIGFsbCBhdXRvLWJvdW5kIG1ldGhvZHMgaW4gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZHMoY29tcG9uZW50KSB7XG4gICAgdmFyIHBhaXJzID0gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHZhciBhdXRvQmluZEtleSA9IHBhaXJzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHBhaXJzW2kgKyAxXTtcbiAgICAgIGNvbXBvbmVudFthdXRvQmluZEtleV0gPSBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBJc01vdW50ZWRQcmVNaXhpbiA9IHtcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIElzTW91bnRlZFBvc3RNaXhpbiA9IHtcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbW9yZSB0byB0aGUgUmVhY3RDbGFzcyBiYXNlIGNsYXNzLiBUaGVzZSBhcmUgYWxsIGxlZ2FjeSBmZWF0dXJlcyBhbmRcbiAgICogdGhlcmVmb3JlIG5vdCBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVybiBSZWFjdENvbXBvbmVudC5cbiAgICovXG4gIHZhciBSZWFjdENsYXNzTWl4aW4gPSB7XG4gICAgLyoqXG4gICAgICogVE9ETzogVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgYmVjYXVzZSBzdGF0ZSBzaG91bGQgYWx3YXlzIGtlZXAgYSBjb25zaXN0ZW50XG4gICAgICogdHlwZSBzaWduYXR1cmUgYW5kIHRoZSBvbmx5IHVzZSBjYXNlIGZvciB0aGlzLCBpcyB0byBhdm9pZCB0aGF0LlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24obmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVJlcGxhY2VTdGF0ZSh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBmaW5hbFxuICAgICAqL1xuICAgIGlzTW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIHRoaXMuX19kaWRXYXJuSXNNb3VudGVkLFxuICAgICAgICAgICclczogaXNNb3VudGVkIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCAnICtcbiAgICAgICAgICAgICdzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluIGNvbXBvbmVudFdpbGxVbm1vdW50IHRvICcgK1xuICAgICAgICAgICAgJ3ByZXZlbnQgbWVtb3J5IGxlYWtzLicsXG4gICAgICAgICAgKHRoaXMuY29uc3RydWN0b3IgJiYgdGhpcy5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSkgfHxcbiAgICAgICAgICAgIHRoaXMubmFtZSB8fFxuICAgICAgICAgICAgJ0NvbXBvbmVudCdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fX2RpZFdhcm5Jc01vdW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEhdGhpcy5fX2lzTW91bnRlZDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIFJlYWN0Q2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbigpIHt9O1xuICBfYXNzaWduKFxuICAgIFJlYWN0Q2xhc3NDb21wb25lbnQucHJvdG90eXBlLFxuICAgIFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZSxcbiAgICBSZWFjdENsYXNzTWl4aW5cbiAgKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvbXBvc2l0ZSBjb21wb25lbnQgY2xhc3MgZ2l2ZW4gYSBjbGFzcyBzcGVjaWZpY2F0aW9uLlxuICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY3JlYXRlY2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHNwZWMgQ2xhc3Mgc3BlY2lmaWNhdGlvbiAod2hpY2ggbXVzdCBkZWZpbmUgYHJlbmRlcmApLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDbGFzcyhzcGVjKSB7XG4gICAgLy8gVG8ga2VlcCBvdXIgd2FybmluZ3MgbW9yZSB1bmRlcnN0YW5kYWJsZSwgd2UnbGwgdXNlIGEgbGl0dGxlIGhhY2sgaGVyZSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IENvbnN0cnVjdG9yLm5hbWUgIT09ICdDb25zdHJ1Y3RvcicuIFRoaXMgbWFrZXMgc3VyZSB3ZSBkb24ndFxuICAgIC8vIHVubmVjZXNzYXJpbHkgaWRlbnRpZnkgYSBjbGFzcyB3aXRob3V0IGRpc3BsYXlOYW1lIGFzICdDb25zdHJ1Y3RvcicuXG4gICAgdmFyIENvbnN0cnVjdG9yID0gaWRlbnRpdHkoZnVuY3Rpb24ocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIC8vIFRoaXMgY29uc3RydWN0b3IgZ2V0cyBvdmVycmlkZGVuIGJ5IG1vY2tzLiBUaGUgYXJndW1lbnQgaXMgdXNlZFxuICAgICAgLy8gYnkgbW9ja3MgdG8gYXNzZXJ0IG9uIHdoYXQgZ2V0cyBtb3VudGVkLlxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIHRoaXMgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcixcbiAgICAgICAgICAnU29tZXRoaW5nIGlzIGNhbGxpbmcgYSBSZWFjdCBjb21wb25lbnQgZGlyZWN0bHkuIFVzZSBhIGZhY3Rvcnkgb3IgJyArXG4gICAgICAgICAgICAnSlNYIGluc3RlYWQuIFNlZTogaHR0cHM6Ly9mYi5tZS9yZWFjdC1sZWdhY3lmYWN0b3J5J1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBXaXJlIHVwIGF1dG8tYmluZGluZ1xuICAgICAgaWYgKHRoaXMuX19yZWFjdEF1dG9CaW5kUGFpcnMubGVuZ3RoKSB7XG4gICAgICAgIGJpbmRBdXRvQmluZE1ldGhvZHModGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgICAvLyBSZWFjdENsYXNzZXMgZG9lc24ndCBoYXZlIGNvbnN0cnVjdG9ycy4gSW5zdGVhZCwgdGhleSB1c2UgdGhlXG4gICAgICAvLyBnZXRJbml0aWFsU3RhdGUgYW5kIGNvbXBvbmVudFdpbGxNb3VudCBtZXRob2RzIGZvciBpbml0aWFsaXphdGlvbi5cblxuICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID8gdGhpcy5nZXRJbml0aWFsU3RhdGUoKSA6IG51bGw7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBXZSBhbGxvdyBhdXRvLW1vY2tzIHRvIHByb2NlZWQgYXMgaWYgdGhleSdyZSByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGUuX2lzTW9ja0Z1bmN0aW9uXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgYmFkIHByYWN0aWNlLiBDb25zaWRlciB3YXJuaW5nIGhlcmUgYW5kXG4gICAgICAgICAgLy8gZGVwcmVjYXRpbmcgdGhpcyBjb252ZW5pZW5jZS5cbiAgICAgICAgICBpbml0aWFsU3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICB0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsU3RhdGUpLFxuICAgICAgICAnJXMuZ2V0SW5pdGlhbFN0YXRlKCk6IG11c3QgcmV0dXJuIGFuIG9iamVjdCBvciBudWxsJyxcbiAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50J1xuICAgICAgKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB9KTtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBuZXcgUmVhY3RDbGFzc0NvbXBvbmVudCgpO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5fX3JlYWN0QXV0b0JpbmRQYWlycyA9IFtdO1xuXG4gICAgaW5qZWN0ZWRNaXhpbnMuZm9yRWFjaChtaXhTcGVjSW50b0NvbXBvbmVudC5iaW5kKG51bGwsIENvbnN0cnVjdG9yKSk7XG5cbiAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgSXNNb3VudGVkUHJlTWl4aW4pO1xuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzcGVjKTtcbiAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgSXNNb3VudGVkUG9zdE1peGluKTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGRlZmF1bHRQcm9wcyBwcm9wZXJ0eSBhZnRlciBhbGwgbWl4aW5zIGhhdmUgYmVlbiBtZXJnZWQuXG4gICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgQ29uc3RydWN0b3IuZGVmYXVsdFByb3BzID0gQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSB0YWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlIG9mIHRoZXNlIG1ldGhvZCBuYW1lcyBpcyBvayxcbiAgICAgIC8vIHNpbmNlIGl0J3MgdXNlZCB3aXRoIGNyZWF0ZUNsYXNzLiBJZiBpdCdzIG5vdCwgdGhlbiBpdCdzIGxpa2VseSBhXG4gICAgICAvLyBtaXN0YWtlIHNvIHdlJ2xsIHdhcm4geW91IHRvIHVzZSB0aGUgc3RhdGljIHByb3BlcnR5LCBwcm9wZXJ0eVxuICAgICAgLy8gaW5pdGlhbGl6ZXIgb3IgY29uc3RydWN0b3IgcmVzcGVjdGl2ZWx5LlxuICAgICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUuaXNSZWFjdENsYXNzQXBwcm92ZWQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaW52YXJpYW50KFxuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlcixcbiAgICAgICdjcmVhdGVDbGFzcyguLi4pOiBDbGFzcyBzcGVjaWZpY2F0aW9uIG11c3QgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLidcbiAgICApO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICFDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcG9uZW50U2hvdWxkVXBkYXRlLFxuICAgICAgICAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICtcbiAgICAgICAgICAnY29tcG9uZW50U2hvdWxkVXBkYXRlKCkuIERpZCB5b3UgbWVhbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKT8gJyArXG4gICAgICAgICAgJ1RoZSBuYW1lIGlzIHBocmFzZWQgYXMgYSBxdWVzdGlvbiBiZWNhdXNlIHRoZSBmdW5jdGlvbiBpcyAnICtcbiAgICAgICAgICAnZXhwZWN0ZWQgdG8gcmV0dXJuIGEgdmFsdWUuJyxcbiAgICAgICAgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnXG4gICAgICApO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzLFxuICAgICAgICAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICtcbiAgICAgICAgICAnY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcygpLiBEaWQgeW91IG1lYW4gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpPycsXG4gICAgICAgIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZWR1Y2UgdGltZSBzcGVudCBkb2luZyBsb29rdXBzIGJ5IHNldHRpbmcgdGhlc2Ugb24gdGhlIHByb3RvdHlwZS5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIFJlYWN0Q2xhc3NJbnRlcmZhY2UpIHtcbiAgICAgIGlmICghQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjE1LjYuMkBjcmVhdGUtcmVhY3QtY2xhc3MvZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlPYmplY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjguMTZAZmJqcy9saWIvZW1wdHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuOC4xNkBmYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjguMTZAZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjguMTZAZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQgPSByZXF1aXJlKCcuL2dldE9mZnNldFBhcmVudCcpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPZmZzZXRQYXJlbnQpO1xuXG52YXIgX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IHJlcXVpcmUoJy4vZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50Jyk7XG5cbnZhciBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCk7XG5cbnZhciBfYWRqdXN0Rm9yVmlld3BvcnQgPSByZXF1aXJlKCcuL2FkanVzdEZvclZpZXdwb3J0Jyk7XG5cbnZhciBfYWRqdXN0Rm9yVmlld3BvcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRqdXN0Rm9yVmlld3BvcnQpO1xuXG52YXIgX2dldFJlZ2lvbiA9IHJlcXVpcmUoJy4vZ2V0UmVnaW9uJyk7XG5cbnZhciBfZ2V0UmVnaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFJlZ2lvbik7XG5cbnZhciBfZ2V0RWxGdXR1cmVQb3MgPSByZXF1aXJlKCcuL2dldEVsRnV0dXJlUG9zJyk7XG5cbnZhciBfZ2V0RWxGdXR1cmVQb3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RWxGdXR1cmVQb3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly95aW1pbmdoZS5pdGV5ZS5jb20vYmxvZy8xMTI0NzIwXG5cbi8qKlxuICogYWxpZ24gZG9tIG5vZGUgZmxleGlibHlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuZnVuY3Rpb24gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3AgfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA+IHZpc2libGVSZWN0LnJpZ2h0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA8IHZpc2libGVSZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPiB2aXNpYmxlUmVjdC5ib3R0b20gfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0IDwgdmlzaWJsZVJlY3QudG9wO1xufVxuXG5mdW5jdGlvbiBpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9ICgwLCBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50MlsnZGVmYXVsdCddKSh0YXJnZXQpO1xuICB2YXIgdGFyZ2V0UmVnaW9uID0gKDAsIF9nZXRSZWdpb24yWydkZWZhdWx0J10pKHRhcmdldCk7XG5cbiAgcmV0dXJuICF2aXNpYmxlUmVjdCB8fCB0YXJnZXRSZWdpb24ubGVmdCArIHRhcmdldFJlZ2lvbi53aWR0aCA8PSB2aXNpYmxlUmVjdC5sZWZ0IHx8IHRhcmdldFJlZ2lvbi50b3AgKyB0YXJnZXRSZWdpb24uaGVpZ2h0IDw9IHZpc2libGVSZWN0LnRvcCB8fCB0YXJnZXRSZWdpb24ubGVmdCA+PSB2aXNpYmxlUmVjdC5yaWdodCB8fCB0YXJnZXRSZWdpb24udG9wID49IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gZmxpcChwb2ludHMsIHJlZywgbWFwKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgX3V0aWxzMlsnZGVmYXVsdCddLmVhY2gocG9pbnRzLCBmdW5jdGlvbiAocCkge1xuICAgIHJldC5wdXNoKHAucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbWFwW21dO1xuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZsaXBPZmZzZXQob2Zmc2V0LCBpbmRleCkge1xuICBvZmZzZXRbaW5kZXhdID0gLW9mZnNldFtpbmRleF07XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoc3RyLCBvZmZzZXRMZW4pIHtcbiAgdmFyIG4gPSB2b2lkIDA7XG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuICByZXR1cm4gbiB8fCAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbCkge1xuICBvZmZzZXRbMF0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFswXSwgZWwud2lkdGgpO1xuICBvZmZzZXRbMV0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFsxXSwgZWwuaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZG9tQWxpZ24oZWwsIHJlZk5vZGUsIGFsaWduKSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIG92ZXJmbG93ID0gYWxpZ24ub3ZlcmZsb3c7XG4gIHZhciB0YXJnZXQgPSBhbGlnbi50YXJnZXQgfHwgcmVmTm9kZTtcbiAgdmFyIHNvdXJjZSA9IGFsaWduLnNvdXJjZSB8fCBlbDtcbiAgb2Zmc2V0ID0gW10uY29uY2F0KG9mZnNldCk7XG4gIHRhcmdldE9mZnNldCA9IFtdLmNvbmNhdCh0YXJnZXRPZmZzZXQpO1xuICBvdmVyZmxvdyA9IG92ZXJmbG93IHx8IHt9O1xuICB2YXIgbmV3T3ZlcmZsb3dDZmcgPSB7fTtcbiAgdmFyIGZhaWwgPSAwO1xuICAvLyDlvZPliY3oioLngrnlj6/ku6XooqvmlL7nva7nmoTmmL7npLrljLrln59cbiAgdmFyIHZpc2libGVSZWN0ID0gKDAsIF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyWydkZWZhdWx0J10pKHNvdXJjZSk7XG4gIC8vIOW9k+WJjeiKgueCueaJgOWNoOeahOWMuuWfnywgbGVmdC90b3Avd2lkdGgvaGVpZ2h0XG4gIHZhciBlbFJlZ2lvbiA9ICgwLCBfZ2V0UmVnaW9uMlsnZGVmYXVsdCddKShzb3VyY2UpO1xuICAvLyDlj4LnhafoioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuICB2YXIgcmVmTm9kZVJlZ2lvbiA9ICgwLCBfZ2V0UmVnaW9uMlsnZGVmYXVsdCddKSh0YXJnZXQpO1xuICAvLyDlsIYgb2Zmc2V0IOi9rOaNouaIkOaVsOWAvO+8jOaUr+aMgeeZvuWIhuavlFxuICBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbFJlZ2lvbik7XG4gIG5vcm1hbGl6ZU9mZnNldCh0YXJnZXRPZmZzZXQsIHJlZk5vZGVSZWdpb24pO1xuICAvLyDlvZPliY3oioLngrnlsIbopoHooqvmlL7nva7nmoTkvY3nva5cbiAgdmFyIGVsRnV0dXJlUG9zID0gKDAsIF9nZXRFbEZ1dHVyZVBvczJbJ2RlZmF1bHQnXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAvLyDlvZPliY3oioLngrnlsIbopoHmiYDlpITnmoTljLrln59cbiAgdmFyIG5ld0VsUmVnaW9uID0gX3V0aWxzMlsnZGVmYXVsdCddLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG5cbiAgdmFyIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlID0gIWlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQpO1xuXG4gIC8vIOWmguaenOWPr+inhuWMuuWfn+S4jeiDveWujOWFqOaUvue9ruW9k+WJjeiKgueCueaXtuWFgeiuuOiwg+aVtFxuICBpZiAodmlzaWJsZVJlY3QgJiYgKG92ZXJmbG93LmFkanVzdFggfHwgb3ZlcmZsb3cuYWRqdXN0WSkgJiYgaXNUYXJnZXROb3RPdXRPZlZpc2libGUpIHtcbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WCkge1xuICAgICAgLy8g5aaC5p6c5qiq5ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW2xyXS9pZywge1xuICAgICAgICAgIGw6ICdyJyxcbiAgICAgICAgICByOiAnbCdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuICAgICAgICB2YXIgbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3RWxGdXR1cmVQb3MgPSAoMCwgX2dldEVsRnV0dXJlUG9zMlsnZGVmYXVsdCddKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgbmV3UG9pbnRzLCBuZXdPZmZzZXQsIG5ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFgobmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBuZXdQb2ludHM7XG4gICAgICAgICAgb2Zmc2V0ID0gbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IG5ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RZKSB7XG4gICAgICAvLyDlpoLmnpznurXlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgX25ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW3RiXS9pZywge1xuICAgICAgICAgIHQ6ICdiJyxcbiAgICAgICAgICBiOiAndCdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuICAgICAgICB2YXIgX25ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAxKTtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMSk7XG4gICAgICAgIHZhciBfbmV3RWxGdXR1cmVQb3MgPSAoMCwgX2dldEVsRnV0dXJlUG9zMlsnZGVmYXVsdCddKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgX25ld1BvaW50cywgX25ld09mZnNldCwgX25ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFkoX25ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gX25ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBfbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IF9uZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlpoLmnpzlpLHotKXvvIzph43mlrDorqHnrpflvZPliY3oioLngrnlsIbopoHooqvmlL7nva7nmoTkvY3nva5cbiAgICBpZiAoZmFpbCkge1xuICAgICAgZWxGdXR1cmVQb3MgPSAoMCwgX2dldEVsRnV0dXJlUG9zMlsnZGVmYXVsdCddKShlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7XG4gICAgICBfdXRpbHMyWydkZWZhdWx0J10ubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5Y+N5LiL5ZCO55qE5L2N572u5piv5ZCm5Y+v5Lul5pS+5LiL5LqGXG4gICAgLy8g5aaC5p6c5LuN54S25pS+5LiN5LiL5Y+q5pyJ5oyH5a6a5LqG5Y+v5Lul6LCD5pW05b2T5YmN5pa55ZCR5omN6LCD5pW0XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCA9IG92ZXJmbG93LmFkanVzdFggJiYgaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcblxuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFkgPSBvdmVyZmxvdy5hZGp1c3RZICYmIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG5cbiAgICAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcbiAgICBpZiAobmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCB8fCBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZKSB7XG4gICAgICBuZXdFbFJlZ2lvbiA9ICgwLCBfYWRqdXN0Rm9yVmlld3BvcnQyWydkZWZhdWx0J10pKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG5ld092ZXJmbG93Q2ZnKTtcbiAgICB9XG4gIH1cblxuICAvLyBuZWVkIGp1ZGdlIHRvIGluIGNhc2Ugc2V0IGZpeGVkIHdpdGggaW4gY3NzIG9uIGhlaWdodCBhdXRvIGVsZW1lbnRcbiAgaWYgKG5ld0VsUmVnaW9uLndpZHRoICE9PSBlbFJlZ2lvbi53aWR0aCkge1xuICAgIF91dGlsczJbJ2RlZmF1bHQnXS5jc3Moc291cmNlLCAnd2lkdGgnLCBfdXRpbHMyWydkZWZhdWx0J10ud2lkdGgoc291cmNlKSArIG5ld0VsUmVnaW9uLndpZHRoIC0gZWxSZWdpb24ud2lkdGgpO1xuICB9XG5cbiAgaWYgKG5ld0VsUmVnaW9uLmhlaWdodCAhPT0gZWxSZWdpb24uaGVpZ2h0KSB7XG4gICAgX3V0aWxzMlsnZGVmYXVsdCddLmNzcyhzb3VyY2UsICdoZWlnaHQnLCBfdXRpbHMyWydkZWZhdWx0J10uaGVpZ2h0KHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi5oZWlnaHQgLSBlbFJlZ2lvbi5oZWlnaHQpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTkwXG4gIC8vIOebuOWvueS6juWxj+W5leS9jee9ruayoeWPmO+8jOiAjCBsZWZ0L3RvcCDlj5jkuoZcbiAgLy8g5L6L5aaCIDxkaXYgJ3JlbGF0aXZlJz48ZWwgYWJzb2x1dGU+PC9kaXY+XG4gIF91dGlsczJbJ2RlZmF1bHQnXS5vZmZzZXQoc291cmNlLCB7XG4gICAgbGVmdDogbmV3RWxSZWdpb24ubGVmdCxcbiAgICB0b3A6IG5ld0VsUmVnaW9uLnRvcFxuICB9LCB7XG4gICAgdXNlQ3NzUmlnaHQ6IGFsaWduLnVzZUNzc1JpZ2h0LFxuICAgIHVzZUNzc0JvdHRvbTogYWxpZ24udXNlQ3NzQm90dG9tLFxuICAgIHVzZUNzc1RyYW5zZm9ybTogYWxpZ24udXNlQ3NzVHJhbnNmb3JtXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG5cbmRvbUFsaWduLl9fZ2V0T2Zmc2V0UGFyZW50ID0gX2dldE9mZnNldFBhcmVudDJbJ2RlZmF1bHQnXTtcblxuZG9tQWxpZ24uX19nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgPSBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50MlsnZGVmYXVsdCddO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkb21BbGlnbjtcbi8qKlxuICogIDIwMTItMDQtMjYgeWltaW5naGVAZ21haWwuY29tXG4gKiAgIC0g5LyY5YyW5pm66IO95a+56b2Q566X5rOVXG4gKiAgIC0g5oWO55SoIHJlc2l6ZVhYXG4gKlxuICogIDIwMTEtMDctMTMgeWltaW5naGVAZ21haWwuY29tIG5vdGU6XG4gKiAgIC0g5aKe5Yqg5pm66IO95a+56b2Q77yM5Lul5Y+K5aSn5bCP6LCD5pW06YCJ6aG5XG4gKiovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS42LjVAZG9tLWFsaWduL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcHJvcGVydHlVdGlscyA9IHJlcXVpcmUoJy4vcHJvcGVydHlVdGlscycpO1xuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcblxudmFyIGdldENvbXB1dGVkU3R5bGVYID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBmb3JjZSh4LCB5KSB7XG4gIHJldHVybiB4ICsgeTtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG4gIGlmICgodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSArICdweCc7XG4gICAgfVxuICAgIGVsLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWwsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3NpdGlvbihlbGVtKSB7XG4gIHZhciBib3ggPSB2b2lkIDA7XG4gIHZhciB4ID0gdm9pZCAwO1xuICB2YXIgeSA9IHZvaWQgMDtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgLy8g5qC55o2uIEdCUyDmnIDmlrDmlbDmja7vvIxBLUdyYWRlIEJyb3dzZXJzIOmDveW3suaUr+aMgSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qg5pa55rOV77yM5LiN55So5YaN6ICD6JmR5Lyg57uf55qE5a6e546w5pa55byPXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8g5rOo77yaalF1ZXJ5IOi/mOiAg+iZkeWHj+WOuyBkb2NFbGVtLmNsaWVudExlZnQvY2xpZW50VG9wXG4gIC8vIOS9hua1i+ivleWPkeeOsO+8jOi/meagt+WPjeiAjOS8muWvvOiHtOW9kyBodG1sIOWSjCBib2R5IOaciei+uei3nS/ovrnmoYbmoLflvI/ml7bvvIzojrflj5bnmoTlgLzkuI3mraPnoa5cbiAgLy8g5q2k5aSW77yMaWU2IOS8muW/veeVpSBodG1sIOeahCBtYXJnaW4g5YC877yM5bm46L+Q5Zyw5piv5rKh5pyJ6LCB5Lya5Y676K6+572uIGh0bWwg55qEIG1hcmdpblxuXG4gIHggPSBib3gubGVmdDtcbiAgeSA9IGJveC50b3A7XG5cbiAgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG5cbiAgLy8gaWUg5LiL5bqU6K+l5YeP5Y6756qX5Y+j55qE6L655qGG5ZCn77yM5q+V56uf6buY6K6kIGFic29sdXRlIOmDveaYr+ebuOWvueeql+WPo+WumuS9jeeahFxuICAvLyDnqpflj6PovrnmoYbmoIflh4bmmK/orr4gZG9jdW1lbnRFbGVtZW50ICxxdWlya3Mg5pe26K6+572uIGJvZHlcbiAgLy8g5pyA5aW956aB5q2i5ZyoIGJvZHkg5ZKMIGh0bWwg5LiK6L655qGGIO+8jOS9hiBpZSA8IDkgaHRtbCDpu5jorqTmnIkgMnB4IO+8jOWHj+WOu1xuICAvLyDkvYbmmK/pnZ4gaWUg5LiN5Y+v6IO96K6+572u56qX5Y+j6L655qGG77yMYm9keSBodG1sIOS5n+S4jeaYr+eql+WPoyAsaWUg5Y+v5Lul6YCa6L+HIGh0bWwsYm9keSDorr7nva5cbiAgLy8g5qCH5YeGIGllIOS4iyBkb2NFbGVtLmNsaWVudFRvcCDlsLHmmK8gYm9yZGVyLXRvcFxuICAvLyBpZTcgaHRtbCDljbPnqpflj6PovrnmoYbmlLnlj5jkuI3kuobjgILmsLjov5zkuLogMlxuICAvLyDkvYbmoIflh4YgZmlyZWZveC9jaHJvbWUvaWU5IOS4iyBkb2NFbGVtLmNsaWVudFRvcCDmmK/nqpflj6PovrnmoYbvvIzljbPkvb/orr7kuoYgYm9yZGVyLXRvcCDkuZ/kuLogMFxuXG4gIHggLT0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICB5IC09IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG5cbi8qKlxuICogQSBjcnVkZSB3YXkgb2YgZGV0ZXJtaW5pbmcgaWYgYW4gb2JqZWN0IGlzIGEgd2luZG93XG4gKiBAbWVtYmVyIHV0aWxcbiAqL1xuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8vIG11c3QgdXNlID09IGZvciBpZThcbiAgLyogZXNsaW50IGVxZXFlcTowICovXG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50KG5vZGUpIHtcbiAgaWYgKGlzV2luZG93KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUuZG9jdW1lbnQ7XG4gIH1cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjcykge1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNzO1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZ2V0RG9jdW1lbnQoZWxlbSk7XG4gIGNvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlIHx8IGQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhbCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFN0eWxlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIF9SRV9OVU1fTk9fUFggPSBuZXcgUmVnRXhwKCdeKCcgKyBSRV9OVU0gKyAnKSg/IXB4KVthLXolXSskJywgJ2knKTtcbnZhciBSRV9QT1MgPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgQ1VSUkVOVF9TVFlMRSA9ICdjdXJyZW50U3R5bGUnO1xudmFyIFJVTlRJTUVfU1RZTEUgPSAncnVudGltZVN0eWxlJztcbnZhciBMRUZUID0gJ2xlZnQnO1xudmFyIFBYID0gJ3B4JztcblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGVJRShlbGVtLCBuYW1lKSB7XG4gIC8vIGN1cnJlbnRTdHlsZSBtYXliZSBudWxsXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNTIzMS5hc3B4XG4gIHZhciByZXQgPSBlbGVtW0NVUlJFTlRfU1RZTEVdICYmIGVsZW1bQ1VSUkVOVF9TVFlMRV1bbmFtZV07XG5cbiAgLy8g5b2TIHdpZHRoL2hlaWdodCDorr7nva7kuLrnmb7liIbmr5Tml7bvvIzpgJrov4cgcGl4ZWxMZWZ0IOaWueW8j+i9rOaNoueahCB3aWR0aC9oZWlnaHQg5YC8XG4gIC8vIOS4gOW8gOWni+WwseWkhOeQhuS6hiEgQ1VTVE9NX1NUWUxFLmhlaWdodCxDVVNUT01fU1RZTEUud2lkdGggLGNzc0hvb2sg6Kej5YazQDIwMTEtMDgtMTlcbiAgLy8g5ZyoIGllIOS4i+S4jeWvue+8jOmcgOimgeebtOaOpeeUqCBvZmZzZXQg5pa55byPXG4gIC8vIGJvcmRlcldpZHRoIOetieWAvOS5n+aciemXrumimO+8jOS9huiAg+iZkeWIsCBib3JkZXJXaWR0aCDorr7kuLrnmb7liIbmr5TnmoTmpoLnjoflvojlsI/vvIzov5nph4zlsLHkuI3ogIPomZHkuoZcblxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcbiAgaWYgKF9SRV9OVU1fTk9fUFgudGVzdChyZXQpICYmICFSRV9QT1MudGVzdChuYW1lKSkge1xuICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIHZhciBsZWZ0ID0gc3R5bGVbTEVGVF07XG4gICAgdmFyIHJzTGVmdCA9IGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBwcmV2ZW50IGZsYXNoaW5nIG9mIGNvbnRlbnRcbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICBzdHlsZVtMRUZUXSA9IG5hbWUgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IHJldCB8fCAwO1xuICAgIHJldCA9IHN0eWxlLnBpeGVsTGVmdCArIFBYO1xuXG4gICAgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuICAgIHN0eWxlW0xFRlRdID0gbGVmdDtcblxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cbiAgcmV0dXJuIHJldCA9PT0gJycgPyAnYXV0bycgOiByZXQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnZXRDb21wdXRlZFN0eWxlWCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gX2dldENvbXB1dGVkU3R5bGUgOiBfZ2V0Q29tcHV0ZWRTdHlsZUlFO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXREaXJlY3Rpb24oZGlyLCBvcHRpb24pIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIG9wdGlvbi51c2VDc3NSaWdodCA/ICdyaWdodCcgOiBkaXI7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbi51c2VDc3NCb3R0b20gPyAnYm90dG9tJyA6IGRpcjtcbn1cblxuZnVuY3Rpb24gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oZGlyKSB7XG4gIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiAncmlnaHQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiAnbGVmdCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAndG9wJykge1xuICAgIHJldHVybiAnYm90dG9tJztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdib3R0b20nKSB7XG4gICAgcmV0dXJuICd0b3AnO1xuICB9XG59XG5cbi8vIOiuvue9riBlbGVtIOebuOWvuSBlbGVtLm93bmVyRG9jdW1lbnQg55qE5Z2Q5qCHXG5mdW5jdGlvbiBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIC8vIHNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgaWYgKGNzcyhlbGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuICB2YXIgcHJlc2V0SCA9IC05OTk7XG4gIHZhciBwcmVzZXRWID0gLTk5OTtcbiAgdmFyIGhvcml6b250YWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbignbGVmdCcsIG9wdGlvbik7XG4gIHZhciB2ZXJ0aWNhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCd0b3AnLCBvcHRpb24pO1xuICB2YXIgb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihob3Jpem9udGFsUHJvcGVydHkpO1xuICB2YXIgb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24odmVydGljYWxQcm9wZXJ0eSk7XG5cbiAgaWYgKGhvcml6b250YWxQcm9wZXJ0eSAhPT0gJ2xlZnQnKSB7XG4gICAgcHJlc2V0SCA9IDk5OTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbFByb3BlcnR5ICE9PSAndG9wJykge1xuICAgIHByZXNldFYgPSA5OTk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsVHJhbnNpdGlvbiA9ICcnO1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgIG9yaWdpbmFsVHJhbnNpdGlvbiA9ICgwLCBfcHJvcGVydHlVdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkpKGVsZW0pIHx8ICcnO1xuICAgICgwLCBfcHJvcGVydHlVdGlscy5zZXRUcmFuc2l0aW9uUHJvcGVydHkpKGVsZW0sICdub25lJyk7XG4gIH1cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICBlbGVtLnN0eWxlW29wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbaG9yaXpvbnRhbFByb3BlcnR5XSA9IHByZXNldEggKyAncHgnO1xuICB9XG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBlbGVtLnN0eWxlW29wcG9zaXRlVmVydGljYWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW3ZlcnRpY2FsUHJvcGVydHldID0gcHJlc2V0ViArICdweCc7XG4gIH1cbiAgdmFyIG9sZCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIG9yaWdpbmFsU3R5bGUgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGRpciA9IGdldE9mZnNldERpcmVjdGlvbihrZXksIG9wdGlvbik7XG4gICAgICB2YXIgcHJlc2V0ID0ga2V5ID09PSAnbGVmdCcgPyBwcmVzZXRIIDogcHJlc2V0VjtcbiAgICAgIHZhciBvZmYgPSBvcmlnaW5hbE9mZnNldFtrZXldIC0gb2xkW2tleV07XG4gICAgICBpZiAoZGlyID09PSBrZXkpIHtcbiAgICAgICAgb3JpZ2luYWxTdHlsZVtkaXJdID0gcHJlc2V0ICsgb2ZmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ2luYWxTdHlsZVtkaXJdID0gcHJlc2V0IC0gb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjc3MoZWxlbSwgb3JpZ2luYWxTdHlsZSk7XG4gIC8vIGZvcmNlIHJlbGF5b3V0XG4gIGZvcmNlKGVsZW0ub2Zmc2V0VG9wLCBlbGVtLm9mZnNldExlZnQpO1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICAoMCwgX3Byb3BlcnR5VXRpbHMuc2V0VHJhbnNpdGlvblByb3BlcnR5KShlbGVtLCBvcmlnaW5hbFRyYW5zaXRpb24pO1xuICB9XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIgX2tleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICB2YXIgX2RpciA9IGdldE9mZnNldERpcmVjdGlvbihfa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIF9vZmYgPSBvZmZzZXRbX2tleV0gLSBvcmlnaW5hbE9mZnNldFtfa2V5XTtcbiAgICAgIGlmIChfa2V5ID09PSBfZGlyKSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gKyBfb2ZmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSAtIF9vZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNzcyhlbGVtLCByZXQpO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0oZWxlbSwgb2Zmc2V0KSB7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIG9yaWdpbmFsWFkgPSAoMCwgX3Byb3BlcnR5VXRpbHMuZ2V0VHJhbnNmb3JtWFkpKGVsZW0pO1xuICB2YXIgcmVzdWx0WFkgPSB7IHg6IG9yaWdpbmFsWFkueCwgeTogb3JpZ2luYWxYWS55IH07XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueCA9IG9yaWdpbmFsWFkueCArIG9mZnNldC5sZWZ0IC0gb3JpZ2luYWxPZmZzZXQubGVmdDtcbiAgfVxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueSA9IG9yaWdpbmFsWFkueSArIG9mZnNldC50b3AgLSBvcmlnaW5hbE9mZnNldC50b3A7XG4gIH1cbiAgKDAsIF9wcm9wZXJ0eVV0aWxzLnNldFRyYW5zZm9ybVhZKShlbGVtLCByZXN1bHRYWSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICBpZiAob3B0aW9uLnVzZUNzc1JpZ2h0IHx8IG9wdGlvbi51c2VDc3NCb3R0b20pIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIGlmIChvcHRpb24udXNlQ3NzVHJhbnNmb3JtICYmICgwLCBfcHJvcGVydHlVdGlscy5nZXRUcmFuc2Zvcm1OYW1lKSgpIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpIHtcbiAgICBzZXRUcmFuc2Zvcm0oZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTtcblxuICAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgdmFyIGogPSB2b2lkIDA7XG4gIHZhciBpID0gdm9pZCAwO1xuICBmb3IgKGogPSAwOyBqIDwgcHJvcHMubGVuZ3RoOyBqKyspIHtcbiAgICBwcm9wID0gcHJvcHNbal07XG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB3aGljaC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY3NzUHJvcCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9ICcnICsgcHJvcCArIHdoaWNoW2ldICsgJ1dpZHRoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgY3NzUHJvcCkpIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIGRvbVV0aWxzID0ge307XG5cbmVhY2goWydXaWR0aCcsICdIZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZG9tVXRpbHNbJ2RvYycgKyBuYW1lXSA9IGZ1bmN0aW9uIChyZWZXaW4pIHtcbiAgICB2YXIgZCA9IHJlZldpbi5kb2N1bWVudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgLy8gZmlyZWZveCBjaHJvbWUgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDwgYm9keS5zY3JvbGxIZWlnaHRcbiAgICAvLyBpZSBzdGFuZGFyZCBtb2RlIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodD4gYm9keS5zY3JvbGxIZWlnaHRcbiAgICBkLmRvY3VtZW50RWxlbWVudFsnc2Nyb2xsJyArIG5hbWVdLFxuICAgIC8vIHF1aXJrcyA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQg5pyA5aSn562J5LqO5Y+v6KeG56qX5Y+j5aSa5LiA54K577yfXG4gICAgZC5ib2R5WydzY3JvbGwnICsgbmFtZV0sIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdID0gZnVuY3Rpb24gKHdpbikge1xuICAgIC8vIHBjIGJyb3dzZXIgaW5jbHVkZXMgc2Nyb2xsYmFyIGluIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdmFyIHByb3AgPSAnY2xpZW50JyArIG5hbWU7XG4gICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnRQcm9wID0gZG9jdW1lbnRFbGVtZW50W3Byb3BdO1xuICAgIC8vIOagh+WHhuaooeW8j+WPliBkb2N1bWVudEVsZW1lbnRcbiAgICAvLyBiYWNrY29tcGF0IOWPliBib2R5XG4gICAgcmV0dXJuIGRvYy5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCcgJiYgZG9jdW1lbnRFbGVtZW50UHJvcCB8fCBib2R5ICYmIGJvZHlbcHJvcF0gfHwgZG9jdW1lbnRFbGVtZW50UHJvcDtcbiAgfTtcbn0pO1xuXG4vKlxuIOW+l+WIsOWFg+e0oOeahOWkp+Wwj+S/oeaBr1xuIEBwYXJhbSBlbGVtXG4gQHBhcmFtIG5hbWVcbiBAcGFyYW0ge1N0cmluZ30gW2V4dHJhXSAgJ3BhZGRpbmcnIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nXG4gJ2JvcmRlcicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXJcbiAnbWFyZ2luJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlciArIG1hcmdpblxuICovXG5mdW5jdGlvbiBnZXRXSChlbGVtLCBuYW1lLCBleCkge1xuICB2YXIgZXh0cmEgPSBleDtcbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSwgY29tcHV0ZWRTdHlsZSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG4gIGlmIChib3JkZXJCb3hWYWx1ZSA9PT0gbnVsbCB8fCBib3JkZXJCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJvcmRlckJveFZhbHVlIDw9IDApIHtcbiAgICBib3JkZXJCb3hWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG4gICAgY3NzQm94VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBuYW1lKTtcbiAgICBpZiAoY3NzQm94VmFsdWUgPT09IG51bGwgfHwgY3NzQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSAnJywgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG4gIGlmIChleHRyYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmEgPSBpc0JvcmRlckJveCA/IEJPUkRFUl9JTkRFWCA6IENPTlRFTlRfSU5ERVg7XG4gIH1cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzQm94VmFsdWU7XG4gIH0gZWxzZSBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgaWYgKGV4dHJhID09PSBCT1JERVJfSU5ERVgpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpKTtcbiAgfVxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59O1xuXG4vLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuZnVuY3Rpb24gZ2V0V0hJZ25vcmVEaXNwbGF5KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB2YWwgPSB2b2lkIDA7XG4gIHZhciBlbGVtID0gYXJnc1swXTtcbiAgLy8gaW4gY2FzZSBlbGVtIGlzIHdpbmRvd1xuICAvLyBlbGVtLm9mZnNldFdpZHRoID09PSB1bmRlZmluZWRcbiAgaWYgKGVsZW0ub2Zmc2V0V2lkdGggIT09IDApIHtcbiAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICBkb21VdGlsc1snb3V0ZXInICsgZmlyc3RdID0gZnVuY3Rpb24gKGVsLCBpbmNsdWRlTWFyZ2luKSB7XG4gICAgcmV0dXJuIGVsICYmIGdldFdISWdub3JlRGlzcGxheShlbCwgbmFtZSwgaW5jbHVkZU1hcmdpbiA/IE1BUkdJTl9JTkRFWCA6IEJPUkRFUl9JTkRFWCk7XG4gIH07XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHYpIHtcbiAgICB2YXIgdmFsID0gdjtcbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gICAgICAgIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG4gICAgICAgIGlmIChpc0JvcmRlckJveCkge1xuICAgICAgICAgIHZhbCArPSBnZXRQQk1XaWR0aChlbGVtLCBbJ3BhZGRpbmcnLCAnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbSAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWxlbSwgbmFtZSwgQ09OVEVOVF9JTkRFWCk7XG4gIH07XG59KTtcblxuZnVuY3Rpb24gbWl4KHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGkgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0b1tpXSA9IGZyb21baV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxudmFyIHV0aWxzID0ge1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5kb2N1bWVudCAmJiBub2RlLnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB9LFxuXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudCxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcbiAgICBpZiAob3ZlcmZsb3cpIHtcbiAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHJldC5vdmVyZmxvd1tpXSA9IG9iai5vdmVyZmxvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIG1peDogbWl4LFxuICBnZXRXaW5kb3dTY3JvbGxMZWZ0OiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxMZWZ0KHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgfSxcbiAgZ2V0V2luZG93U2Nyb2xsVG9wOiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxUb3Aodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxUb3Aodyk7XG4gIH0sXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMjsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdXRpbHMubWl4KHJldCwgYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5cbm1peCh1dGlscywgZG9tVXRpbHMpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB1dGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS42LjVAZG9tLWFsaWduL2xpYi91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRUcmFuc2Zvcm1OYW1lID0gZ2V0VHJhbnNmb3JtTmFtZTtcbmV4cG9ydHMuc2V0VHJhbnNpdGlvblByb3BlcnR5ID0gc2V0VHJhbnNpdGlvblByb3BlcnR5O1xuZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHkgPSBnZXRUcmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLmdldFRyYW5zZm9ybVhZID0gZ2V0VHJhbnNmb3JtWFk7XG5leHBvcnRzLnNldFRyYW5zZm9ybVhZID0gc2V0VHJhbnNmb3JtWFk7XG52YXIgdmVuZG9yUHJlZml4ID0gdm9pZCAwO1xuXG52YXIganNDc3NNYXAgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICAvLyBJRSBkaWQgaXQgd3JvbmcgYWdhaW4gLi4uXG4gIG1zOiAnLW1zLScsXG4gIE86ICctby0nXG59O1xuXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXgoKSB7XG4gIGlmICh2ZW5kb3JQcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZW5kb3JQcmVmaXg7XG4gIH1cbiAgdmVuZG9yUHJlZml4ID0gJyc7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZTtcbiAgdmFyIHRlc3RQcm9wID0gJ1RyYW5zZm9ybSc7XG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmVuZG9yUHJlZml4ID0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmVuZG9yUHJlZml4O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gZ2V0VmVuZG9yUHJlZml4KCkgKyAnVHJhbnNpdGlvblByb3BlcnR5JyA6ICd0cmFuc2l0aW9uUHJvcGVydHknO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2Zvcm0nIDogJ3RyYW5zZm9ybSc7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zaXRpb25OYW1lKCk7XG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIGlmIChuYW1lICE9PSAndHJhbnNpdGlvblByb3BlcnR5Jykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNmb3JtTmFtZSgpO1xuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCBub2RlLnN0eWxlW2dldFRyYW5zaXRpb25OYW1lKCldO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1YWShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4geyB4OiBwYXJzZUZsb2F0KG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdLCAwKSwgeTogcGFyc2VGbG9hdChtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSwgMCkgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxuXG52YXIgbWF0cml4MmQgPSAvbWF0cml4XFwoKC4qKVxcKS87XG52YXIgbWF0cml4M2QgPSAvbWF0cml4M2RcXCgoLiopXFwpLztcblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtWFkobm9kZSwgeHkpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICB2YXIgYXJyID0gdm9pZCAwO1xuICAgIHZhciBtYXRjaDJkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDJkKTtcbiAgICBpZiAobWF0Y2gyZCkge1xuICAgICAgbWF0Y2gyZCA9IG1hdGNoMmRbMV07XG4gICAgICBhcnIgPSBtYXRjaDJkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzRdID0geHkueDtcbiAgICAgIGFycls1XSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ21hdHJpeCgnICsgYXJyLmpvaW4oJywnKSArICcpJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaDNkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDNkKVsxXTtcbiAgICAgIGFyciA9IG1hdGNoM2Quc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbMTJdID0geHkueDtcbiAgICAgIGFyclsxM10gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsICdtYXRyaXgzZCgnICsgYXJyLmpvaW4oJywnKSArICcpJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldFRyYW5zZm9ybShub2RlLCAndHJhbnNsYXRlWCgnICsgeHkueCArICdweCkgdHJhbnNsYXRlWSgnICsgeHkueSArICdweCkgdHJhbnNsYXRlWigwKScpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL3Byb3BlcnR5VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoX3V0aWxzMlsnZGVmYXVsdCddLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcbiAgLypcbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O292ZXJmbG93OiBoaWRkZW5cIj5cbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIiBpZD1cImQ2XCI+XG4gICDlhYPntKAgNiDpq5ggMTAwcHgg5a69IDUwcHg8YnIvPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgICovXG4gIC8vIGVsZW1lbnQub2Zmc2V0UGFyZW50IGRvZXMgdGhlIHJpZ2h0IHRoaW5nIGluIGllNyBhbmQgYmVsb3cuIFJldHVybiBwYXJlbnQgd2l0aCBsYXlvdXQhXG4gIC8vICBJbiBvdGhlciBicm93c2VycyBpdCBvbmx5IGluY2x1ZGVzIGVsZW1lbnRzIHdpdGggcG9zaXRpb24gYWJzb2x1dGUsIHJlbGF0aXZlIG9yXG4gIC8vIGZpeGVkLCBub3QgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBzZXQgdG8gYXV0byBvciBzY3JvbGwuXG4gIC8vICAgICAgICBpZiAoVUEuaWUgJiYgaWVNb2RlIDwgOCkge1xuICAvLyAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gICAgICAgIH1cbiAgLy8g57uf5LiA55qEIG9mZnNldFBhcmVudCDmlrnms5VcbiAgdmFyIGRvYyA9IF91dGlsczJbJ2RlZmF1bHQnXS5nZXREb2N1bWVudChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgdmFyIHBvc2l0aW9uU3R5bGUgPSBfdXRpbHMyWydkZWZhdWx0J10uY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICB2YXIgc2tpcFN0YXRpYyA9IHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcgfHwgcG9zaXRpb25TdHlsZSA9PT0gJ2Fic29sdXRlJztcblxuICBpZiAoIXNraXBTdGF0aWMpIHtcbiAgICByZXR1cm4gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcgPyBudWxsIDogZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgZm9yIChwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHk7IHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgcG9zaXRpb25TdHlsZSA9IF91dGlsczJbJ2RlZmF1bHQnXS5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb25TdHlsZSAhPT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRPZmZzZXRQYXJlbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuNi41QGRvbS1hbGlnbi9saWIvZ2V0T2Zmc2V0UGFyZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudCA9IHJlcXVpcmUoJy4vZ2V0T2Zmc2V0UGFyZW50Jyk7XG5cbnZhciBfZ2V0T2Zmc2V0UGFyZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE9mZnNldFBhcmVudCk7XG5cbnZhciBfaXNBbmNlc3RvckZpeGVkID0gcmVxdWlyZSgnLi9pc0FuY2VzdG9yRml4ZWQnKTtcblxudmFyIF9pc0FuY2VzdG9yRml4ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBbmNlc3RvckZpeGVkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIOiOt+W+l+WFg+e0oOeahOaYvuekuumDqOWIhueahOWMuuWfn1xuICovXG5mdW5jdGlvbiBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogSW5maW5pdHksXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogSW5maW5pdHlcbiAgfTtcbiAgdmFyIGVsID0gKDAsIF9nZXRPZmZzZXRQYXJlbnQyWydkZWZhdWx0J10pKGVsZW1lbnQpO1xuICB2YXIgZG9jID0gX3V0aWxzMlsnZGVmYXVsdCddLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cbiAgd2hpbGUgKGVsKSB7XG4gICAgLy8gY2xpZW50V2lkdGggaXMgemVybyBmb3IgaW5saW5lIGJsb2NrIGVsZW1lbnRzIGluIGllLlxuICAgIGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPT09IC0xIHx8IGVsLmNsaWVudFdpZHRoICE9PSAwKSAmJlxuICAgIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgX3V0aWxzMlsnZGVmYXVsdCddLmNzcyhlbCwgJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgdmFyIHBvcyA9IF91dGlsczJbJ2RlZmF1bHQnXS5vZmZzZXQoZWwpO1xuICAgICAgLy8gYWRkIGJvcmRlclxuICAgICAgcG9zLmxlZnQgKz0gZWwuY2xpZW50TGVmdDtcbiAgICAgIHBvcy50b3AgKz0gZWwuY2xpZW50VG9wO1xuICAgICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBwb3MudG9wKTtcbiAgICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsXG4gICAgICAvLyBjb25zaWRlciBhcmVhIHdpdGhvdXQgc2Nyb2xsQmFyXG4gICAgICBwb3MubGVmdCArIGVsLmNsaWVudFdpZHRoKTtcbiAgICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgcG9zLnRvcCArIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgcG9zLmxlZnQpO1xuICAgIH0gZWxzZSBpZiAoZWwgPT09IGJvZHkgfHwgZWwgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGVsID0gKDAsIF9nZXRPZmZzZXRQYXJlbnQyWydkZWZhdWx0J10pKGVsKTtcbiAgfVxuXG4gIC8vIFNldCBlbGVtZW50IHBvc2l0aW9uIHRvIGZpeGVkXG4gIC8vIG1ha2Ugc3VyZSBhYnNvbHV0ZSBlbGVtZW50IGl0c2VsZiBkb24ndCBhZmZlY3QgaXQncyB2aXNpYmxlIGFyZWFcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzYwMVxuICB2YXIgb3JpZ2luYWxQb3NpdGlvbiA9IG51bGw7XG4gIGlmICghX3V0aWxzMlsnZGVmYXVsdCddLmlzV2luZG93KGVsZW1lbnQpICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvcmlnaW5hbFBvc2l0aW9uID0gZWxlbWVudC5zdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgcG9zaXRpb24gPSBfdXRpbHMyWydkZWZhdWx0J10uY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNjcm9sbFggPSBfdXRpbHMyWydkZWZhdWx0J10uZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IF91dGlsczJbJ2RlZmF1bHQnXS5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSBfdXRpbHMyWydkZWZhdWx0J10udmlld3BvcnRXaWR0aCh3aW4pO1xuICB2YXIgdmlld3BvcnRIZWlnaHQgPSBfdXRpbHMyWydkZWZhdWx0J10udmlld3BvcnRIZWlnaHQod2luKTtcbiAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgLy8gUmVzZXQgZWxlbWVudCBwb3NpdGlvbiBhZnRlciBjYWxjdWxhdGUgdGhlIHZpc2libGUgYXJlYVxuICBpZiAoZWxlbWVudC5zdHlsZSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBvcmlnaW5hbFBvc2l0aW9uO1xuICB9XG5cbiAgaWYgKCgwLCBfaXNBbmNlc3RvckZpeGVkMlsnZGVmYXVsdCddKShlbGVtZW50KSkge1xuICAgIC8vIENsaXAgYnkgdmlld3BvcnQncyBzaXplLlxuICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBzY3JvbGxYKTtcbiAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHNjcm9sbFkpO1xuICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2xpcCBieSBkb2N1bWVudCdzIHNpemUuXG4gICAgdmFyIG1heFZpc2libGVXaWR0aCA9IE1hdGgubWF4KGRvY3VtZW50V2lkdGgsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBtYXhWaXNpYmxlV2lkdGgpO1xuXG4gICAgdmFyIG1heFZpc2libGVIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudEhlaWdodCwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIG1heFZpc2libGVIZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuNi41QGRvbS1hbGlnbi9saWIvZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpc0FuY2VzdG9yRml4ZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSB7XG4gIGlmIChfdXRpbHMyWydkZWZhdWx0J10uaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2MgPSBfdXRpbHMyWydkZWZhdWx0J10uZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuICBmb3IgKHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keTsgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICB2YXIgcG9zaXRpb25TdHlsZSA9IF91dGlsczJbJ2RlZmF1bHQnXS5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS42LjVAZG9tLWFsaWduL2xpYi9pc0FuY2VzdG9yRml4ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgb3ZlcmZsb3cpIHtcbiAgdmFyIHBvcyA9IF91dGlsczJbJ2RlZmF1bHQnXS5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIExlZnQgZWRnZSBpbnNpZGUgYW5kIHJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9XG5cbiAgLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICAvLyDkv53or4Hlt6bovrnnlYzlkozlj6/op4bljLrln5/lt6bovrnnlYzlr7npvZBcbiAgICBwb3MubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCwgdmlzaWJsZVJlY3QubGVmdCk7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBpbnNpZGUgYW5kIGJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9XG5cbiAgLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIC8vIOS/neivgeS4iui+ueeVjOWSjOWPr+inhuWMuuWfn+S4iui+ueeVjOWvuem9kFxuICAgIHBvcy50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCwgdmlzaWJsZVJlY3QudG9wKTtcbiAgfVxuXG4gIHJldHVybiBfdXRpbHMyWydkZWZhdWx0J10ubWl4KHBvcywgc2l6ZSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFkanVzdEZvclZpZXdwb3J0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL2FkanVzdEZvclZpZXdwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFJlZ2lvbihub2RlKSB7XG4gIHZhciBvZmZzZXQgPSB2b2lkIDA7XG4gIHZhciB3ID0gdm9pZCAwO1xuICB2YXIgaCA9IHZvaWQgMDtcbiAgaWYgKCFfdXRpbHMyWydkZWZhdWx0J10uaXNXaW5kb3cobm9kZSkgJiYgbm9kZS5ub2RlVHlwZSAhPT0gOSkge1xuICAgIG9mZnNldCA9IF91dGlsczJbJ2RlZmF1bHQnXS5vZmZzZXQobm9kZSk7XG4gICAgdyA9IF91dGlsczJbJ2RlZmF1bHQnXS5vdXRlcldpZHRoKG5vZGUpO1xuICAgIGggPSBfdXRpbHMyWydkZWZhdWx0J10ub3V0ZXJIZWlnaHQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHdpbiA9IF91dGlsczJbJ2RlZmF1bHQnXS5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogX3V0aWxzMlsnZGVmYXVsdCddLmdldFdpbmRvd1Njcm9sbExlZnQod2luKSxcbiAgICAgIHRvcDogX3V0aWxzMlsnZGVmYXVsdCddLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pXG4gICAgfTtcbiAgICB3ID0gX3V0aWxzMlsnZGVmYXVsdCddLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gX3V0aWxzMlsnZGVmYXVsdCddLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIH1cbiAgb2Zmc2V0LndpZHRoID0gdztcbiAgb2Zmc2V0LmhlaWdodCA9IGg7XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGdldFJlZ2lvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS42LjVAZG9tLWFsaWduL2xpYi9nZXRSZWdpb24uanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRBbGlnbk9mZnNldCA9IHJlcXVpcmUoJy4vZ2V0QWxpZ25PZmZzZXQnKTtcblxudmFyIF9nZXRBbGlnbk9mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRBbGlnbk9mZnNldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpIHtcbiAgdmFyIHAxID0gKDAsIF9nZXRBbGlnbk9mZnNldDJbJ2RlZmF1bHQnXSkocmVmTm9kZVJlZ2lvbiwgcG9pbnRzWzFdKTtcbiAgdmFyIHAyID0gKDAsIF9nZXRBbGlnbk9mZnNldDJbJ2RlZmF1bHQnXSkoZWxSZWdpb24sIHBvaW50c1swXSk7XG4gIHZhciBkaWZmID0gW3AyLmxlZnQgLSBwMS5sZWZ0LCBwMi50b3AgLSBwMS50b3BdO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogZWxSZWdpb24ubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0sXG4gICAgdG9wOiBlbFJlZ2lvbi50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGdldEVsRnV0dXJlUG9zO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjYuNUBkb20tYWxpZ24vbGliL2dldEVsRnV0dXJlUG9zLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIOiOt+WPliBub2RlIOS4iueahCBhbGlnbiDlr7npvZDngrkg55u45a+55LqO6aG16Z2i55qE5Z2Q5qCHXG4gKi9cblxuZnVuY3Rpb24gZ2V0QWxpZ25PZmZzZXQocmVnaW9uLCBhbGlnbikge1xuICB2YXIgViA9IGFsaWduLmNoYXJBdCgwKTtcbiAgdmFyIEggPSBhbGlnbi5jaGFyQXQoMSk7XG4gIHZhciB3ID0gcmVnaW9uLndpZHRoO1xuICB2YXIgaCA9IHJlZ2lvbi5oZWlnaHQ7XG5cbiAgdmFyIHggPSByZWdpb24ubGVmdDtcbiAgdmFyIHkgPSByZWdpb24udG9wO1xuXG4gIGlmIChWID09PSAnYycpIHtcbiAgICB5ICs9IGggLyAyO1xuICB9IGVsc2UgaWYgKFYgPT09ICdiJykge1xuICAgIHkgKz0gaDtcbiAgfVxuXG4gIGlmIChIID09PSAnYycpIHtcbiAgICB4ICs9IHcgLyAyO1xuICB9IGVsc2UgaWYgKEggPT09ICdyJykge1xuICAgIHggKz0gdztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gZ2V0QWxpZ25PZmZzZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuNi41QGRvbS1hbGlnbi9saWIvZ2V0QWxpZ25PZmZzZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBmYWRlIGluIG9yIGZhZGUgb3V0IGFuaW1hdGlvblxuICAgKi9cbiAgXCJpblwiOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKipcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGZhZGVkIG91dFxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgZmFkZSBpbiBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XG4gICAqIHNob3duXG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXQgZmluaXNoaW5nXG4gICAqIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZCBldmVudHMgYXJlXG4gICAqIGNhbmNlbGVkXG4gICAqL1xuICB0aW1lb3V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBpblxuICAgKi9cbiAgb25FbnRlcjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBmYWRlIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBoYXMgY29tcG9uZW50IGZhZGVkIGluXG4gICAqL1xuICBvbkVudGVyZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgZmFkZXMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBvdXRcbiAgICovXG4gIG9uRXhpdGluZzogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBmYWRlZCBvdXRcbiAgICovXG4gIG9uRXhpdGVkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdGltZW91dDogMzAwLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2Vcbn07XG5cbnZhciBGYWRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZhZGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBGYWRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZmFkZScpLFxuICAgICAgZW50ZXJlZENsYXNzTmFtZTogJ2luJyxcbiAgICAgIGVudGVyaW5nQ2xhc3NOYW1lOiAnaW4nXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGYWRlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5GYWRlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZhZGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZhZGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMC4wQGJlZS10cmFuc2l0aW9uL2J1aWxkL0ZhZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RpbnBlckJlZUNvcmUgPSByZXF1aXJlKCd0aW5wZXItYmVlLWNvcmUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8v5piv5ZCm5piv5omL6aOO55C05pWI5p6cXG4gIGFjY29yZGlvbjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIC8v5r+A5rS755qE6aG5XG4gIGFjdGl2ZUtleTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmFueSxcbiAgLy/pu5jorqTnmoTmv4DmtLvnmoTpoblcbiAgZGVmYXVsdEFjdGl2ZUtleTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmFueSxcbiAgLy/pgInkuK3lh73mlbBcbiAgb25TZWxlY3Q6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICByb2xlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY2NvcmRpb246IGZhbHNlLFxuICBjbHNQcmVmaXg6ICd1LXBhbmVsLWdyb3VwJ1xufTtcblxuLy8gVE9ETzogVXNlIHVuY29udHJvbGxhYmxlLlxuXG52YXIgUGFuZWxHcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbEdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lbEdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmVsR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVTZWxlY3QgPSBfdGhpcy5oYW5kbGVTZWxlY3QuYmluZChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUtleTogcHJvcHMuZGVmYXVsdEFjdGl2ZUtleVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGFuZWxHcm91cC5wcm90b3R5cGUuaGFuZGxlU2VsZWN0ID0gZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGtleSwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSwgZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlS2V5ID09PSBrZXkpIHtcbiAgICAgIGtleSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleToga2V5IH0pO1xuICB9O1xuXG4gIFBhbmVsR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY2NvcmRpb24gPSBfcHJvcHMuYWNjb3JkaW9uLFxuICAgICAgICBwcm9wc0FjdGl2ZUtleSA9IF9wcm9wcy5hY3RpdmVLZXksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBkZWZhdWx0QWN0aXZlS2V5ID0gX3Byb3BzLmRlZmF1bHRBY3RpdmVLZXksXG4gICAgICAgIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0LFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY2NvcmRpb24nLCAnYWN0aXZlS2V5JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkZWZhdWx0QWN0aXZlS2V5JywgJ29uU2VsZWN0JywgJ3N0eWxlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB2b2lkIDA7XG4gICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHNBY3RpdmVLZXkgIT0gbnVsbCA/IHByb3BzQWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgICBvdGhlcnMucm9sZSA9IG90aGVycy5yb2xlIHx8ICd0YWJsaXN0JztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkLnByb3BzLnN0eWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgICAgIF9leHRlbmRzKGNoaWxkUHJvcHMsIHtcbiAgICAgICAgICAgIGhlYWRlclJvbGU6ICd0YWInLFxuICAgICAgICAgICAgcGFuZWxSb2xlOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRlZDogY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKShfdGhpczIuaGFuZGxlU2VsZWN0LCBjaGlsZC5wcm9wcy5vblNlbGVjdClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQYW5lbEdyb3VwO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5QYW5lbEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBhbmVsR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhbmVsR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjEuMC4wQGJlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9CdXR0b24yW1wiZGVmYXVsdFwiXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMS4wLjJAYmVlLWJ1dHRvbi9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQHRpdGxlIOWwuuWvuFxuICAgICAqL1xuICAgIHNpemU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vbmVPZihbJ3NtJywgJ3hnJywgJ2xnJ10pLFxuICAgIC8qKlxuICAgICAqIEB0aXRsZSDmoLflvI9cbiAgICAgKi9cbiAgICBzdHlsZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBAdGl0bGUg5b2i54q2XG4gICAgICovXG4gICAgc2hhcGU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vbmVPZihbJ2Jsb2NrJywgJ3JvdW5kJywgJ2JvcmRlcicsICdzcXVhcmVkJywgJ2Zsb2F0aW5nJywgJ3BpbGxSaWdodCcsICdwaWxsTGVmdCcsICdpY29uJ10pLFxuXG4gICAgYm9yZGVyZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICAgIC8qKlxuICAgICogQHRpdGxlIOexu+Wei1xuICAgICovXG4gICAgY29sb3JzOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub25lT2YoWydwcmltYXJ5JywgJ2FjY2VudCcsICdzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInLCAnZGVmYXVsdCddKSxcbiAgICAvKipcbiAgICAgKiBAdGl0bGUg5piv5ZCm56aB55SoXG4gICAgICogQHZlSWdub3JlXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICAgIC8qKlxuICAgICAqIEB0aXRsZSDnsbvlkI1cbiAgICAgKiBAdmVJZ25vcmVcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBAdGl0bGUgPGJ1dHRvbj4g55qEIHR5cGVcbiAgICAgKiBAdmVJZ25vcmVcbiAgICAgKi9cbiAgICBodG1sVHlwZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc3VibWl0JywgJ2J1dHRvbicsICdyZXNldCddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaHRtbFR5cGU6ICdidXR0b24nLFxuICAgIGNsc1ByZWZpeDogJ3UtYnV0dG9uJyxcbiAgICBib3JkZXJlZDogZmFsc2VcblxufTtcblxudmFyIHNpemVNYXAgPSB7XG4gICAgc206ICdzbScsXG4gICAgeGc6ICd4ZycsXG4gICAgbGc6ICdsZydcbn0sXG4gICAgY29sb3JzTWFwID0ge1xuICAgIHByaW1hcnk6ICdwcmltYXJ5JyxcbiAgICBhY2NlbnQ6ICdhY2NlbnQnLFxuICAgIHN1Y2Nlc3M6ICdzdWNjZXNzJyxcbiAgICBpbmZvOiAnaW5mbycsXG4gICAgd2FybmluZzogJ3dhcm5pbmcnLFxuICAgIGRhbmdlcjogJ2Rhbmdlcidcbn0sXG4gICAgc2hhcGVNYXAgPSB7XG4gICAgYmxvY2s6ICdibG9jaycsXG4gICAgcm91bmQ6ICdyb3VuZCcsXG4gICAgYm9yZGVyOiAnYm9yZGVyJyxcbiAgICBzcXVhcmVkOiAnc3F1YXJlZCcsXG4gICAgZmxvYXRpbmc6ICdmbG9hdGluZycsXG4gICAgcGlsbFJpZ2h0OiAncGlsbC1yaWdodCcsXG4gICAgcGlsbExlZnQ6ICdwaWxsLWxlZnQnLFxuICAgIGljb246ICdpY29uJ1xufTtcblxudmFyIEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIH1cblxuICAgIEJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbG9ycyA9IF9wcm9wcy5jb2xvcnMsXG4gICAgICAgICAgICBzaGFwZSA9IF9wcm9wcy5zaGFwZSxcbiAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHNpemUgPSBfcHJvcHMuc2l6ZSxcbiAgICAgICAgICAgIGJvcmRlcmVkID0gX3Byb3BzLmJvcmRlcmVkLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBodG1sVHlwZSA9IF9wcm9wcy5odG1sVHlwZSxcbiAgICAgICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbG9ycycsICdzaGFwZScsICdkaXNhYmxlZCcsICdjbGFzc05hbWUnLCAnc2l6ZScsICdib3JkZXJlZCcsICdjaGlsZHJlbicsICdodG1sVHlwZScsICdjbHNQcmVmaXgnXSk7XG5cbiAgICAgICAgdmFyIGNsc09iaiA9IHt9O1xuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemVNYXBbc2l6ZV0pIHtcbiAgICAgICAgICAgIGNsc09ialtjbHNQcmVmaXggKyAnLScgKyBzaXplTWFwW3NpemVdXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhcGVNYXBbc2hhcGVdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgc2hhcGVNYXBbc2hhcGVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yc01hcFtjb2xvcnNdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgY29sb3JzTWFwW2NvbG9yc11dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL2Nsc09ialtgJHtjbHNQcmVmaXh9LWJvcmRlcmBdID0gYm9yZGVyZWQ7XG4gICAgICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsc1ByZWZpeCwgY2xzT2JqKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBodG1sVHlwZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgICAgICB9LCBvdGhlcnMpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQnV0dG9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4xLjAuMkBiZWUtYnV0dG9uL2J1aWxkL0J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0IFN3aXRjaCBmcm9tICcuL1N3aXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjbHNQcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICB1bkNoZWNrZWRDaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgb25DaGFuZ2VIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59O1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBjbHNQcmVmaXg6IFwidS1zd2l0Y2hcIixcbiAgY2hlY2tlZENoaWxkcmVuOiBudWxsLFxuICB1bkNoZWNrZWRDaGlsZHJlbjogbnVsbCxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuICBzaXplOiBcIlwiLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24oKSB7fSxcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge31cbn07XG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB2YXIgY2hlY2tlZCA9IGZhbHNlO1xuICAgIGlmIChcImNoZWNrZWRcIiBpbiB0aGlzLnByb3BzKSB7XG4gICAgICBjaGVja2VkID0gISF0aGlzLnByb3BzLmNoZWNrZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrZWQgPSAhIXRoaXMucHJvcHMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBjaGVja2VkXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKG5leHRQcm9wcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogbmV4dFByb3BzLmNoZWNrZWQgfSk7XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuZGVmYXVsdENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiBuZXh0UHJvcHMuZGVmYXVsdENoZWNrZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLy/ngrnlh7tzd2l0Y2jmlLnlj5jnirbmgIFcbiAgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogIWNoZWNrZWRcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlSGFuZGxlcighY2hlY2tlZCk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSghY2hlY2tlZCk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkQ2hpbGRyZW4sXG4gICAgICB1bkNoZWNrZWRDaGlsZHJlbixcbiAgICAgIG9uQ2hhbmdlSGFuZGxlcixcbiAgICAgIHNpemUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbHNQcmVmaXgsXG4gICAgICBjb2xvcnNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvL+iOt+WPlmNoZWNrZWRcbiAgICBjb25zdCBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xuICAgIGxldCBjbGFzc2VzID0ge1xuICAgICAgXCJpcy1jaGVja2VkXCI6IGNoZWNrZWRcbiAgICB9O1xuICAgIGlmIChzaXplKSB7XG4gICAgICBjbGFzc2VzW2Ake2Nsc1ByZWZpeH0tJHtzaXplfWBdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbG9ycykge1xuICAgICAgY2xhc3Nlc1tgJHtjbHNQcmVmaXh9LSR7Y29sb3JzfWBdID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IGNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsc1ByZWZpeCwgY2xhc3Nlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWUsIGNsYXNzTmFtZXMpfVxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Nsc1ByZWZpeH0taW5uZXJgfT5cbiAgICAgICAgICB7Y2hlY2tlZCA/IGNoZWNrZWRDaGlsZHJlbiA6IHVuQ2hlY2tlZENoaWxkcmVufVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuU3dpdGNoLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1N3aXRjaC5qcyIsIi8qKlxuICpcbiAqIEB0aXRsZSDpu5jorqTlvIDlhbNcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYmVlLWxheW91dFwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi4vLi4vc3JjXCI7XG5cbmNsYXNzIERlbW8xIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRlZmF1bHRDaGVja2VkOiB0cnVlXG4gICAgfTtcbiAgfVxuICBvbkNoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlZmF1bHRDaGVja2VkOiAhdGhpcy5zdGF0ZS5kZWZhdWx0Q2hlY2tlZFxuICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209ezJ9PlxuICAgICAgICAgIDxTd2l0Y2ggLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc209ezJ9PlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLmRlZmF1bHRDaGVja2VkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW8xO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRlbW8vZGVtb2xpc3QvRGVtbzEuanMiLCIvKipcbiAqXG4gKiBAdGl0bGUg5LiN5ZCM5aSn5bCP55qE5byA5YWzXG4gKiBAZGVzY3JpcHRpb24g6YCa6L+HYHNpemVg5bGe5oCn5o6n5Yi25byA5YWz55qE5aSn5bCPXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImJlZS1sYXlvdXRcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4uLy4uL3NyY1wiO1xuXG5jbGFzcyBEZW1vMiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT17Mn0+XG4gICAgICAgICAgPFN3aXRjaCBzaXplPVwic21cIiAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17Mn0+XG4gICAgICAgICAgPFN3aXRjaCAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzbT17Mn0+XG4gICAgICAgICAgPFN3aXRjaCBzaXplPVwibGdcIiAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtbzI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGVtby9kZW1vbGlzdC9EZW1vMi5qcyIsIi8qKlxuICpcbiAqIEB0aXRsZSDkuovku7blvIDlhbNcbiAqIEBkZXNjcmlwdGlvbiDngrnlh7vlvIDlhbPop6blj5Hkuovku7ZcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYmVlLWxheW91dFwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiLi4vLi4vc3JjXCI7XG5cbmNsYXNzIERlbW8zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN3aXRjaDogXCJcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3dpdGNoOiBgJHtlfWAsXG4gICAgICBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNtPXsyfT5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBjaGVja2VkQ2hpbGRyZW49e1wib25cIn1cbiAgICAgICAgICAgIHVuQ2hlY2tlZENoaWxkcmVuPXtcIm9mZlwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNtPXsyfT5cbiAgICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS5zd2l0Y2h9PC9zcGFuPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtbzM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGVtby9kZW1vbGlzdC9EZW1vMy5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFRQTtBQUNBOzs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFQQTtBQVVBO0FBQ0E7Ozs7QUFFQTs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQ0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25WQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcENBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3YyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNuT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQUNBOzs7Ozs7O0FBOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQXFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVEE7Ozs7Ozs7O0FBVUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFUQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFZQTtBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBVkE7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFWQTs7Ozs7OztBQVdBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFYQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQWNBO0FBQ0E7Ozs7QUFFQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=demo.js.map