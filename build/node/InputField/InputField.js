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
var _excluded = ["className", "destructive", "disabled", "ErrorMessage", "HintMessage", "id", "Label", "placeholder", "PrefixIcon", "size", "SuffixIcon", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "wrapper": "pbui-FaPQm",
  "wrapper__label": "pbui-OK-QS",
  "wrapper__hint": "pbui-6Kced",
  "wrapper__error": "pbui-o9znO",
  "wrapper__input__field__wrapper": "pbui-iDjdQ",
  "wrapper__input__field__wrapper--disabled": "pbui-SrZd6",
  "wrapper__input__field__wrapper__input__field": "pbui-DjZ47",
  "wrapper__input__field__wrapper--destructive": "pbui-wD-11",
  "wrapper__input__field__wrapper--size-sm": "pbui-gsdA1"
};
// NOTE: If you want to control the width of the InputField, wrap it in a div and give a width to that div
// Example: <div classname='w-[320px]'><InputField /></div>
var InputField = /*#__PURE__*/(0, _react.forwardRef)(function InputField(props, ref) {
  var className = props.className,
    destructive = props.destructive,
    disabled = props.disabled,
    ErrorMessage = props.ErrorMessage,
    HintMessage = props.HintMessage,
    _props$id = props.id,
    id = _props$id === void 0 ? 'inputField' : _props$id,
    Label = props.Label,
    placeholder = props.placeholder,
    PrefixIcon = props.PrefixIcon,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    SuffixIcon = props.SuffixIcon,
    value = props.value,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var labelClasses = (0, _clsx["default"])(styles.wrapper__label);
  var inputFieldWrapperClasses = (0, _clsx["default"])(styles.wrapper__input__field__wrapper, disabled && styles['wrapper__input__field__wrapper--disabled'], destructive && styles['wrapper__input__field__wrapper--destructive'], size === 'sm' && styles['wrapper__input__field__wrapper--size-sm']);
  var inputFieldClasses = (0, _clsx["default"])(styles.wrapper__input__field__wrapper__input__field, className);
  var errorClasses = (0, _clsx["default"])(styles.wrapper__error);
  var hintClasses = (0, _clsx["default"])(styles.wrapper__hint);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [Label && (typeof Label === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: labelClasses,
      htmlFor: id,
      children: Label
    }) : Label()), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: inputFieldWrapperClasses,
      children: [PrefixIcon && PrefixIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({
        className: inputFieldClasses,
        disabled: disabled,
        id: id,
        placeholder: placeholder,
        ref: ref,
        type: "text",
        value: value
      }, rest)), SuffixIcon && SuffixIcon()]
    }), destructive && ErrorMessage && (typeof ErrorMessage === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: errorClasses,
      children: ErrorMessage
    }) : ErrorMessage()), !destructive && HintMessage && (typeof HintMessage === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: hintClasses,
      children: HintMessage
    }) : HintMessage())]
  });
});
var _default = exports["default"] = InputField;