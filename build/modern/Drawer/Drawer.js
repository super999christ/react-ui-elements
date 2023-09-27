import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "onBackdropClick", "onClose", "open", "position", "title", "wrapperClassname"];
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faXmark } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import Button from '../Button';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "backdrop": "pbui-8vMUg",
  "backdrop--open": "pbui-4GNRr",
  "wrapper": "pbui-ib-ZD",
  "wrapper--position-left": "pbui-t8aLp",
  "wrapper--open": "pbui-KhWbo",
  "wrapper--open-position-left": "pbui-f3nEY",
  "header": "pbui--M4iy",
  "header--no-title": "pbui-B9FyD",
  "title": "pbui-19Vvu",
  "button": "pbui-crj9P",
  "close__icon": "pbui-sHBRD"
};
var Drawer = /*#__PURE__*/forwardRef(function Drawer(props, ref) {
  var children = props.children,
    className = props.className,
    onBackdropClick = props.onBackdropClick,
    onClose = props.onClose,
    open = props.open,
    _props$position = props.position,
    position = _props$position === void 0 ? 'right' : _props$position,
    title = props.title,
    wrapperClassname = props.wrapperClassname,
    rest = _objectWithoutProperties(props, _excluded);
  var backdropClasses = clsx(styles.backdrop, className, open && styles['backdrop--open']);
  var wrapperClasses = clsx(styles.wrapper, wrapperClassname, open && position === 'right' && styles['wrapper--open'], position === 'left' && [styles['wrapper--position-left'], open && styles['wrapper--open-position-left']]);
  var headerClasses = clsx(styles.header, !title && styles['header--no-title']);
  var titleClasses = clsx(styles.title);
  var buttonClasses = clsx(styles.button);
  var closeIconClasses = clsx(styles.close__icon);
  return /*#__PURE__*/_jsx("div", _extends({
    onClick: function onClick() {
      return open && onBackdropClick && onBackdropClick();
    },
    className: backdropClasses,
    ref: ref
  }, rest, {
    children: /*#__PURE__*/_jsxs("div", {
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      className: wrapperClasses,
      children: [onClose && /*#__PURE__*/_jsxs("div", {
        className: headerClasses,
        children: [title && /*#__PURE__*/_jsx("h1", {
          className: titleClasses,
          children: title
        }), /*#__PURE__*/_jsx(Button, {
          onClick: function onClick() {
            return onClose();
          },
          variant: "secondary-color",
          className: buttonClasses,
          children: /*#__PURE__*/_jsx(FontAwesomeIcon, {
            icon: faXmark,
            className: closeIconClasses
          })
        })]
      }), children]
    })
  }));
});
export default Drawer;