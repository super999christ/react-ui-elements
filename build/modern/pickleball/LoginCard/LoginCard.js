import clsx from 'clsx';
import React from 'react';
import Button from '../../Button';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-4ayEn",
  "header": "pbui-OMTgN",
  "header--no-headline-text": "pbui-M5mU8",
  "logo": "pbui-3oFT0",
  "headline": "pbui-f1wYF",
  "text": "pbui-TBC6c",
  "buttons": "pbui-mmAod",
  "button1": "pbui-4Sne3",
  "button2": "pbui-q1KGc",
  "links": "pbui-G8XSX",
  "link": "pbui-G-vgT"
};
var LoginCard = function LoginCard(_ref) {
  var background = _ref.background,
    button1Text = _ref.button1Text,
    button2Text = _ref.button2Text,
    headlineText = _ref.headlineText,
    learnMoreLink = _ref.learnMoreLink,
    Logo = _ref.Logo,
    text = _ref.text;
  var wrapperClasses = clsx(styles.wrapper);
  var headerClasses = clsx(styles.header, !headlineText && styles['header--no-headline-text']);
  var logoClasses = clsx(styles.logo);
  var headlineClasses = clsx(styles.headline);
  var textClasses = clsx(styles.text);
  var buttonsClasses = clsx(styles.buttons);
  var button1Classes = clsx(styles.button1);
  var button2Classes = clsx(styles.button2);
  var linksClasses = clsx(styles.links);
  var linkClasses = clsx(styles.link);
  return /*#__PURE__*/_jsxs("div", {
    style: {
      background: "".concat(background)
    },
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsxs("div", {
      className: headerClasses,
      children: [typeof Logo === 'string' ? /*#__PURE__*/_jsx("img", {
        alt: "Logo",
        src: Logo,
        className: logoClasses
      }) : Logo(), headlineText && /*#__PURE__*/_jsx("span", {
        className: headlineClasses,
        children: headlineText
      })]
    }), /*#__PURE__*/_jsx("p", {
      className: textClasses,
      children: text
    }), /*#__PURE__*/_jsxs("div", {
      className: buttonsClasses,
      children: [/*#__PURE__*/_jsx(Button, {
        size: "sm",
        className: button1Classes,
        children: button1Text
      }), /*#__PURE__*/_jsx(Button, {
        size: "sm",
        variant: "tertiary",
        className: button2Classes,
        children: button2Text
      })]
    }), learnMoreLink && /*#__PURE__*/_jsx("a", {
      href: learnMoreLink,
      rel: "noopener noreferrer",
      target: "_blank",
      className: linksClasses,
      children: /*#__PURE__*/_jsx(Button, {
        size: "sm",
        variant: "link",
        className: linkClasses,
        children: "Learn more"
      })
    })]
  });
};
export default LoginCard;