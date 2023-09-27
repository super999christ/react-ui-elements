"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _proRegularSvgIcons = require("@fortawesome/pro-regular-svg-icons");
var _proSolidSvgIcons = require("@fortawesome/pro-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var styles = {
  "wrapper": "pbui-cNlz7",
  "image": "pbui-xLB3m",
  "image--no-src": "pbui--2hGq",
  "image--video": "pbui-vnX-L",
  "play__icon__container": "pbui-NHQg7",
  "play__icon": "pbui-bnGgx",
  "content": "pbui-EEVVa",
  "title": "pbui-C2lLd",
  "description": "pbui-jMxoM",
  "icon__time": "pbui-SG5q-",
  "icon": "pbui-eBskg",
  "time": "pbui-5LI6D"
};
var NewsCard = function NewsCard(_ref) {
  var description = _ref.description,
    image = _ref.image,
    time = _ref.time,
    title = _ref.title,
    video = _ref.video;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var imageClasses = (0, _clsx["default"])(styles.image, video && styles['image--video'], !image && styles['image--no-src']);
  var playIconContainerClasses = (0, _clsx["default"])(styles.play__icon__container);
  var playIconClasses = (0, _clsx["default"])(styles.play__icon);
  var contentClasses = (0, _clsx["default"])(styles.content);
  var titleClasses = (0, _clsx["default"])(styles.title);
  var descriptionClasses = (0, _clsx["default"])(styles.description);
  var iconTimeClasses = (0, _clsx["default"])(styles.icon__time);
  var iconClasses = (0, _clsx["default"])(styles.icon);
  var timeClasses = (0, _clsx["default"])(styles.time);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(image, ")")
      },
      className: imageClasses,
      children: video && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: playIconContainerClasses,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _proSolidSvgIcons.faCirclePlay,
          className: playIconClasses
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: contentClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: titleClasses,
        children: title
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: descriptionClasses,
        children: description
      }), time && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: iconTimeClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          icon: _proRegularSvgIcons.faClock,
          size: "sm",
          className: iconClasses
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: timeClasses,
          children: time
        })]
      })]
    })]
  });
};
var _default = exports["default"] = NewsCard;