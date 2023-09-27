import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["active", "className", "children"];
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var styles = {
  "nav": "pbui-xKR2U",
  "nav__container": "pbui-sLUB4",
  "brand": "pbui-UYmdh",
  "item": "pbui-SHk5V",
  "item--active": "pbui-9fUxo",
  "item__content": "pbui--JUZf"
};
export var NavbarItem = /*#__PURE__*/React.forwardRef(function Item(props, propRef) {
  var active = props.active,
    className = props.className,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  var navbarItemClasses = clsx(styles.item, className, active && styles['item--active']);
  return /*#__PURE__*/_jsx("div", _extends({
    className: navbarItemClasses,
    ref: propRef
  }, rest, {
    children: /*#__PURE__*/_jsx("div", {
      className: "skew-x-12",
      children: children
    })
  }));
});