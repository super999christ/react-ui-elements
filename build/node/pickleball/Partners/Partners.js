"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
var styles = {
  "wrapper": "pbui-Ibpt-",
  "headline": "pbui-dLY8T",
  "content": "pbui-VSKyP",
  "link": "pbui-l0hG-",
  "image": "pbui-0jlXF"
};
var Partners = function Partners(_ref) {
  var partners = _ref.partners;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var contentClasses = (0, _clsx["default"])(styles.content);
  var linkClasses = (0, _clsx["default"])(styles.link);
  var imageClasses = (0, _clsx["default"])(styles.image);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headlineClasses,
      children: "Our Featured Partners"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: contentClasses,
      children: partners.map(function (partner, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: partner.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: linkClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "Sponsor logo",
            src: partner.logo,
            className: imageClasses
          })
        }, index);
      })
    })]
  });
};
var _default = exports["default"] = Partners;