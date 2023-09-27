interface PlayerInterface {
    firstName: string;
    lastName: string;
    img?: string;
}
type TeamType = 'team1' | 'team2';
export interface ScoreInterface {
    team1: number;
    team2: number;
}
export interface MatchInterface {
    team1: PlayerInterface[];
    team2: PlayerInterface[];
    winner: TeamType;
    result: ScoreInterface[];
}
export interface MatchSideProps {
    match: MatchInterface;
    team: TeamType;
}
declare const MatchSide: ({ match, team }: MatchSideProps) => import("react/jsx-runtime").JSX.Element;
export default MatchSide;
