type ImagePositionTypes = 'left' | 'right';
export interface TourTitleProps {
    image?: string;
    imagePosition?: ImagePositionTypes;
    title: string;
}
declare const TourTitle: ({ image, imagePosition, title, }: TourTitleProps) => import("react/jsx-runtime").JSX.Element;
export default TourTitle;
