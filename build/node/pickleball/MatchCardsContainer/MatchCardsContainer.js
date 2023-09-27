"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var styles = {
  "wrapper": "pbui-oMu1y",
  "headline": "pbui-oRxnw",
  "content": "pbui-Za1CU"
};
var MatchCardsContainer = function MatchCardsContainer(_ref) {
  var children = _ref.children;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var contentClasses = (0, _clsx["default"])(styles.content);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headlineClasses,
      children: "Championship Sunday"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: contentClasses,
      children: children
    })]
  });
};
var _default = exports["default"] = MatchCardsContainer;