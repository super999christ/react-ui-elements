import React from 'react';
type InputFieldSizeTypes = 'sm' | 'md';
export interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    destructive?: boolean;
    disabled?: boolean;
    ErrorMessage?: string | (() => React.ReactNode);
    HintMessage?: string | (() => React.ReactNode);
    Label?: string | (() => React.ReactNode);
    placeholder?: string;
    PrefixIcon?: () => React.ReactNode;
    size?: InputFieldSizeTypes;
    SuffixIcon?: () => React.ReactNode;
    value?: string | number | readonly string[];
}
declare const InputField: React.ForwardRefExoticComponent<InputFieldProps & React.RefAttributes<HTMLInputElement>>;
export default InputField;
