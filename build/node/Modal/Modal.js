"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeading = exports.ModalDescription = exports.ModalContent = exports.ModalClose = void 0;
exports.ModalRoot = ModalRoot;
exports["default"] = exports.ModalTrigger = void 0;
exports.useModal = useModal;
exports.useModalContext = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("@floating-ui/react");
var _clsx = _interopRequireDefault(require("clsx"));
var _react2 = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"],
  _excluded2 = ["children", "asChild"],
  _excluded3 = ["context"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var stylesModule = {
  "modal-overlay": "pbui-gfwMG"
};
function useModal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$initialOpen = _ref.initialOpen,
    initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
    controlledOpen = _ref.open,
    setControlledOpen = _ref.onOpenChange;
  var _React$useState = _react2["default"].useState(initialOpen),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    uncontrolledOpen = _React$useState2[0],
    setUncontrolledOpen = _React$useState2[1];
  var _React$useState3 = _react2["default"].useState(),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    labelId = _React$useState4[0],
    setLabelId = _React$useState4[1];
  var _React$useState5 = _react2["default"].useState(),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    descriptionId = _React$useState6[0],
    setDescriptionId = _React$useState6[1];
  var open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  var setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  var data = (0, _react.useFloating)({
    open: open,
    onOpenChange: setOpen
  });
  var context = data.context;
  var click = (0, _react.useClick)(context, {
    enabled: controlledOpen == null
  });
  var dismiss = (0, _react.useDismiss)(context, {
    outsidePressEvent: 'mousedown'
  });
  var role = (0, _react.useRole)(context);
  var interactions = (0, _react.useInteractions)([click, dismiss, role]);
  return _react2["default"].useMemo(function () {
    return (0, _extends2["default"])({
      open: open,
      setOpen: setOpen
    }, interactions, data, {
      labelId: labelId,
      descriptionId: descriptionId,
      setLabelId: setLabelId,
      setDescriptionId: setDescriptionId
    });
  }, [open, setOpen, interactions, data, labelId, descriptionId]);
}
var ModalContext = /*#__PURE__*/_react2["default"].createContext(null);
var useModalContext = exports.useModalContext = function useModalContext() {
  var context = _react2["default"].useContext(ModalContext);
  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />');
  }
  return context;
};
function ModalRoot(_ref2) {
  var children = _ref2.children,
    options = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var modal = useModal(options);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ModalContext.Provider, {
    value: modal,
    children: children
  });
}
var ModalTrigger = exports.ModalTrigger = /*#__PURE__*/_react2["default"].forwardRef(function ModalTrigger(_ref3, propRef) {
  var children = _ref3.children,
    _ref3$asChild = _ref3.asChild,
    asChild = _ref3$asChild === void 0 ? false : _ref3$asChild,
    props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded2);
  var context = useModalContext();
  var childrenRef = children.ref;
  var ref = (0, _react.useMergeRefs)([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && /*#__PURE__*/_react2["default"].isValidElement(children)) {
    return /*#__PURE__*/_react2["default"].cloneElement(children, context.getReferenceProps((0, _extends2["default"])({
      ref: ref
    }, props, children.props, {
      'data-state': context.open ? 'open' : 'closed'
    })));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    type: "button",
    ref: ref
    // The user can style the trigger based on the state
    ,
    "data-state": context.open ? 'open' : 'closed'
  }, context.getReferenceProps(props), {
    children: children
  }));
});
var ModalContent = exports.ModalContent = /*#__PURE__*/_react2["default"].forwardRef(function ModalContent(props, propRef) {
  var _useModalContext = useModalContext(),
    floatingContext = _useModalContext.context,
    context = (0, _objectWithoutProperties2["default"])(_useModalContext, _excluded3);
  var ref = (0, _react.useMergeRefs)([context.refs.setFloating, propRef]);
  var _useTransitionStyles = (0, _react.useTransitionStyles)(floatingContext, {
      initial: {
        opacity: 0
      },
      open: {
        opacity: 1
      }
    }),
    isMounted = _useTransitionStyles.isMounted;
  if (!isMounted) return null;
  var modalContentClasses = (0, _clsx["default"])('rounded-xl bg-white p-6 shadow-xl',
  // eslint-disable-next-line react/prop-types
  props.className);
  var overlayClasses = (0, _clsx["default"])(stylesModule['modal-overlay'], props.overlayClassName);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingPortal, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingOverlay, {
      className: overlayClasses,
      lockScroll: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingFocusManager, {
        context: floatingContext,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
          ref: ref,
          "aria-labelledby": context.labelId,
          "aria-describedby": context.descriptionId
        }, context.getFloatingProps(props), {
          className: modalContentClasses,
          style: (0, _extends2["default"])({}, props.style),
          children: props.children
        }))
      })
    })
  });
});
var ModalHeading = exports.ModalHeading = /*#__PURE__*/_react2["default"].forwardRef(function ModalHeading(_ref4, ref) {
  var children = _ref4.children,
    props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded4);
  var _useModalContext2 = useModalContext(),
    setLabelId = _useModalContext2.setLabelId;
  var id = (0, _react2.useId)();

  // Only sets `aria-labelledby` on the Modal root element
  // if this component is mounted inside it.
  _react2["default"].useLayoutEffect(function () {
    setLabelId(id);
    return function () {
      return setLabelId(undefined);
    };
  }, [id, setLabelId]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", (0, _extends2["default"])({}, props, {
    ref: ref,
    id: id,
    children: children
  }));
});
var ModalDescription = exports.ModalDescription = /*#__PURE__*/_react2["default"].forwardRef(function ModalDescription(_ref5, ref) {
  var children = _ref5.children,
    props = (0, _objectWithoutProperties2["default"])(_ref5, _excluded5);
  var _useModalContext3 = useModalContext(),
    setDescriptionId = _useModalContext3.setDescriptionId;
  var id = (0, _react2.useId)();

  // Only sets `aria-describedby` on the Modal root element
  // if this component is mounted inside it.
  _react2["default"].useLayoutEffect(function () {
    setDescriptionId(id);
    return function () {
      return setDescriptionId(undefined);
    };
  }, [id, setDescriptionId]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", (0, _extends2["default"])({}, props, {
    ref: ref,
    id: id,
    children: children
  }));
});
var ModalClose = exports.ModalClose = /*#__PURE__*/_react2["default"].forwardRef(function ModalClose(props, ref) {
  var _useModalContext4 = useModalContext(),
    setOpen = _useModalContext4.setOpen;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    type: "button"
  }, props, {
    ref: ref,
    onClick: function onClick() {
      return setOpen(false);
    }
  }));
});
var Modal = Object.assign(ModalRoot, {
  ModalContent: ModalContent,
  ModalHeading: ModalHeading,
  ModalClose: ModalClose,
  ModalDescription: ModalDescription,
  ModalTrigger: ModalTrigger
});
var _default = exports["default"] = Modal;