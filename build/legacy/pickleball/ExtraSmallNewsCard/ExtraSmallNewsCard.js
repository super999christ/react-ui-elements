import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-0-F38",
  "image": "pbui-7IpGv",
  "image--no-src": "pbui-oPmZr",
  "content": "pbui-r5wlZ",
  "title": "pbui-xAGnm",
  "description": "pbui-xZRKL",
  "icon__time": "pbui-S-lhZ",
  "icon": "pbui-noGvY",
  "time": "pbui-lPDWd"
};
var ExtraSmallNewsCard = function ExtraSmallNewsCard(_ref) {
  var description = _ref.description,
    image = _ref.image,
    time = _ref.time,
    title = _ref.title;
  var wrapperClasses = clsx(styles.wrapper);
  var imageClasses = clsx(styles.image, !image && styles['image--no-src']);
  var contentClasses = clsx(styles.content);
  var titleClasses = clsx(styles.title);
  var descriptionClasses = clsx(styles.description);
  var iconTimeClasses = clsx(styles.icon__time);
  var iconClasses = clsx(styles.icon);
  var timeClasses = clsx(styles.time);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("img", {
      alt: title,
      src: image,
      className: imageClasses
    }), /*#__PURE__*/_jsxs("div", {
      className: contentClasses,
      children: [/*#__PURE__*/_jsx("h2", {
        className: titleClasses,
        children: title
      }), description && /*#__PURE__*/_jsx("p", {
        className: descriptionClasses,
        children: description
      }), time && /*#__PURE__*/_jsxs("div", {
        className: iconTimeClasses,
        children: [/*#__PURE__*/_jsx(FontAwesomeIcon, {
          icon: faClock,
          size: "sm",
          className: iconClasses
        }), /*#__PURE__*/_jsx("p", {
          className: timeClasses,
          children: time
        })]
      })]
    })]
  });
};
export default ExtraSmallNewsCard;