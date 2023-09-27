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
var _excluded = ["children", "position", "onClick"],
  _excluded2 = ["className", "size", "variation", "label", "prefixIcon", "icon", "onClick", "onIconClick"];
var styles = {
  "badge": "pbui-dZK-L",
  "badge--size-sm": "pbui-YI-gt",
  "badge--size-md": "pbui-buxz1",
  "badge--size-lg": "pbui-L7yhV",
  "badge--color-gray": "pbui-LeBE9",
  "badge--clickable": "pbui-Bi-qN",
  "badge--color-primary": "pbui-Zh80Y",
  "badge--color-error": "pbui-3JFpk",
  "badge--color-warning": "pbui-Y-vVg",
  "badge--color-success": "pbui-ByYtV",
  "badge--icon-prefix": "pbui--EUVR",
  "badge--icon-suffix": "pbui-pksyo",
  "badge--icon--hoverable": "pbui-ggQJW"
};
var BadgeIcon = /*#__PURE__*/_react["default"].forwardRef(function BadgeIcon(props, propsRef) {
  var children = props.children,
    position = props.position,
    onClick = props.onClick,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var handleClick = function handleClick(e) {
    if (onClick) {
      e.stopPropagation();
      onClick(e);
    }
  };
  if (children && /*#__PURE__*/_react["default"].isValidElement(children)) {
    var badgeIconClasses = (0, _clsx["default"])(children.props.className, onClick && styles['badge--icon--hoverable'], {
      'start': styles['badge--icon-prefix'],
      'end': styles['badge--icon-suffix']
    }[position]);
    return /*#__PURE__*/_react["default"].cloneElement(children, (0, _extends2["default"])({
      ref: propsRef,
      className: badgeIconClasses,
      onClick: handleClick
    }, rest));
  }
  return null;
});
var Badge = /*#__PURE__*/_react["default"].forwardRef(function Badge(props, propsRef) {
  var className = props.className,
    size = props.size,
    _props$variation = props.variation,
    variation = _props$variation === void 0 ? 'gray' : _props$variation,
    label = props.label,
    prefixIcon = props.prefixIcon,
    icon = props.icon,
    onClick = props.onClick,
    onIconClick = props.onIconClick,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded2);
  var badgeClasses = (0, _clsx["default"])(styles.badge, className, size === 'sm' ? styles['badge--size-sm'] : size !== 'lg' && styles['badge--size-md'], !!onClick && styles['badge--clickable'], size === 'lg' && styles['badge--size-lg'], {
    'gray': styles['badge--color-gray'],
    'primary': styles['badge--color-primary'],
    'error': styles['badge--color-error'],
    'success': styles['badge--color-success'],
    'warning': styles['badge--color-warning']
  }[variation]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: badgeClasses,
    ref: propsRef,
    onClick: onClick,
    "aria-hidden": "true"
  }, rest, {
    children: [prefixIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(BadgeIcon, {
      position: "start",
      children: prefixIcon
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: label
    }), icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(BadgeIcon, {
      position: "end",
      onClick: onIconClick,
      children: icon
    })]
  }));
});
var _default = exports["default"] = Badge;