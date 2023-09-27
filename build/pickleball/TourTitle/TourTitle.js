import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-AvPIk",
  "wrapper--image-position-right": "pbui-qYDsM",
  "image": "pbui-TpNyD",
  "title": "pbui-jNbtj"
};
var TourTitle = function TourTitle(_ref) {
  var image = _ref.image,
    _ref$imagePosition = _ref.imagePosition,
    imagePosition = _ref$imagePosition === void 0 ? 'left' : _ref$imagePosition,
    title = _ref.title;
  var wrapperClasses = clsx(styles.wrapper, imagePosition === 'right' && styles['wrapper--image-position-right']);
  var imageClasses = clsx(styles.image);
  var titleClasses = clsx(styles.title);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [image && /*#__PURE__*/_jsx("img", {
      alt: "Tour logo",
      src: image,
      className: imageClasses
    }), /*#__PURE__*/_jsx("h1", {
      className: titleClasses,
      children: title
    })]
  });
};
export default TourTitle;