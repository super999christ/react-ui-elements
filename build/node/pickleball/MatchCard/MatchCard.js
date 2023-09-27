"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MatchCardTeam = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils");
var _PlayerAvatar = require("./PlayerAvatar");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "compact", "court", "detailsUrl", "event", "matchDateTime", "matchNumber", "matchTime", "round", "teams", "tournament"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var EMPTY_STRING_PLACE = '_';
var MatchCardTeam = exports.MatchCardTeam = function MatchCardTeam(_ref) {
  var _team$scores;
  var team = (0, _extends2["default"])({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: styles.team__player,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-1 items-center gap-1",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex gap-1",
        children: team.players.map(function (player) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PlayerAvatar.PlayerAvatar, {
            size: "xs"
          }, player.id);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "",
        children: team.players.map(function (player) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "text-xs leading-none text-gray-800",
            children: [player.firstName.length > 0 ? "".concat(player.firstName.charAt(0)).concat(player.lastName ? ', ' : '') : "".concat(EMPTY_STRING_PLACE, ", "), player.lastName.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "font-semibold",
              children: player.lastName
            }) : EMPTY_STRING_PLACE]
          }, player.id);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "px-1 text-[10px] font-semibold leading-none ".concat(team.winningPercentage && team.winningPercentage > 50 ? 'text-success-500' : 'text-gray-500'),
        children: "".concat(team.winningPercentage, "%")
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ml-auto flex",
      children: (_team$scores = team.scores) == null ? void 0 : _team$scores.map(function (score) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "inline-flex w-6 items-center justify-center border-x text-xs font-semibold last-of-type:border-r-0 ".concat(score.winner ? 'z-30 border-white bg-success-50 text-success-700' : 'border-gray-200 bg-white text-gray-500'),
          children: score.value
        }, score.value);
      })
    })]
  });
};
var MatchCard = /*#__PURE__*/_react["default"].forwardRef(function MatchCard(props, propRef) {
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
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  /* const [width, setWidth] = useState<number>(); */
  var cardRef = (0, _react.useRef)(null);
  var ref = (0, _utils.mergeRefs)([propRef, cardRef]);
  var renderCourtMatchTime;
  if (matchTime) {
    if (typeof matchTime === 'string') {
      renderCourtMatchTime = matchTime;
    } else {
      renderCourtMatchTime = matchTime.toISOString();
    }
  }
  var matchCardClasses = (0, _clsx["default"])(styles.match__card, className, compact && styles['match__card--compact']);
  (0, _react.useEffect)(function () {
    if (cardRef.current) {
      // const rect = cardRef.current.getBoundingClientRect();
      // setWidth(rect.width);
    }
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _extends2["default"])({
    className: matchCardClasses
  }, rest, {
    ref: ref,
    children: [matchNumber && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: styles.card__number,
      children: matchNumber
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: styles.card__body,
      children: [(tournament || event) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: styles.body__header,
        children: [tournament && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "grow truncate",
          style: {
            width: '100%'
          },
          children: tournament
        }), event && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "grow truncate",
          style: {
            width: 360
          },
          children: event
        })]
      }), (court || round || renderCourtMatchTime) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: styles.body__details,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: styles.details__list,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: "Court ".concat(court)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: "Round ".concat(round)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: renderCourtMatchTime
          })]
        }), detailsUrl && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "ml-auto flex items-center pr-2",
          children: detailsUrl
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: styles.card__team,
        children: teams == null ? void 0 : teams.map(function (team) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(MatchCardTeam, (0, _extends2["default"])({}, team), team.winningPercentage);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: styles.body__footer,
        children: matchDateTime || ''
      })]
    })]
  }));
});
var _default = exports["default"] = MatchCard;