import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["as", "className"],
  _excluded2 = ["children", "className", "tag"];
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var styles = {
  "nav": "pbui-xKR2U",
  "nav__container": "pbui-sLUB4",
  "brand": "pbui-UYmdh",
  "item": "pbui-SHk5V",
  "item--active": "pbui-9fUxo",
  "item__content": "pbui--JUZf"
};
var NavbarRoot = /*#__PURE__*/React.forwardRef(function Navbar(props, propsRef) {
  var _props$as = props.as,
    Element = _props$as === void 0 ? 'nav' : _props$as,
    className = props.className,
    rest = _objectWithoutProperties(props, _excluded);
  var RenderElement = Element;
  var navbarClasses = clsx(styles.nav, className);
  return /*#__PURE__*/_jsx(RenderElement, _extends({
    className: navbarClasses,
    ref: propsRef
  }, rest, {
    children: /*#__PURE__*/_jsx("div", {
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
    props = _objectWithoutProperties(_ref, _excluded2);
  var brandClasses = clsx(styles.brand, className);
  return /*#__PURE__*/_jsx(Tag, _extends({}, props, {
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

var Navbar = _extends(NavbarRoot, {
  Brand: Brand
});
export default Navbar;