import React from 'react';
type SwitchSize = 'xs' | 'sm' | 'md';
export interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
    id: string;
    offset?: number;
    onChange?: (checked: boolean, event: React.SyntheticEvent<Element, MouseEvent | KeyboardEvent> | React.ChangeEvent<Element> | MouseEvent, id: string) => void;
    size?: SwitchSize;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
