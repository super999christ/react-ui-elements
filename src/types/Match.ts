export interface MatchTeamPlayer {
  playerId: string
  name: string
  image: string
}

export interface MatchTeam {
  isWinner: boolean
  percentage: number
  players: MatchTeamPlayer[]
  retired?: boolean
  withdrawn?: boolean
  scores: number[]
}

export interface Match {
  courtNumber?: string;
  eventTitle?: string;
  matchNumber?: number;
  matchTimeStart?: string;
  timezoneAbbreviation?: string
  matchTime?: string
  roundNumber?: number;
  tournamentTitle?: string;
  team1: MatchTeam
  team2: MatchTeam
}
