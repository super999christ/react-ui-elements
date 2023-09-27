import React from 'react';
export interface ErrorSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    centeredDesktop?: boolean;
    centeredMobile?: boolean;
    className?: string;
    heading: string;
    Image?: () => React.ReactNode;
    reverseOrderDesktop?: boolean;
    reverseOrderMobile?: boolean;
    Subheading?: string | (() => React.ReactNode);
    supportingText?: string;
}
declare const ErrorSection: React.ForwardRefExoticComponent<ErrorSectionProps & React.RefAttributes<HTMLDivElement>>;
export default ErrorSection;
