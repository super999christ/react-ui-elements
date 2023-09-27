import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "destructive", "disabled", "ErrorMessage", "HintMessage", "id", "Label", "placeholder", "PrefixIcon", "size", "SuffixIcon", "value"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-FaPQm",
  "wrapper__label": "pbui-OK-QS",
  "wrapper__hint": "pbui-6Kced",
  "wrapper__error": "pbui-o9znO",
  "wrapper__input__field__wrapper": "pbui-iDjdQ",
  "wrapper__input__field__wrapper--disabled": "pbui-SrZd6",
  "wrapper__input__field__wrapper__input__field": "pbui-DjZ47",
  "wrapper__input__field__wrapper--destructive": "pbui-wD-11",
  "wrapper__input__field__wrapper--size-sm": "pbui-gsdA1"
};
// NOTE: If you want to control the width of the InputField, wrap it in a div and give a width to that div
// Example: <div classname='w-[320px]'><InputField /></div>
var InputField = /*#__PURE__*/forwardRef(function InputField(props, ref) {
  var className = props.className,
    destructive = props.destructive,
    disabled = props.disabled,
    ErrorMessage = props.ErrorMessage,
    HintMessage = props.HintMessage,
    _props$id = props.id,
    id = _props$id === void 0 ? 'inputField' : _props$id,
    Label = props.Label,
    placeholder = props.placeholder,
    PrefixIcon = props.PrefixIcon,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    SuffixIcon = props.SuffixIcon,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper);
  var labelClasses = clsx(styles.wrapper__label);
  var inputFieldWrapperClasses = clsx(styles.wrapper__input__field__wrapper, disabled && styles['wrapper__input__field__wrapper--disabled'], destructive && styles['wrapper__input__field__wrapper--destructive'], size === 'sm' && styles['wrapper__input__field__wrapper--size-sm']);
  var inputFieldClasses = clsx(styles.wrapper__input__field__wrapper__input__field, className);
  var errorClasses = clsx(styles.wrapper__error);
  var hintClasses = clsx(styles.wrapper__hint);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [Label && (typeof Label === 'string' ? /*#__PURE__*/_jsx("label", {
      className: labelClasses,
      htmlFor: id,
      children: Label
    }) : Label()), /*#__PURE__*/_jsxs("div", {
      className: inputFieldWrapperClasses,
      children: [PrefixIcon && PrefixIcon(), /*#__PURE__*/_jsx("input", _extends({
        className: inputFieldClasses,
        disabled: disabled,
        id: id,
        placeholder: placeholder,
        ref: ref,
        type: "text",
        value: value
      }, rest)), SuffixIcon && SuffixIcon()]
    }), destructive && ErrorMessage && (typeof ErrorMessage === 'string' ? /*#__PURE__*/_jsx("p", {
      className: errorClasses,
      children: ErrorMessage
    }) : ErrorMessage()), !destructive && HintMessage && (typeof HintMessage === 'string' ? /*#__PURE__*/_jsx("p", {
      className: hintClasses,
      children: HintMessage
    }) : HintMessage())]
  });
});
export default InputField;