import React from 'react';
type RadioSizeTypes = 'sm' | 'md';
export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    name?: string;
    size?: RadioSizeTypes;
    SupportingText?: string | (() => React.ReactNode);
    Text?: string | (() => React.ReactNode);
    value?: string;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
