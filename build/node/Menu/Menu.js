"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.Item = exports.DropdownTrigger = void 0;
exports.MenuRoot = MenuRoot;
exports["default"] = void 0;
exports.useMenu = useMenu;
exports.useMenuContext = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("@floating-ui/react");
var _clsx = _interopRequireDefault(require("clsx"));
var _react2 = _interopRequireWildcard(require("react"));
var _MenuItem = require("./MenuItem");
var _MenuList = require("./MenuList");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "shouldCloseOnSelect"],
  _excluded2 = ["children", "asChild"],
  _excluded3 = ["arrowClasses", "style"],
  _excluded4 = ["arrowRef", "context", "elementsRef", "labelsRef", "showArrow"],
  _excluded5 = ["children", "disabled", "label", "onClick"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "menu": "pbui-9NTlC",
  "list__arrow": "pbui-1ZIhd",
  "list__overlay": "pbui-N2pI4",
  "list__group": "pbui-6Txou",
  "list__item": "pbui--LEnB",
  "item": "pbui-tubqv",
  "item--disabled": "pbui-8HSqh",
  "item--active": "pbui-Ksbsi",
  "item__content": "pbui-ga2Lt",
  "content__icon": "pbui--0fsY",
  "content__text": "pbui-g-tVf",
  "item__description": "pbui-fgtmS"
};
function useMenu() {
  var _ref2;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$initialOpen = _ref.initialOpen,
    initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
    _ref$offset = _ref.offset,
    offsetMenu = _ref$offset === void 0 ? 0 : _ref$offset,
    setControlledOpen = _ref.onOpenChange,
    controlledOpen = _ref.open,
    _ref$showArrow = _ref.showArrow,
    showArrow = _ref$showArrow === void 0 ? true : _ref$showArrow,
    _ref$shouldCloseOnSel = _ref.shouldCloseOnSelect,
    shouldCloseOnSelect = _ref$shouldCloseOnSel === void 0 ? true : _ref$shouldCloseOnSel,
    width = _ref.width;
  // if not outside open is passed in
  var _React$useState = _react2["default"].useState(),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    uncontrolledOpen = _React$useState2[0],
    setUncontrolledOpen = _React$useState2[1];

  // to track active index and typeahead
  var _React$useState3 = _react2["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    activeIndex = _React$useState4[0],
    setActiveIndex = _React$useState4[1];
  var arrowRef = _react2["default"].useRef(null);

  // use either controlled open or uncontrolled (internal)
  var open = (_ref2 = controlledOpen != null ? controlledOpen : uncontrolledOpen) != null ? _ref2 : initialOpen;
  var setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  var data = (0, _react.useFloating)({
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: _react.autoUpdate,
    placement: placement,
    middleware: [(0, _react.offset)(offsetMenu), (0, _react.flip)({
      crossAxis: placement.includes('-'),
      fallbackAxisSideDirection: 'end',
      padding: 5
    }), (0, _react.shift)({
      padding: 5
    }), (0, _react.arrow)({
      element: arrowRef
    }), (0, _react.size)({
      apply: function apply(_ref3) {
        var availableWidth = _ref3.availableWidth,
          availableHeight = _ref3.availableHeight,
          elements = _ref3.elements;
        // Do things with the data, e.g.
        Object.assign(elements.floating.style, (0, _extends2["default"])({}, width && {
          minWidth: "".concat(width, "px")
        }, {
          maxWidth: "".concat(availableWidth, "px"),
          maxHeight: "".concat(availableHeight, "px")
        }));
      }
    }), (0, _react.hide)({
      strategy: 'referenceHidden'
    })]
  });
  var context = data.context;
  var elementsRef = _react2["default"].useRef([]);
  var labelsRef = _react2["default"].useRef([]);
  function handleTypeaheadMatch(index) {
    if (open) {
      setActiveIndex(index);
    }
  }
  var click = (0, _react.useClick)(context, {
    enabled: controlledOpen == null
  });
  var dismiss = (0, _react.useDismiss)(context);
  var role = (0, _react.useRole)(context, {
    role: 'menu'
  });
  var listNavigation = (0, _react.useListNavigation)(context, {
    listRef: elementsRef,
    activeIndex: activeIndex,
    onNavigate: setActiveIndex,
    loop: true
  });
  var typeahead = (0, _react.useTypeahead)(context, {
    listRef: labelsRef,
    activeIndex: activeIndex,
    onMatch: handleTypeaheadMatch
  });
  var interactions = (0, _react.useInteractions)([listNavigation, typeahead, click, dismiss, role]);
  return (0, _react2.useMemo)(function () {
    return (0, _extends2["default"])({
      activeIndex: activeIndex,
      arrowRef: arrowRef
    }, data, {
      elementsRef: elementsRef
    }, interactions, {
      labelsRef: labelsRef,
      open: open,
      setOpen: setOpen,
      showArrow: showArrow,
      shouldCloseOnSelect: shouldCloseOnSelect,
      width: width
    });
  }, [activeIndex, arrowRef, data, elementsRef, interactions, labelsRef, open, setOpen, showArrow, shouldCloseOnSelect, width]);
}
var DropdownContext = /*#__PURE__*/_react2["default"].createContext(null);
var useMenuContext = exports.useMenuContext = function useMenuContext() {
  var context = _react2["default"].useContext(DropdownContext);
  if (context == null) {
    throw new Error('Menu components must be wrapped in <Menu />');
  }
  return context;
};
function MenuRoot(_ref4) {
  var children = _ref4.children,
    _ref4$shouldCloseOnSe = _ref4.shouldCloseOnSelect,
    shouldCloseOnSelect = _ref4$shouldCloseOnSe === void 0 ? true : _ref4$shouldCloseOnSe,
    restOptions = (0, _objectWithoutProperties2["default"])(_ref4, _excluded);
  var dropdownContext = useMenu((0, _extends2["default"])({
    shouldCloseOnSelect: shouldCloseOnSelect
  }, restOptions));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DropdownContext.Provider, {
    value: dropdownContext,
    children: children
  });
}
var DropdownTrigger = exports.DropdownTrigger = /*#__PURE__*/_react2["default"].forwardRef(function DropdownTrigger(_ref5, propRef) {
  var children = _ref5.children,
    _ref5$asChild = _ref5.asChild,
    asChild = _ref5$asChild === void 0 ? false : _ref5$asChild,
    props = (0, _objectWithoutProperties2["default"])(_ref5, _excluded2);
  var context = useMenuContext();
  var childrenRef = children.ref;
  var ref = (0, _react.useMergeRefs)([context.refs.setReference, propRef, childrenRef]);
  // `asChild` allows the user to pass any element as the anchor
  if (asChild && /*#__PURE__*/_react2["default"].isValidElement(children)) {
    return /*#__PURE__*/_react2["default"].cloneElement(children, context.getReferenceProps((0, _extends2["default"])({
      ref: ref
    }, props, children.props)));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    ref: ref,
    type: "button"
    // The user can style the trigger based on the state
  }, context.getReferenceProps(props), {
    children: children
  }));
});
var List = exports.List = /*#__PURE__*/_react2["default"].forwardRef(function List(_ref6, propRef) {
  var arrowClasses = _ref6.arrowClasses,
    style = _ref6.style,
    props = (0, _objectWithoutProperties2["default"])(_ref6, _excluded3);
  var _useMenuContext = useMenuContext(),
    arrowRef = _useMenuContext.arrowRef,
    floatingContext = _useMenuContext.context,
    elementsRef = _useMenuContext.elementsRef,
    labelsRef = _useMenuContext.labelsRef,
    showArrow = _useMenuContext.showArrow,
    context = (0, _objectWithoutProperties2["default"])(_useMenuContext, _excluded4);
  var ref = (0, _react.useMergeRefs)([context.refs.setFloating, propRef]);
  if (!floatingContext.open) return null;
  var floatArrowClasses = (0, _clsx["default"])(styles.list__arrow, arrowClasses);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingPortal, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingFocusManager, {
      context: floatingContext,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuList.MenuList, (0, _extends2["default"])({
        ref: ref,
        className: props.className,
        style: (0, _extends2["default"])({}, context.floatingStyles, style)
      }, context.getFloatingProps(props), {
        children: [showArrow && /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingArrow, {
          context: floatingContext,
          ref: arrowRef,
          className: floatArrowClasses
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.FloatingList, {
          elementsRef: elementsRef,
          labelsRef: labelsRef,
          children: props.children
        })]
      }))
    })
  });
});
var Item = exports.Item = /*#__PURE__*/_react2["default"].forwardRef(function Item(_ref7, propRef) {
  var children = _ref7.children,
    disabled = _ref7.disabled,
    label = _ref7.label,
    onClick = _ref7.onClick,
    props = (0, _objectWithoutProperties2["default"])(_ref7, _excluded5);
  var _useMenuContext2 = useMenuContext(),
    activeIndex = _useMenuContext2.activeIndex,
    shouldCloseOnSelect = _useMenuContext2.shouldCloseOnSelect,
    setOpen = _useMenuContext2.setOpen;
  var _useListItem = (0, _react.useListItem)({
      label: label
    }),
    listItemRef = _useListItem.ref,
    index = _useListItem.index;
  var ref = (0, _react.useMergeRefs)([propRef, listItemRef]);
  var isActive = activeIndex === index;
  var handleClick = (0, _react2.useCallback)(function (e) {
    if (!disabled) {
      if (onClick) {
        onClick(e);
      }
      if (shouldCloseOnSelect) {
        setOpen(false);
      }
    }
  }, [disabled]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.MenuItem, (0, _extends2["default"])({
    ref: ref,
    isActive: isActive,
    onClick: handleClick,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        handleClick(e);
      }
    }
  }, props, {
    children: children
  }));
});
var Dropdown = Object.assign(MenuRoot, {
  Trigger: DropdownTrigger,
  List: List,
  Item: Item
});
var _default = exports["default"] = Dropdown;