import { faUser } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Avatar.module.css';

export type AvatarSizeTypes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export interface AvatarProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  active?: boolean;
  customIconRender?: () => React.ReactNode;
  customImageRender?: (imageUrl: string) => React.ReactNode;
  focusable?: boolean;
  imageUrl?: string;
  onlineIndicator?: React.ReactNode | boolean;
  size?: AvatarSizeTypes;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, propsRef) {
    const {
      active = false,
      className,
      customIconRender,
      customImageRender,
      imageUrl,
      focusable = false,
      onlineIndicator,
      size = 'md',
      ...rest
    } = props;

    const avatarContainerClasses = clsx(styles['avatar-root'], {
      [styles['avatar--size-xs']]: size === 'xs',
      [styles['avatar--size-sm']]: size === 'sm',
      [styles['avatar--size-md']]: size === 'md',
      [styles['avatar--size-lg']]: size === 'lg',
      [styles['avatar--size-xl']]: size === 'xl',
      [styles['avatar--size-2xl']]: size === '2xl',
      [styles['avatar--size-3xl']]: size === '3xl',
      [styles['avatar--size-4xl']]: size === '4xl',
    });
    const avatarClasses = clsx(
      styles.avatar,
      {
        [styles['avatar--focusable-active']]: active,
        [styles['avatar--focusable']]: focusable,
      },
      className,
    );
    const indicatorClasses = clsx(styles['avatar--indicator'], {
      [styles['avatar--indicator-online']]: onlineIndicator === true,
      [styles['avatar--indicator-offline']]: onlineIndicator === false,
    });

    const renderOnlineIndicator = () => {
      if (
        typeof onlineIndicator === 'boolean' &&
        onlineIndicator !== undefined
      ) {
        return <div className={indicatorClasses} />;
      } else {
        return onlineIndicator
      }

      return null;
    };

    const renderImage = () => {
      if (imageUrl) {
        if (customImageRender) {
          return customImageRender(imageUrl);
        }

        return (
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        );
      }

      if (customIconRender) return customIconRender();

      return (
        <div className={styles['avatar--placeholder']}>
          <FontAwesomeIcon icon={faUser} className="text-gray-700" />
        </div>
      );
    };

    return (
      <div className={avatarContainerClasses}>
        <div
          className={avatarClasses}
          ref={propsRef}
          tabIndex={focusable ? 0 : -1}
          role="button"
          {...rest}
        >
          {renderImage()}
        </div>
        {renderOnlineIndicator()}
      </div>
    );
  },
);

export default Avatar;
