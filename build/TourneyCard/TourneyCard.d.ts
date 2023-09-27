import React from 'react';
export declare function renderTourneyCardLabels(tourney: TournamentFlatDataSearch, rounded?: boolean): import("react/jsx-runtime").JSX.Element[];
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
declare const TourneyCard: React.ForwardRefExoticComponent<TourneyCardProps & React.RefAttributes<HTMLDivElement>>;
export default TourneyCard;
