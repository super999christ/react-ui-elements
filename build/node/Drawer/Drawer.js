"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proLightSvgIcons = require("@fortawesome/pro-light-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "onBackdropClick", "onClose", "open", "position", "title", "wrapperClassname"];
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "backdrop": "pbui-8vMUg",
  "backdrop--open": "pbui-4GNRr",
  "wrapper": "pbui-ib-ZD",
  "wrapper--position-left": "pbui-t8aLp",
  "wrapper--open": "pbui-KhWbo",
  "wrapper--open-position-left": "pbui-f3nEY",
  "header": "pbui--M4iy",
  "header--no-title": "pbui-B9FyD",
  "title": "pbui-19Vvu",
  "button": "pbui-crj9P",
  "close__icon": "pbui-sHBRD"
};
var Drawer = /*#__PURE__*/(0, _react.forwardRef)(function Drawer(props, ref) {
  var children = props.children,
    className = props.className,
    onBackdropClick = props.onBackdropClick,
    onClose = props.onClose,
    open = props.open,
    _props$position = props.position,
    position = _props$position === void 0 ? 'right' : _props$position,
    title = props.title,
    wrapperClassname = props.wrapperClassname,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var backdropClasses = (0, _clsx["default"])(styles.backdrop, className, open && styles['backdrop--open']);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, wrapperClassname, open && position === 'right' && styles['wrapper--open'], position === 'left' && [styles['wrapper--position-left'], open && styles['wrapper--open-position-left']]);
  var headerClasses = (0, _clsx["default"])(styles.header, !title && styles['header--no-title']);
  var titleClasses = (0, _clsx["default"])(styles.title);
  var buttonClasses = (0, _clsx["default"])(styles.button);
  var closeIconClasses = (0, _clsx["default"])(styles.close__icon);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    onClick: function onClick() {
      return open && onBackdropClick && onBackdropClick();
    },
    className: backdropClasses,
    ref: ref
  }, rest, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      className: wrapperClasses,
      children: [onClose && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: headerClasses,
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: titleClasses,
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          onClick: function onClick() {
            return onClose();
          },
          variant: "secondary-color",
          className: buttonClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _proLightSvgIcons.faXmark,
            className: closeIconClasses
          })
        })]
      }), children]
    })
  }));
});
var _default = exports["default"] = Drawer;