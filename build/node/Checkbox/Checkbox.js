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
var _excluded = ["className", "disabled", "id", "indeterminate", "name", "size", "SupportingText", "Text", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "wrapper": "pbui-FjreS",
  "wrapper--size-sm": "pbui-VKFzW",
  "wrapper__checkbox": "pbui-vmYWY",
  "wrapper__checkbox--size-sm": "pbui-xhwpW",
  "wrapper__text": "pbui-3fzQV",
  "wrapper__supporting__text": "pbui-3Kb-t",
  "wrapper__text--size-sm": "pbui-EMg9Q",
  "wrapper__supporting__text--size-sm": "pbui-oGPpv"
};
var Checkbox = /*#__PURE__*/(0, _react.forwardRef)(function Checkbox(props, ref) {
  var className = props.className,
    disabled = props.disabled,
    id = props.id,
    indeterminate = props.indeterminate,
    name = props.name,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    SupportingText = props.SupportingText,
    Text = props.Text,
    value = props.value,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, !Text && !SupportingText && '!gap-0', size === 'sm' && styles['wrapper--size-sm']);
  var checkboxClasses = (0, _clsx["default"])(styles.wrapper__checkbox, className, indeterminate && styles['wrapper__checkbox--indeterminate'], size === 'sm' && styles['wrapper__checkbox--size-sm']);
  var textClasses = (0, _clsx["default"])(styles.wrapper__text, size === 'sm' && styles['wrapper__text--size-sm']);
  var supportingTextClasses = (0, _clsx["default"])(styles.wrapper__supporting__text, size === 'sm' && styles['wrapper__supporting__text--size-sm']);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({
      type: "checkbox",
      className: checkboxClasses,
      disabled: disabled,
      id: id,
      name: name,
      ref: ref,
      value: value
    }, rest)), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [Text && (typeof Text === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: textClasses,
        children: Text
      }) : Text()), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: supportingTextClasses,
        children: SupportingText
      }) : SupportingText())]
    })]
  });
});
var _default = exports["default"] = Checkbox;