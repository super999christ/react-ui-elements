import React, { forwardRef } from 'react';

import type { AvatarProps } from '../../Avatar';
import Avatar from '../../Avatar';

interface PlayerAvatarProps extends AvatarProps {}

export const PlayerAvatar = forwardRef<HTMLDivElement, PlayerAvatarProps>(
  function PlayerAvatar(props, propRef) {
    return (
      <Avatar {...props} ref={propRef} className="border border-success-500" />
    );
  },
);
