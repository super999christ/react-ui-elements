interface PlayerInterface {
    background?: string;
    country: string;
    countryImg: string;
    img: string;
    name: string;
    points: string;
    ranking: string;
    sponsorLink: string;
    sponsorLogo: string;
    surname: string;
}
export interface FeaturedPlayersContainerProps {
    players: PlayerInterface[];
    seeAllLink?: string;
}
declare const FeaturedPlayersContainer: ({ players, seeAllLink, }: FeaturedPlayersContainerProps) => import("react/jsx-runtime").JSX.Element;
export default FeaturedPlayersContainer;
