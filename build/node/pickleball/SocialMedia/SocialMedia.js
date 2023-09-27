"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");
var _proLightSvgIcons = require("@fortawesome/pro-light-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _FontAwesomeIcon, _FontAwesomeIcon2, _FontAwesomeIcon3, _FontAwesomeIcon4, _FontAwesomeIcon5;
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
var styles = {
  "wrapper": "pbui--nEA5",
  "headline": "pbui-yGQsf",
  "media": "pbui-8jHFS",
  "icon": "pbui-UEz9x",
  "name": "pbui---0Yr",
  "divider__container": "pbui-gzwlj",
  "divider": "pbui-AMCfc"
};
var SocialMedia = function SocialMedia(_ref) {
  var _div;
  var socialMedias = _ref.socialMedias;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var mediaClasses = (0, _clsx["default"])(styles.media);
  var iconClasses = (0, _clsx["default"])(styles.icon);
  var nameClasses = (0, _clsx["default"])(styles.name);
  var dividerContainerClasses = (0, _clsx["default"])(styles.divider__container);
  var dividerClasses = (0, _clsx["default"])(styles.divider);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headlineClasses,
      children: "Follow us"
    }), socialMedias.map(function (socialMedia, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
          href: socialMedia.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: mediaClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: iconClasses,
            children: socialMedia.name === 'Facebook' ? _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              color: "#1877F2",
              icon: _freeBrandsSvgIcons.faFacebook,
              size: "lg"
            })) : socialMedia.name === 'Twitter' ? _FontAwesomeIcon2 || (_FontAwesomeIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              color: "#1DA1F2",
              icon: _freeBrandsSvgIcons.faTwitter,
              size: "lg"
            })) : socialMedia.name === 'Instagram' ? _FontAwesomeIcon3 || (_FontAwesomeIcon3 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              color: "#000100",
              icon: _freeBrandsSvgIcons.faInstagram,
              size: "lg"
            })) : socialMedia.name === 'YouTube' ? _FontAwesomeIcon4 || (_FontAwesomeIcon4 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              color: "#FF0302",
              icon: _freeBrandsSvgIcons.faYoutube,
              size: "lg"
            })) : _FontAwesomeIcon5 || (_FontAwesomeIcon5 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
              icon: _proLightSvgIcons.faQuestionCircle,
              size: "lg"
            }))
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: nameClasses,
            children: socialMedia.name
          })]
        }), index !== socialMedias.length - 1 && (_div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: dividerClasses
          })
        })))]
      }, index);
    })]
  });
};
var _default = exports["default"] = SocialMedia;