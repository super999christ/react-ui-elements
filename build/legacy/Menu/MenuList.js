import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
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
export var MenuList = /*#__PURE__*/forwardRef(function MenuList(_ref, propRef) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var dropdownClasses = clsx(styles.menu, className);
  return /*#__PURE__*/_jsx("div", _extends({
    className: dropdownClasses,
    ref: propRef
  }, rest, {
    children: children
  }));
});