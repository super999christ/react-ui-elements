"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../Button"));
var _jsxRuntime = require("react/jsx-runtime");
/* eslint-disable react/no-array-index-key */
var styles = {
  "wrapper": "pbui-iI2bk",
  "headline": "pbui-yWwki",
  "header": "pbui-XnTPR",
  "column__name": "pbui-ZrDun",
  "player__column__name": "pbui-uuRPz",
  "button": "pbui-BC3xj",
  "row": "pbui-Sq7W1",
  "rank__column": "pbui-iqGyw",
  "rank__number": "pbui--60Vb",
  "rank__dash": "pbui-1-6I8",
  "player__column": "pbui-7BW4z",
  "image": "pbui-U-Z4Y",
  "name__container": "pbui-1Fclx",
  "name": "pbui-a-Kmi",
  "wins__loses__column": "pbui-WMNeJ",
  "last__10__column": "pbui--hFTw",
  "last__10__container": "pbui-A-xp-",
  "green__background": "pbui-2GWWE",
  "red__background": "pbui-iTKQJ",
  "last__10__field": "pbui-iOjEu"
};
var columns = [{
  name: 'Rank',
  width: '14%'
}, {
  name: 'Player',
  width: '44%'
}, {
  name: 'W',
  width: '10%'
}, {
  name: 'L',
  width: '10%'
}, {
  name: 'Last 10',
  width: '18%'
}];
var Standings = function Standings(_ref) {
  var _div;
  var rows = _ref.rows,
    viewFullRankingLink = _ref.viewFullRankingLink;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var headlineClasses = (0, _clsx["default"])(styles.headline);
  var headerClasses = (0, _clsx["default"])(styles.header);
  var columnNameClasses = (0, _clsx["default"])(styles.column__name);
  var playerColumnNameClasses = (0, _clsx["default"])(styles.player__column__name);
  var buttonClasses = (0, _clsx["default"])(styles.button);
  var rowClasses = (0, _clsx["default"])(styles.row);
  var rankColumnClasses = (0, _clsx["default"])(styles.rank__column);
  var rankNumberClasses = (0, _clsx["default"])(styles.rank__number);
  var rankDashClasses = (0, _clsx["default"])(styles.rank__dash);
  var playerColumnClasses = (0, _clsx["default"])(styles.player__column);
  var imageClasses = (0, _clsx["default"])(styles.image);
  var nameContainerClasses = (0, _clsx["default"])(styles.name__container);
  var nameClasses = (0, _clsx["default"])(styles.name);
  var winsLosesColumnClasses = (0, _clsx["default"])(styles.wins__loses__column);
  var last10ColumnClasses = (0, _clsx["default"])(styles.last__10__column);
  var last10ContainerClasses = (0, _clsx["default"])(styles.last__10__container);
  var greenBackgroundClasses = (0, _clsx["default"])(styles.green__background);
  var redBackgroundClasses = (0, _clsx["default"])(styles.red__background);
  var last10FieldClasses = (0, _clsx["default"])(styles.last__10__field);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      className: headlineClasses,
      children: "2022-23 Standings"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: headerClasses,
      children: columns.map(function (column, index) {
        if (column.name === 'Player') {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              width: column.width
            },
            className: playerColumnNameClasses,
            children: column.name
          }, index);
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            width: column.width
          },
          className: columnNameClasses,
          children: column.name
        }, index);
      })
    }), rows.map(function (row, index) {
      var nameFirstLetter = row.name.length > 0 ? "".concat(row.name.charAt(0), ",") : '';
      var last10String = "".concat(row.last10Wins, "-").concat(row.last10Loses);
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: rowClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: rankColumnClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: rankNumberClasses,
            children: index + 1
          }), _div || (_div = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: rankDashClasses,
            children: "-"
          }))]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: playerColumnClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: row.img,
            alt: "".concat(row.name, " ").concat(row.surname),
            className: imageClasses
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: nameContainerClasses,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: nameClasses,
              children: nameFirstLetter
            }), ' ', /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: nameClasses,
              children: row.surname || ''
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: winsLosesColumnClasses,
          children: row.wins
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: winsLosesColumnClasses,
          children: row.loses
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: last10ColumnClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "".concat(last10ContainerClasses, " ").concat(+row.last10Wins > +row.last10Loses ? greenBackgroundClasses : redBackgroundClasses),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: last10FieldClasses,
              children: last10String
            })
          })
        })]
      }, index);
    }), viewFullRankingLink && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: viewFullRankingLink,
      rel: "noopener noreferrer",
      target: "_blank",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        size: "sm",
        variant: "link",
        className: buttonClasses,
        children: "View Full Ranking"
      })
    })]
  });
};
var _default = exports["default"] = Standings;