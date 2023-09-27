"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _jsxRuntime = require("react/jsx-runtime");
var Select = function Select(_ref) {
  var props = (0, _extends2["default"])({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelect["default"], (0, _extends2["default"])({}, props));
};
var _default = exports["default"] = Select;