import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "FeaturedIcon", "SupportingText", "Text", "type", "onClose"];
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { faCircleCheck } from '@fortawesome/pro-light-svg-icons';
import { faInfoCircle, faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
var Alert = /*#__PURE__*/React.forwardRef(function Alert(props, ref) {
  var children = props.children,
    FeaturedIcon = props.FeaturedIcon,
    SupportingText = props.SupportingText,
    _props$Text = props.Text,
    Text = _props$Text === void 0 ? 'Text' : _props$Text,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    onClose = props.onClose,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx(styles.wrapper, {
    'primary': styles['wrapper--type-primary'],
    'error': styles['wrapper--type-error'],
    'warning': styles['wrapper--type-warning'],
    'success': styles['wrapper--type-success']
  }[type]);
  var mobileWrapperClasses = clsx(styles.mobile__wrapper, {
    'primary': styles['wrapper--type-primary'],
    'error': styles['wrapper--type-error'],
    'warning': styles['wrapper--type-warning'],
    'success': styles['wrapper--type-success']
  }[type]);
  var infoIconClasses = clsx(styles.info__icon, {
    'primary': styles['info__icon--type-primary'],
    'error': styles['info__icon--type-error'],
    'warning': styles['info__icon--type-warning'],
    'success': styles['info__icon--type-success']
  }[type]);
  var textClasses = clsx(styles.text, {
    'primary': styles['text--type-primary'],
    'error': styles['text--type-error'],
    'warning': styles['text--type-warning'],
    'success': styles['text--type-success']
  }[type]);
  var supportingTextClasses = clsx(styles.supporting__text, {
    'primary': styles['supporting__text--type-primary'],
    'error': styles['supporting__text--type-error'],
    'warning': styles['supporting__text--type-warning'],
    'success': styles['supporting__text--type-success']
  }[type]);
  var closeIconClasses = clsx(styles.close__icon, {
    'primary': styles['close__icon--type-primary'],
    'error': styles['close__icon--type-error'],
    'warning': styles['close__icon--type-warning'],
    'success': styles['close__icon--type-success']
  }[type]);
  var mobileIconsContainerClasses = clsx(styles.mobile__icons__container);
  var contentContainerClasses = clsx(styles.content__container);
  var mobileContentContainerClasses = clsx(styles.mobile__content__container);
  var textContainerClasses = clsx(styles.text__container);
  var infoIconContainerClasses = clsx(styles.icon__container, type === 'default' && styles['icon__container--type-default']);
  var iconContainerClasses = clsx(styles.icon__container);
  return /*#__PURE__*/_jsxs("div", _extends({
    ref: ref
  }, rest, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: mobileWrapperClasses,
      children: [/*#__PURE__*/_jsxs("div", {
        className: mobileIconsContainerClasses,
        children: [/*#__PURE__*/_jsx("div", {
          className: infoIconContainerClasses,
          children: FeaturedIcon ? FeaturedIcon() : /*#__PURE__*/_jsx(FontAwesomeIcon, {
            className: infoIconClasses,
            icon: type === 'success' ? faCircleCheck : type === 'warning' ? faTriangleExclamation : faInfoCircle,
            width: 20,
            height: 20
          })
        }), /*#__PURE__*/_jsx("div", {
          className: iconContainerClasses,
          onClick: function onClick() {
            return onClose && onClose();
          },
          children: /*#__PURE__*/_jsx(FontAwesomeIcon, {
            className: closeIconClasses,
            icon: faXmark,
            width: 20,
            height: 20
          })
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: mobileContentContainerClasses,
        children: [/*#__PURE__*/_jsxs("div", {
          className: textContainerClasses,
          children: [typeof Text === 'string' ? /*#__PURE__*/_jsx("h1", {
            className: textClasses,
            children: Text
          }) : Text(), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/_jsx("p", {
            className: supportingTextClasses,
            children: SupportingText
          }) : SupportingText())]
        }), children]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: wrapperClasses,
      children: [/*#__PURE__*/_jsx("div", {
        className: infoIconContainerClasses,
        children: FeaturedIcon ? FeaturedIcon() : /*#__PURE__*/_jsx(FontAwesomeIcon, {
          className: infoIconClasses,
          icon: type === 'success' ? faCircleCheck : type === 'warning' ? faTriangleExclamation : faInfoCircle,
          width: 20,
          height: 20
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: contentContainerClasses,
        children: [/*#__PURE__*/_jsxs("div", {
          className: textContainerClasses,
          children: [typeof Text === 'string' ? /*#__PURE__*/_jsx("h1", {
            className: textClasses,
            children: Text
          }) : Text(), SupportingText && (typeof SupportingText === 'string' ? /*#__PURE__*/_jsx("p", {
            className: supportingTextClasses,
            children: SupportingText
          }) : SupportingText())]
        }), children]
      }), /*#__PURE__*/_jsx("div", {
        className: iconContainerClasses,
        onClick: function onClick() {
          return onClose && onClose();
        },
        children: /*#__PURE__*/_jsx(FontAwesomeIcon, {
          className: closeIconClasses,
          icon: faXmark,
          width: 20,
          height: 20
        })
      })]
    })]
  }));
});
export default Alert;