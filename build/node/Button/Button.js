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
var _excluded = ["children", "className", "destructive", "disabled", "prefixIcon", "size", "suffixIcon", "variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "button": "pbui-J7yVR",
  "button-prefix--icon": "pbui-7ytTJ",
  "button-suffix--icon": "pbui--ulEF",
  "button--size-sm": "pbui-mUQX1",
  "button--size-lg": "pbui-K2Py-",
  "button--size-xl": "pbui-JwQY3",
  "button--size-2xl": "pbui-pSFZY",
  "button--disabled": "pbui-jB0X0",
  "button--primary": "pbui-1mM0j",
  "button--destructive": "pbui-7OF6m",
  "button--secondary": "pbui-FmOMT",
  "button--secondary-color": "pbui-7PJLC",
  "button--tertiary": "pbui-XLeTV",
  "button--tertiary-color": "pbui-IgcHs",
  "button--link": "pbui-8eNey",
  "button--link-gray": "pbui-OMSwS",
  "button--link-color": "pbui-LxvVj"
};
var Button = /*#__PURE__*/(0, _react.forwardRef)(function Button(props, ref) {
  var children = props.children,
    className = props.className,
    destructive = props.destructive,
    disabled = props.disabled,
    prefixIcon = props.prefixIcon,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    suffixIcon = props.suffixIcon,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var buttonClasses = (0, _clsx["default"])(styles.button, (variant === 'link' || variant === 'link-gray') && styles['button--link'], className, disabled && styles['button--disabled'], destructive && styles['button--destructive'], {
    'sm': styles['button--size-sm'],
    'lg': styles['button--size-lg'],
    'xl': styles['button--size-xl'],
    '2xl': styles['button--size-2xl']
  }[size], {
    'primary': styles['button--primary'],
    'secondary': styles['button--secondary'],
    'secondary-color': styles['button--secondary-color'],
    'tertiary': styles['button--tertiary'],
    'tertiary-color': styles['button--tertiary-color'],
    'link-gray': styles['button--link-gray']
  }[variant]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", (0, _extends2["default"])({
    type: "button",
    className: buttonClasses,
    disabled: disabled,
    ref: ref
  }, rest, {
    children: [prefixIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: styles['button-prefix--icon'],
      children: prefixIcon
    }), children, suffixIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: styles['button-suffix--icon'],
      children: suffixIcon
    })]
  }));
});
var _default = exports["default"] = Button;