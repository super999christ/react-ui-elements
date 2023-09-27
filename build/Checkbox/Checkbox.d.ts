import React from 'react';
type CheckboxSizeTypes = 'sm' | 'md';
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    size?: CheckboxSizeTypes;
    SupportingText?: string | (() => React.ReactNode);
    Text?: string | (() => React.ReactNode);
    value?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
