"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../Button"));
var _FeaturedPlayer = _interopRequireDefault(require("../FeaturedPlayer/FeaturedPlayer"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
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
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var dividerClasses = (0, _clsx["default"])(styles.divider);
  var buttonClasses = (0, _clsx["default"])(styles.button);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headlineClasses,
      children: "Featured players"
    }), players.map(function (player, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FeaturedPlayer["default"], (0, _extends2["default"])({}, player, {
          lastFeatured: index === players.length - 1
        })), index !== players.length - 1 && (_div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: dividerClasses
        })))]
      }, index);
    }), seeAllLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: seeAllLink,
      rel: "noopener noreferrer",
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        variant: "link",
        className: buttonClasses,
        children: "See all"
      })
    })]
  });
};
var _default = exports["default"] = FeaturedPlayersContainer;