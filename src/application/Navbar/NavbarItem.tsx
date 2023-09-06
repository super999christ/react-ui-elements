import React from 'react';
import clsx from 'clsx';
import styles from './Navbar.module.css';

interface NavbarItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  active?: boolean;
}

export const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
  function Item(props, propRef) {
    const { active, className, children, ...rest } = props;

    const navbarItemClasses = clsx(
      styles['item'],
      {
        [styles['item--active']]: active,
      },
      className
    );

    return (
      <div className={navbarItemClasses} ref={propRef} {...rest}>
        <div className="skew-x-12">{children}</div>
      </div>
    );
  }
);
