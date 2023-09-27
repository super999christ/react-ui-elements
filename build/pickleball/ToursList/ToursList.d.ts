interface TourInterface {
    link: string;
    logo: string;
    name: string;
}
export interface ToursListProps {
    tours: TourInterface[];
    mainLogo?: string;
}
declare const ToursList: ({ tours, mainLogo }: ToursListProps) => import("react/jsx-runtime").JSX.Element;
export default ToursList;
