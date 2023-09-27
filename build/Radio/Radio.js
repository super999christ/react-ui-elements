import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "disabled", "id", "name", "size", "SupportingText", "Text", "value"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-hkkW9",
  "wrapper--size-sm": "pbui-d3bWb",
  "wrapper__radio": "pbui-3L-i8",
  "wrapper__radio--size-sm": "pbui-ND92w",
  "wrapper__text": "pbui-V-jA1",
  "wrapper__supporting__text": "pbui-6g-rn",
  "wrapper__text--size-sm": "pbui-DE6BO",
  "wrapper__supporting__text--size-sm": "pbui-9drd1"
};
var Radio = /*#__PURE__*/forwardRef(function Radio(props, ref) {
  var className = props.className,
    disabled = props.disabled,
    id = props.id,
    name = props.name,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    SupportingText = props.SupportingText,
    Text = props.Text,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper, !Text && !SupportingText && '!gap-0', size === 'sm' && styles['wrapper--size-sm']);
  var radioClasses = clsx(styles.wrapper__radio, className, size === 'sm' && styles['wrapper__radio--size-sm']);
  var textClasses = clsx(styles.wrapper__text, size === 'sm' && styles['wrapper__text--size-sm']);
  var supportingTextClasses = clsx(styles.wrapper__supporting__text, size === 'sm' && styles['wrapper__supporting__text--size-sm']);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("input", _extends({
      type: "radio",
      className: radioClasses,
      disabled: disabled,
      id: id,
      name: name,
      ref: ref,
      value: value
    }, rest)), /*#__PURE__*/_jsxs("div", {
      children: [Text && (typeof Text === 'string' ? /*#__PURE__*/_jsx("p", {
        className: textClasses,
        children: Text
      }) : Text()), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/_jsx("span", {
        className: supportingTextClasses,
        children: SupportingText
      }) : SupportingText())]
    })]
  });
});
export default Radio;