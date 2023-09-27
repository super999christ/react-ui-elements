"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var Switch = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _props$size, _props$offset;
  var size = (_props$size = props.size) != null ? _props$size : 'md';
  var width = SWITCH_SIZES[size].WIDTH;
  var height = SWITCH_SIZES[size].HEIGHT;
  var handleOffset = (_props$offset = props.offset) != null ? _props$offset : 4;
  var handleDiameter = height - handleOffset;
  var checkedPos = Math.max(width - height, width - (height + handleDiameter) / 2);
  var uncheckedPos = Math.max(0, (height - handleDiameter) / 2);
  var inputRef = (0, _react.useRef)(null);
  var lastDragAt = (0, _react.useRef)(0);
  var lastKeyUpAt = (0, _react.useRef)(0);
  var startX = (0, _react.useRef)(0);
  var dragStartTime = (0, _react.useRef)(0);
  var memPos = (0, _react.useRef)(0);
  var isDragging = (0, _react.useRef)(false);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    uncontrolled = _useState2[0],
    setUncontrolled = _useState2[1];
  var isChecked = props.checked !== undefined ? props.checked : uncontrolled;
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isMounted = _useState4[0],
    setIsMounted = _useState4[1];
  var _useState5 = (0, _react.useState)(isChecked ? checkedPos : uncheckedPos),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    pos = _useState6[0],
    setPos = _useState6[1];
  (0, _react.useEffect)(function () {
    setIsMounted(true);
  }, []);
  (0, _react.useEffect)(function () {
    var newPos = isChecked ? checkedPos : uncheckedPos;
    setPos(newPos);
  }, [isChecked]);
  (0, _react.useEffect)(function () {
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
  var bgClasses = (0, _clsx["default"])(styles.switch__bg, isChecked && styles['switch__bg--toggled']);
  var handlerClasses = (0, _clsx["default"])(styles.switch__handler, isChecked && styles['switch__handler--toggled']);
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: styles["switch"],
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: bgClasses,
      "aria-hidden": "true",
      onClick: props.disabled ? undefined : onClick,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      style: bgStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: handlerClasses,
      "aria-hidden": "true",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      onMouseDown: props.disabled ? undefined : onMouseDown,
      style: handleStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
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
var _default = exports["default"] = Switch;