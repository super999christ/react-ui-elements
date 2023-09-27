"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proRegularSvgIcons = require("@fortawesome/pro-regular-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["Avatar", "children", "className", "CustomIcon", "imageAlt", "imageLink", "onClose", "ProgressIndicator", "SupportingText", "Text", "time", "type"];
var _svg, _svg2, _svg3, _svg4, _svg5, _svg6, _AvatarOriginal, _PrimaryIcon, _GrayIcon, _ProgressIndicatorIco, _ErrorIcon, _WarningIcon, _SuccesIcon, _PrimaryIcon2, _GrayIcon2, _ProgressIndicatorIco2, _ErrorIcon2, _WarningIcon2, _SuccesIcon2;
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
var styles = {
  "container": "pbui-A7p0O",
  "wrapper": "pbui-RvnCL",
  "mobile__wrapper": "pbui-tC-7v",
  "mobile__icons__container": "pbui-jO5hq",
  "mobile__icons__container--x-only": "pbui-ZG9Vp",
  "content__container": "pbui-9wzMK",
  "mobile__content__container": "pbui-kjG-A",
  "image__container": "pbui-tXPWC",
  "image__container__two": "pbui-iKrTL",
  "icon__container": "pbui-zZ7P2",
  "icon__container--type-error-icon": "pbui-BpjDn",
  "icon__container--type-warning-icon": "pbui-B-Mot",
  "icon__container--type-success-icon": "pbui-vEoh6",
  "icon__container--type-gray-icon": "pbui-6wQD-",
  "text__time__icon__container": "pbui-54GXP",
  "text__container": "pbui-KETSd",
  "text__time__container": "pbui-uBKJj",
  "text": "pbui-6iSP9",
  "time": "pbui-k619k",
  "supporting__text": "pbui-yS0gd",
  "close__icon__container": "pbui-uWbJb",
  "close__icon__container--type-no-icon-or-image": "pbui-oG8P2",
  "close__icon": "pbui-PVVeT"
};
var PrimaryIcon = function PrimaryIcon() {
  return _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
      clipPath: "url(#clip0_6733_584)",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M3.75001 18.3333V14.1666M3.75001 5.83329V1.66663M1.66667 3.74996H5.83334M1.66667 16.25H5.83334M10.8333 2.49996L9.38819 6.25734C9.15318 6.86837 9.03568 7.17388 8.85295 7.43086C8.691 7.65862 8.492 7.85762 8.26424 8.01957C8.00726 8.2023 7.70175 8.3198 7.09072 8.55481L3.33334 9.99996L7.09072 11.4451C7.70175 11.6801 8.00726 11.7976 8.26424 11.9804C8.492 12.1423 8.691 12.3413 8.85295 12.5691C9.03568 12.826 9.15318 13.1315 9.38819 13.7426L10.8333 17.5L12.2785 13.7426C12.5135 13.1315 12.631 12.826 12.8137 12.5691C12.9757 12.3413 13.1747 12.1423 13.4024 11.9804C13.6594 11.7976 13.9649 11.6801 14.576 11.4451L18.3333 9.99996L14.576 8.55481C13.9649 8.3198 13.6594 8.2023 13.4024 8.01957C13.1747 7.85762 12.9757 7.65862 12.8137 7.43086C12.631 7.17388 12.5135 6.86837 12.2785 6.25734L10.8333 2.49996Z",
        stroke: "#254EDB",
        strokeWidth: "1.66667",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("clipPath", {
        id: "clip0_6733_584",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          width: "20",
          height: "20",
          fill: "white"
        })
      })
    })]
  }));
};
var GrayIcon = function GrayIcon() {
  return _svg2 || (_svg2 = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
      clipPath: "url(#clip0_6733_830)",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M10 7.50003L3.38656 11.7988C2.81335 12.1714 2.52675 12.3577 2.42748 12.5939C2.34074 12.8004 2.34074 13.033 2.42748 13.2395M10 7.50003L16.6135 11.7988C17.1867 12.1714 17.4733 12.3577 17.5725 12.5939C17.6593 12.8004 17.6593 13.033 17.5725 13.2395M10 7.50003V2.08337M10 12.5L3.38656 8.20129C2.81335 7.82871 2.52675 7.64241 2.42748 7.40617C2.34074 7.19971 2.34074 6.96702 2.42748 6.76056M10 12.5L16.6135 8.20129C17.1867 7.82871 17.4733 7.64241 17.5725 7.40617C17.6593 7.19971 17.6593 6.96702 17.5725 6.76056M10 12.5V17.9167M17.7267 13.311L10.7267 17.861C10.4636 18.032 10.3321 18.1175 10.1904 18.1507C10.0652 18.1801 9.93483 18.1801 9.80958 18.1507C9.66788 18.1175 9.53637 18.032 9.27335 17.861L2.27335 13.311C2.05168 13.167 1.94085 13.0949 1.86054 12.9988C1.78946 12.9137 1.73606 12.8154 1.70348 12.7094C1.66667 12.5897 1.66667 12.4575 1.66667 12.1931V7.80695C1.66667 7.54256 1.66667 7.41037 1.70348 7.29067C1.73606 7.18471 1.78946 7.08632 1.86054 7.00125C1.94085 6.90515 2.05168 6.83311 2.27335 6.68902L9.27335 2.13902C9.53637 1.96806 9.66788 1.88258 9.80958 1.84932C9.93483 1.81992 10.0652 1.81992 10.1904 1.84932C10.3321 1.88258 10.4636 1.96806 10.7267 2.13902L17.7267 6.68902C17.9483 6.83311 18.0592 6.90515 18.1395 7.00125C18.2106 7.08632 18.2639 7.18471 18.2965 7.29067C18.3333 7.41037 18.3333 7.54256 18.3333 7.80695V12.1931C18.3333 12.4575 18.3333 12.5897 18.2965 12.7094C18.2639 12.8154 18.2106 12.9137 18.1395 12.9988C18.0592 13.0949 17.9483 13.167 17.7267 13.311Z",
        stroke: "#344054",
        strokeWidth: "1.66667",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("clipPath", {
        id: "clip0_6733_830",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          width: "20",
          height: "20",
          fill: "white"
        })
      })
    })]
  }));
};
var ProgressIndicatorIcon = function ProgressIndicatorIcon() {
  return _svg3 || (_svg3 = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M6.66667 13.3333L10 10M10 10L13.3333 13.3333M10 10V17.5M16.6667 13.9524C17.6846 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3976 5.73833 13.3051 5.58145C12.2184 3.73736 10.212 2.5 7.91667 2.5C4.46489 2.5 1.66667 5.29822 1.66667 8.75C1.66667 10.4718 2.36288 12.0309 3.48913 13.1613",
      stroke: "#254EDB",
      strokeWidth: "1.66667",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};
var ErrorIcon = function ErrorIcon() {
  return _svg4 || (_svg4 = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M10.8333 5.83333L9.90368 3.9741C9.63613 3.439 9.50235 3.17144 9.30277 2.97597C9.12628 2.80311 8.91356 2.67164 8.68002 2.59109C8.41593 2.5 8.1168 2.5 7.51854 2.5H4.33329C3.39987 2.5 2.93316 2.5 2.57664 2.68166C2.26304 2.84144 2.00807 3.09641 1.84828 3.41002C1.66663 3.76654 1.66663 4.23325 1.66663 5.16667V5.83333M1.66663 5.83333H14.3333C15.7334 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8211 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8211 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7334 17.5 14.3333 17.5H5.66663C4.26649 17.5 3.56643 17.5 3.03165 17.2275C2.56124 16.9878 2.17879 16.6054 1.93911 16.135C1.66663 15.6002 1.66663 14.9001 1.66663 13.5V5.83333Z",
      stroke: "#D92D20",
      strokeWidth: "1.66667",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};
var WarningIcon = function WarningIcon() {
  return _svg5 || (_svg5 = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M10.8333 5.83333L9.90368 3.9741C9.63613 3.439 9.50235 3.17144 9.30277 2.97597C9.12628 2.80311 8.91356 2.67164 8.68002 2.59109C8.41593 2.5 8.1168 2.5 7.51854 2.5H4.33329C3.39987 2.5 2.93316 2.5 2.57664 2.68166C2.26304 2.84144 2.00807 3.09641 1.84828 3.41002C1.66663 3.76654 1.66663 4.23325 1.66663 5.16667V5.83333M1.66663 5.83333H14.3333C15.7334 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8211 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8211 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7334 17.5 14.3333 17.5H5.66663C4.26649 17.5 3.56643 17.5 3.03165 17.2275C2.56124 16.9878 2.17879 16.6054 1.93911 16.135C1.66663 15.6002 1.66663 14.9001 1.66663 13.5V5.83333Z",
      stroke: "#DC6803",
      strokeWidth: "1.66667",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }));
};
var SuccesIcon = function SuccesIcon() {
  return _svg6 || (_svg6 = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
      clipPath: "url(#clip0_6733_846)",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M7.49996 9.99996L9.16663 11.6666L12.9166 7.91663M6.11143 3.18221C6.78129 3.12875 7.41722 2.86534 7.92868 2.42948C9.12223 1.41234 10.8777 1.41234 12.0712 2.42948C12.5827 2.86534 13.2186 3.12875 13.8885 3.18221C15.4517 3.30695 16.693 4.54825 16.8177 6.11143C16.8712 6.78129 17.1346 7.41722 17.5704 7.92868C18.5876 9.12223 18.5876 10.8777 17.5704 12.0712C17.1346 12.5827 16.8712 13.2186 16.8177 13.8885C16.693 15.4517 15.4517 16.693 13.8885 16.8177C13.2186 16.8712 12.5827 17.1346 12.0712 17.5704C10.8777 18.5876 9.12223 18.5876 7.92868 17.5704C7.41722 17.1346 6.78129 16.8712 6.11143 16.8177C4.54825 16.693 3.30695 15.4517 3.18221 13.8885C3.12875 13.2186 2.86534 12.5827 2.42948 12.0712C1.41234 10.8777 1.41234 9.12223 2.42948 7.92868C2.86534 7.41722 3.12875 6.78129 3.18221 6.11143C3.30695 4.54825 4.54825 3.30695 6.11143 3.18221Z",
        stroke: "#039855",
        strokeWidth: "1.66667",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("clipPath", {
        id: "clip0_6733_846",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          width: "20",
          height: "20",
          fill: "white"
        })
      })
    })]
  }));
};
var Notification = /*#__PURE__*/_react["default"].forwardRef(function Notification(props, ref) {
  var _props$Avatar = props.Avatar,
    Avatar = _props$Avatar === void 0 ? function () {
      return _AvatarOriginal || (_AvatarOriginal = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar["default"], {
        size: "md"
      }));
    } : _props$Avatar,
    children = props.children,
    className = props.className,
    CustomIcon = props.CustomIcon,
    imageAlt = props.imageAlt,
    imageLink = props.imageLink,
    onClose = props.onClose,
    ProgressIndicator = props.ProgressIndicator,
    SupportingText = props.SupportingText,
    _props$Text = props.Text,
    Text = _props$Text === void 0 ? 'Text' : _props$Text,
    time = props.time,
    _props$type = props.type,
    type = _props$type === void 0 ? 'no-icon' : _props$type,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var containerClasses = (0, _clsx["default"])(styles.container, className);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var mobileWrapperClasses = (0, _clsx["default"])(styles.mobile__wrapper);
  var mobileIconsContainerClasses = (0, _clsx["default"])(styles.mobile__icons__container, (type === 'no-icon' || type === 'image') && styles['mobile__icons__container--x-only']);
  var contentContainerClasses = (0, _clsx["default"])(styles.content__container);
  var mobileContentContainerClasses = (0, _clsx["default"])(styles.mobile__content__container);
  var imageContainerClasses = (0, _clsx["default"])(styles.image__container);
  var imageContainerTwoClasses = (0, _clsx["default"])(styles.image__container__two);
  var iconContainerClasses = (0, _clsx["default"])(styles.icon__container, {
    'gray-icon': styles['icon__container--type-gray-icon'],
    'error-icon': styles['icon__container--type-error-icon'],
    'warning-icon': styles['icon__container--type-warning-icon'],
    'success-icon': styles['icon__container--type-success-icon']
  }[type]);
  var textTimeIconContainerClasses = (0, _clsx["default"])(styles.text__time__icon__container);
  var textContainerClasses = (0, _clsx["default"])(styles.text__container);
  var textTimeContainerClasses = (0, _clsx["default"])(styles.text__time__container);
  var textClasses = (0, _clsx["default"])(styles.text);
  var timeClasses = (0, _clsx["default"])(styles.time);
  var supportingTextClasses = (0, _clsx["default"])(styles.supporting__text);
  var closeIconContainerClasses = (0, _clsx["default"])(styles.close__icon__container, (type === 'no-icon' || type === 'image') && styles['close__icon__container--type-no-icon-or-image']);
  var closeIconContainerClassesNoIconOrImage = (0, _clsx["default"])(styles.close__icon__container);
  var closeIconClasses = (0, _clsx["default"])(styles.close__icon);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: containerClasses,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: mobileWrapperClasses,
      children: [type !== 'no-icon' && type !== 'image' && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: mobileIconsContainerClasses,
        children: [type === 'avatar' && Avatar && Avatar(), ['primary-icon', 'gray-icon', 'progress-indicator', 'error-icon', 'warning-icon', 'success-icon'].includes(type) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: iconContainerClasses,
          children: CustomIcon ? CustomIcon() : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [type === 'primary-icon' && (_PrimaryIcon || (_PrimaryIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(PrimaryIcon, {}))), type === 'gray-icon' && (_GrayIcon || (_GrayIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(GrayIcon, {}))), type === 'progress-indicator' && (_ProgressIndicatorIco || (_ProgressIndicatorIco = /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIndicatorIcon, {}))), type === 'error-icon' && (_ErrorIcon || (_ErrorIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorIcon, {}))), type === 'warning-icon' && (_WarningIcon || (_WarningIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(WarningIcon, {}))), type === 'success-icon' && (_SuccesIcon || (_SuccesIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(SuccesIcon, {})))]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: closeIconContainerClasses,
          onClick: function onClick() {
            return onClose && onClose();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            className: closeIconClasses,
            icon: _proRegularSvgIcons.faXmark,
            width: 20,
            height: 20
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: mobileContentContainerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: textContainerClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: textTimeIconContainerClasses,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: textTimeContainerClasses,
              children: [typeof Text === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
                className: textClasses,
                children: Text
              }) : Text(), time && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: timeClasses,
                children: time
              })]
            }), (type === 'no-icon' || type === 'image') && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: closeIconContainerClassesNoIconOrImage,
              onClick: function onClick() {
                return onClose && onClose();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
                className: closeIconClasses,
                icon: _proRegularSvgIcons.faXmark,
                width: 20,
                height: 20
              })
            })]
          }), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: supportingTextClasses,
            children: SupportingText
          }) : SupportingText())]
        }), type === 'image' && imageLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: imageContainerTwoClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: imageLink,
            alt: imageAlt,
            style: {
              width: '100%'
            }
          })
        }), type === 'progress-indicator' && ProgressIndicator && ProgressIndicator(), children && children]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: wrapperClasses,
      children: [type !== 'no-icon' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [type === 'image' && imageLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: imageContainerClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: imageLink,
            alt: imageAlt
          })
        }), type === 'avatar' && Avatar && Avatar(), ['primary-icon', 'gray-icon', 'progress-indicator', 'error-icon', 'warning-icon', 'success-icon'].includes(type) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: iconContainerClasses,
          children: CustomIcon ? CustomIcon() : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [type === 'primary-icon' && (_PrimaryIcon2 || (_PrimaryIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(PrimaryIcon, {}))), type === 'gray-icon' && (_GrayIcon2 || (_GrayIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(GrayIcon, {}))), type === 'progress-indicator' && (_ProgressIndicatorIco2 || (_ProgressIndicatorIco2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressIndicatorIcon, {}))), type === 'error-icon' && (_ErrorIcon2 || (_ErrorIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorIcon, {}))), type === 'warning-icon' && (_WarningIcon2 || (_WarningIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(WarningIcon, {}))), type === 'success-icon' && (_SuccesIcon2 || (_SuccesIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(SuccesIcon, {})))]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: contentContainerClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: textContainerClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: textTimeContainerClasses,
            children: [typeof Text === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              className: textClasses,
              children: Text
            }) : Text(), time && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: timeClasses,
              children: time
            })]
          }), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: supportingTextClasses,
            children: SupportingText
          }) : SupportingText())]
        }), type === 'progress-indicator' && ProgressIndicator && ProgressIndicator(), children && children]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: closeIconContainerClasses,
        onClick: function onClick() {
          return onClose && onClose();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
          className: closeIconClasses,
          icon: _proRegularSvgIcons.faXmark,
          width: 20,
          height: 20
        })
      })]
    })]
  }));
});
var _default = exports["default"] = Notification;