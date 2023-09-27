import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "centeredDesktop", "centeredMobile", "className", "heading", "Image", "reverseOrderDesktop", "reverseOrderMobile", "Subheading", "supportingText"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-9I4Hu",
  "wrapper--mobile-reversed": "pbui-xXROU",
  "wrapper--reversed": "pbui-4CEVb",
  "container": "pbui-HWeJZ",
  "header": "pbui-yWZCd",
  "header--mobile-reversed": "pbui-fCa2m",
  "reason": "pbui-Djp6v",
  "header--mobile-centered": "pbui-mEWor",
  "reason--mobile-centered": "pbui-246V-",
  "header--centered": "pbui-IWTj8",
  "reason--centered": "pbui-Ukcts",
  "subheading": "pbui-h4v6O",
  "heading": "pbui-K-ZNG",
  "supporting__text": "pbui-g0Pjh",
  "subheading--mobile-centered": "pbui-oIjaZ",
  "heading--mobile-centered": "pbui-lbp-X",
  "supporting__text--mobile-centered": "pbui-2EWvD",
  "subheading--centered": "pbui-WqcBM",
  "heading--centered": "pbui-GS0Qe",
  "supporting__text--centered": "pbui-GoItM",
  "image": "pbui-vqN3a"
};
var ErrorSection = /*#__PURE__*/forwardRef(function ErrorSection(props, ref) {
  var children = props.children,
    _props$centeredDeskto = props.centeredDesktop,
    centeredDesktop = _props$centeredDeskto === void 0 ? false : _props$centeredDeskto,
    _props$centeredMobile = props.centeredMobile,
    centeredMobile = _props$centeredMobile === void 0 ? false : _props$centeredMobile,
    className = props.className,
    heading = props.heading,
    Image = props.Image,
    _props$reverseOrderDe = props.reverseOrderDesktop,
    reverseOrderDesktop = _props$reverseOrderDe === void 0 ? false : _props$reverseOrderDe,
    _props$reverseOrderMo = props.reverseOrderMobile,
    reverseOrderMobile = _props$reverseOrderMo === void 0 ? false : _props$reverseOrderMo,
    Subheading = props.Subheading,
    supportingText = props.supportingText,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper, className, reverseOrderDesktop && styles['wrapper--reversed'], reverseOrderMobile && styles['wrapper--mobile-reversed']);
  var containerClasses = clsx(styles.container);
  var headerClasses = clsx(styles.header, centeredMobile && styles['header--mobile-centered'], centeredDesktop && styles['header--centered'], reverseOrderMobile && styles['header--mobile-reversed']);
  var reasonClasses = clsx(styles.reason, centeredMobile && styles['reason--mobile-centered'], centeredDesktop && styles['reason--centered']);
  var subheadingClasses = clsx(styles.subheading, centeredMobile && styles['subheading--mobile-centered'], centeredDesktop && styles['subheading--centered']);
  var headingClasses = clsx(styles.heading, centeredMobile && styles['heading--mobile-centered'], centeredDesktop && styles['heading--centered']);
  var supportingTextClasses = clsx(styles.supporting__text, centeredMobile && styles['supporting__text--mobile-centered'], centeredDesktop && styles['supporting__text--centered']);
  var imageClasses = clsx(styles.image);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: wrapperClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: containerClasses,
      children: [/*#__PURE__*/_jsxs("div", {
        className: headerClasses,
        children: [/*#__PURE__*/_jsxs("div", {
          className: reasonClasses,
          children: [Subheading && (typeof Subheading === 'string' ? /*#__PURE__*/_jsx("h6", {
            className: subheadingClasses,
            children: Subheading
          }) : Subheading()), /*#__PURE__*/_jsx("h1", {
            className: headingClasses,
            children: heading
          })]
        }), /*#__PURE__*/_jsx("p", {
          className: supportingTextClasses,
          children: supportingText
        })]
      }), children]
    }), Image && /*#__PURE__*/_jsx("div", {
      className: imageClasses,
      children: Image()
    })]
  }));
});
export default ErrorSection;