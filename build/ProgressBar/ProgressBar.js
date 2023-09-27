import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "label", "labelPlacement", "progress", "progressColor"];
/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
var ProgressBar = /*#__PURE__*/forwardRef(function ProgressBar(props, ref) {
  var className = props.className,
    label = props.label,
    _props$labelPlacement = props.labelPlacement,
    labelPlacement = _props$labelPlacement === void 0 ? 'right' : _props$labelPlacement,
    _props$progress = props.progress,
    progress = _props$progress === void 0 ? 0 : _props$progress,
    progressColor = props.progressColor,
    rest = _objectWithoutProperties(props, _excluded);
  var progressBarClasses = clsx(styles.progress__bar, className, labelPlacement === 'bottom' && styles['progress__bar--label-placement-bottom']);
  var progressContainerClasses = clsx(styles.progress__bar__progress__container, labelPlacement === 'bottom' && styles['progress__bar__progress__container--label-placement-bottom']);
  var progressClasses = clsx(styles.progress__bar__progress__container_progress);
  var descriptionContainerClasses = clsx(styles.progress__bar__description__container, labelPlacement === 'bottom' && styles['progress__bar__description__container--label-placement-bottom']);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: progressBarClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/_jsx("div", {
      className: progressContainerClasses,
      children: /*#__PURE__*/_jsx("div", {
        className: progressClasses,
        style: {
          width: "".concat(progress < 0 ? 0 : progress > 100 ? 100 : progress, "%"),
          backgroundColor: "".concat(progressColor || '')
        }
      })
    }), label && /*#__PURE__*/_jsx("div", {
      className: descriptionContainerClasses,
      children: label
    })]
  }));
});
export default ProgressBar;