import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _div, _FontAwesomeIcon;
var _excluded = ["tourney", "onTourneyClick", "className"];
/* eslint-disable react/no-array-index-key */
import { faMoneyBill, faStar } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import moment from 'moment';
import React, { forwardRef } from 'react';
import { EventCard } from './EventCard';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var paaApproved = '/static/media/public/assets/sanctioning_bodies/paa_approved.png';
var paaPending = '/static/media/public/assets/sanctioning_bodies/paa_pending.png';
var pcoApproved = '/static/media/public/assets/sanctioning_bodies/pco_approved.png';
var pcoPending = '/static/media/public/assets/sanctioning_bodies/pco_pending.png';
var spApproved = '/static/media/public/assets/sanctioning_bodies/sp_approved.png';
var spPending = '/static/media/public/assets/sanctioning_bodies/sp_pending.png';
var usapApproved = '/static/media/public/assets/sanctioning_bodies/usap_approved.png';
var usapMMP = '/static/media/public/assets/sanctioning_bodies/usap_mmp.png';
var usapNoRef = '/static/media/public/assets/sanctioning_bodies/usap_noref.png';
var usapPending = '/static/media/public/assets/sanctioning_bodies/usap_pending.png';
var usspApproved = '/static/media/public/assets/sanctioning_bodies/ussp_approved.png';
var usspPending = '/static/media/public/assets/sanctioning_bodies/ussp_pending.png';
var getTourneyLabelColorClass = function getTourneyLabelColorClass(tourney) {
  if (tourney.CancelTourney) return 'bg-[#EA5455]'; // danger-500

  if (moment(tourney.TourneyToDate).utcOffset(tourney.TimeZoneUTCOffset > 14 || tourney.TimeZoneUTCOffset < -12 ? tourney.TimeZoneUTCOffset / 3600 : tourney.TimeZoneUTCOffset).isBefore(moment.utc())) return 'bg-[#141C2E]'; // primary-500

  if (tourney.IsRegClosed) return 'bg-[#1E9453]'; // success-700

  if (tourney.CostRegistrationCurrent > 0) return 'bg-[#28C76F]'; // success-500

  return 'bg-[#79BFD5]'; // secondary-500
};

export function renderTourneyCardLabels(tourney) {
  var rounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var htmlToRender = [];
  if (tourney.CancelTourney) {
    htmlToRender.push( /*#__PURE__*/_jsx("div", {
      className: "tracking-widertext-white px-4 py-1 text-center text-xs font-semibold text-white ".concat(rounded ? 'rounded-t-md' : '', " ").concat(getTourneyLabelColorClass(tourney)),
      children: "Cancelled"
    }));
  } else if (moment(tourney.TourneyToDate).utcOffset(tourney.TimeZoneUTCOffset > 14 || tourney.TimeZoneUTCOffset < -12 ? tourney.TimeZoneUTCOffset / 3600 : tourney.TimeZoneUTCOffset).isBefore(moment.utc())) {
    htmlToRender.push( /*#__PURE__*/_jsx("div", {
      className: "tracking-widertext-white ".concat(getTourneyLabelColorClass(tourney), " px-4 py-1 text-center text-xs font-semibold text-white ").concat(rounded ? 'rounded-t-md' : ''),
      children: "Completed"
    }));
  } else if (tourney.IsRegClosed) {
    htmlToRender.push( /*#__PURE__*/_jsx("div", {
      className: "tracking-widertext-white ".concat(getTourneyLabelColorClass(tourney), " px-4 py-1 text-center text-xs font-semibold text-white ").concat(rounded ? 'rounded-t-md' : ''),
      children: "Reg. Closed"
    }));
  } else if (tourney.CostRegistrationCurrent > 0) {
    htmlToRender.push( /*#__PURE__*/_jsx("div", {
      className: "tracking-widertext-white ".concat(getTourneyLabelColorClass(tourney), " px-4 py-1 text-center text-xs font-semibold text-white ").concat(rounded ? 'rounded-t-md' : ''),
      children: "USD $".concat(tourney.CostRegistrationCurrent.toFixed(2))
    }));
  } else if (tourney.CostFeeOnEvents) {
    htmlToRender.push( /*#__PURE__*/_jsx("div", {
      className: "tracking-widertext-primary-500 text-white ".concat(getTourneyLabelColorClass(tourney), " px-4 py-1 text-center text-xs font-semibold ").concat(rounded ? 'rounded-t-md' : ''),
      children: "Cost Per Event"
    }));
  } else {
    htmlToRender.push( /*#__PURE__*/_jsx("div", {
      className: "tracking-widertext-primary-500 text-white ".concat(getTourneyLabelColorClass(tourney), " px-4 py-1 text-center text-xs font-semibold ").concat(rounded ? 'rounded-t-md' : ''),
      children: "Free"
    }));
  }
  return htmlToRender;
}
var TourneyCard = /*#__PURE__*/forwardRef(function TourneyCard(props, ref) {
  var tourney = props.tourney,
    onTourneyClick = props.onTourneyClick,
    className = props.className,
    rest = _objectWithoutProperties(props, _excluded);
  var wrapperClasses = clsx('relative flex w-full max-w-lg', className);
  var renderLabels = React.useMemo(function () {
    return renderTourneyCardLabels(tourney);
  }, [tourney]);
  var isTourneyPPA = function isTourneyPPA() {
    return tourney.ClubID === '80f17003-cd92-4fc4-84e4-06d38e096042';
  };
  var getCludIDBg = function getCludIDBg() {
    return isTourneyPPA() ? 'bg-[#091A7A]' : 'bg-white'; // primary2-900
  };

  return /*#__PURE__*/_jsx("div", _extends({
    className: wrapperClasses,
    ref: ref
  }, rest, {
    children: /*#__PURE__*/_jsxs(EventCard, {
      onClick: function onClick() {
        return onTourneyClick(tourney);
      },
      children: [/*#__PURE__*/_jsxs("div", {
        className: "relative",
        children: [tourney.IsFeatured && (_div || (_div = /*#__PURE__*/_jsx("div", {
          className: "",
          children: /*#__PURE__*/_jsx(FontAwesomeIcon, {
            icon: faStar,
            className: "absolute left-1 top-1/2 mt-[-7px] text-sm text-white",
            "data-tooltip-id": "tooltip",
            "data-tooltip-content": "Featured tournament."
          })
        }))), renderLabels.map(function (item, index) {
          return /*#__PURE__*/_jsx(React.Fragment, {
            children: item
          }, index);
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "relative",
        children: [/*#__PURE__*/_jsx(EventCard.Image, {
          image: tourney.Logo
        }), tourney.IsPrizeMoney && /*#__PURE__*/_jsx("div", {
          className: clsx('absolute -bottom-4 right-2 flex h-8 w-8 items-center justify-center rounded-full', getTourneyLabelColorClass(tourney)),
          children: _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/_jsx(FontAwesomeIcon, {
            icon: faMoneyBill,
            className: "text-white"
          }))
        })]
      }), ' ', /*#__PURE__*/_jsxs("div", {
        className: clsx('flex h-full flex-col rounded-b-md', getCludIDBg()),
        children: [/*#__PURE__*/_jsxs(EventCard.Content, {
          children: [/*#__PURE__*/_jsx("p", {
            className: "mb-1 text-sm " + (isTourneyPPA() ? 'text-[#ADC8FF]' : 'text-gray-600' // primary2-200
            ),
            children: "".concat(moment(tourney.TourneyFromDate).format('MMM DD, YYYY'), " - ").concat(moment(tourney.TourneyToDate).format('MMM DD, YYYY'))
          }), /*#__PURE__*/_jsx("p", {
            className: "line-clamp-3 font-bold uppercase leading-6 " + (isTourneyPPA() ? 'text-white' : 'text-gray-900'),
            children: tourney.Title
          }), /*#__PURE__*/_jsx("p", {
            className: "mt-auto flex items-center pt-2 text-sm " + (isTourneyPPA() ? 'text-white' : 'text-gray-600'),
            children: "".concat(tourney.LocationCity, ", ").concat(tourney.LocationState, " ").concat(tourney.LocationCountry)
          })]
        }), tourney.GoverningBodies.length > 0 && /*#__PURE__*/_jsx("div", {
          className: "flex w-full flex-row justify-center py-2",
          children: tourney.GoverningBodies.map(function (gBody) {
            var sanctioningBodyImgSrc = '';
            var rootImgName = "".concat(gBody.shortName.toLowerCase(), "_").concat(gBody.approvedStatus.toLowerCase());
            switch (rootImgName) {
              case 'paa_approved':
                sanctioningBodyImgSrc = paaApproved;
                break;
              case 'pco_approved':
                sanctioningBodyImgSrc = pcoApproved;
                break;
              case 'sp_approved':
                sanctioningBodyImgSrc = spApproved;
                break;
              case 'usap_approved':
                sanctioningBodyImgSrc = usapApproved;
                break;
              case 'ussp_approved':
                sanctioningBodyImgSrc = usspApproved;
                break;
              case 'paa_pending':
                sanctioningBodyImgSrc = paaPending;
                break;
              case 'pco_pending':
                sanctioningBodyImgSrc = pcoPending;
                break;
              case 'sp_pending':
                sanctioningBodyImgSrc = spPending;
                break;
              case 'usap_pending':
                sanctioningBodyImgSrc = usapPending;
                break;
              case 'ussp_pending':
                sanctioningBodyImgSrc = usspPending;
                break;
              case 'usap_mmp':
                sanctioningBodyImgSrc = usapMMP;
                break;
              case 'usap_noref':
                sanctioningBodyImgSrc = usapNoRef;
                break;
              default:
                sanctioningBodyImgSrc = '';
                break;
            }
            return /*#__PURE__*/_jsx("img", {
              width: 100,
              height: 100,
              alt: "".concat(gBody.shortName.toLowerCase(), "_logo"),
              src: sanctioningBodyImgSrc
            }, gBody.id);
          })
        }), !tourney.hideRegisteredPlayers && /*#__PURE__*/_jsx(EventCard.Footer, {
          children: /*#__PURE__*/_jsx("div", {
            className: isTourneyPPA() ? 'text-white' : "",
            children: /*#__PURE__*/_jsx(EventCard.PlayerCount, {
              count: tourney.RegistrationCount
            })
          })
        })]
      })]
    })
  }), tourney.TournamentID);
});
export default TourneyCard;