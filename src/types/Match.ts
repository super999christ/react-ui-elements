export interface MatchTeamPlayer {
  playerId: string;
  firstName: string;
  lastName: string;
  suffixName: string;
  image: string;
}

export interface MatchTeam {
  isWinner?: boolean;
  percentage: number;
  players: MatchTeamPlayer[];
  retired?: boolean;
  withdrawn?: boolean;
  scores: number[];
}

export interface Match {
  id?: string;
  courtName?: string;
  eventTitle?: string;
  detailsURL?: string;
  gameOneEndDate?: Date;
  gameTwoEndDate?: Date;
  gameThreeEndDate?: Date;
  gameFourEndDate?: Date;
  gameFiveEndDate?: Date;
  matchNumber?: number;
  matchTimeStart?: string;
  matchStatus?: number;
  timezoneAbbreviation?: string;
  matchTime?: string;
  roundNumber?: string;
  tournamentTitle?: string;
  team1: MatchTeam;
  team2: MatchTeam;
  server?: number;
  serverFromTeam?: number;
  currentServingNumber?: number;
}
/*
  From protos:
  UNDEFINED_MATCH_STATUS = 0,
  SCHEDULED_MATCH_STATUS = 1,
  IN_PROGRESS_MATCH_STATUS = 2,
  DELAYED_MATCH_STATUS = 3,
  COMPLETED_MATCH_STATUS = 4,
  UNRECOGNIZED = -1,
*/
