/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import MatchSide from './MatchSide';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
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
  var wrapperClasses = clsx(styles.wrapper);
  var headerClasses = clsx(styles.header);
  var linkClasses = clsx(styles.link);
  var contentClasses = clsx(styles.content);
  var finalClasses = clsx(styles["final"]);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        background: gradient || ''
      },
      className: headerClasses,
      children: /*#__PURE__*/_jsxs("a", {
        href: link,
        rel: "noopener noreferrer",
        target: "_blank",
        className: linkClasses,
        children: [name, category && " - ".concat(category)]
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: contentClasses,
      children: [/*#__PURE__*/_jsx(MatchSide, {
        match: match,
        team: "team1"
      }), /*#__PURE__*/_jsx("div", {
        className: finalClasses,
        children: "Final"
      }), /*#__PURE__*/_jsx(MatchSide, {
        match: match,
        team: "team2"
      })]
    })]
  });
};
export default ResultCard;