interface ButtonInterface {
    link: string;
    text: string;
}
export interface ButtonsContainerProps {
    buttons: ButtonInterface[];
}
declare const ButtonsContainer: ({ buttons }: ButtonsContainerProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonsContainer;
