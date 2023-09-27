import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-oMu1y",
  "headline": "pbui-oRxnw",
  "content": "pbui-Za1CU"
};
var MatchCardsContainer = function MatchCardsContainer(_ref) {
  var children = _ref.children;
  var wrapperClasses = clsx(styles.wrapper);
  var headlineClasses = clsx(styles.headline);
  var contentClasses = clsx(styles.content);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headlineClasses,
      children: "Championship Sunday"
    }), /*#__PURE__*/_jsx("div", {
      className: contentClasses,
      children: children
    })]
  });
};
export default MatchCardsContainer;