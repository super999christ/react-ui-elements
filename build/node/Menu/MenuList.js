"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuList = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "menu": "pbui-9NTlC",
  "list__arrow": "pbui-1ZIhd",
  "list__overlay": "pbui-N2pI4",
  "list__group": "pbui-6Txou",
  "list__item": "pbui--LEnB",
  "item": "pbui-tubqv",
  "item--disabled": "pbui-8HSqh",
  "item--active": "pbui-Ksbsi",
  "item__content": "pbui-ga2Lt",
  "content__icon": "pbui--0fsY",
  "content__text": "pbui-g-tVf",
  "item__description": "pbui-fgtmS"
};
var MenuList = exports.MenuList = /*#__PURE__*/(0, _react.forwardRef)(function MenuList(_ref, propRef) {
  var children = _ref.children,
    className = _ref.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var dropdownClasses = (0, _clsx["default"])(styles.menu, className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    className: dropdownClasses,
    ref: propRef
  }, rest, {
    children: children
  }));
});