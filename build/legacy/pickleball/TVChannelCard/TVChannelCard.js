/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-JCj5V",
  "header": "pbui-ofYZH",
  "headline": "pbui-t4bbX",
  "image__container": "pbui-SczTL",
  "link": "pbui-daQC3",
  "image": "pbui-VyT3k",
  "content": "pbui-rs9W5",
  "date": "pbui-E6TaV",
  "text__container": "pbui-uAXxk",
  "text": "pbui-6sPSD"
};
var TVChannelCard = function TVChannelCard(_ref) {
  var channelName = _ref.channelName,
    channelLogo = _ref.channelLogo,
    channelLink = _ref.channelLink,
    dateString = _ref.dateString,
    matches = _ref.matches;
  var wrapperClasses = clsx(styles.wrapper);
  var headerClasses = clsx(styles.header);
  var imageContainerClasses = clsx(styles.image__container);
  var headlineClasses = clsx(styles.headline);
  var linkClasses = clsx(styles.link);
  var imageClasses = clsx(styles.image);
  var contentClasses = clsx(styles.content);
  var dateClasses = clsx(styles.date);
  var textContainerClasses = clsx(styles.text__container);
  var textClasses = clsx(styles.text);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsxs("div", {
      className: headerClasses,
      children: [/*#__PURE__*/_jsxs("h1", {
        className: headlineClasses,
        children: ["Pickleball on ", channelName]
      }), /*#__PURE__*/_jsx("div", {
        className: imageContainerClasses,
        children: /*#__PURE__*/_jsx("a", {
          href: channelLink,
          rel: "noopener noreferrer",
          target: "_blank",
          className: linkClasses,
          children: /*#__PURE__*/_jsx("img", {
            alt: "".concat(channelName, " logo"),
            src: channelLogo,
            className: imageClasses
          })
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: contentClasses,
      children: [/*#__PURE__*/_jsx("p", {
        className: dateClasses,
        children: dateString
      }), /*#__PURE__*/_jsx("div", {
        className: textContainerClasses,
        children: matches.map(function (match, index) {
          return /*#__PURE__*/_jsx("p", {
            className: textClasses,
            children: match
          }, index);
        })
      })]
    })]
  });
};
export default TVChannelCard;