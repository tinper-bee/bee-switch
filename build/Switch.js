"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

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