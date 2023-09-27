"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _div;
var _excluded = ["Avatar", "BackButton", "background", "Breadcrumb", "children", "className", "MobileAvatar", "supportingText", "text", "variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "wrapper": "pbui-aS0lI",
  "mobile__wrapper": "pbui-npNgj",
  "banner": "pbui-0qQL4",
  "mobile__banner": "pbui-XhvUh",
  "outer__container": "pbui-cQPEw",
  "outer__container--variant-banner-simple-centered": "pbui-hjQUX",
  "outer__container--variant-banner-avatar-centered": "pbui-rR4wP",
  "avatar": "pbui-hEGCn",
  "mobile__avatar": "pbui-YULdw",
  "mobile__avatar-centered": "pbui-NkA9g",
  "avatar--variant-banner-avatar-centered": "pbui-N9be8",
  "container": "pbui-Ay-lI",
  "mobile__container": "pbui-umTS5",
  "mobile__container--variant-with-banner": "pbui-pRBBc",
  "mobile__container--centered": "pbui-rLWZT",
  "back__button__container": "pbui-y7Dqk",
  "back__button__container--variant-banner-avatar": "pbui-qaVXw",
  "container--variant-simple-or-avatar": "pbui-eQFfC",
  "container--variant-banner-simple-or-banner-avatar": "pbui-42Ado",
  "container--variant-banner-simple-centered": "pbui-LLHOR",
  "container--variant-banner-avatar-centered": "pbui-AeQtn",
  "content": "pbui-IAWKp",
  "mobile__content": "pbui-11W6E",
  "mobile__content-padding-top": "pbui-PKW-4",
  "mobile__content-centered": "pbui-CtHUc",
  "content--variant-banner-simple-centered-or-banner-avatar-centered": "pbui-eIKhP",
  "content--no-breadcrum--variant-banner-avatar-centered": "pbui-F66Bu",
  "content--no-breadcrum--variant-banner-avatar": "pbui-Oomxy",
  "content--variant-banner-simple-centered": "pbui-PBaAD",
  "avatar__text__container": "pbui-BY2wA",
  "mobile__avatar__text__container": "pbui-4Lhp1",
  "mobile__avatar__text__container-centered": "pbui-FAyTm",
  "avatar__text__container--variant-banner-avatar-centered": "pbui-3qZry",
  "text__container": "pbui-TnqGE",
  "mobile__text__container": "pbui-KJBkf",
  "mobile__text__container-centered": "pbui-rC6s3",
  "text__container--variant-banner-simple-centered-banner-avatar-centered": "pbui--9pCH",
  "text": "pbui-zo42w",
  "mobile__text": "pbui-as2AR",
  "supporting__text": "pbui-PI48H"
};
var PageHeader = /*#__PURE__*/(0, _react.forwardRef)(function PageHeader(props, ref) {
  var Avatar = props.Avatar,
    BackButton = props.BackButton,
    background = props.background,
    Breadcrumb = props.Breadcrumb,
    children = props.children,
    className = props.className,
    MobileAvatar = props.MobileAvatar,
    supportingText = props.supportingText,
    _props$text = props.text,
    text = _props$text === void 0 ? 'Text' : _props$text,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'simple' : _props$variant,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var bannerClasses = (0, _clsx["default"])(styles.banner);
  var outerContainerClasses = (0, _clsx["default"])(styles.outer__container, {
    'banner-avatar-centered': styles['outer__container--variant-banner-avatar-centered'],
    'banner-simple-centered': styles['outer__container--variant-banner-simple-centered']
  }[variant]);
  var avatarClasses = (0, _clsx["default"])(styles.avatar, variant === 'banner-avatar-centered' && styles['avatar--variant-banner-avatar-centered']);
  var containerClasses = (0, _clsx["default"])(styles.container, (variant === 'simple' || variant === 'avatar') && styles['container--variant-simple-or-avatar'], (variant === 'banner-simple' || variant === 'banner-avatar') && styles['container--variant-banner-simple-or-banner-avatar'], {
    'banner-simple-centered': styles['container--variant-banner-simple-centered'],
    'banner-avatar-centered': styles['container--variant-banner-avatar-centered']
  }[variant]);
  var contentClasses = (0, _clsx["default"])(styles.content, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['content--variant-banner-simple-centered-or-banner-avatar-centered'], Breadcrumb === undefined && {
    'banner-avatar-centered': styles['content--no-breadcrum--variant-banner-avatar-centered'],
    'banner-avatar': styles['content--no-breadcrum--variant-banner-avatar']
  }[variant], variant === 'banner-simple-centered' && styles['content--variant-banner-simple-centered']);
  var avatarTextContainerClasses = (0, _clsx["default"])(styles.avatar__text__container, variant === 'banner-avatar-centered' && styles['avatar__text__container--variant-banner-avatar-centered']);
  var textContainerClasses = (0, _clsx["default"])(styles.text__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['text__container--variant-banner-simple-centered-banner-avatar-centered']);
  var textClasses = (0, _clsx["default"])(styles.text);
  var supportingTextClasses = (0, _clsx["default"])(styles.supporting__text);
  var mobileWrapperClasses = (0, _clsx["default"])(styles.mobile__wrapper);
  var mobileBannerClasses = (0, _clsx["default"])(styles.mobile__banner);
  var mobileAvatarClasses = (0, _clsx["default"])(styles.mobile__avatar, variant === 'banner-avatar-centered' && styles['mobile__avatar-centered']);
  var mobileContainerClasses = (0, _clsx["default"])(styles.mobile__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__container--centered'], variant !== 'simple' && variant !== 'avatar' && styles['mobile__container--variant-with-banner']);
  var backButtonContainerClasses = (0, _clsx["default"])(styles.back__button__container, variant === 'banner-avatar' && styles['back__button__container--variant-banner-avatar']);
  var mobileContentClasses = (0, _clsx["default"])(styles.mobile__content, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__content-centered'], BackButton === undefined && (variant === 'banner-avatar' || variant === 'banner-avatar-centered') && styles['mobile__content-padding-top']);
  var mobileAvatarTextContainerClasses = (0, _clsx["default"])(styles.mobile__avatar__text__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__avatar__text__container-centered']);
  var mobileTextContainerClasses = (0, _clsx["default"])(styles.mobile__text__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['text__container--variant-banner-simple-centered-banner-avatar-centered'], (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__text__container-centered']);
  var mobileTextClasses = (0, _clsx["default"])(styles.mobile__text);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: className,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: wrapperClasses,
      children: [variant !== 'simple' && variant !== 'avatar' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: bannerClasses,
        style: {
          background: "".concat(background)
        },
        children: variant === 'banner-avatar-centered' && Avatar && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: avatarClasses,
          children: [Avatar(), " "]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: outerContainerClasses,
        children: [variant === 'banner-avatar' && Avatar && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: avatarClasses,
          children: [Avatar(), " "]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: containerClasses,
          children: [Breadcrumb && Breadcrumb(), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: contentClasses,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: avatarTextContainerClasses,
              children: [variant === 'avatar' && Avatar && Avatar(), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: textContainerClasses,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: textClasses,
                  children: text
                }), supportingText && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: supportingTextClasses,
                  children: supportingText
                })]
              })]
            }), children, _div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}))]
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: mobileWrapperClasses,
      children: [variant !== 'simple' && variant !== 'avatar' && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: mobileBannerClasses,
        style: {
          background: "".concat(background)
        },
        children: (variant === 'banner-avatar' || variant === 'banner-avatar-centered') && MobileAvatar && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: mobileAvatarClasses,
          children: [MobileAvatar(), " "]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: mobileContainerClasses,
        children: [BackButton && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: backButtonContainerClasses,
          children: BackButton()
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: mobileContentClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: mobileAvatarTextContainerClasses,
            children: [variant === 'avatar' && MobileAvatar && MobileAvatar(), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: mobileTextContainerClasses,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: mobileTextClasses,
                children: text
              }), supportingText && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: supportingTextClasses,
                children: supportingText
              })]
            })]
          })
        }), children]
      })]
    })]
  }));
});
var _default = exports["default"] = PageHeader;