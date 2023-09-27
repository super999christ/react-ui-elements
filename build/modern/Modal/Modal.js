import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["children"],
  _excluded2 = ["children", "asChild"],
  _excluded3 = ["context"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useClick, useDismiss, useFloating, useInteractions, useMergeRefs, useRole, useTransitionStyles } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useId } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var stylesModule = {
  "modal-overlay": "pbui-gfwMG"
};
export function useModal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$initialOpen = _ref.initialOpen,
    initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
    controlledOpen = _ref.open,
    setControlledOpen = _ref.onOpenChange;
  var _React$useState = React.useState(initialOpen),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    uncontrolledOpen = _React$useState2[0],
    setUncontrolledOpen = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    labelId = _React$useState4[0],
    setLabelId = _React$useState4[1];
  var _React$useState5 = React.useState(),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    descriptionId = _React$useState6[0],
    setDescriptionId = _React$useState6[1];
  var open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  var setOpen = setControlledOpen != null ? setControlledOpen : setUncontrolledOpen;
  var data = useFloating({
    open: open,
    onOpenChange: setOpen
  });
  var context = data.context;
  var click = useClick(context, {
    enabled: controlledOpen == null
  });
  var dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown'
  });
  var role = useRole(context);
  var interactions = useInteractions([click, dismiss, role]);
  return React.useMemo(function () {
    return _extends({
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
var ModalContext = /*#__PURE__*/React.createContext(null);
export var useModalContext = function useModalContext() {
  var context = React.useContext(ModalContext);
  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />');
  }
  return context;
};
export function ModalRoot(_ref2) {
  var children = _ref2.children,
    options = _objectWithoutProperties(_ref2, _excluded);
  var modal = useModal(options);
  return /*#__PURE__*/_jsx(ModalContext.Provider, {
    value: modal,
    children: children
  });
}
export var ModalTrigger = /*#__PURE__*/React.forwardRef(function ModalTrigger(_ref3, propRef) {
  var children = _ref3.children,
    _ref3$asChild = _ref3.asChild,
    asChild = _ref3$asChild === void 0 ? false : _ref3$asChild,
    props = _objectWithoutProperties(_ref3, _excluded2);
  var context = useModalContext();
  var childrenRef = children.ref;
  var ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.cloneElement(children, context.getReferenceProps(_extends({
      ref: ref
    }, props, children.props, {
      'data-state': context.open ? 'open' : 'closed'
    })));
  }
  return /*#__PURE__*/_jsx("button", _extends({
    type: "button",
    ref: ref
    // The user can style the trigger based on the state
    ,
    "data-state": context.open ? 'open' : 'closed'
  }, context.getReferenceProps(props), {
    children: children
  }));
});
export var ModalContent = /*#__PURE__*/React.forwardRef(function ModalContent(props, propRef) {
  var _useModalContext = useModalContext(),
    floatingContext = _useModalContext.context,
    context = _objectWithoutProperties(_useModalContext, _excluded3);
  var ref = useMergeRefs([context.refs.setFloating, propRef]);
  var _useTransitionStyles = useTransitionStyles(floatingContext, {
      initial: {
        opacity: 0
      },
      open: {
        opacity: 1
      }
    }),
    isMounted = _useTransitionStyles.isMounted;
  if (!isMounted) return null;
  var modalContentClasses = clsx('rounded-xl bg-white p-6 shadow-xl',
  // eslint-disable-next-line react/prop-types
  props.className);
  var overlayClasses = clsx(stylesModule['modal-overlay'], props.overlayClassName);
  return /*#__PURE__*/_jsx(FloatingPortal, {
    children: /*#__PURE__*/_jsx(FloatingOverlay, {
      className: overlayClasses,
      lockScroll: true,
      children: /*#__PURE__*/_jsx(FloatingFocusManager, {
        context: floatingContext,
        children: /*#__PURE__*/_jsx("div", _extends({
          ref: ref,
          "aria-labelledby": context.labelId,
          "aria-describedby": context.descriptionId
        }, context.getFloatingProps(props), {
          className: modalContentClasses,
          style: _extends({}, props.style),
          children: props.children
        }))
      })
    })
  });
});
export var ModalHeading = /*#__PURE__*/React.forwardRef(function ModalHeading(_ref4, ref) {
  var children = _ref4.children,
    props = _objectWithoutProperties(_ref4, _excluded4);
  var _useModalContext2 = useModalContext(),
    setLabelId = _useModalContext2.setLabelId;
  var id = useId();

  // Only sets `aria-labelledby` on the Modal root element
  // if this component is mounted inside it.
  React.useLayoutEffect(function () {
    setLabelId(id);
    return function () {
      return setLabelId(undefined);
    };
  }, [id, setLabelId]);
  return /*#__PURE__*/_jsx("h2", _extends({}, props, {
    ref: ref,
    id: id,
    children: children
  }));
});
export var ModalDescription = /*#__PURE__*/React.forwardRef(function ModalDescription(_ref5, ref) {
  var children = _ref5.children,
    props = _objectWithoutProperties(_ref5, _excluded5);
  var _useModalContext3 = useModalContext(),
    setDescriptionId = _useModalContext3.setDescriptionId;
  var id = useId();

  // Only sets `aria-describedby` on the Modal root element
  // if this component is mounted inside it.
  React.useLayoutEffect(function () {
    setDescriptionId(id);
    return function () {
      return setDescriptionId(undefined);
    };
  }, [id, setDescriptionId]);
  return /*#__PURE__*/_jsx("p", _extends({}, props, {
    ref: ref,
    id: id,
    children: children
  }));
});
export var ModalClose = /*#__PURE__*/React.forwardRef(function ModalClose(props, ref) {
  var _useModalContext4 = useModalContext(),
    setOpen = _useModalContext4.setOpen;
  return /*#__PURE__*/_jsx("button", _extends({
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
export default Modal;