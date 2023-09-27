"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "selected", "type"];
/* eslint-disable react/button-has-type */
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "pagination": "pbui-z1dk1",
  "pagination--item-button-prev": "pbui-8LwDc",
  "pagination--item-button-next": "pbui-DxHXA",
  "pagination--item-button": "pbui-QPYIh",
  "pagination--item-l-auto": "pbui-HhDTi",
  "pagination--item-r-auto": "pbui-jfR6F",
  "pagination--item": "pbui-HJFpq",
  "pagination--item-active": "pbui-27eAX"
};
var PaginationItem = /*#__PURE__*/(0, _react.forwardRef)(function (props, propRef) {
  var children = props.children,
    className = props.className,
    selected = props.selected,
    _props$type = props.type,
    type = _props$type === void 0 ? 'button' : _props$type,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var paginationItemClasses = (0, _clsx["default"])(styles['pagination--item'], className, selected && styles['pagination--item-active']);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    className: paginationItemClasses,
    ref: propRef,
    type: type
  }, rest, {
    children: children
  }));
});
var _default = exports["default"] = PaginationItem;