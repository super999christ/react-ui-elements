/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-Ibpt-",
  "headline": "pbui-dLY8T",
  "content": "pbui-VSKyP",
  "link": "pbui-l0hG-",
  "image": "pbui-0jlXF"
};
var Partners = function Partners(_ref) {
  var partners = _ref.partners;
  var wrapperClasses = clsx(styles.wrapper);
  var headlineClasses = clsx(styles.headline);
  var contentClasses = clsx(styles.content);
  var linkClasses = clsx(styles.link);
  var imageClasses = clsx(styles.image);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headlineClasses,
      children: "Our Featured Partners"
    }), /*#__PURE__*/_jsx("div", {
      className: contentClasses,
      children: partners.map(function (partner, index) {
        return /*#__PURE__*/_jsx("a", {
          href: partner.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: linkClasses,
          children: /*#__PURE__*/_jsx("img", {
            alt: "Sponsor logo",
            src: partner.logo,
            className: imageClasses
          })
        }, index);
      })
    })]
  });
};
export default Partners;