"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["Avatar", "Badge", "children", "className", "Dropdown", "SupportingText", "Text", "withHeaderLine"];
var styles = {
  "wrapper": "pbui-Z6OJ9",
  "wrapper--with-header-line": "pbui-dsYyO",
  "avatar__text__container": "pbui-h9sv2",
  "text__container": "pbui-5B2c-",
  "text__badge__container": "pbui-0WDtv",
  "text": "pbui-xarAE",
  "supporting__text": "pbui-AihQC",
  "dropdown": "pbui-aYsrf"
};
var CardHeader = /*#__PURE__*/_react["default"].forwardRef(function CardHeader(props, ref) {
  var Avatar = props.Avatar,
    Badge = props.Badge,
    children = props.children,
    className = props.className,
    Dropdown = props.Dropdown,
    SupportingText = props.SupportingText,
    _props$Text = props.Text,
    Text = _props$Text === void 0 ? 'Text' : _props$Text,
    withHeaderLine = props.withHeaderLine,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, className, withHeaderLine && styles['wrapper--with-header-line']);
  var avatarTextContainerClasses = (0, _clsx["default"])(styles.avatar__text__container);
  var textContainerClasses = (0, _clsx["default"])(styles.text__container);
  var textBadgeContainerClasses = (0, _clsx["default"])(styles.text__badge__container);
  var textClasses = (0, _clsx["default"])(styles.text);
  var supportingTextClasses = (0, _clsx["default"])(styles.supporting__text);
  var dropdownClasses = (0, _clsx["default"])(styles.dropdown);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: wrapperClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: avatarTextContainerClasses,
      children: [Avatar && Avatar(), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: textContainerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: textBadgeContainerClasses,
          children: [typeof Text === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: textClasses,
            children: Text
          }) : Text(), Badge && Badge()]
        }), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: supportingTextClasses,
          children: SupportingText
        }) : SupportingText())]
      })]
    }), children, Dropdown && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: dropdownClasses,
      children: Dropdown()
    })]
  }));
});
var _default = exports["default"] = CardHeader;