import clsx from 'clsx';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
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
  var wrapperClasses = clsx(styles.wrapper);
  var playerClasses = clsx(styles.player);
  var aboutClasses = clsx(styles.about);
  var fullNameClasses = clsx(styles.full__name);
  var nameClasses = clsx(styles.name);
  var surnameClasses = clsx(styles.surname);
  var countryContainerClasses = clsx(styles.country__container);
  var countryClasses = clsx(styles.country);
  var playerImageClasses = clsx(styles.player__image, !img && styles['player__image--no-src']);
  var countryImageClasses = clsx(styles.country__image, !countryImg && styles['country__image--no-src']);
  var rankingContainerClasses = clsx(styles.ranking__container);
  var rankingClasses = clsx(styles.ranking);
  var rankingNumberClasses = clsx(styles.ranking__number);
  var pointsContainerClasses = clsx(styles.points__container);
  var pointsClasses = clsx(styles.points);
  var pointsNumberClasses = clsx(styles.points__number);
  var sponsorContainerClasses = clsx(styles.sponsor__container, lastFeatured && styles['sponsor__container--last-features']);
  var sponsorClasses = clsx(styles.sponsor);
  var sponsorWrapperClasses = clsx(styles.sponsor__wrapper);
  var sponsorLinkClasses = clsx(styles.sponsor__link);
  return /*#__PURE__*/_jsxs("div", {
    className: wrapperClasses,
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        background: "".concat(background)
      },
      className: playerClasses,
      children: [/*#__PURE__*/_jsxs("div", {
        className: aboutClasses,
        children: [/*#__PURE__*/_jsxs("div", {
          className: fullNameClasses,
          children: [/*#__PURE__*/_jsx("div", {
            className: nameClasses,
            children: name
          }), /*#__PURE__*/_jsx("div", {
            className: surnameClasses,
            children: surname
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: countryContainerClasses,
          children: [/*#__PURE__*/_jsx("img", {
            alt: country,
            src: countryImg,
            className: countryImageClasses
          }), /*#__PURE__*/_jsx("div", {
            className: countryClasses,
            children: country
          })]
        })]
      }), /*#__PURE__*/_jsx("img", {
        alt: "".concat(name, " ").concat(surname),
        src: img,
        className: playerImageClasses
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: rankingContainerClasses,
      children: [/*#__PURE__*/_jsx("div", {
        className: rankingClasses,
        children: "Ranking"
      }), /*#__PURE__*/_jsx("div", {
        className: rankingNumberClasses,
        children: ranking && /*#__PURE__*/_jsxs(_Fragment, {
          children: ["#", ranking]
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: pointsContainerClasses,
      children: [/*#__PURE__*/_jsx("div", {
        className: pointsClasses,
        children: "Points"
      }), /*#__PURE__*/_jsx("div", {
        className: pointsNumberClasses,
        children: points && points
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: sponsorContainerClasses,
      children: [/*#__PURE__*/_jsx("div", {
        className: sponsorClasses,
        children: "Sponsor"
      }), /*#__PURE__*/_jsx("div", {
        className: sponsorWrapperClasses,
        children: /*#__PURE__*/_jsx("a", {
          href: sponsorLink,
          rel: "noopener noreferrer",
          target: "_blank",
          className: sponsorLinkClasses,
          children: /*#__PURE__*/_jsx("img", {
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
export default FeaturedPlayer;