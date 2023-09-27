interface SocialMediaInterface {
    link: string;
    name: string;
}
export interface SocialMediaProps {
    socialMedias: SocialMediaInterface[];
}
declare const SocialMedia: ({ socialMedias }: SocialMediaProps) => import("react/jsx-runtime").JSX.Element;
export default SocialMedia;
