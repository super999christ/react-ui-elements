import React from 'react';
type NotificationTypeTypes = 'image' | 'avatar' | 'primary-icon' | 'gray-icon' | 'progress-indicator' | 'error-icon' | 'warning-icon' | 'success-icon' | 'no-icon';
export interface NotificationProps extends React.HTMLProps<HTMLDivElement> {
    Avatar?: () => React.ReactNode;
    children?: React.ReactNode;
    CustomIcon?: () => React.ReactNode;
    imageAlt?: string;
    imageLink?: string;
    onClose?: () => void;
    ProgressIndicator?: () => React.ReactNode;
    SupportingText?: string | (() => React.ReactNode);
    Text: string | (() => React.ReactNode);
    time?: string;
    type?: NotificationTypeTypes;
}
declare const Notification: React.ForwardRefExoticComponent<Omit<NotificationProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Notification;
