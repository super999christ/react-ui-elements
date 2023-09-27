"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchCardTeam = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var styles = {
  "match__card": "pbui-bIm7j",
  "match__card--compact": "pbui-djpoI",
  "card__number": "pbui-f7yBV",
  "card__body": "pbui-e5lkC",
  "body__header": "pbui--SPCZ",
  "body__details": "pbui-J8Fcw",
  "details__list": "pbui-NTViz",
  "details__link": "pbui-8b1Y9",
  "team__player": "pbui-7iraL",
  "body__footer": "pbui-fwnq2"
};
var ScoreColumn = function ScoreColumn(_ref) {
  var score = _ref.score,
    winner = _ref.winner;
  var scoreClasses = 'inline-flex h-full w-[26px] shrink-0 items-center justify-center border-x border-gray-200 text-sm font-bold' + (winner ? " bg-success-50 text-success-700 border-gray-200" : "");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: scoreClasses,
    children: score
  });
};
var MatchCardTeam = exports.MatchCardTeam = function MatchCardTeam(_ref2) {
  var results = _ref2.results;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: styles.teams__row,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ml-auto",
      children: results.map(function (result) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ScoreColumn, (0, _extends2["default"])({}, result), result.score);
      })
    })
  });
};