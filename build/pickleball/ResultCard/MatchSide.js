var _FontAwesomeIcon, _FontAwesomeIcon2;
/* eslint-disable react/no-array-index-key */
import { faTrophy, faUser } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
var MatchSide = function MatchSide(_ref) {
  var match = _ref.match,
    team = _ref.team;
  var reversed = team === 'team2';
  var oppositionTeam = team === 'team1' ? 'team2' : 'team1';
  var teamName = team === 'team1' ? 'Team 2' : 'Team 1';
  var matchSideClasses = clsx(styles.match__side, reversed ? styles['match__side--reversed'] : styles['match__side--not-reversed'], match[team].length === 2 ? styles['match__side--duo'] : styles['match__side--solo']);
  var teamInfoClasses = clsx(styles.team__info, reversed ? styles['team__info--reversed'] : styles['team__ino--not-rversed'], match[team].length === 2 ? styles['team__info--duo'] : styles['team__info--solo']);
  var teamContainerClasses = clsx(styles.team__container, match.winner === team && styles['team__container--winner'], match[team].length > 1 && styles['team__container--duo']);
  var trophyClasses = clsx(styles.trophy);
  var playerInfoClasses = clsx(styles.player__info, reversed ? [match[team].length > 1 && styles['player__info--reversed-duo'], match[team].length <= 1 && styles['player__info--reversed-solo']] : [match[team].length > 1 && styles['player__info--not-reversed-duo'], match[team].length <= 1 && styles['player__info--not-reversed-solo']]);
  var nameClasses = clsx(styles.name);
  var firstNameClasses = clsx(styles.first__name);
  var lastNameClasses = clsx(styles.last__name);
  var playerImageClasses = clsx(styles.player__image, match[team].length > 1 && styles['player__image--duo'], match[team].length <= 1 && styles['player__image--solo']);
  var playerImgClasses = clsx(styles.player__img);
  var winnerClasses = clsx(styles.winner, match[team].length > 1 && (reversed ? styles['winner--reversed-duo'] : styles['winner--not-reversed-duo']), match.winner === 'team2' && team === 'team2' && styles['winner--team2']);
  var setWrapperClasses = clsx(styles.set__wrapper, reversed ? styles['set__wrapper--reversed'] : styles['set__wrapper--not-reversed']);
  var setClasses = clsx(styles.set, match.winner === team ? styles['set--winner'] : styles['set--loser']);
  var grayBgClasses = clsx(styles.gray__bg);
  var whiteBgClasses = clsx(styles.white__bg);
  var greenTxtClasses = clsx(styles.green__txt);
  var grayTxtClasses = clsx(styles.gray__txt);
  var winnerMiddleClasses = clsx(styles.winner__middle);
  var loserMiddleClasses = clsx(styles.loser__middle);
  return /*#__PURE__*/_jsxs("div", {
    className: matchSideClasses,
    children: [/*#__PURE__*/_jsxs("div", {
      className: teamInfoClasses,
      children: [match.winner === team && /*#__PURE__*/_jsx("div", {
        className: trophyClasses,
        children: _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/_jsx(FontAwesomeIcon, {
          width: 20,
          height: 20,
          color: "#099250",
          icon: faTrophy
        }))
      }), /*#__PURE__*/_jsxs("div", {
        className: teamContainerClasses,
        children: [match[team].map(function (player, index) {
          return /*#__PURE__*/_jsxs("div", {
            className: playerInfoClasses,
            children: [/*#__PURE__*/_jsxs("div", {
              className: nameClasses,
              children: [/*#__PURE__*/_jsx("span", {
                className: firstNameClasses,
                children: player.firstName.charAt(0)
              }), ", ", /*#__PURE__*/_jsx("span", {
                className: lastNameClasses,
                children: player.lastName
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: playerImageClasses,
              children: player.img ? /*#__PURE__*/_jsx("img", {
                alt: "".concat(teamName, " - Player ").concat(index + 1),
                src: player.img,
                className: playerImgClasses
              }) : _FontAwesomeIcon2 || (_FontAwesomeIcon2 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
                icon: faUser,
                size: "sm"
              }))
            })]
          }, index);
        }), match.winner === team && match[team].length <= 1 && /*#__PURE__*/_jsx("div", {
          className: winnerClasses,
          children: "Winner"
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: setWrapperClasses,
      children: match.result.map(function (set, index) {
        return /*#__PURE__*/_jsx("div", {
          className: "".concat(setClasses, " ").concat(index % 2 === 0 ? grayBgClasses : whiteBgClasses, " ").concat(set[team] > set[oppositionTeam] ? greenTxtClasses : grayTxtClasses, " ").concat(match.winner === team && index % 2 === 0 && winnerMiddleClasses, " ").concat(match.winner !== team && index % 2 === 0 && loserMiddleClasses, "\n              "),
          children: set[team]
        }, index);
      })
    })]
  });
};
export default MatchSide;