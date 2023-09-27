import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _FontAwesomeIcon;
var _excluded = ["active", "className", "customIconRender", "customImageRender", "imageUrl", "focusable", "onlineIndicator", "size"];
import { faUser } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "avatar-root": "pbui-qGdCq",
  "avatar": "pbui-5Wcia",
  "avatar--focusable-active": "pbui-SLXkw",
  "avatar--focusable": "pbui-Rd8aD",
  "avatar--size-xs": "pbui-az8wg",
  "avatar--size-sm": "pbui-TFgJz",
  "avatar--size-md": "pbui-tTCW8",
  "avatar--size-lg": "pbui-vZLIM",
  "avatar--size-xl": "pbui-2uLO0",
  "avatar--size-2xl": "pbui-us08d",
  "avatar--size-3xl": "pbui-HQHAO",
  "avatar--size-4xl": "pbui-HSVZP",
  "avatar--indicator": "pbui-MRdoA",
  "avatar--indicator-online": "pbui-A6qu2",
  "avatar--indicator-offline": "pbui-Izp6X",
  "avatar--placeholder": "pbui-OXtHt"
};
var Avatar = /*#__PURE__*/forwardRef(function Avatar(props, propsRef) {
  var _div, _img;
  var _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    className = props.className,
    customIconRender = props.customIconRender,
    customImageRender = props.customImageRender,
    imageUrl = props.imageUrl,
    _props$focusable = props.focusable,
    focusable = _props$focusable === void 0 ? false : _props$focusable,
    onlineIndicator = props.onlineIndicator,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    rest = _objectWithoutProperties(props, _excluded);
  var avatarContainerClasses = clsx(styles['avatar-root'], {
    'xs': styles['avatar--size-xs'],
    'sm': styles['avatar--size-sm'],
    'md': styles['avatar--size-md'],
    'lg': styles['avatar--size-lg'],
    'xl': styles['avatar--size-xl'],
    '2xl': styles['avatar--size-2xl'],
    '3xl': styles['avatar--size-3xl'],
    '4xl': styles['avatar--size-4xl']
  }[size]);
  var avatarClasses = clsx(styles.avatar, className, active && styles['avatar--focusable-active'], focusable && styles['avatar--focusable']);
  var indicatorClasses = clsx(styles['avatar--indicator'], onlineIndicator === true && styles['avatar--indicator-online'], onlineIndicator === false && styles['avatar--indicator-offline']);
  var renderOnlineIndicator = function renderOnlineIndicator() {
    if (typeof onlineIndicator === 'boolean' && onlineIndicator !== undefined) {
      return _div || (_div = /*#__PURE__*/_jsx("div", {
        className: indicatorClasses
      }));
    }
    return null;
  };
  var renderImage = function renderImage() {
    if (imageUrl) {
      if (customImageRender) {
        return customImageRender(imageUrl);
      }
      return _img || (_img = /*#__PURE__*/_jsx("img", {
        src: imageUrl,
        alt: "",
        className: "absolute inset-0 h-full w-full object-cover"
      }));
    }
    if (customIconRender) return customIconRender();
    return /*#__PURE__*/_jsx("div", {
      className: styles['avatar--placeholder'],
      children: _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/_jsx(FontAwesomeIcon, {
        icon: faUser,
        className: "text-gray-700"
      }))
    });
  };
  return /*#__PURE__*/_jsxs("div", {
    className: avatarContainerClasses,
    children: [/*#__PURE__*/_jsx("div", _extends({
      className: avatarClasses,
      ref: propsRef,
      tabIndex: focusable ? 0 : -1,
      role: "button"
    }, rest, {
      children: renderImage()
    })), renderOnlineIndicator()]
  });
});
export default Avatar;