var _FontAwesomeIcon, _FontAwesomeIcon2, _FontAwesomeIcon3, _FontAwesomeIcon4, _FontAwesomeIcon5;
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui--nEA5",
  "headline": "pbui-yGQsf",
  "media": "pbui-8jHFS",
  "icon": "pbui-UEz9x",
  "name": "pbui---0Yr",
  "divider__container": "pbui-gzwlj",
  "divider": "pbui-AMCfc"
};
var SocialMedia = function SocialMedia(_ref) {
  var _div;
  var socialMedias = _ref.socialMedias;
  var wrapperClasses = clsx(styles.wrapper);
  var headlineClasses = clsx(styles.headline);
  var mediaClasses = clsx(styles.media);
  var iconClasses = clsx(styles.icon);
  var nameClasses = clsx(styles.name);
  var dividerContainerClasses = clsx(styles.divider__container);
  var dividerClasses = clsx(styles.divider);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headlineClasses,
      children: "Follow us"
    }), socialMedias.map(function (socialMedia, index) {
      return /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsxs("a", {
          href: socialMedia.link,
          rel: "noopener noreferrer",
          target: "_blank",
          className: mediaClasses,
          children: [/*#__PURE__*/_jsx("div", {
            className: iconClasses,
            children: socialMedia.name === 'Facebook' ? _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/_jsx(FontAwesomeIcon, {
              color: "#1877F2",
              icon: faFacebook,
              size: "lg"
            })) : socialMedia.name === 'Twitter' ? _FontAwesomeIcon2 || (_FontAwesomeIcon2 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
              color: "#1DA1F2",
              icon: faTwitter,
              size: "lg"
            })) : socialMedia.name === 'Instagram' ? _FontAwesomeIcon3 || (_FontAwesomeIcon3 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
              color: "#000100",
              icon: faInstagram,
              size: "lg"
            })) : socialMedia.name === 'YouTube' ? _FontAwesomeIcon4 || (_FontAwesomeIcon4 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
              color: "#FF0302",
              icon: faYoutube,
              size: "lg"
            })) : _FontAwesomeIcon5 || (_FontAwesomeIcon5 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
              icon: faQuestionCircle,
              size: "lg"
            }))
          }), /*#__PURE__*/_jsx("div", {
            className: nameClasses,
            children: socialMedia.name
          })]
        }), index !== socialMedias.length - 1 && (_div || (_div = /*#__PURE__*/_jsx("div", {
          className: dividerContainerClasses,
          children: /*#__PURE__*/_jsx("div", {
            className: dividerClasses
          })
        })))]
      }, index);
    })]
  });
};
export default SocialMedia;