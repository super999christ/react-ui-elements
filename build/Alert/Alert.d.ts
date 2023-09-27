import React from 'react';
type AlertTypeTypes = 'default' | 'primary' | 'gray' | 'error' | 'warning' | 'success';
export interface AlertProps {
    children?: React.ReactNode;
    FeaturedIcon?: () => React.ReactNode;
    SupportingText?: string | (() => React.ReactNode);
    Text: string | (() => React.ReactNode);
    type?: AlertTypeTypes;
    onClose?: () => void;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export default Alert;
