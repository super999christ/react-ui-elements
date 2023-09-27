import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-QWS9A",
  "image": "pbui-KqYMt",
  "image--no-src": "pbui-lLSL8",
  "content": "pbui-o6JH2",
  "title": "pbui-68-dZ",
  "description": "pbui-YXQ53",
  "icon__time": "pbui-pno32",
  "icon": "pbui-6itOX",
  "time": "pbui-iGB8Q"
};
var SmallNewsCard = function SmallNewsCard(_ref) {
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
      alt: "Pickleball player",
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
export default SmallNewsCard;