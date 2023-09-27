"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../Button"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
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
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headerClasses = (0, _clsx["default"])(styles.header);
  var imageClasses = (0, _clsx["default"])(styles.image);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var buttonsClasses = (0, _clsx["default"])(styles.buttons);
  var buttonClasses = (0, _clsx["default"])(styles.button);
  var tourClasses = (0, _clsx["default"])(styles.tour);
  var logoClasses = (0, _clsx["default"])(styles.logo);
  var nameClasses = (0, _clsx["default"])(styles.name);
  var dividerContainerClasses = (0, _clsx["default"])(styles.divider__container);
  var dividerClasses = (0, _clsx["default"])(styles.divider);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: headerClasses,
      children: [mainLogo && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        alt: "Logo",
        src: mainLogo,
        className: imageClasses
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: headlineClasses,
        children: "Pickleball +"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: buttonsClasses,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        className: buttonClasses,
        children: "Subscribe now"
      })
    }), tours.map(function (tour, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          href: tour.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: tourClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "".concat(tour.name, " logo"),
            src: tour.logo,
            className: logoClasses
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: nameClasses,
            children: tour.name
          })]
        }), index !== tours.length - 1 && (_div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: dividerClasses
          })
        })))]
      }, index);
    })]
  });
};
var _default = exports["default"] = ToursList;