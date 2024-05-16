/* eslint-disable react/no-array-index-key */
import { faMoneyBill, faStar } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import moment from 'moment';
import React, { forwardRef } from 'react';

import { EventCard } from './EventCard';

const paaApproved =
  '/static/media/public/assets/sanctioning_bodies/paa_approved.png';
const paaPending =
  '/static/media/public/assets/sanctioning_bodies/paa_pending.png';
const pcoApproved =
  '/static/media/public/assets/sanctioning_bodies/pco_approved.png';
const pcoPending =
  '/static/media/public/assets/sanctioning_bodies/pco_pending.png';
const spApproved =
  '/static/media/public/assets/sanctioning_bodies/sp_approved.png';
const spPending =
  '/static/media/public/assets/sanctioning_bodies/sp_pending.png';
const usapApproved =
  '/static/media/public/assets/sanctioning_bodies/usap_approved.png';
const usapMMP = '/static/media/public/assets/sanctioning_bodies/usap_mmp.png';
const usapNoRef =
  '/static/media/public/assets/sanctioning_bodies/usap_noref.png';
const usapPending =
  '/static/media/public/assets/sanctioning_bodies/usap_pending.png';
const usspApproved =
  '/static/media/public/assets/sanctioning_bodies/ussp_approved.png';
const usspPending =
  '/static/media/public/assets/sanctioning_bodies/ussp_pending.png';

const getTourneyLabelColorClass = (tourney: TournamentFlatDataSearch) => {
  if (tourney.CancelTourney) return '!bg-[#EA5455]'; // danger-500

  if (
    moment(tourney.TourneyToDate)
      .utcOffset(
        tourney.TimeZoneUTCOffset > 14 || tourney.TimeZoneUTCOffset < -12
          ? tourney.TimeZoneUTCOffset / 3600
          : tourney.TimeZoneUTCOffset,
      )
      .isBefore(moment.utc())
  )
    return '!bg-[#141C2E]'; // primary-500

  if (tourney.IsRegClosed) return '!bg-[#1E9453]'; // success-700

  if (tourney.CostRegistrationCurrent > 0) return '!bg-[#28C76F]'; // success-500

  return '!bg-[#79BFD5]'; // secondary-500
};

export function renderTourneyCardLabels(
  tourney: TournamentFlatDataSearch,
  rounded: boolean = true,
) {
  const htmlToRender = [];
  if (tourney.CancelTourney) {
    htmlToRender.push(
      <div
        className={`tracking-widertext-white px-4 py-1 text-center text-xs font-semibold text-white ${
          rounded ? 'rounded-t-md' : ''
        } ${getTourneyLabelColorClass(tourney)}`}
      >
        Cancelled
      </div>,
    );
  } else if (
    moment(tourney.TourneyToDate)
      .utcOffset(
        tourney.TimeZoneUTCOffset > 14 || tourney.TimeZoneUTCOffset < -12
          ? tourney.TimeZoneUTCOffset / 3600
          : tourney.TimeZoneUTCOffset,
      )
      .isBefore(moment.utc())
  ) {
    htmlToRender.push(
      <div
        className={`tracking-widertext-white ${getTourneyLabelColorClass(
          tourney,
        )} px-4 py-1 text-center text-xs font-semibold text-white ${
          rounded ? 'rounded-t-md' : ''
        }`}
      >
        Completed
      </div>,
    );
  } else if (tourney.IsRegClosed) {
    htmlToRender.push(
      <div
        className={`tracking-widertext-white ${getTourneyLabelColorClass(
          tourney,
        )} px-4 py-1 text-center text-xs font-semibold text-white ${
          rounded ? 'rounded-t-md' : ''
        }`}
      >
        Reg. Closed
      </div>,
    );
  } else if (tourney.CostRegistrationCurrent > 0) {
    htmlToRender.push(
      <div
        className={`tracking-widertext-white ${getTourneyLabelColorClass(
          tourney,
        )} px-4 py-1 text-center text-xs font-semibold text-white ${
          rounded ? 'rounded-t-md' : ''
        }`}
      >
        {`USD $${tourney.CostRegistrationCurrent.toFixed(2)}`}
      </div>,
    );
  } else if (tourney.CostFeeOnEvents) {
    htmlToRender.push(
      <div
        className={`tracking-widertext-primary-500 text-white ${getTourneyLabelColorClass(
          tourney,
        )} px-4 py-1 text-center text-xs font-semibold ${
          rounded ? 'rounded-t-md' : ''
        }`}
      >
        Cost Per Event
      </div>,
    );
  } else {
    htmlToRender.push(
      <div
        className={`tracking-widertext-primary-500 text-white ${getTourneyLabelColorClass(
          tourney,
        )} px-4 py-1 text-center text-xs font-semibold ${
          rounded ? 'rounded-t-md' : ''
        }`}
      >
        Free
      </div>,
    );
  }
  return htmlToRender;
}

export interface TourneyGoverningBodies {
  id: number;
  approvedStatus: string;
  sanctionLevelId: string;
  shortName: string;
}

export interface TournamentFlatDataSearch {
  TournamentID: string;
  ClubID: string;
  Platform: string;
  DetailsURL: string;
  CancelTourney: boolean;
  CostFeeOnEvents: boolean;
  CostRegistrationCurrent: number;
  TourneyFromDate: Date | undefined;
  TourneyToDate: Date | undefined;
  IsPrizeMoney: boolean;
  IsRegClosed: boolean;
  LocationCity: string;
  LocationCountry: string;
  LocationState: string;
  LocationStreetAddress: string;
  LocationVenue: string;
  LocationZip: string;
  Logo: string;
  OnlineRegistrationActive: boolean;
  RegistrationCount: number;
  RegistrationDateClosed: Date | undefined;
  RegistrationDateOpen: Date | undefined;
  TimeZoneAbbreviation: string;
  Title: string;
  IsFeatured: boolean;
  Longitude: number;
  Latitude: number;
  FormatCode: string;
  TimeZoneUTCOffset: number;
  IsFeaturedPlus: boolean;
  /** Contact form */
  ContactFormRegistration: string;
  ContactFormMyWebsiteAccount: string;
  ContactFormRefunds: string;
  ContactFormOther: string;
  ContactFormRequestPartnerChange: string;
  ContactFormVolunteer: string;
  ContactFormReferee: string;
  ContactFormVendor: string;
  ContactFormSponsor: string;
  ContactFormPublicDisplayName: string;
  ContactFormPublicDisplayEmail: string;
  ContactFormPublicDisplayPhone: string;
  DateArchived: Date | undefined;
  DateShowToPublic: Date | undefined;
  DateHideFromPublic: Date | undefined;
  /** Dropped field, it is mapped manualy without GORM. Used only for request/response logic. */
  GoverningBodies: TourneyGoverningBodies[];
  PBTournamentCode: string;
  IsTest: boolean;
  IsAdvertiseOnly: boolean;
  RefereeAppCode?: string;
  SendPreliminaryToGenius?: boolean;
  DateCompleted: Date | undefined;
  UsingGeniusSports: boolean;
  ClubSanctionLevelId: string;
  dateCreated: Date | undefined;
  dateUpdated: Date | undefined;
  hideRegisteredPlayers: boolean;
  hideTourneyOnSearchPage: boolean;
  lockDate: Date | undefined;
  ianaTzIdentifier?: string;
  timezoneId?: number;
}

export interface TourneyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  tourney: TournamentFlatDataSearch;
  onTourneyClick: (tourney: TournamentFlatDataSearch) => void;
}

const TourneyCard = forwardRef<HTMLDivElement, TourneyCardProps>(
  function TourneyCard(props, ref) {
    const { tourney, onTourneyClick, className, ...rest } = props;

    const wrapperClasses = clsx('relative flex w-full max-w-lg', className);

    const renderLabels = React.useMemo(
      () => renderTourneyCardLabels(tourney),
      [tourney],
    );

    const isTourneyPPA = (): boolean => {
      return tourney.ClubID === '80f17003-cd92-4fc4-84e4-06d38e096042';
    };

    const getCludIDBg = (): string => {
      return isTourneyPPA() ? 'bg-[#091A7A]' : 'bg-white'; // primary2-900
    };

    return (
      <div
        key={tourney.TournamentID}
        className={wrapperClasses}
        ref={ref}
        {...rest}
      >
        <EventCard onClick={() => onTourneyClick(tourney)}>
          <div className="relative">
            {tourney.IsFeatured && (
              <div className="">
                <FontAwesomeIcon
                  icon={faStar}
                  className="absolute left-1 top-1/2 mt-[-7px] text-sm text-white"
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Featured tournament."
                />
              </div>
            )}
            {renderLabels.map((item, index) => (
              <React.Fragment key={index}>{item}</React.Fragment>
            ))}
          </div>
          <div className="relative">
            <EventCard.Image image={tourney.Logo} />
            {tourney.IsPrizeMoney && (
              <div
                className={clsx(
                  'absolute -bottom-4 right-2 flex h-8 w-8 items-center justify-center rounded-full',
                  getTourneyLabelColorClass(tourney),
                )}
              >
                <FontAwesomeIcon icon={faMoneyBill} className="text-white" />
              </div>
            )}
          </div>{' '}
          <div
            className={clsx('flex h-full flex-col rounded-b-md', getCludIDBg())}
          >
            <EventCard.Content>
              <p
                className={clsx(
                  'mb-1 text-sm',
                  isTourneyPPA() ? 'text-[#ADC8FF]' : 'text-gray-600', // primary2-200
                )}
              >
                {`${moment(tourney.TourneyFromDate).format(
                  'MMM DD, YYYY',
                )} - ${moment(tourney.TourneyToDate).format('MMM DD, YYYY')}`}
              </p>
              <p
                className={clsx(
                  'line-clamp-3 font-bold uppercase leading-6',
                  isTourneyPPA() ? 'text-white' : 'text-gray-900',
                )}
              >
                {tourney.Title}
              </p>
              <p
                className={clsx(
                  'mt-auto flex items-center pt-2 text-sm',
                  isTourneyPPA() ? 'text-white' : 'text-gray-600',
                )}
              >
                {`${tourney.LocationCity}, ${tourney.LocationState} ${tourney.LocationCountry}`}
              </p>
            </EventCard.Content>
            {tourney.GoverningBodies.length > 0 && (
              <div className="flex w-full flex-row justify-center py-2">
                {tourney.GoverningBodies.map((gBody) => {
                  let sanctioningBodyImgSrc = '';
                  const rootImgName = `${gBody.shortName.toLowerCase()}_${gBody.approvedStatus.toLowerCase()}`;
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
                  return (
                    <img
                      width={100}
                      height={100}
                      alt={`${gBody.shortName.toLowerCase()}_logo`}
                      key={gBody.id}
                      src={sanctioningBodyImgSrc}
                    />
                  );
                })}
              </div>
            )}
            {!tourney.hideRegisteredPlayers && (
              <EventCard.Footer>
                <div className={clsx(isTourneyPPA() ? 'text-white' : '')}>
                  <EventCard.PlayerCount count={tourney.RegistrationCount} />
                </div>
              </EventCard.Footer>
            )}
          </div>
        </EventCard>
      </div>
    );
  },
);

export default TourneyCard;
