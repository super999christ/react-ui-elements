interface NewsListInterface {
    link: string;
    title: string;
}
export interface NewsListProps {
    newsList: NewsListInterface[];
    seeAllLink?: string;
}
declare const NewsList: ({ newsList, seeAllLink }: NewsListProps) => import("react/jsx-runtime").JSX.Element;
export default NewsList;
