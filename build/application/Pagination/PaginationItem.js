import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "selected", "type"];
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var styles = {
  "pagination": "pbui-z1dk1",
  "pagination--item-button-prev": "pbui-8LwDc",
  "pagination--item-button-next": "pbui-DxHXA",
  "pagination--item-button": "pbui-QPYIh",
  "pagination--item-l-auto": "pbui-HhDTi",
  "pagination--item-r-auto": "pbui-jfR6F",
  "pagination--item": "pbui-HJFpq",
  "pagination--item-active": "pbui-27eAX"
};
var PaginationItem = /*#__PURE__*/forwardRef(function (props, propRef) {
  var children = props.children,
    className = props.className,
    selected = props.selected,
    _props$type = props.type,
    type = _props$type === void 0 ? 'button' : _props$type,
    rest = _objectWithoutProperties(props, _excluded);
  var paginationItemClasses = clsx(styles['pagination--item'], className, selected && styles['pagination--item-active']);
  return /*#__PURE__*/_jsx("button", _extends({
    className: paginationItemClasses,
    ref: propRef,
    type: type
  }, rest, {
    children: children
  }));
});
export default PaginationItem;