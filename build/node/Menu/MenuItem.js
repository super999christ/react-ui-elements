"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "disabled", "helper", "icon", "isActive", "onClick"];
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
var MenuItem = exports.MenuItem = /*#__PURE__*/(0, _react.forwardRef)(function MenuItem(props, propRef) {
  var children = props.children,
    disabled = props.disabled,
    helper = props.helper,
    icon = props.icon,
    isActive = props.isActive,
    onClick = props.onClick,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var listItemClasses = (0, _clsx["default"])(styles.list__item, props.rootClassName);
  var itemClasses = (0, _clsx["default"])(styles.item, props.className, isActive && styles['item--active'], disabled && styles['item--disabled']);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: listItemClasses,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
      ref: propRef,
      tabIndex: disabled ? -1 : isActive ? 0 : -1,
      className: itemClasses,
      onClick: onClick
    }, rest, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: styles.item__content,
        children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: styles.content__icon,
          children: icon
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: styles.content__text,
          children: children
        })]
      }), helper && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: styles.item__description,
        children: helper
      })]
    }))
  });
});