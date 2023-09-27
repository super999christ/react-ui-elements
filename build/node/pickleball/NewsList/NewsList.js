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
  "wrapper": "pbui-bzxlT",
  "heading": "pbui-qQcw6",
  "link": "pbui-yom8F",
  "title": "pbui-iZ3N3",
  "divider__container": "pbui-i0Uxz",
  "divider": "pbui-m9x4a",
  "button": "pbui-Llkez"
};
var NewsList = function NewsList(_ref) {
  var _div;
  var newsList = _ref.newsList,
    seeAllLink = _ref.seeAllLink;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headingClasses = (0, _clsx["default"])(styles.heading);
  var linkClasses = (0, _clsx["default"])(styles.link);
  var titleClasses = (0, _clsx["default"])(styles.title);
  var dividerContainerClasses = (0, _clsx["default"])(styles.divider__container);
  var dividerClasses = (0, _clsx["default"])(styles.divider);
  var buttonClasses = (0, _clsx["default"])(styles.button);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headingClasses,
      children: "Headlines"
    }), newsList.map(function (dataObject, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: dataObject.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: linkClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: titleClasses,
            children: dataObject.title
          })
        }), _div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: dividerClasses
          })
        }))]
      }, index);
    }), seeAllLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: seeAllLink,
      rel: "noopener noreferrer",
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        variant: "link",
        className: buttonClasses,
        children: "See all"
      })
    })]
  });
};
var _default = exports["default"] = NewsList;