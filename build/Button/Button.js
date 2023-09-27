import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "destructive", "disabled", "prefixIcon", "size", "suffixIcon", "variant"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "button": "pbui-J7yVR",
  "button-prefix--icon": "pbui-7ytTJ",
  "button-suffix--icon": "pbui--ulEF",
  "button--size-sm": "pbui-mUQX1",
  "button--size-lg": "pbui-K2Py-",
  "button--size-xl": "pbui-JwQY3",
  "button--size-2xl": "pbui-pSFZY",
  "button--disabled": "pbui-jB0X0",
  "button--primary": "pbui-1mM0j",
  "button--destructive": "pbui-7OF6m",
  "button--secondary": "pbui-FmOMT",
  "button--secondary-color": "pbui-7PJLC",
  "button--tertiary": "pbui-XLeTV",
  "button--tertiary-color": "pbui-IgcHs",
  "button--link": "pbui-8eNey",
  "button--link-gray": "pbui-OMSwS",
  "button--link-color": "pbui-LxvVj"
};
var Button = /*#__PURE__*/forwardRef(function Button(props, ref) {
  var children = props.children,
    className = props.className,
    destructive = props.destructive,
    disabled = props.disabled,
    prefixIcon = props.prefixIcon,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    suffixIcon = props.suffixIcon,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    rest = _objectWithoutProperties(props, _excluded);
  var buttonClasses = clsx(styles.button, (variant === 'link' || variant === 'link-gray') && styles['button--link'], className, disabled && styles['button--disabled'], destructive && styles['button--destructive'], {
    'sm': styles['button--size-sm'],
    'lg': styles['button--size-lg'],
    'xl': styles['button--size-xl'],
    '2xl': styles['button--size-2xl']
  }[size], {
    'primary': styles['button--primary'],
    'secondary': styles['button--secondary'],
    'secondary-color': styles['button--secondary-color'],
    'tertiary': styles['button--tertiary'],
    'tertiary-color': styles['button--tertiary-color'],
    'link-gray': styles['button--link-gray']
  }[variant]);
  return /*#__PURE__*/_jsxs("button", _extends({
    type: "button",
    className: buttonClasses,
    disabled: disabled,
    ref: ref
  }, rest, {
    children: [prefixIcon && /*#__PURE__*/_jsx("span", {
      className: styles['button-prefix--icon'],
      children: prefixIcon
    }), children, suffixIcon && /*#__PURE__*/_jsx("span", {
      className: styles['button-suffix--icon'],
      children: suffixIcon
    })]
  }));
});
export default Button;