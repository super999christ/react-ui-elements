import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className", "compact", "court", "detailsUrl", "event", "matchDateTime", "matchNumber", "matchTime", "round", "teams", "tournament"];
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { mergeRefs } from '../../utils';
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
import { PlayerAvatar } from './PlayerAvatar';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var EMPTY_STRING_PLACE = '_';
export var MatchCardTeam = function MatchCardTeam(_ref) {
  var _team$scores;
  var team = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsxs("div", {
    className: styles.team__player,
    children: [/*#__PURE__*/_jsxs("div", {
      className: "flex flex-1 items-center gap-1",
      children: [/*#__PURE__*/_jsx("div", {
        className: "flex gap-1",
        children: team.players.map(function (player) {
          return /*#__PURE__*/_jsx(PlayerAvatar, {
            size: "xs"
          }, player.id);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "",
        children: team.players.map(function (player) {
          return /*#__PURE__*/_jsxs("div", {
            className: "text-xs leading-none text-gray-800",
            children: [player.firstName.length > 0 ? "".concat(player.firstName.charAt(0)).concat(player.lastName ? ', ' : '') : "".concat(EMPTY_STRING_PLACE, ", "), player.lastName.length > 0 ? /*#__PURE__*/_jsx("span", {
              className: "font-semibold",
              children: player.lastName
            }) : EMPTY_STRING_PLACE]
          }, player.id);
        })
      }), /*#__PURE__*/_jsx("span", {
        className: "px-1 text-[10px] font-semibold leading-none ".concat(team.winningPercentage && team.winningPercentage > 50 ? 'text-success-500' : 'text-gray-500'),
        children: "".concat(team.winningPercentage, "%")
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "ml-auto flex",
      children: (_team$scores = team.scores) == null ? void 0 : _team$scores.map(function (score) {
        return /*#__PURE__*/_jsx("div", {
          className: "inline-flex w-6 items-center justify-center border-x text-xs font-semibold last-of-type:border-r-0 ".concat(score.winner ? 'z-30 border-white bg-success-50 text-success-700' : 'border-gray-200 bg-white text-gray-500'),
          children: score.value
        }, score.value);
      })
    })]
  });
};
var MatchCard = /*#__PURE__*/React.forwardRef(function MatchCard(props, propRef) {
  var className = props.className,
    compact = props.compact,
    court = props.court,
    detailsUrl = props.detailsUrl,
    event = props.event,
    matchDateTime = props.matchDateTime,
    matchNumber = props.matchNumber,
    matchTime = props.matchTime,
    round = props.round,
    teams = props.teams,
    tournament = props.tournament,
    rest = _objectWithoutProperties(props, _excluded);

  /* const [width, setWidth] = useState<number>(); */
  var cardRef = useRef(null);
  var ref = mergeRefs([propRef, cardRef]);
  var renderCourtMatchTime;
  if (matchTime) {
    if (typeof matchTime === 'string') {
      renderCourtMatchTime = matchTime;
    } else {
      renderCourtMatchTime = matchTime.toISOString();
    }
  }
  var matchCardClasses = clsx(styles.match__card, className, compact && styles['match__card--compact']);
  useEffect(function () {
    if (cardRef.current) {
      // const rect = cardRef.current.getBoundingClientRect();
      // setWidth(rect.width);
    }
  }, []);
  return /*#__PURE__*/_jsxs("div", _extends({
    className: matchCardClasses
  }, rest, {
    ref: ref,
    children: [matchNumber && /*#__PURE__*/_jsx("div", {
      className: styles.card__number,
      children: matchNumber
    }), /*#__PURE__*/_jsxs("div", {
      className: styles.card__body,
      children: [(tournament || event) && /*#__PURE__*/_jsxs("div", {
        className: styles.body__header,
        children: [tournament && /*#__PURE__*/_jsx("div", {
          className: "grow truncate",
          style: {
            width: '100%'
          },
          children: tournament
        }), event && /*#__PURE__*/_jsx("div", {
          className: "grow truncate",
          style: {
            width: 360
          },
          children: event
        })]
      }), (court || round || renderCourtMatchTime) && /*#__PURE__*/_jsxs("div", {
        className: styles.body__details,
        children: [/*#__PURE__*/_jsxs("div", {
          className: styles.details__list,
          children: [/*#__PURE__*/_jsx("div", {
            children: "Court ".concat(court)
          }), /*#__PURE__*/_jsx("div", {
            children: "Round ".concat(round)
          }), /*#__PURE__*/_jsx("div", {
            children: renderCourtMatchTime
          })]
        }), detailsUrl && /*#__PURE__*/_jsx("div", {
          className: "ml-auto flex items-center pr-2",
          children: detailsUrl
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: styles.card__team,
        children: teams == null ? void 0 : teams.map(function (team) {
          return /*#__PURE__*/_jsx(MatchCardTeam, _extends({}, team), team.winningPercentage);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: styles.body__footer,
        children: matchDateTime || ''
      })]
    })]
  }));
});
export default MatchCard;