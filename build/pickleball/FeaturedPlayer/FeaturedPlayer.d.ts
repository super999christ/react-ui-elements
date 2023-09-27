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
export interface FeaturedPlayerProps extends PlayerInterface {
    lastFeatured: boolean;
}
declare const FeaturedPlayer: ({ background, country, countryImg, img, name, points, ranking, sponsorLink, sponsorLogo, surname, lastFeatured, }: FeaturedPlayerProps) => import("react/jsx-runtime").JSX.Element;
export default FeaturedPlayer;
