"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proLightSvgIcons = require("@fortawesome/pro-light-svg-icons");
var _proRegularSvgIcons = require("@fortawesome/pro-regular-svg-icons");
var _proSolidSvgIcons = require("@fortawesome/pro-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "FeaturedIcon", "SupportingText", "Text", "type", "onClose"];
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
var styles = {
  "wrapper": "pbui-GNmfO",
  "mobile__wrapper": "pbui-HXmCg",
  "mobile__icons__container": "pbui-zk8XN",
  "wrapper--type-primary": "pbui-ZxS85",
  "wrapper--type-error": "pbui-8xhwA",
  "wrapper--type-warning": "pbui-lGXsI",
  "wrapper--type-success": "pbui--saXb",
  "info__icon": "pbui-P-zUF",
  "info__icon--type-primary": "pbui-p23LN",
  "info__icon--type-error": "pbui-NRJ4-",
  "info__icon--type-warning": "pbui-1OrcQ",
  "info__icon--type-success": "pbui-H-L2t",
  "content__container": "pbui-9PxrE",
  "mobile__content__container": "pbui--70LO",
  "text__container": "pbui-Tlhrd",
  "text": "pbui-g3jkq",
  "text--type-primary": "pbui-5Zv2a",
  "text--type-error": "pbui-nKGJ1",
  "text--type-warning": "pbui-BthoQ",
  "text--type-success": "pbui-mrD4b",
  "supporting__text": "pbui-JgCl9",
  "supporting__text--type-primary": "pbui-dwfTQ",
  "supporting__text--type-error": "pbui-yfCzt",
  "supporting__text--type-warning": "pbui-oH-38",
  "supporting__text--type-success": "pbui-7ZRf9",
  "close__icon": "pbui-ClbtU",
  "close__icon--type-primary": "pbui-76sGc",
  "close__icon--type-error": "pbui-wsHS-",
  "close__icon--type-warning": "pbui-EhP4q",
  "close__icon--type-success": "pbui-Frx1m",
  "icon__container": "pbui-LjW1J",
  "icon__container--type-default": "pbui-5zIYE"
};
var Alert = /*#__PURE__*/_react["default"].forwardRef(function Alert(props, ref) {
  var children = props.children,
    FeaturedIcon = props.FeaturedIcon,
    SupportingText = props.SupportingText,
    _props$Text = props.Text,
    Text = _props$Text === void 0 ? 'Text' : _props$Text,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    onClose = props.onClose,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper, {
    'primary': styles['wrapper--type-primary'],
    'error': styles['wrapper--type-error'],
    'warning': styles['wrapper--type-warning'],
    'success': styles['wrapper--type-success']
  }[type]);
  var mobileWrapperClasses = (0, _clsx["default"])(styles.mobile__wrapper, {
    'primary': styles['wrapper--type-primary'],
    'error': styles['wrapper--type-error'],
    'warning': styles['wrapper--type-warning'],
    'success': styles['wrapper--type-success']
  }[type]);
  var infoIconClasses = (0, _clsx["default"])(styles.info__icon, {
    'primary': styles['info__icon--type-primary'],
    'error': styles['info__icon--type-error'],
    'warning': styles['info__icon--type-warning'],
    'success': styles['info__icon--type-success']
  }[type]);
  var textClasses = (0, _clsx["default"])(styles.text, {
    'primary': styles['text--type-primary'],
    'error': styles['text--type-error'],
    'warning': styles['text--type-warning'],
    'success': styles['text--type-success']
  }[type]);
  var supportingTextClasses = (0, _clsx["default"])(styles.supporting__text, {
    'primary': styles['supporting__text--type-primary'],
    'error': styles['supporting__text--type-error'],
    'warning': styles['supporting__text--type-warning'],
    'success': styles['supporting__text--type-success']
  }[type]);
  var closeIconClasses = (0, _clsx["default"])(styles.close__icon, {
    'primary': styles['close__icon--type-primary'],
    'error': styles['close__icon--type-error'],
    'warning': styles['close__icon--type-warning'],
    'success': styles['close__icon--type-success']
  }[type]);
  var mobileIconsContainerClasses = (0, _clsx["default"])(styles.mobile__icons__container);
  var contentContainerClasses = (0, _clsx["default"])(styles.content__container);
  var mobileContentContainerClasses = (0, _clsx["default"])(styles.mobile__content__container);
  var textContainerClasses = (0, _clsx["default"])(styles.text__container);
  var infoIconContainerClasses = (0, _clsx["default"])(styles.icon__container, type === 'default' && styles['icon__container--type-default']);
  var iconContainerClasses = (0, _clsx["default"])(styles.icon__container);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: mobileWrapperClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: mobileIconsContainerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: infoIconContainerClasses,
          children: FeaturedIcon ? FeaturedIcon() : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            className: infoIconClasses,
            icon: type === 'success' ? _proLightSvgIcons.faCircleCheck : type === 'warning' ? _proRegularSvgIcons.faTriangleExclamation : _proRegularSvgIcons.faInfoCircle,
            width: 20,
            height: 20
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: iconContainerClasses,
          onClick: function onClick() {
            return onClose && onClose();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            className: closeIconClasses,
            icon: _proSolidSvgIcons.faXmark,
            width: 20,
            height: 20
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: mobileContentContainerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: textContainerClasses,
          children: [typeof Text === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: textClasses,
            children: Text
          }) : Text(), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: supportingTextClasses,
            children: SupportingText
          }) : SupportingText())]
        }), children]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: wrapperClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: infoIconContainerClasses,
        children: FeaturedIcon ? FeaturedIcon() : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: infoIconClasses,
          icon: type === 'success' ? _proLightSvgIcons.faCircleCheck : type === 'warning' ? _proRegularSvgIcons.faTriangleExclamation : _proRegularSvgIcons.faInfoCircle,
          width: 20,
          height: 20
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: contentContainerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: textContainerClasses,
          children: [typeof Text === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
            className: textClasses,
            children: Text
          }) : Text(), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: supportingTextClasses,
            children: SupportingText
          }) : SupportingText())]
        }), children]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: iconContainerClasses,
        onClick: function onClick() {
          return onClose && onClose();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: closeIconClasses,
          icon: _proSolidSvgIcons.faXmark,
          width: 20,
          height: 20
        })
      })]
    })]
  }));
});
var _default = exports["default"] = Alert;