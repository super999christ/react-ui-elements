import clsx from 'clsx';
import React from 'react';

import styles from './Badge.module.css';

interface BadgeIconProps extends React.HTMLProps<HTMLElement> {
  children: React.ReactNode;
  position: 'start' | 'end';
}

const BadgeIcon = React.forwardRef<HTMLElement, BadgeIconProps>(
  function BadgeIcon(props, propsRef) {
    const { children, position, onClick, ...rest } = props;

    const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (onClick) {
        e.stopPropagation();
        onClick(e);
      }
    };

    if (children && React.isValidElement(children)) {
      const badgeIconClasses = clsx(children.props.className, {
        [styles['badge--icon-prefix']]: position === 'start',
        [styles['badge--icon-suffix']]: position === 'end',
        [styles['badge--icon--hoverable']]: onClick,
      });

      return React.cloneElement(children as React.ReactElement<any>, {
        ref: propsRef,
        className: badgeIconClasses,
        onClick: handleClick,
        ...rest,
      });
    }

    return null;
  },
);

export interface BadgeProps {
  className?: string;
  icon?: React.ReactNode;
  label: string;
  onIconClick?: () => void;
  onClick?: () => void;
  prefixIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variation?: 'error' | 'gray' | 'primary' | 'success' | 'warning';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  function Badge(props, propsRef) {
    const {
      className,
      size,
      variation = 'gray',
      label,
      prefixIcon,
      icon,
      onClick,
      onIconClick,
      ...rest
    } = props;

    const badgeClasses = clsx(
      styles.badge,
      {
        [styles['badge--size-sm']]: size === 'sm',
        [styles['badge--size-md']]: size !== 'sm' && size !== 'lg',
        [styles['badge--size-lg']]: size === 'lg',
        [styles['badge--color-gray']]: variation === 'gray',
        [styles['badge--color-primary']]: variation === 'primary',
        [styles['badge--color-error']]: variation === 'error',
        [styles['badge--color-success']]: variation === 'success',
        [styles['badge--color-warning']]: variation === 'warning',
        [styles['badge--clickable']]: !!onClick,
      },
      className,
    );

    return (
      <div
        className={badgeClasses}
        ref={propsRef}
        onClick={onClick}
        aria-hidden="true"
        {...rest}
      >
        {prefixIcon && <BadgeIcon position="start">{prefixIcon}</BadgeIcon>}
        <span>{label}</span>
        {icon && (
          <BadgeIcon position="end" onClick={onIconClick}>
            {icon}
          </BadgeIcon>
        )}
      </div>
    );
  },
);

export default Badge;
