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
var _excluded = ["className", "label", "labelPlacement", "progress", "progressColor"];
/* eslint-disable no-nested-ternary */
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "progress__bar": "pbui-KyspX",
  "progress__bar--label-placement-bottom": "pbui-xC7-z",
  "progress__bar__progress__container": "pbui-Sq1HZ",
  "progress__bar__progress__container--label-placement-bottom": "pbui-FY2SQ",
  "progress__bar__progress__container_progress": "pbui-JNkQn",
  "progress__bar__description__container": "pbui-xAoXP",
  "progress__bar__description__container--label-placement-bottom": "pbui-6Us1J"
};
/* | 'top floating'| 'bottom floating'; */
// TODO: Add 'top-floating' and 'bottom-floating' labelPlacements
var ProgressBar = /*#__PURE__*/(0, _react.forwardRef)(function ProgressBar(props, ref) {
  var className = props.className,
    label = props.label,
    _props$labelPlacement = props.labelPlacement,
    labelPlacement = _props$labelPlacement === void 0 ? 'right' : _props$labelPlacement,
    _props$progress = props.progress,
    progress = _props$progress === void 0 ? 0 : _props$progress,
    progressColor = props.progressColor,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var progressBarClasses = (0, _clsx["default"])(styles.progress__bar, className, labelPlacement === 'bottom' && styles['progress__bar--label-placement-bottom']);
  var progressContainerClasses = (0, _clsx["default"])(styles.progress__bar__progress__container, labelPlacement === 'bottom' && styles['progress__bar__progress__container--label-placement-bottom']);
  var progressClasses = (0, _clsx["default"])(styles.progress__bar__progress__container_progress);
  var descriptionContainerClasses = (0, _clsx["default"])(styles.progress__bar__description__container, labelPlacement === 'bottom' && styles['progress__bar__description__container--label-placement-bottom']);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: progressBarClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: progressContainerClasses,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: progressClasses,
        style: {
          width: "".concat(progress < 0 ? 0 : progress > 100 ? 100 : progress, "%"),
          backgroundColor: "".concat(progressColor || '')
        }
      })
    }), label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: descriptionContainerClasses,
      children: label
    })]
  }));
});
var _default = exports["default"] = ProgressBar;