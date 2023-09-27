import React from 'react';
export interface BadgeProps {
    className?: string;
    icon?: React.ReactNode;
    label: string;
    onIconClick?: () => void;
    onClick?: () => void;
    prefixIcon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variation?: 'error' | 'gray' | 'primary' | 'success' | 'warning';
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export default Badge;
