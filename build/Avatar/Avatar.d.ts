import React from 'react';
export type AvatarSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export interface AvatarProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    active?: boolean;
    customIconRender?: () => React.ReactNode;
    customImageRender?: (imageUrl: string) => React.ReactNode;
    focusable?: boolean;
    imageUrl?: string;
    onlineIndicator?: React.ReactNode | boolean;
    size?: AvatarSizeTypes;
}
declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
