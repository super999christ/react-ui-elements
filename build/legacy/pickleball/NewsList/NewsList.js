/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import Button from '../../Button';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-bzxlT",
  "heading": "pbui-qQcw6",
  "link": "pbui-yom8F",
  "title": "pbui-iZ3N3",
  "divider__container": "pbui-i0Uxz",
  "divider": "pbui-m9x4a",
  "button": "pbui-Llkez"
};
var NewsList = function NewsList(_ref) {
  var _div;
  var newsList = _ref.newsList,
    seeAllLink = _ref.seeAllLink;
  var wrapperClasses = clsx(styles.wrapper);
  var headingClasses = clsx(styles.heading);
  var linkClasses = clsx(styles.link);
  var titleClasses = clsx(styles.title);
  var dividerContainerClasses = clsx(styles.divider__container);
  var dividerClasses = clsx(styles.divider);
  var buttonClasses = clsx(styles.button);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headingClasses,
      children: "Headlines"
    }), newsList.map(function (dataObject, index) {
      return /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx("a", {
          href: dataObject.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: linkClasses,
          children: /*#__PURE__*/_jsx("h2", {
            className: titleClasses,
            children: dataObject.title
          })
        }), _div || (_div = /*#__PURE__*/_jsx("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/_jsx("div", {
            className: dividerClasses
          })
        }))]
      }, index);
    }), seeAllLink && /*#__PURE__*/_jsx("a", {
      href: seeAllLink,
      rel: "noopener noreferrer",
      target: "_blank",
      children: /*#__PURE__*/_jsx(Button, {
        size: "sm",
        variant: "link",
        className: buttonClasses,
        children: "See all"
      })
    })]
  });
};
export default NewsList;