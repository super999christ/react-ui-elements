import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "disabled", "id", "indeterminate", "name", "size", "SupportingText", "Text", "value"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-FjreS",
  "wrapper--size-sm": "pbui-VKFzW",
  "wrapper__checkbox": "pbui-vmYWY",
  "wrapper__checkbox--size-sm": "pbui-xhwpW",
  "wrapper__text": "pbui-3fzQV",
  "wrapper__supporting__text": "pbui-3Kb-t",
  "wrapper__text--size-sm": "pbui-EMg9Q",
  "wrapper__supporting__text--size-sm": "pbui-oGPpv"
};
var Checkbox = /*#__PURE__*/forwardRef(function Checkbox(props, ref) {
  var className = props.className,
    disabled = props.disabled,
    id = props.id,
    indeterminate = props.indeterminate,
    name = props.name,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    SupportingText = props.SupportingText,
    Text = props.Text,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper, !Text && !SupportingText && '!gap-0', size === 'sm' && styles['wrapper--size-sm']);
  var checkboxClasses = clsx(styles.wrapper__checkbox, className, indeterminate && styles['wrapper__checkbox--indeterminate'], size === 'sm' && styles['wrapper__checkbox--size-sm']);
  var textClasses = clsx(styles.wrapper__text, size === 'sm' && styles['wrapper__text--size-sm']);
  var supportingTextClasses = clsx(styles.wrapper__supporting__text, size === 'sm' && styles['wrapper__supporting__text--size-sm']);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("input", _extends({
      type: "checkbox",
      className: checkboxClasses,
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
export default Checkbox;