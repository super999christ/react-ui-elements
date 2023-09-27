"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "centeredDesktop", "centeredMobile", "className", "heading", "Image", "reverseOrderDesktop", "reverseOrderMobile", "Subheading", "supportingText"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "wrapper": "pbui-9I4Hu",
  "wrapper--mobile-reversed": "pbui-xXROU",
  "wrapper--reversed": "pbui-4CEVb",
  "container": "pbui-HWeJZ",
  "header": "pbui-yWZCd",
  "header--mobile-reversed": "pbui-fCa2m",
  "reason": "pbui-Djp6v",
  "header--mobile-centered": "pbui-mEWor",
  "reason--mobile-centered": "pbui-246V-",
  "header--centered": "pbui-IWTj8",
  "reason--centered": "pbui-Ukcts",
  "subheading": "pbui-h4v6O",
  "heading": "pbui-K-ZNG",
  "supporting__text": "pbui-g0Pjh",
  "subheading--mobile-centered": "pbui-oIjaZ",
  "heading--mobile-centered": "pbui-lbp-X",
  "supporting__text--mobile-centered": "pbui-2EWvD",
  "subheading--centered": "pbui-WqcBM",
  "heading--centered": "pbui-GS0Qe",
  "supporting__text--centered": "pbui-GoItM",
  "image": "pbui-vqN3a"
};
var ErrorSection = /*#__PURE__*/(0, _react.forwardRef)(function ErrorSection(props, ref) {
  var children = props.children,
    _props$centeredDeskto = props.centeredDesktop,
    centeredDesktop = _props$centeredDeskto === void 0 ? false : _props$centeredDeskto,
    _props$centeredMobile = props.centeredMobile,
    centeredMobile = _props$centeredMobile === void 0 ? false : _props$centeredMobile,
    className = props.className,
    heading = props.heading,
    Image = props.Image,
    _props$reverseOrderDe = props.reverseOrderDesktop,
    reverseOrderDesktop = _props$reverseOrderDe === void 0 ? false : _props$reverseOrderDe,
    _props$reverseOrderMo = props.reverseOrderMobile,
    reverseOrderMobile = _props$reverseOrderMo === void 0 ? false : _props$reverseOrderMo,
    Subheading = props.Subheading,
    supportingText = props.supportingText,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, className, reverseOrderDesktop && styles['wrapper--reversed'], reverseOrderMobile && styles['wrapper--mobile-reversed']);
  var containerClasses = (0, _clsx["default"])(styles.container);
  var headerClasses = (0, _clsx["default"])(styles.header, centeredMobile && styles['header--mobile-centered'], centeredDesktop && styles['header--centered'], reverseOrderMobile && styles['header--mobile-reversed']);
  var reasonClasses = (0, _clsx["default"])(styles.reason, centeredMobile && styles['reason--mobile-centered'], centeredDesktop && styles['reason--centered']);
  var subheadingClasses = (0, _clsx["default"])(styles.subheading, centeredMobile && styles['subheading--mobile-centered'], centeredDesktop && styles['subheading--centered']);
  var headingClasses = (0, _clsx["default"])(styles.heading, centeredMobile && styles['heading--mobile-centered'], centeredDesktop && styles['heading--centered']);
  var supportingTextClasses = (0, _clsx["default"])(styles.supporting__text, centeredMobile && styles['supporting__text--mobile-centered'], centeredDesktop && styles['supporting__text--centered']);
  var imageClasses = (0, _clsx["default"])(styles.image);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: wrapperClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: containerClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: headerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: reasonClasses,
          children: [Subheading && (typeof Subheading === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
            className: subheadingClasses,
            children: Subheading
          }) : Subheading()), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: headingClasses,
            children: heading
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: supportingTextClasses,
          children: supportingText
        })]
      }), children]
    }), Image && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: imageClasses,
      children: Image()
    })]
  }));
});
var _default = exports["default"] = ErrorSection;