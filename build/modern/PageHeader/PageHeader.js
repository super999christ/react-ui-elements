import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _div;
var _excluded = ["Avatar", "BackButton", "background", "Breadcrumb", "children", "className", "MobileAvatar", "supportingText", "text", "variant"];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
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
var PageHeader = /*#__PURE__*/forwardRef(function PageHeader(props, ref) {
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
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper);
  var bannerClasses = clsx(styles.banner);
  var outerContainerClasses = clsx(styles.outer__container, {
    'banner-avatar-centered': styles['outer__container--variant-banner-avatar-centered'],
    'banner-simple-centered': styles['outer__container--variant-banner-simple-centered']
  }[variant]);
  var avatarClasses = clsx(styles.avatar, variant === 'banner-avatar-centered' && styles['avatar--variant-banner-avatar-centered']);
  var containerClasses = clsx(styles.container, (variant === 'simple' || variant === 'avatar') && styles['container--variant-simple-or-avatar'], (variant === 'banner-simple' || variant === 'banner-avatar') && styles['container--variant-banner-simple-or-banner-avatar'], {
    'banner-simple-centered': styles['container--variant-banner-simple-centered'],
    'banner-avatar-centered': styles['container--variant-banner-avatar-centered']
  }[variant]);
  var contentClasses = clsx(styles.content, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['content--variant-banner-simple-centered-or-banner-avatar-centered'], Breadcrumb === undefined && {
    'banner-avatar-centered': styles['content--no-breadcrum--variant-banner-avatar-centered'],
    'banner-avatar': styles['content--no-breadcrum--variant-banner-avatar']
  }[variant], variant === 'banner-simple-centered' && styles['content--variant-banner-simple-centered']);
  var avatarTextContainerClasses = clsx(styles.avatar__text__container, variant === 'banner-avatar-centered' && styles['avatar__text__container--variant-banner-avatar-centered']);
  var textContainerClasses = clsx(styles.text__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['text__container--variant-banner-simple-centered-banner-avatar-centered']);
  var textClasses = clsx(styles.text);
  var supportingTextClasses = clsx(styles.supporting__text);
  var mobileWrapperClasses = clsx(styles.mobile__wrapper);
  var mobileBannerClasses = clsx(styles.mobile__banner);
  var mobileAvatarClasses = clsx(styles.mobile__avatar, variant === 'banner-avatar-centered' && styles['mobile__avatar-centered']);
  var mobileContainerClasses = clsx(styles.mobile__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__container--centered'], variant !== 'simple' && variant !== 'avatar' && styles['mobile__container--variant-with-banner']);
  var backButtonContainerClasses = clsx(styles.back__button__container, variant === 'banner-avatar' && styles['back__button__container--variant-banner-avatar']);
  var mobileContentClasses = clsx(styles.mobile__content, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__content-centered'], BackButton === undefined && (variant === 'banner-avatar' || variant === 'banner-avatar-centered') && styles['mobile__content-padding-top']);
  var mobileAvatarTextContainerClasses = clsx(styles.mobile__avatar__text__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__avatar__text__container-centered']);
  var mobileTextContainerClasses = clsx(styles.mobile__text__container, (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['text__container--variant-banner-simple-centered-banner-avatar-centered'], (variant === 'banner-simple-centered' || variant === 'banner-avatar-centered') && styles['mobile__text__container-centered']);
  var mobileTextClasses = clsx(styles.mobile__text);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: className,
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: wrapperClasses,
      children: [variant !== 'simple' && variant !== 'avatar' && /*#__PURE__*/_jsx("div", {
        className: bannerClasses,
        style: {
          background: "".concat(background)
        },
        children: variant === 'banner-avatar-centered' && Avatar && /*#__PURE__*/_jsxs("div", {
          className: avatarClasses,
          children: [Avatar(), " "]
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: outerContainerClasses,
        children: [variant === 'banner-avatar' && Avatar && /*#__PURE__*/_jsxs("div", {
          className: avatarClasses,
          children: [Avatar(), " "]
        }), /*#__PURE__*/_jsxs("div", {
          className: containerClasses,
          children: [Breadcrumb && Breadcrumb(), /*#__PURE__*/_jsxs("div", {
            className: contentClasses,
            children: [/*#__PURE__*/_jsxs("div", {
              className: avatarTextContainerClasses,
              children: [variant === 'avatar' && Avatar && Avatar(), " ", /*#__PURE__*/_jsxs("div", {
                className: textContainerClasses,
                children: [/*#__PURE__*/_jsx("div", {
                  className: textClasses,
                  children: text
                }), supportingText && /*#__PURE__*/_jsx("div", {
                  className: supportingTextClasses,
                  children: supportingText
                })]
              })]
            }), children, _div || (_div = /*#__PURE__*/_jsx("div", {}))]
          })]
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: mobileWrapperClasses,
      children: [variant !== 'simple' && variant !== 'avatar' && /*#__PURE__*/_jsx("div", {
        className: mobileBannerClasses,
        style: {
          background: "".concat(background)
        },
        children: (variant === 'banner-avatar' || variant === 'banner-avatar-centered') && MobileAvatar && /*#__PURE__*/_jsxs("div", {
          className: mobileAvatarClasses,
          children: [MobileAvatar(), " "]
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: mobileContainerClasses,
        children: [BackButton && /*#__PURE__*/_jsx("div", {
          className: backButtonContainerClasses,
          children: BackButton()
        }), /*#__PURE__*/_jsx("div", {
          className: mobileContentClasses,
          children: /*#__PURE__*/_jsxs("div", {
            className: mobileAvatarTextContainerClasses,
            children: [variant === 'avatar' && MobileAvatar && MobileAvatar(), /*#__PURE__*/_jsxs("div", {
              className: mobileTextContainerClasses,
              children: [/*#__PURE__*/_jsx("div", {
                className: mobileTextClasses,
                children: text
              }), supportingText && /*#__PURE__*/_jsx("div", {
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
export default PageHeader;