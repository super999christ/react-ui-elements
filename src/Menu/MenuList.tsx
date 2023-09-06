import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Menu.module.css';

interface MenuListProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const MenuList = forwardRef<HTMLDivElement, MenuListProps>(
  function MenuList({ children, className, ...rest }, propRef) {
    const dropdownClasses = clsx(styles.menu, className);

    return (
      <div className={dropdownClasses} ref={propRef} {...rest}>
        {children}
      </div>
    );
  },
);
