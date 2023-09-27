import React from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'secondary-color' | 'tertiary' | 'tertiary-color' | 'link' | 'link-gray';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    destructive?: boolean;
    disabled?: boolean;
    prefixIcon?: React.ReactNode;
    size?: ButtonSize;
    suffixIcon?: React.ReactNode;
    variant?: ButtonVariant;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
