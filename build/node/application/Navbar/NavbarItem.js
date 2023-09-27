"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarItem = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["active", "className", "children"];
var styles = {
  "nav": "pbui-xKR2U",
  "nav__container": "pbui-sLUB4",
  "brand": "pbui-UYmdh",
  "item": "pbui-SHk5V",
  "item--active": "pbui-9fUxo",
  "item__content": "pbui--JUZf"
};
var NavbarItem = exports.NavbarItem = /*#__PURE__*/_react["default"].forwardRef(function Item(props, propRef) {
  var active = props.active,
    className = props.className,
    children = props.children,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var navbarItemClasses = (0, _clsx["default"])(styles.item, className, active && styles['item--active']);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    className: navbarItemClasses,
    ref: propRef
  }, rest, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "skew-x-12",
      children: children
    })
  }));
});