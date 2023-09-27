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
var _excluded = ["as", "className"],
  _excluded2 = ["children", "className", "tag"];
var styles = {
  "nav": "pbui-xKR2U",
  "nav__container": "pbui-sLUB4",
  "brand": "pbui-UYmdh",
  "item": "pbui-SHk5V",
  "item--active": "pbui-9fUxo",
  "item__content": "pbui--JUZf"
};
var NavbarRoot = /*#__PURE__*/_react["default"].forwardRef(function Navbar(props, propsRef) {
  var _props$as = props.as,
    Element = _props$as === void 0 ? 'nav' : _props$as,
    className = props.className,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var RenderElement = Element;
  var navbarClasses = (0, _clsx["default"])(styles.nav, className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RenderElement, (0, _extends2["default"])({
    className: navbarClasses,
    ref: propsRef
  }, rest, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: styles.nav__container,
      children: props.children
    })
  }));
});
var Brand = function Brand(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$tag = _ref.tag,
    Tag = _ref$tag === void 0 ? 'span' : _ref$tag,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);
  var brandClasses = (0, _clsx["default"])(styles.brand, className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Tag, (0, _extends2["default"])({}, props, {
    className: brandClasses,
    children: children
  }));
};

/* const Brand = React.forwardRef<HTMLOrSVGElement, BrandProps>(function Brand(
  props,
  propRef
) {
  const { as: Element = 'span', className, ...rest } = props;

  const RenderElement = Element as any;
  const brandClasses = clsx(styles['brand'], className);

  return (
    <RenderElement className={brandClasses} ref={propRef} {...rest}>
      {props.children}
    </RenderElement>
  );
}); */

var Navbar = Object.assign(NavbarRoot, {
  Brand: Brand
});
var _default = exports["default"] = Navbar;