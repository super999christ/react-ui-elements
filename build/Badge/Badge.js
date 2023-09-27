import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "position", "onClick"],
  _excluded2 = ["className", "size", "variation", "label", "prefixIcon", "icon", "onClick", "onIconClick"];
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
var BadgeIcon = /*#__PURE__*/React.forwardRef(function BadgeIcon(props, propsRef) {
  var children = props.children,
    position = props.position,
    onClick = props.onClick,
    rest = _objectWithoutProperties(props, _excluded);
  var handleClick = function handleClick(e) {
    if (onClick) {
      e.stopPropagation();
      onClick(e);
    }
  };
  if (children && /*#__PURE__*/React.isValidElement(children)) {
    var badgeIconClasses = clsx(children.props.className, onClick && styles['badge--icon--hoverable'], {
      'start': styles['badge--icon-prefix'],
      'end': styles['badge--icon-suffix']
    }[position]);
    return /*#__PURE__*/React.cloneElement(children, _extends({
      ref: propsRef,
      className: badgeIconClasses,
      onClick: handleClick
    }, rest));
  }
  return null;
});
var Badge = /*#__PURE__*/React.forwardRef(function Badge(props, propsRef) {
  var className = props.className,
    size = props.size,
    _props$variation = props.variation,
    variation = _props$variation === void 0 ? 'gray' : _props$variation,
    label = props.label,
    prefixIcon = props.prefixIcon,
    icon = props.icon,
    onClick = props.onClick,
    onIconClick = props.onIconClick,
    rest = _objectWithoutProperties(props, _excluded2);
  var badgeClasses = clsx(styles.badge, className, size === 'sm' ? styles['badge--size-sm'] : size !== 'lg' && styles['badge--size-md'], !!onClick && styles['badge--clickable'], size === 'lg' && styles['badge--size-lg'], {
    'gray': styles['badge--color-gray'],
    'primary': styles['badge--color-primary'],
    'error': styles['badge--color-error'],
    'success': styles['badge--color-success'],
    'warning': styles['badge--color-warning']
  }[variation]);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: badgeClasses,
    ref: propsRef,
    onClick: onClick,
    "aria-hidden": "true"
  }, rest, {
    children: [prefixIcon && /*#__PURE__*/_jsx(BadgeIcon, {
      position: "start",
      children: prefixIcon
    }), /*#__PURE__*/_jsx("span", {
      children: label
    }), icon && /*#__PURE__*/_jsx(BadgeIcon, {
      position: "end",
      onClick: onIconClick,
      children: icon
    })]
  }));
});
export default Badge;