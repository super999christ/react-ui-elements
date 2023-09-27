"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var styles = {
  "wrapper": "pbui-krhND",
  "player": "pbui-wTBY7",
  "about": "pbui-JTuC6",
  "full__name": "pbui-gh2ju",
  "name": "pbui-Loiqa",
  "surname": "pbui-0l06e",
  "country__container": "pbui-wJC--",
  "country": "pbui-Bv9wz",
  "player__image": "pbui-7ovZ0",
  "country__image": "pbui-Lp4X8",
  "player__image--no-src": "pbui-egqJN",
  "country__image--no-src": "pbui-Nl-ZC",
  "ranking__container": "pbui-hFhmY",
  "points__container": "pbui-qlUai",
  "ranking": "pbui-h7F-j",
  "points": "pbui-Urxex",
  "sponsor": "pbui-hhZ-t",
  "ranking__number": "pbui-UQrEi",
  "points__number": "pbui-Mqrd0",
  "sponsor__container": "pbui-I5Uln",
  "sponsor__container--last-features": "pbui-wP7DM",
  "sponsor__wrapper": "pbui-fOVbg",
  "sponsor__link": "pbui-OCNXH"
};
var FeaturedPlayer = function FeaturedPlayer(_ref) {
  var background = _ref.background,
    country = _ref.country,
    countryImg = _ref.countryImg,
    img = _ref.img,
    name = _ref.name,
    points = _ref.points,
    ranking = _ref.ranking,
    sponsorLink = _ref.sponsorLink,
    sponsorLogo = _ref.sponsorLogo,
    surname = _ref.surname,
    lastFeatured = _ref.lastFeatured;
  var wrapperClasses = (0, _clsx["default"])(styles.wrapper);
  var playerClasses = (0, _clsx["default"])(styles.player);
  var aboutClasses = (0, _clsx["default"])(styles.about);
  var fullNameClasses = (0, _clsx["default"])(styles.full__name);
  var nameClasses = (0, _clsx["default"])(styles.name);
  var surnameClasses = (0, _clsx["default"])(styles.surname);
  var countryContainerClasses = (0, _clsx["default"])(styles.country__container);
  var countryClasses = (0, _clsx["default"])(styles.country);
  var playerImageClasses = (0, _clsx["default"])(styles.player__image, !img && styles['player__image--no-src']);
  var countryImageClasses = (0, _clsx["default"])(styles.country__image, !countryImg && styles['country__image--no-src']);
  var rankingContainerClasses = (0, _clsx["default"])(styles.ranking__container);
  var rankingClasses = (0, _clsx["default"])(styles.ranking);
  var rankingNumberClasses = (0, _clsx["default"])(styles.ranking__number);
  var pointsContainerClasses = (0, _clsx["default"])(styles.points__container);
  var pointsClasses = (0, _clsx["default"])(styles.points);
  var pointsNumberClasses = (0, _clsx["default"])(styles.points__number);
  var sponsorContainerClasses = (0, _clsx["default"])(styles.sponsor__container, lastFeatured && styles['sponsor__container--last-features']);
  var sponsorClasses = (0, _clsx["default"])(styles.sponsor);
  var sponsorWrapperClasses = (0, _clsx["default"])(styles.sponsor__wrapper);
  var sponsorLinkClasses = (0, _clsx["default"])(styles.sponsor__link);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        background: "".concat(background)
      },
      className: playerClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: aboutClasses,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: fullNameClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: nameClasses,
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: surnameClasses,
            children: surname
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: countryContainerClasses,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: country,
            src: countryImg,
            className: countryImageClasses
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: countryClasses,
            children: country
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        alt: "".concat(name, " ").concat(surname),
        src: img,
        className: playerImageClasses
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: rankingContainerClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: rankingClasses,
        children: "Ranking"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: rankingNumberClasses,
        children: ranking && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: ["#", ranking]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: pointsContainerClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: pointsClasses,
        children: "Points"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: pointsNumberClasses,
        children: points && points
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: sponsorContainerClasses,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: sponsorClasses,
        children: "Sponsor"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: sponsorWrapperClasses,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          href: sponsorLink,
          rel: "noopener noreferrer",
          target: "_blank",
          className: sponsorLinkClasses,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            width: "76",
            height: "38",
            alt: "Sponsor",
            src: sponsorLogo
          })
        })
      })]
    })]
  });
};
var _default = exports["default"] = FeaturedPlayer;