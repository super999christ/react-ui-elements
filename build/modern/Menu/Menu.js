import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["children", "shouldCloseOnSelect"],
  _excluded2 = ["children", "asChild"],
  _excluded3 = ["arrowClasses", "style"],
  _excluded4 = ["arrowRef", "context", "elementsRef", "labelsRef", "showArrow"],
  _excluded5 = ["children", "disabled", "label", "onClick"];
import { arrow, autoUpdate, flip, FloatingArrow, FloatingFocusManager, FloatingList, FloatingPortal, hide, offset, shift, size, useClick, useDismiss, useFloating, useInteractions, useListItem, useListNavigation, useMergeRefs, useRole, useTypeahead } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
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
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function useMenu() {
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
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    uncontrolledOpen = _React$useState2[0],
    setUncontrolledOpen = _React$useState2[1];

  // to track active index and typeahead
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    activeIndex = _React$useState4[0],
    setActiveIndex = _React$useState4[1];
  var arrowRef = React.useRef(null);

  // use either controlled open or uncontrolled (internal)
  var open = (_ref2 = controlledOpen != null ? controlledOpen : uncontrolledOpen) != null ? _ref2 : initialOpen;
  var setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  var data = useFloating({
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    placement: placement,
    middleware: [offset(offsetMenu), flip({
      crossAxis: placement.includes('-'),
      fallbackAxisSideDirection: 'end',
      padding: 5
    }), shift({
      padding: 5
    }), arrow({
      element: arrowRef
    }), size({
      apply: function apply(_ref3) {
        var availableWidth = _ref3.availableWidth,
          availableHeight = _ref3.availableHeight,
          elements = _ref3.elements;
        // Do things with the data, e.g.
        Object.assign(elements.floating.style, _extends({}, width && {
          minWidth: "".concat(width, "px")
        }, {
          maxWidth: "".concat(availableWidth, "px"),
          maxHeight: "".concat(availableHeight, "px")
        }));
      }
    }), hide({
      strategy: 'referenceHidden'
    })]
  });
  var context = data.context;
  var elementsRef = React.useRef([]);
  var labelsRef = React.useRef([]);
  function handleTypeaheadMatch(index) {
    if (open) {
      setActiveIndex(index);
    }
  }
  var click = useClick(context, {
    enabled: controlledOpen == null
  });
  var dismiss = useDismiss(context);
  var role = useRole(context, {
    role: 'menu'
  });
  var listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex: activeIndex,
    onNavigate: setActiveIndex,
    loop: true
  });
  var typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex: activeIndex,
    onMatch: handleTypeaheadMatch
  });
  var interactions = useInteractions([listNavigation, typeahead, click, dismiss, role]);
  return useMemo(function () {
    return _extends({
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
var DropdownContext = /*#__PURE__*/React.createContext(null);
export var useMenuContext = function useMenuContext() {
  var context = React.useContext(DropdownContext);
  if (context == null) {
    throw new Error('Menu components must be wrapped in <Menu />');
  }
  return context;
};
export function MenuRoot(_ref4) {
  var children = _ref4.children,
    _ref4$shouldCloseOnSe = _ref4.shouldCloseOnSelect,
    shouldCloseOnSelect = _ref4$shouldCloseOnSe === void 0 ? true : _ref4$shouldCloseOnSe,
    restOptions = _objectWithoutProperties(_ref4, _excluded);
  var dropdownContext = useMenu(_extends({
    shouldCloseOnSelect: shouldCloseOnSelect
  }, restOptions));
  return /*#__PURE__*/_jsx(DropdownContext.Provider, {
    value: dropdownContext,
    children: children
  });
}
export var DropdownTrigger = /*#__PURE__*/React.forwardRef(function DropdownTrigger(_ref5, propRef) {
  var children = _ref5.children,
    _ref5$asChild = _ref5.asChild,
    asChild = _ref5$asChild === void 0 ? false : _ref5$asChild,
    props = _objectWithoutProperties(_ref5, _excluded2);
  var context = useMenuContext();
  var childrenRef = children.ref;
  var ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);
  // `asChild` allows the user to pass any element as the anchor
  if (asChild && /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.cloneElement(children, context.getReferenceProps(_extends({
      ref: ref
    }, props, children.props)));
  }
  return /*#__PURE__*/_jsx("button", _extends({
    ref: ref,
    type: "button"
    // The user can style the trigger based on the state
  }, context.getReferenceProps(props), {
    children: children
  }));
});
export var List = /*#__PURE__*/React.forwardRef(function List(_ref6, propRef) {
  var arrowClasses = _ref6.arrowClasses,
    style = _ref6.style,
    props = _objectWithoutProperties(_ref6, _excluded3);
  var _useMenuContext = useMenuContext(),
    arrowRef = _useMenuContext.arrowRef,
    floatingContext = _useMenuContext.context,
    elementsRef = _useMenuContext.elementsRef,
    labelsRef = _useMenuContext.labelsRef,
    showArrow = _useMenuContext.showArrow,
    context = _objectWithoutProperties(_useMenuContext, _excluded4);
  var ref = useMergeRefs([context.refs.setFloating, propRef]);
  if (!floatingContext.open) return null;
  var floatArrowClasses = clsx(styles.list__arrow, arrowClasses);
  return /*#__PURE__*/_jsx(FloatingPortal, {
    children: /*#__PURE__*/_jsx(FloatingFocusManager, {
      context: floatingContext,
      children: /*#__PURE__*/_jsxs(MenuList, _extends({
        ref: ref,
        className: props.className,
        style: _extends({}, context.floatingStyles, style)
      }, context.getFloatingProps(props), {
        children: [showArrow && /*#__PURE__*/_jsx(FloatingArrow, {
          context: floatingContext,
          ref: arrowRef,
          className: floatArrowClasses
        }), /*#__PURE__*/_jsx(FloatingList, {
          elementsRef: elementsRef,
          labelsRef: labelsRef,
          children: props.children
        })]
      }))
    })
  });
});
export var Item = /*#__PURE__*/React.forwardRef(function Item(_ref7, propRef) {
  var children = _ref7.children,
    disabled = _ref7.disabled,
    label = _ref7.label,
    onClick = _ref7.onClick,
    props = _objectWithoutProperties(_ref7, _excluded5);
  var _useMenuContext2 = useMenuContext(),
    activeIndex = _useMenuContext2.activeIndex,
    shouldCloseOnSelect = _useMenuContext2.shouldCloseOnSelect,
    setOpen = _useMenuContext2.setOpen;
  var _useListItem = useListItem({
      label: label
    }),
    listItemRef = _useListItem.ref,
    index = _useListItem.index;
  var ref = useMergeRefs([propRef, listItemRef]);
  var isActive = activeIndex === index;
  var handleClick = useCallback(function (e) {
    if (!disabled) {
      if (onClick) {
        onClick(e);
      }
      if (shouldCloseOnSelect) {
        setOpen(false);
      }
    }
  }, [disabled]);
  return /*#__PURE__*/_jsx(MenuItem, _extends({
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
export default Dropdown;