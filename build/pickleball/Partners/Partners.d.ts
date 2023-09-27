interface PartnerInterface {
    link: string;
    logo: string;
}
export interface PartnersProps {
    partners: PartnerInterface[];
}
declare const Partners: ({ partners }: PartnersProps) => import("react/jsx-runtime").JSX.Element;
export default Partners;
