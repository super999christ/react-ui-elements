/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Menu.module.css';

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  helper?: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLElement>,
  ) => void;
  components?: {
    class?: string
  }
  value?: string | number;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(props, propRef) {
    const { children, disabled, helper, icon, isActive, onClick, ...rest } =
      props;

    const listItemClasses = clsx(styles.list__item, props.components?.class);
    const itemClasses = clsx(
      styles.item,
      {
        [styles['item--active']]: isActive,
        [styles['item--disabled']]: disabled,
      },
      props.className,
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
          <div className={styles.item__content}>
            {icon && <span className={styles.content__icon}>{icon}</span>}
            {children}
          </div>
          {helper && <div className={styles.item__description}>{helper}</div>}
        </div>
      </div>
    );
  },
);
