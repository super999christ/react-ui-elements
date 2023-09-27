"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "label", "progress", "shape", "size"];
/* eslint-disable no-nested-ternary */
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "wrapper": "pbui-yue39",
  "wrapper--shape-half-circle": "pbui-R08b-",
  "container": "pbui-pjMRN",
  "container--shape-half-circle": "pbui-xOMaQ",
  "svg": "pbui-3SuAU",
  "svg--shape-half-circle": "pbui-TKpdo",
  "text__container": "pbui-4ems-",
  "text__container--shape-half-circle": "pbui-yyHi8",
  "text__container--shape-half-circle-with-label": "pbui-tMmz3",
  "label": "pbui-Trn5k",
  "label--size-xs-or-sm": "pbui--TN9U",
  "percentage": "pbui-DE3eM",
  "percentage--size-xxs": "pbui-PvOgt",
  "percentage--size-xs": "pbui-X3gB4",
  "percentage--size-sm": "pbui-WQUXq",
  "percentage--size-lg": "pbui-T3SDS",
  "label__bottom": "pbui-5i4WZ",
  "label__bottom--shape-circle": "pbui-vlAGr"
};
var Circle = function Circle(_ref) {
  var color = _ref.color,
    diameter = _ref.diameter,
    percentage = _ref.percentage,
    strokeWidth = _ref.strokeWidth;
  var circ = 2 * Math.PI * diameter;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
    cx: diameter + strokeWidth / 2,
    cy: diameter + strokeWidth / 2,
    fill: "transparent",
    r: diameter,
    stroke: color,
    strokeDasharray: circ,
    strokeDashoffset: (100 - percentage) * circ / 100,
    strokeLinecap: "round",
    strokeWidth: "".concat(strokeWidth, "px")
  });
};
var cleanPercentage = function cleanPercentage(percentage) {
  var isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  var isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};
var ProgressCircle = /*#__PURE__*/(0, _react.forwardRef)(function ProgressCircle(props, propsRef) {
  var className = props.className,
    label = props.label,
    _props$progress = props.progress,
    progress = _props$progress === void 0 ? 0 : _props$progress,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var cleanPerc = cleanPercentage(progress);
  var strokeWidth = 24;
  var realWidth = 192 + 2 * strokeWidth;
  if (size === 'xxs') {
    strokeWidth = 6;
    realWidth = 52 + 2 * strokeWidth;
  } else if (size === 'xs') {
    strokeWidth = 16;
    realWidth = 128 + 2 * strokeWidth;
  } else if (size === 'sm') {
    strokeWidth = 20;
    realWidth = 160 + 2 * strokeWidth;
  } else if (size === 'lg') {
    strokeWidth = 28;
    realWidth = 224 + 2 * strokeWidth;
  }
  var diameter = (realWidth - strokeWidth) / 2;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, className, shape === 'half-circle' && styles['wrapper--shape-half-circle']);
  var containerClasses = (0, _clsx["default"])(styles.container, shape === 'half-circle' && styles['container--shape-half-circle']);
  var svgClasses = (0, _clsx["default"])(styles.svg, shape === 'half-circle' && styles['svg--shape-half-circle']);
  var textContainerClasses = (0, _clsx["default"])(styles.text__container, shape === 'half-circle' && [styles['text__container--shape-half-circle'], size !== 'xxs' && label && styles['text__container--shape-half-circle-with-label']]);
  var labelClasses = (0, _clsx["default"])(styles.label, (size === 'xs' || size === 'sm') && styles['label--size-xs-or-sm']);
  var percentageClasses = (0, _clsx["default"])(styles.percentage, {
    'xxs': styles['percentage--size-xxs'],
    'xs': styles['percentage--size-xs'],
    'sm': styles['percentage--size-sm'],
    'lg': styles['percentage--size-lg']
  }[size]);
  var labelBottomClasses = (0, _clsx["default"])(styles.label__bottom, shape === 'circle' && styles['label__bottom--shape-circle']);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: wrapperClasses,
    ref: propsRef
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: containerClasses,
      style: {
        height: shape === 'half-circle' ? size !== 'xxs' ? "".concat((realWidth + strokeWidth) / 2 + 20, "px") : "".concat((realWidth + strokeWidth) / 2, "px") : ''
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        className: svgClasses,
        height: realWidth,
        width: realWidth,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Circle, {
          color: "#EAECF0",
          diameter: diameter,
          percentage: shape === 'circle' ? 100 : 50,
          strokeWidth: strokeWidth
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Circle, {
          color: "#254EDB",
          diameter: diameter,
          percentage: shape === 'circle' ? cleanPerc : cleanPerc / 2,
          strokeWidth: strokeWidth
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: textContainerClasses,
        children: [label && size !== 'xxs' && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: labelClasses,
          children: label
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: percentageClasses,
          children: [cleanPerc, "%"]
        })]
      })]
    }), label && size === 'xxs' && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: labelBottomClasses,
      children: label
    })]
  }));
});
var _default = exports["default"] = ProgressCircle;