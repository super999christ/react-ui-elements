import _extends from "@babel/runtime/helpers/esm/extends";
/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import Button from '../../Button';
import FeaturedPlayer from '../FeaturedPlayer/FeaturedPlayer';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var styles = {
  "wrapper": "pbui-qm3b4",
  "headline": "pbui-m-hrk",
  "divider": "pbui-ha3r3",
  "button": "pbui--xbEw"
};
var FeaturedPlayersContainer = function FeaturedPlayersContainer(_ref) {
  var _div;
  var players = _ref.players,
    seeAllLink = _ref.seeAllLink;
  var wrapperClasses = clsx(styles.wrapper);
  var headlineClasses = clsx(styles.headline);
  var dividerClasses = clsx(styles.divider);
  var buttonClasses = clsx(styles.button);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headlineClasses,
      children: "Featured players"
    }), players.map(function (player, index) {
      return /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx(FeaturedPlayer, _extends({}, player, {
          lastFeatured: index === players.length - 1
        })), index !== players.length - 1 && (_div || (_div = /*#__PURE__*/_jsx("div", {
          className: dividerClasses
        })))]
      }, index);
    }), seeAllLink && /*#__PURE__*/_jsx("a", {
      href: seeAllLink,
      rel: "noopener noreferrer",
      target: "_blank",
      children: /*#__PURE__*/_jsx(Button, {
        size: "sm",
        variant: "link",
        className: buttonClasses,
        children: "See all"
      })
    })]
  });
};
export default FeaturedPlayersContainer;