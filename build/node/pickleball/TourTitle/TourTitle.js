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
  "wrapper": "pbui-AvPIk",
  "wrapper--image-position-right": "pbui-qYDsM",
  "image": "pbui-TpNyD",
  "title": "pbui-jNbtj"
};
var TourTitle = function TourTitle(_ref) {
  var image = _ref.image,
    _ref$imagePosition = _ref.imagePosition,
    imagePosition = _ref$imagePosition === void 0 ? 'left' : _ref$imagePosition,
    title = _ref.title;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, imagePosition === 'right' && styles['wrapper--image-position-right']);
  var imageClasses = (0, _clsx["default"])(styles.image);
  var titleClasses = (0, _clsx["default"])(styles.title);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [image && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: "Tour logo",
      src: image,
      className: imageClasses
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: titleClasses,
      children: title
    })]
  });
};
var _default = exports["default"] = TourTitle;