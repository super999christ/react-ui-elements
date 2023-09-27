/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';
import Button from '../../Button';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
  var wrapperClasses = clsx(styles.wrapper);
  var headlineClasses = clsx(styles.headline);
  var headerClasses = clsx(styles.header);
  var columnNameClasses = clsx(styles.column__name);
  var playerColumnNameClasses = clsx(styles.player__column__name);
  var buttonClasses = clsx(styles.button);
  var rowClasses = clsx(styles.row);
  var rankColumnClasses = clsx(styles.rank__column);
  var rankNumberClasses = clsx(styles.rank__number);
  var rankDashClasses = clsx(styles.rank__dash);
  var playerColumnClasses = clsx(styles.player__column);
  var imageClasses = clsx(styles.image);
  var nameContainerClasses = clsx(styles.name__container);
  var nameClasses = clsx(styles.name);
  var winsLosesColumnClasses = clsx(styles.wins__loses__column);
  var last10ColumnClasses = clsx(styles.last__10__column);
  var last10ContainerClasses = clsx(styles.last__10__container);
  var greenBackgroundClasses = clsx(styles.green__background);
  var redBackgroundClasses = clsx(styles.red__background);
  var last10FieldClasses = clsx(styles.last__10__field);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsx("h1", {
      className: headlineClasses,
      children: "2022-23 Standings"
    }), /*#__PURE__*/_jsx("div", {
      className: headerClasses,
      children: columns.map(function (column, index) {
        if (column.name === 'Player') {
          return /*#__PURE__*/_jsx("div", {
            style: {
              width: column.width
            },
            className: playerColumnNameClasses,
            children: column.name
          }, index);
        }
        return /*#__PURE__*/_jsx("div", {
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
      return /*#__PURE__*/_jsxs("div", {
        className: rowClasses,
        children: [/*#__PURE__*/_jsxs("div", {
          className: rankColumnClasses,
          children: [/*#__PURE__*/_jsx("div", {
            className: rankNumberClasses,
            children: index + 1
          }), _div || (_div = /*#__PURE__*/_jsx("div", {
            className: rankDashClasses,
            children: "-"
          }))]
        }), /*#__PURE__*/_jsxs("div", {
          className: playerColumnClasses,
          children: [/*#__PURE__*/_jsx("img", {
            src: row.img,
            alt: "".concat(row.name, " ").concat(row.surname),
            className: imageClasses
          }), /*#__PURE__*/_jsxs("div", {
            className: nameContainerClasses,
            children: [/*#__PURE__*/_jsx("span", {
              className: nameClasses,
              children: nameFirstLetter
            }), ' ', /*#__PURE__*/_jsx("span", {
              className: nameClasses,
              children: row.surname || ''
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: winsLosesColumnClasses,
          children: row.wins
        }), /*#__PURE__*/_jsx("div", {
          className: winsLosesColumnClasses,
          children: row.loses
        }), /*#__PURE__*/_jsx("div", {
          className: last10ColumnClasses,
          children: /*#__PURE__*/_jsx("div", {
            className: "".concat(last10ContainerClasses, " ").concat(+row.last10Wins > +row.last10Loses ? greenBackgroundClasses : redBackgroundClasses),
            children: /*#__PURE__*/_jsx("span", {
              className: last10FieldClasses,
              children: last10String
            })
          })
        })]
      }, index);
    }), viewFullRankingLink && /*#__PURE__*/_jsx("a", {
      href: viewFullRankingLink,
      rel: "noopener noreferrer",
      target: "_blank",
      children: /*#__PURE__*/_jsx(Button, {
        size: "sm",
        variant: "link",
        className: buttonClasses,
        children: "View Full Ranking"
      })
    })]
  });
};
export default Standings;