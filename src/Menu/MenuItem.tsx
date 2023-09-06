import React, { forwardRef } from 'react';
import styles from './Menu.module.css';
import clsx from 'clsx';

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  helper?: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLElement>
  ) => void;
  rootClassName?: string;
  value?: string | number;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(props, propRef) {
    const {
      children,
      className,
      disabled,
      helper,
      icon,
      isActive,
      onClick,
      ...rest
    } = props;

    const listItemClasses = clsx(styles['list__item'], props.rootClassName);
    const itemClasses = clsx(
      styles['item'],
      {
        [styles['item--active']]: isActive,
        [styles['item--disabled']]: disabled,
      },
      props.className
    );

    return (
      <div className={listItemClasses}>
        <div
          ref={propRef}
          tabIndex={disabled ? -1 : isActive ? 0 : -1}
          className={itemClasses}
          onClick={onClick}
          {...rest}
        >
          <div className={styles['item__content']}>
            {icon && <span className={styles['content__icon']}>{icon}</span>}
            <span className={styles['content__text']}>{children}</span>
          </div>
          {helper && (
            <div className={styles['item__description']}>{helper}</div>
          )}
        </div>
      </div>
    );
  }
);
