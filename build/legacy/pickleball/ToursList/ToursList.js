/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import Button from '../../Button';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-gpSYg",
  "header": "pbui-f-2Lm",
  "image": "pbui-Gxtol",
  "headline": "pbui-Dxdtr",
  "buttons": "pbui-z9I7V",
  "button": "pbui-ZBrVv",
  "tour": "pbui-1xlv7",
  "logo": "pbui-fm-66",
  "name": "pbui-Ls-s6",
  "divider__container": "pbui-fKCmn",
  "divider": "pbui-ql6XE"
};
var ToursList = function ToursList(_ref) {
  var _div;
  var tours = _ref.tours,
    mainLogo = _ref.mainLogo;
  var wrapperClasses = clsx(styles.wrapper);
  var headerClasses = clsx(styles.header);
  var imageClasses = clsx(styles.image);
  var headlineClasses = clsx(styles.headline);
  var buttonsClasses = clsx(styles.buttons);
  var buttonClasses = clsx(styles.button);
  var tourClasses = clsx(styles.tour);
  var logoClasses = clsx(styles.logo);
  var nameClasses = clsx(styles.name);
  var dividerContainerClasses = clsx(styles.divider__container);
  var dividerClasses = clsx(styles.divider);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsxs("div", {
      className: headerClasses,
      children: [mainLogo && /*#__PURE__*/_jsx("img", {
        alt: "Logo",
        src: mainLogo,
        className: imageClasses
      }), /*#__PURE__*/_jsx("h1", {
        className: headlineClasses,
        children: "Pickleball +"
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: buttonsClasses,
      children: /*#__PURE__*/_jsx(Button, {
        size: "sm",
        className: buttonClasses,
        children: "Subscribe now"
      })
    }), tours.map(function (tour, index) {
      return /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsxs("a", {
          href: tour.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: tourClasses,
          children: [/*#__PURE__*/_jsx("img", {
            alt: "".concat(tour.name, " logo"),
            src: tour.logo,
            className: logoClasses
          }), /*#__PURE__*/_jsx("h2", {
            className: nameClasses,
            children: tour.name
          })]
        }), index !== tours.length - 1 && (_div || (_div = /*#__PURE__*/_jsx("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/_jsx("div", {
            className: dividerClasses
          })
        })))]
      }, index);
    })]
  });
};
export default ToursList;