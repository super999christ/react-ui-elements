import React from 'react';
type DrawerPositionTypes = 'left' | 'right';
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    onBackdropClick?: () => void;
    onClose?: () => void;
    open: boolean;
    position?: DrawerPositionTypes;
    title?: string;
    wrapperClassname?: string;
}
declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
export default Drawer;
