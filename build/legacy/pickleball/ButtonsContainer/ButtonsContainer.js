/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import Button from '../../Button';
import { jsx as _jsx } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-WAAZN",
  "button": "pbui-G-ST6"
};
var ButtonsContainer = function ButtonsContainer(_ref) {
  var buttons = _ref.buttons;
  var wrapperClasses = clsx(styles.wrapper);
  var buttonClasses = clsx(styles.button);
  return /*#__PURE__*/_jsx("div", {
    className: wrapperClasses,
    children: buttons.map(function (button, index) {
      return /*#__PURE__*/_jsx("a", {
        href: button.link,
        rel: "noopener noreferrer",
        target: "_blank",
        children: /*#__PURE__*/_jsx(Button, {
          size: "sm",
          variant: "secondary",
          className: buttonClasses,
          children: button.text
        })
      }, index);
    })
  });
};
export default ButtonsContainer;