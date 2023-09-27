import React from 'react';
export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
    Avatar?: () => React.ReactNode;
    Badge?: () => React.ReactNode;
    children?: React.ReactNode;
    Dropdown?: () => React.ReactNode;
    SupportingText?: string | (() => React.ReactNode);
    Text: string | (() => React.ReactNode);
    withHeaderLine?: boolean;
}
declare const CardHeader: React.ForwardRefExoticComponent<Omit<CardHeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default CardHeader;
