"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipContent = void 0;
exports.TooltipRoot = TooltipRoot;
exports["default"] = exports.TooltipTrigger = void 0;
exports.useTooltip = useTooltip;
exports.useTooltipContext = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("@floating-ui/react");
var _react2 = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"],
  _excluded2 = ["children", "asChild"],
  _excluded3 = ["style"];
var styles = {
  "tooltip": "pbui-Q5cqR"
};
function useTooltip() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$initialOpen = _ref.initialOpen,
    initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "top" : _ref$placement,
    controlledOpen = _ref.open,
    setControlledOpen = _ref.onOpenChange;
  var _React$useState = _react2["default"].useState(initialOpen),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    uncontrolledOpen = _React$useState2[0],
    setUncontrolledOpen = _React$useState2[1];
  var open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  var setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  var data = (0, _react.useFloating)({
    placement: placement,
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: _react.autoUpdate,
    middleware: [(0, _react.offset)(5), (0, _react.flip)({
      crossAxis: placement.includes("-"),
      fallbackAxisSideDirection: "start",
      padding: 5
    }), (0, _react.shift)({
      padding: 5
    })]
  });
  var context = data.context;
  var hover = (0, _react.useHover)(context, {
    move: false,
    enabled: controlledOpen == null
  });
  var focus = (0, _react.useFocus)(context, {
    enabled: controlledOpen == null
  });
  var dismiss = (0, _react.useDismiss)(context);
  var role = (0, _react.useRole)(context, {
    role: "tooltip"
  });
  var interactions = (0, _react.useInteractions)([hover, focus, dismiss, role]);
  return _react2["default"].useMemo(function () {
    return (0, _extends2["default"])({
      open: open,
      setOpen: setOpen
    }, interactions, data);
  }, [open, setOpen, interactions, data]);
}
var TooltipContext = /*#__PURE__*/_react2["default"].createContext(null);
var useTooltipContext = exports.useTooltipContext = function useTooltipContext() {
  var context = _react2["default"].useContext(TooltipContext);
  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }
  return context;
};
function TooltipRoot(_ref2) {
  var children = _ref2.children,
    options = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  var tooltip = useTooltip(options);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TooltipContext.Provider, {
    value: tooltip,
    children: children
  });
}
var TooltipTrigger = exports.TooltipTrigger = /*#__PURE__*/_react2["default"].forwardRef(function TooltipTrigger(_ref3, propRef) {
  var children = _ref3.children,
    _ref3$asChild = _ref3.asChild,
    asChild = _ref3$asChild === void 0 ? false : _ref3$asChild,
    props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded2);
  var context = useTooltipContext();
  var childrenRef = children.ref;
  var ref = (0, _react.useMergeRefs)([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && /*#__PURE__*/_react2["default"].isValidElement(children)) {
    return /*#__PURE__*/_react2["default"].cloneElement(children, context.getReferenceProps((0, _extends2["default"])({
      ref: ref
    }, props, children.props, {
      "data-state": context.open ? "open" : "closed"
    })));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    type: "button",
    ref: ref
    // The user can style the trigger based on the state
    ,
    "data-state": context.open ? "open" : "closed"
  }, context.getReferenceProps(props), {
    children: children
  }));
});
var TooltipContent = exports.TooltipContent = /*#__PURE__*/_react2["default"].forwardRef(function TooltipContent(_ref4, propRef) {
  var style = _ref4.style,
    props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded3);
  var context = useTooltipContext();
  var ref = (0, _react.useMergeRefs)([context.refs.setFloating, propRef]);
  var tooltipClasses = (0, _clsx["default"])(styles.tooltip, props.className);
  if (!context.open) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingPortal, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
      ref: ref,
      style: (0, _extends2["default"])({}, context.floatingStyles, style)
    }, context.getFloatingProps(props), {
      className: tooltipClasses
    }))
  });
});
var Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent
});
var _default = exports["default"] = Tooltip;