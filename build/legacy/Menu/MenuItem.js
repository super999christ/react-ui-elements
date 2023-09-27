import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "disabled", "helper", "icon", "isActive", "onClick"];
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "menu": "pbui-9NTlC",
  "list__arrow": "pbui-1ZIhd",
  "list__overlay": "pbui-N2pI4",
  "list__group": "pbui-6Txou",
  "list__item": "pbui--LEnB",
  "item": "pbui-tubqv",
  "item--disabled": "pbui-8HSqh",
  "item--active": "pbui-Ksbsi",
  "item__content": "pbui-ga2Lt",
  "content__icon": "pbui--0fsY",
  "content__text": "pbui-g-tVf",
  "item__description": "pbui-fgtmS"
};
export var MenuItem = /*#__PURE__*/forwardRef(function MenuItem(props, propRef) {
  var children = props.children,
    disabled = props.disabled,
    helper = props.helper,
    icon = props.icon,
    isActive = props.isActive,
    onClick = props.onClick,
    rest = _objectWithoutProperties(props, _excluded);
  var listItemClasses = clsx(styles.list__item, props.rootClassName);
  var itemClasses = clsx(styles.item, props.className, isActive && styles['item--active'], disabled && styles['item--disabled']);
  return /*#__PURE__*/_jsx("div", {
    className: listItemClasses,
    children: /*#__PURE__*/_jsxs("div", _extends({
      ref: propRef,
      tabIndex: disabled ? -1 : isActive ? 0 : -1,
      className: itemClasses,
      onClick: onClick
    }, rest, {
      children: [/*#__PURE__*/_jsxs("div", {
        className: styles.item__content,
        children: [icon && /*#__PURE__*/_jsx("span", {
          className: styles.content__icon,
          children: icon
        }), /*#__PURE__*/_jsx("span", {
          className: styles.content__text,
          children: children
        })]
      }), helper && /*#__PURE__*/_jsx("div", {
        className: styles.item__description,
        children: helper
      })]
    }))
  });
});