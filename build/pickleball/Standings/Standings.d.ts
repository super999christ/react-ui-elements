interface StandingsRow {
    img: string;
    last10Loses: string;
    last10Wins: string;
    loses: string;
    name: string;
    surname: string;
    wins: string;
}
export interface StandingsProps {
    rows: StandingsRow[];
    viewFullRankingLink?: string;
}
declare const Standings: ({ rows, viewFullRankingLink }: StandingsProps) => import("react/jsx-runtime").JSX.Element;
export default Standings;
