import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "label", "progress", "shape", "size"];
/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsx("circle", {
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
var ProgressCircle = /*#__PURE__*/forwardRef(function ProgressCircle(props, propsRef) {
  var className = props.className,
    label = props.label,
    _props$progress = props.progress,
    progress = _props$progress === void 0 ? 0 : _props$progress,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    rest = _objectWithoutProperties(props, _excluded);
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
  var wrapperClasses = clsx(styles.wrapper, className, shape === 'half-circle' && styles['wrapper--shape-half-circle']);
  var containerClasses = clsx(styles.container, shape === 'half-circle' && styles['container--shape-half-circle']);
  var svgClasses = clsx(styles.svg, shape === 'half-circle' && styles['svg--shape-half-circle']);
  var textContainerClasses = clsx(styles.text__container, shape === 'half-circle' && [styles['text__container--shape-half-circle'], size !== 'xxs' && label && styles['text__container--shape-half-circle-with-label']]);
  var labelClasses = clsx(styles.label, (size === 'xs' || size === 'sm') && styles['label--size-xs-or-sm']);
  var percentageClasses = clsx(styles.percentage, {
    'xxs': styles['percentage--size-xxs'],
    'xs': styles['percentage--size-xs'],
    'sm': styles['percentage--size-sm'],
    'lg': styles['percentage--size-lg']
  }[size]);
  var labelBottomClasses = clsx(styles.label__bottom, shape === 'circle' && styles['label__bottom--shape-circle']);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: wrapperClasses,
    ref: propsRef
  }, rest, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: containerClasses,
      style: {
        height: shape === 'half-circle' ? size !== 'xxs' ? "".concat((realWidth + strokeWidth) / 2 + 20, "px") : "".concat((realWidth + strokeWidth) / 2, "px") : ''
      },
      children: [/*#__PURE__*/_jsxs("svg", {
        className: svgClasses,
        height: realWidth,
        width: realWidth,
        children: [/*#__PURE__*/_jsx(Circle, {
          color: "#EAECF0",
          diameter: diameter,
          percentage: shape === 'circle' ? 100 : 50,
          strokeWidth: strokeWidth
        }), /*#__PURE__*/_jsx(Circle, {
          color: "#254EDB",
          diameter: diameter,
          percentage: shape === 'circle' ? cleanPerc : cleanPerc / 2,
          strokeWidth: strokeWidth
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: textContainerClasses,
        children: [label && size !== 'xxs' && /*#__PURE__*/_jsx("p", {
          className: labelClasses,
          children: label
        }), /*#__PURE__*/_jsxs("p", {
          className: percentageClasses,
          children: [cleanPerc, "%"]
        })]
      })]
    }), label && size === 'xxs' && /*#__PURE__*/_jsx("p", {
      className: labelBottomClasses,
      children: label
    })]
  }));
});
export default ProgressCircle;