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
var styles = {
  "wrapper": "pbui-4ayEn",
  "header": "pbui-OMTgN",
  "header--no-headline-text": "pbui-M5mU8",
  "logo": "pbui-3oFT0",
  "headline": "pbui-f1wYF",
  "text": "pbui-TBC6c",
  "buttons": "pbui-mmAod",
  "button1": "pbui-4Sne3",
  "button2": "pbui-q1KGc",
  "links": "pbui-G8XSX",
  "link": "pbui-G-vgT"
};
var LoginCard = function LoginCard(_ref) {
  var background = _ref.background,
    button1Text = _ref.button1Text,
    button2Text = _ref.button2Text,
    headlineText = _ref.headlineText,
    learnMoreLink = _ref.learnMoreLink,
    Logo = _ref.Logo,
    text = _ref.text;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headerClasses = (0, _clsx["default"])(styles.header, !headlineText && styles['header--no-headline-text']);
  var logoClasses = (0, _clsx["default"])(styles.logo);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var textClasses = (0, _clsx["default"])(styles.text);
  var buttonsClasses = (0, _clsx["default"])(styles.buttons);
  var button1Classes = (0, _clsx["default"])(styles.button1);
  var button2Classes = (0, _clsx["default"])(styles.button2);
  var linksClasses = (0, _clsx["default"])(styles.links);
  var linkClasses = (0, _clsx["default"])(styles.link);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      background: "".concat(background)
    },
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: headerClasses,
      children: [typeof Logo === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        alt: "Logo",
        src: Logo,
        className: logoClasses
      }) : Logo(), headlineText && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: headlineClasses,
        children: headlineText
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: textClasses,
      children: text
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: buttonsClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        className: button1Classes,
        children: button1Text
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        variant: "tertiary",
        className: button2Classes,
        children: button2Text
      })]
    }), learnMoreLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: learnMoreLink,
      rel: "noopener noreferrer",
      target: "_blank",
      className: linksClasses,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        variant: "link",
        className: linkClasses,
        children: "Learn more"
      })
    })]
  });
};
var _default = exports["default"] = LoginCard;