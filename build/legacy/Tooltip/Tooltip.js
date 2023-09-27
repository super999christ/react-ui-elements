import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["children"],
  _excluded2 = ["children", "asChild"],
  _excluded3 = ["style"];
import { autoUpdate, flip, FloatingPortal, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, useMergeRefs, useRole } from "@floating-ui/react";
import React from "react";
var styles = {
  "tooltip": "pbui-Q5cqR"
};
import clsx from "clsx";
import { jsx as _jsx } from "react/jsx-runtime";
export function useTooltip() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$initialOpen = _ref.initialOpen,
    initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "top" : _ref$placement,
    controlledOpen = _ref.open,
    setControlledOpen = _ref.onOpenChange;
  var _React$useState = React.useState(initialOpen),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    uncontrolledOpen = _React$useState2[0],
    setUncontrolledOpen = _React$useState2[1];
  var open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  var setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  var data = useFloating({
    placement: placement,
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip({
      crossAxis: placement.includes("-"),
      fallbackAxisSideDirection: "start",
      padding: 5
    }), shift({
      padding: 5
    })]
  });
  var context = data.context;
  var hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null
  });
  var focus = useFocus(context, {
    enabled: controlledOpen == null
  });
  var dismiss = useDismiss(context);
  var role = useRole(context, {
    role: "tooltip"
  });
  var interactions = useInteractions([hover, focus, dismiss, role]);
  return React.useMemo(function () {
    return _extends({
      open: open,
      setOpen: setOpen
    }, interactions, data);
  }, [open, setOpen, interactions, data]);
}
var TooltipContext = /*#__PURE__*/React.createContext(null);
export var useTooltipContext = function useTooltipContext() {
  var context = React.useContext(TooltipContext);
  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }
  return context;
};
export function TooltipRoot(_ref2) {
  var children = _ref2.children,
    options = _objectWithoutProperties(_ref2, _excluded);
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  var tooltip = useTooltip(options);
  return /*#__PURE__*/_jsx(TooltipContext.Provider, {
    value: tooltip,
    children: children
  });
}
export var TooltipTrigger = /*#__PURE__*/React.forwardRef(function TooltipTrigger(_ref3, propRef) {
  var children = _ref3.children,
    _ref3$asChild = _ref3.asChild,
    asChild = _ref3$asChild === void 0 ? false : _ref3$asChild,
    props = _objectWithoutProperties(_ref3, _excluded2);
  var context = useTooltipContext();
  var childrenRef = children.ref;
  var ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.cloneElement(children, context.getReferenceProps(_extends({
      ref: ref
    }, props, children.props, {
      "data-state": context.open ? "open" : "closed"
    })));
  }
  return /*#__PURE__*/_jsx("button", _extends({
    type: "button",
    ref: ref
    // The user can style the trigger based on the state
    ,
    "data-state": context.open ? "open" : "closed"
  }, context.getReferenceProps(props), {
    children: children
  }));
});
export var TooltipContent = /*#__PURE__*/React.forwardRef(function TooltipContent(_ref4, propRef) {
  var style = _ref4.style,
    props = _objectWithoutProperties(_ref4, _excluded3);
  var context = useTooltipContext();
  var ref = useMergeRefs([context.refs.setFloating, propRef]);
  var tooltipClasses = clsx(styles.tooltip, props.className);
  if (!context.open) return null;
  return /*#__PURE__*/_jsx(FloatingPortal, {
    children: /*#__PURE__*/_jsx("div", _extends({
      ref: ref,
      style: _extends({}, context.floatingStyles, style)
    }, context.getFloatingProps(props), {
      className: tooltipClasses
    }))
  });
});
var Tooltip = _extends(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent
});
export default Tooltip;