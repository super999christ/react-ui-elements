import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsx("div", {
    className: scoreClasses,
    children: score
  });
};
export var MatchCardTeam = function MatchCardTeam(_ref2) {
  var results = _ref2.results;
  return /*#__PURE__*/_jsx("div", {
    className: styles.teams__row,
    children: /*#__PURE__*/_jsx("div", {
      className: "ml-auto",
      children: results.map(function (result) {
        return /*#__PURE__*/_jsx(ScoreColumn, _extends({}, result), result.score);
      })
    })
  });
};