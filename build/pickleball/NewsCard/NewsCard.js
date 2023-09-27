import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { faCirclePlay } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-cNlz7",
  "image": "pbui-xLB3m",
  "image--no-src": "pbui--2hGq",
  "image--video": "pbui-vnX-L",
  "play__icon__container": "pbui-NHQg7",
  "play__icon": "pbui-bnGgx",
  "content": "pbui-EEVVa",
  "title": "pbui-C2lLd",
  "description": "pbui-jMxoM",
  "icon__time": "pbui-SG5q-",
  "icon": "pbui-eBskg",
  "time": "pbui-5LI6D"
};
var NewsCard = function NewsCard(_ref) {
  var description = _ref.description,
    image = _ref.image,
    time = _ref.time,
    title = _ref.title,
    video = _ref.video;
  var wrapperClasses = clsx(styles.wrapper);
  var imageClasses = clsx(styles.image, video && styles['image--video'], !image && styles['image--no-src']);
  var playIconContainerClasses = clsx(styles.play__icon__container);
  var playIconClasses = clsx(styles.play__icon);
  var contentClasses = clsx(styles.content);
  var titleClasses = clsx(styles.title);
  var descriptionClasses = clsx(styles.description);
  var iconTimeClasses = clsx(styles.icon__time);
  var iconClasses = clsx(styles.icon);
  var timeClasses = clsx(styles.time);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        backgroundImage: "url(".concat(image, ")")
      },
      className: imageClasses,
      children: video && /*#__PURE__*/_jsx("div", {
        className: playIconContainerClasses,
        children: /*#__PURE__*/_jsx(FontAwesomeIcon, {
          icon: faCirclePlay,
          className: playIconClasses
        })
      })
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
export default NewsCard;