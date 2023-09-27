"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proLightSvgIcons = require("@fortawesome/pro-light-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _FontAwesomeIcon;
var _excluded = ["active", "className", "customIconRender", "customImageRender", "imageUrl", "focusable", "onlineIndicator", "size"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "avatar-root": "pbui-qGdCq",
  "avatar": "pbui-5Wcia",
  "avatar--focusable-active": "pbui-SLXkw",
  "avatar--focusable": "pbui-Rd8aD",
  "avatar--size-xs": "pbui-az8wg",
  "avatar--size-sm": "pbui-TFgJz",
  "avatar--size-md": "pbui-tTCW8",
  "avatar--size-lg": "pbui-vZLIM",
  "avatar--size-xl": "pbui-2uLO0",
  "avatar--size-2xl": "pbui-us08d",
  "avatar--size-3xl": "pbui-HQHAO",
  "avatar--size-4xl": "pbui-HSVZP",
  "avatar--indicator": "pbui-MRdoA",
  "avatar--indicator-online": "pbui-A6qu2",
  "avatar--indicator-offline": "pbui-Izp6X",
  "avatar--placeholder": "pbui-OXtHt"
};
var Avatar = /*#__PURE__*/(0, _react.forwardRef)(function Avatar(props, propsRef) {
  var _div, _img;
  var _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    className = props.className,
    customIconRender = props.customIconRender,
    customImageRender = props.customImageRender,
    imageUrl = props.imageUrl,
    _props$focusable = props.focusable,
    focusable = _props$focusable === void 0 ? false : _props$focusable,
    onlineIndicator = props.onlineIndicator,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var avatarContainerClasses = (0, _clsx["default"])(styles['avatar-root'], {
    'xs': styles['avatar--size-xs'],
    'sm': styles['avatar--size-sm'],
    'md': styles['avatar--size-md'],
    'lg': styles['avatar--size-lg'],
    'xl': styles['avatar--size-xl'],
    '2xl': styles['avatar--size-2xl'],
    '3xl': styles['avatar--size-3xl'],
    '4xl': styles['avatar--size-4xl']
  }[size]);
  var avatarClasses = (0, _clsx["default"])(styles.avatar, className, active && styles['avatar--focusable-active'], focusable && styles['avatar--focusable']);
  var indicatorClasses = (0, _clsx["default"])(styles['avatar--indicator'], onlineIndicator === true && styles['avatar--indicator-online'], onlineIndicator === false && styles['avatar--indicator-offline']);
  var renderOnlineIndicator = function renderOnlineIndicator() {
    if (typeof onlineIndicator === 'boolean' && onlineIndicator !== undefined) {
      return _div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: indicatorClasses
      }));
    }
    return null;
  };
  var renderImage = function renderImage() {
    if (imageUrl) {
      if (customImageRender) {
        return customImageRender(imageUrl);
      }
      return _img || (_img = /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: imageUrl,
        alt: "",
        className: "absolute inset-0 h-full w-full object-cover"
      }));
    }
    if (customIconRender) return customIconRender();
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: styles['avatar--placeholder'],
      children: _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
        icon: _proLightSvgIcons.faUser,
        className: "text-gray-700"
      }))
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: avatarContainerClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
      className: avatarClasses,
      ref: propsRef,
      tabIndex: focusable ? 0 : -1,
      role: "button"
    }, rest, {
      children: renderImage()
    })), renderOnlineIndicator()]
  });
});
var _default = exports["default"] = Avatar;