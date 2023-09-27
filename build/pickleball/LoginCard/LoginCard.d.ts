import React from 'react';
export interface LoginCardProps {
    background?: string;
    button1Text: string;
    button2Text: string;
    headlineText?: string;
    learnMoreLink?: string;
    Logo: string | (() => React.ReactNode);
    text: string;
}
declare const LoginCard: ({ background, button1Text, button2Text, headlineText, learnMoreLink, Logo, text, }: LoginCardProps) => import("react/jsx-runtime").JSX.Element;
export default LoginCard;
