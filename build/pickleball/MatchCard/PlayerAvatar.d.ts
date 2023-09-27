import React from 'react';
import type { AvatarProps } from '../../Avatar';
interface PlayerAvatarProps extends AvatarProps {
}
export declare const PlayerAvatar: React.ForwardRefExoticComponent<Omit<PlayerAvatarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
