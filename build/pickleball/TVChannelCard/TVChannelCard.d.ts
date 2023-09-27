export interface TVChannelCardProps {
    channelName: string;
    channelLogo: string;
    channelLink: string;
    dateString: string;
    matches: string[];
}
declare const TVChannelCard: ({ channelName, channelLogo, channelLink, dateString, matches, }: TVChannelCardProps) => import("react/jsx-runtime").JSX.Element;
export default TVChannelCard;
