export interface NewsCardProps {
    description?: string;
    image?: string;
    time?: string;
    title: string;
    video?: boolean;
}
declare const NewsCard: ({ description, image, time, title, video, }: NewsCardProps) => import("react/jsx-runtime").JSX.Element;
export default NewsCard;
