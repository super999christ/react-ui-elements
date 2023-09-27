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
  "wrapper": "pbui-JCj5V",
  "header": "pbui-ofYZH",
  "headline": "pbui-t4bbX",
  "image__container": "pbui-SczTL",
  "link": "pbui-daQC3",
  "image": "pbui-VyT3k",
  "content": "pbui-rs9W5",
  "date": "pbui-E6TaV",
  "text__container": "pbui-uAXxk",
  "text": "pbui-6sPSD"
};
var TVChannelCard = function TVChannelCard(_ref) {
  var channelName = _ref.channelName,
    channelLogo = _ref.channelLogo,
    channelLink = _ref.channelLink,
    dateString = _ref.dateString,
    matches = _ref.matches;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headerClasses = (0, _clsx["default"])(styles.header);
  var imageContainerClasses = (0, _clsx["default"])(styles.image__container);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var linkClasses = (0, _clsx["default"])(styles.link);
  var imageClasses = (0, _clsx["default"])(styles.image);
  var contentClasses = (0, _clsx["default"])(styles.content);
  var dateClasses = (0, _clsx["default"])(styles.date);
  var textContainerClasses = (0, _clsx["default"])(styles.text__container);
  var textClasses = (0, _clsx["default"])(styles.text);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: headerClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
        className: headlineClasses,
        children: ["Pickleball on ", channelName]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: imageContainerClasses,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: channelLink,
          rel: "noopener noreferrer",
          target: "_blank",
          className: linkClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "".concat(channelName, " logo"),
            src: channelLogo,
            className: imageClasses
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: contentClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: dateClasses,
        children: dateString
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: textContainerClasses,
        children: matches.map(function (match, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: textClasses,
            children: match
          }, index);
        })
      })]
    })]
  });
};
var _default = exports["default"] = TVChannelCard;