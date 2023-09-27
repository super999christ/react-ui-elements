import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["Avatar", "Badge", "children", "className", "Dropdown", "SupportingText", "Text", "withHeaderLine"];
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-Z6OJ9",
  "wrapper--with-header-line": "pbui-dsYyO",
  "avatar__text__container": "pbui-h9sv2",
  "text__container": "pbui-5B2c-",
  "text__badge__container": "pbui-0WDtv",
  "text": "pbui-xarAE",
  "supporting__text": "pbui-AihQC",
  "dropdown": "pbui-aYsrf"
};
var CardHeader = /*#__PURE__*/React.forwardRef(function CardHeader(props, ref) {
  var Avatar = props.Avatar,
    Badge = props.Badge,
    children = props.children,
    className = props.className,
    Dropdown = props.Dropdown,
    SupportingText = props.SupportingText,
    _props$Text = props.Text,
    Text = _props$Text === void 0 ? 'Text' : _props$Text,
    withHeaderLine = props.withHeaderLine,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper, className, withHeaderLine && styles['wrapper--with-header-line']);
  var avatarTextContainerClasses = clsx(styles.avatar__text__container);
  var textContainerClasses = clsx(styles.text__container);
  var textBadgeContainerClasses = clsx(styles.text__badge__container);
  var textClasses = clsx(styles.text);
  var supportingTextClasses = clsx(styles.supporting__text);
  var dropdownClasses = clsx(styles.dropdown);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: wrapperClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: avatarTextContainerClasses,
      children: [Avatar && Avatar(), /*#__PURE__*/_jsxs("div", {
        className: textContainerClasses,
        children: [/*#__PURE__*/_jsxs("div", {
          className: textBadgeContainerClasses,
          children: [typeof Text === 'string' ? /*#__PURE__*/_jsx("div", {
            className: textClasses,
            children: Text
          }) : Text(), Badge && Badge()]
        }), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/_jsx("div", {
          className: supportingTextClasses,
          children: SupportingText
        }) : SupportingText())]
      })]
    }), children, Dropdown && /*#__PURE__*/_jsx("div", {
      className: dropdownClasses,
      children: Dropdown()
    })]
  }));
});
export default CardHeader;