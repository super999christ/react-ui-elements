export interface PlayerInfo {
    id: number | string;
    firstName: string;
    lastName: string;
    profileImage?: string;
}
export interface ScoreInfo {
    value: number;
    winner: boolean;
}
export interface TeamInfo {
    players: PlayerInfo[];
    scores?: ScoreInfo[];
    matchCompletedType?: number;
    winningPercentage?: number;
}
