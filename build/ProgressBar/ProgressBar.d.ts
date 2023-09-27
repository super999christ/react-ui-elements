import React from 'react';
type LabelPlacementTypes = 'bottom' | 'right';
export interface ProgressBarProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    label?: string;
    labelPlacement?: LabelPlacementTypes;
    progress?: number;
    progressColor?: string;
}
declare const ProgressBar: React.ForwardRefExoticComponent<Omit<ProgressBarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
