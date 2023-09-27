import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import cx from 'clsx';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "switch": "pbui-udC79",
  "switch__bg": "pbui-ulvKk",
  "switch__bg--toggled": "pbui-wO6FX",
  "switch__handler": "pbui-phRtS",
  "switch__handler--toggled": "pbui-FvAAf",
  "switch__input": "pbui-f8cfg"
};
var SWITCH_SIZES = {
  xs: {
    WIDTH: 26,
    HEIGHT: 16
  },
  sm: {
    WIDTH: 36,
    HEIGHT: 20
  },
  md: {
    WIDTH: 44,
    HEIGHT: 24
  }
};
var Switch = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$size, _props$offset;
  var size = (_props$size = props.size) != null ? _props$size : 'md';
  var width = SWITCH_SIZES[size].WIDTH;
  var height = SWITCH_SIZES[size].HEIGHT;
  var handleOffset = (_props$offset = props.offset) != null ? _props$offset : 4;
  var handleDiameter = height - handleOffset;
  var checkedPos = Math.max(width - height, width - (height + handleDiameter) / 2);
  var uncheckedPos = Math.max(0, (height - handleDiameter) / 2);
  var inputRef = useRef(null);
  var lastDragAt = useRef(0);
  var lastKeyUpAt = useRef(0);
  var startX = useRef(0);
  var dragStartTime = useRef(0);
  var memPos = useRef(0);
  var isDragging = useRef(false);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    uncontrolled = _useState2[0],
    setUncontrolled = _useState2[1];
  var isChecked = props.checked !== undefined ? props.checked : uncontrolled;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMounted = _useState4[0],
    setIsMounted = _useState4[1];
  var _useState5 = useState(isChecked ? checkedPos : uncheckedPos),
    _useState6 = _slicedToArray(_useState5, 2),
    pos = _useState6[0],
    setPos = _useState6[1];
  useEffect(function () {
    setIsMounted(true);
  }, []);
  useEffect(function () {
    var newPos = isChecked ? checkedPos : uncheckedPos;
    setPos(newPos);
  }, [isChecked]);
  useEffect(function () {
    memPos.current = pos;
  }, [pos]);
  var onChange = function onChange(event) {
    if (props.onChange) {
      props.onChange(!isChecked, event, props.id);
    }
    setUncontrolled(!uncontrolled);
  };
  var onClick = function onClick(event) {
    var _inputRef$current;
    event.preventDefault();
    (_inputRef$current = inputRef.current) == null || _inputRef$current.focus();
    onChange(event);
  };
  var onInputChange = function onInputChange(event) {
    if (Date.now() - lastDragAt.current > 50) {
      onChange(event);
      // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd
      if (Date.now() - lastKeyUpAt.current > 50) {
        if (isMounted) {
          //
        }
      }
    }
  };
  var onDragStart = function onDragStart(clientX) {
    var _inputRef$current2;
    (_inputRef$current2 = inputRef.current) == null || _inputRef$current2.focus();
    startX.current = clientX;
    dragStartTime.current = Date.now();
  };
  var onDrag = function onDrag(clientX) {
    var startPos = isChecked ? checkedPos : uncheckedPos;
    var mousePos = startPos + clientX - startX.current;
    if (!isDragging.current && clientX !== startX.current) {
      isDragging.current = true;
    }
    var newPos = Math.min(checkedPos, Math.max(uncheckedPos, mousePos));
    if (newPos !== pos) {
      setPos(newPos);
      memPos.current = newPos;
    }
  };
  var onDragStop = function onDragStop(event) {
    var checked = props.checked;
    var halfwayCheckpoint = (checkedPos + uncheckedPos) / 2;
    var prevPos = checked ? checkedPos : uncheckedPos;
    setPos(prevPos);
    var timeSinceStart = Date.now() - dragStartTime.current;
    var isSimulatedClick = !isDragging || timeSinceStart < 250;
    var isDraggedHalfway = checked && memPos.current <= halfwayCheckpoint || !checked && memPos.current >= halfwayCheckpoint;
    if (isSimulatedClick || isDraggedHalfway) {
      onChange(event);
    }
    if (isMounted) {
      isDragging.current = false;
      // setHasOutline(false);
    }

    lastDragAt.current = Date.now();
  };
  var onMouseMove = function onMouseMove(event) {
    event.preventDefault();
    onDrag(event.clientX);
  };
  var onMouseUp = function onMouseUp(event) {
    onDragStop(event);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  var onMouseDown = function onMouseDown(event) {
    event.preventDefault();
    onDragStart(event.clientX);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };
  var bgClasses = cx(styles.switch__bg, isChecked && styles['switch__bg--toggled']);
  var handlerClasses = cx(styles.switch__handler, isChecked && styles['switch__handler--toggled']);
  var bgStyle = {
    borderRadius: height,
    width: width,
    height: height
  };
  var handleStyle = {
    height: handleDiameter,
    width: handleDiameter,
    display: 'inline-block',
    cursor: props.disabled ? 'default' : 'pointer',
    position: 'absolute',
    transform: "translateX(".concat(pos, "px)"),
    top: Math.max(0, (height - handleDiameter) / 2),
    outline: 0,
    border: 0,
    WebkitTransition: isDragging ? null : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
    MozTransition: isDragging ? null : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s',
    transition: isDragging ? null : 'background-color 0.25s, transform 0.25s, box-shadow 0.15s'
  };
  return /*#__PURE__*/_jsxs("div", {
    className: styles["switch"],
    ref: ref,
    children: [/*#__PURE__*/_jsx("div", {
      className: bgClasses,
      "aria-hidden": "true",
      onClick: props.disabled ? undefined : onClick,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      style: bgStyle
    }), /*#__PURE__*/_jsx("div", {
      className: handlerClasses,
      "aria-hidden": "true",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      onMouseDown: props.disabled ? undefined : onMouseDown,
      style: handleStyle
    }), /*#__PURE__*/_jsx("input", {
      type: "checkbox",
      role: "switch",
      "aria-checked": isChecked,
      className: styles.switch__input,
      onChange: onInputChange,
      ref: inputRef
    })]
  });
});
Switch.displayName = 'Switch';
export default Switch;