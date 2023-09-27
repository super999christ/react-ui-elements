interface Result {
    score: number;
    winner: boolean;
}
export interface TeamPlayerInfo {
    firstName?: string;
    fullName?: string;
    image?: string;
    lastName?: string;
}
export interface Team {
    players: TeamPlayerInfo[];
    probablity: number;
    results: Result[];
}
export declare const MatchCardTeam: ({ results }: Team) => import("react/jsx-runtime").JSX.Element;
export {};
