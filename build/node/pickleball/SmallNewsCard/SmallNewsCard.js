"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _proRegularSvgIcons = require("@fortawesome/pro-regular-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var styles = {
  "wrapper": "pbui-QWS9A",
  "image": "pbui-KqYMt",
  "image--no-src": "pbui-lLSL8",
  "content": "pbui-o6JH2",
  "title": "pbui-68-dZ",
  "description": "pbui-YXQ53",
  "icon__time": "pbui-pno32",
  "icon": "pbui-6itOX",
  "time": "pbui-iGB8Q"
};
var SmallNewsCard = function SmallNewsCard(_ref) {
  var description = _ref.description,
    image = _ref.image,
    time = _ref.time,
    title = _ref.title;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var imageClasses = (0, _clsx["default"])(styles.image, !image && styles['image--no-src']);
  var contentClasses = (0, _clsx["default"])(styles.content);
  var titleClasses = (0, _clsx["default"])(styles.title);
  var descriptionClasses = (0, _clsx["default"])(styles.description);
  var iconTimeClasses = (0, _clsx["default"])(styles.icon__time);
  var iconClasses = (0, _clsx["default"])(styles.icon);
  var timeClasses = (0, _clsx["default"])(styles.time);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: "Pickleball player",
      src: image,
      className: imageClasses
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
var _default = exports["default"] = SmallNewsCard;