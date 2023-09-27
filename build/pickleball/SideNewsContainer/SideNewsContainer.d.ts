interface NewsInterface {
    description?: string;
    image?: string;
    time?: string;
    title: string;
}
export interface SideNewsContainerProps {
    news: NewsInterface[];
}
declare const SideNewsContainer: ({ news }: SideNewsContainerProps) => import("react/jsx-runtime").JSX.Element;
export default SideNewsContainer;
