"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _MatchSide = _interopRequireDefault(require("./MatchSide"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
var styles = {
  "wrapper": "pbui-YLyPR",
  "header": "pbui-oQpUS",
  "link": "pbui-eLc9J",
  "content": "pbui-yiWYC",
  "final": "pbui-UmFSB",
  "match__side": "pbui-juhLx",
  "match__side--reversed": "pbui-SQ1aC",
  "match__side--not-reversed": "pbui-o-46g",
  "match__side--duo": "pbui-tcUw3",
  "match__side--solo": "pbui-SaDh5",
  "team__info": "pbui-fWh-X",
  "team__info--reversed": "pbui-aptQI",
  "team__info--not-reversed": "pbui-qu4qE",
  "team__info--duo": "pbui-j0mz3",
  "team__info--solo": "pbui-IFdZw",
  "team__container": "pbui-C6L5F",
  "team__container--winner": "pbui--lxVI",
  "team__container--duo": "pbui-lGYDp",
  "trophy": "pbui-EUTT7",
  "player__info": "pbui-qmfhO",
  "player__info--reversed-duo": "pbui-iVqJt",
  "player__info--reversed-solo": "pbui-XQt-1",
  "player__info--not-reversed-duo": "pbui-GTThp",
  "player__info--not-reversed-solo": "pbui-NomGZ",
  "name": "pbui-XsHci",
  "first__name": "pbui-kYzCB",
  "last__name": "pbui-NgrpB",
  "player__image": "pbui---xVw",
  "player__image--duo": "pbui-7JwW6",
  "player__image--solo": "pbui-qzqHh",
  "player__img": "pbui-HfY-r",
  "winner": "pbui-MS4yC",
  "winner--team2": "pbui-Z92Fx",
  "winner--reversed-duo": "pbui-UnlvW",
  "winner--not-reversed-duo": "pbui-C0YZu",
  "set__wrapper": "pbui-Xhn7p",
  "set__wrapper--reversed": "pbui-EeiTV",
  "set__wrapper--not-reversed": "pbui-XpK0m",
  "set": "pbui-W6bVW",
  "set--winner": "pbui-fnjNn",
  "set--loser": "pbui--AKyi",
  "gray__bg": "pbui-r3B2b",
  "white__bg": "pbui-l86Ph",
  "green__txt": "pbui-wqaP3",
  "gray__txt": "pbui-8idzs",
  "winner__middle": "pbui-apfTa",
  "loser__middle": "pbui-YPi-O"
};
var ResultCard = function ResultCard(_ref) {
  var category = _ref.category,
    gradient = _ref.gradient,
    link = _ref.link,
    match = _ref.match,
    name = _ref.name;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headerClasses = (0, _clsx["default"])(styles.header);
  var linkClasses = (0, _clsx["default"])(styles.link);
  var contentClasses = (0, _clsx["default"])(styles.content);
  var finalClasses = (0, _clsx["default"])(styles["final"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        background: gradient || ''
      },
      className: headerClasses,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: link,
        rel: "noopener noreferrer",
        target: "_blank",
        className: linkClasses,
        children: [name, category && " - ".concat(category)]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: contentClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MatchSide["default"], {
        match: match,
        team: "team1"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: finalClasses,
        children: "Final"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MatchSide["default"], {
        match: match,
        team: "team2"
      })]
    })]
  });
};
var _default = exports["default"] = ResultCard;