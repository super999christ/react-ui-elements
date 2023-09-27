"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _ExtraSmallNewsCard = _interopRequireDefault(require("../ExtraSmallNewsCard"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
var styles = {
  "wrapper": "pbui-XkRUu",
  "headline": "pbui-eqqht",
  "news__container": "pbui-ylP5o",
  "divider__container": "pbui-SJW46",
  "divider": "pbui-Rp-6X"
};
var SideNewsContainer = function SideNewsContainer(_ref) {
  var _div;
  var news = _ref.news;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var newsContainerClasses = (0, _clsx["default"])(styles.news__container);
  var dividerContainerClasses = (0, _clsx["default"])(styles.divider__container);
  var dividerClasses = (0, _clsx["default"])(styles.divider);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headlineClasses,
      children: "Best of Pickleball+"
    }), news.map(function (dataObject, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: newsContainerClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExtraSmallNewsCard["default"], (0, _extends2["default"])({}, dataObject))
        }), index !== news.length - 1 && (_div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: dividerClasses
          })
        })))]
      }, index);
    })]
  });
};
var _default = exports["default"] = SideNewsContainer;