import _extends from "@babel/runtime/helpers/esm/extends";
/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import ExtraSmallNewsCard from '../ExtraSmallNewsCard';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-XkRUu",
  "headline": "pbui-eqqht",
  "news__container": "pbui-ylP5o",
  "divider__container": "pbui-SJW46",
  "divider": "pbui-Rp-6X"
};
var SideNewsContainer = function SideNewsContainer(_ref) {
  var _div;
  var news = _ref.news;
  var wrapperClasses = clsx(styles.wrapper);
  var headlineClasses = clsx(styles.headline);
  var newsContainerClasses = clsx(styles.news__container);
  var dividerContainerClasses = clsx(styles.divider__container);
  var dividerClasses = clsx(styles.divider);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headlineClasses,
      children: "Best of Pickleball+"
    }), news.map(function (dataObject, index) {
      return /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx("div", {
          className: newsContainerClasses,
          children: /*#__PURE__*/_jsx(ExtraSmallNewsCard, _extends({}, dataObject))
        }), index !== news.length - 1 && (_div || (_div = /*#__PURE__*/_jsx("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/_jsx("div", {
            className: dividerClasses
          })
        })))]
      }, index);
    })]
  });
};
export default SideNewsContainer;