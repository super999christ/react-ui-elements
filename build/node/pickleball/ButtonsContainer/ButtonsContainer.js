"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../Button"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
var styles = {
  "wrapper": "pbui-WAAZN",
  "button": "pbui-G-ST6"
};
var ButtonsContainer = function ButtonsContainer(_ref) {
  var buttons = _ref.buttons;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var buttonClasses = (0, _clsx["default"])(styles.button);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: wrapperClasses,
    children: buttons.map(function (button, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: button.link,
        rel: "noopener noreferrer",
        target: "_blank",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          size: "sm",
          variant: "secondary",
          className: buttonClasses,
          children: button.text
        })
      }, index);
    })
  });
};
var _default = exports["default"] = ButtonsContainer;