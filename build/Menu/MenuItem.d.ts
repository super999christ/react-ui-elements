import React from 'react';
export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    disabled?: boolean;
    helper?: React.ReactNode;
    icon?: React.ReactNode;
    isActive?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void;
    rootClassName?: string;
    value?: string | number;
}
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLDivElement>>;
