import React from 'react';
export interface CircleProps {
    color: string;
    diameter: number;
    percentage: number;
    strokeWidth: number;
}
type ProgressCircleShapeTypes = 'half-circle' | 'circle';
type ProgressCircleSizeTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
interface ProgressCircleProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    label?: string;
    progress?: number;
    shape?: ProgressCircleShapeTypes;
    size?: ProgressCircleSizeTypes;
}
declare const ProgressCircle: React.ForwardRefExoticComponent<Omit<ProgressCircleProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default ProgressCircle;
