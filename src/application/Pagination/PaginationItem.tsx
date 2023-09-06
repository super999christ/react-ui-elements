import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Pagination.module.css';

interface PaginationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  selected?: boolean;
}

const PaginationItem = forwardRef<HTMLButtonElement, PaginationItemProps>(
  (props, propRef) => {
    const { children, className, selected, type = 'button', ...rest } = props;

    const paginationItemClasses = clsx(
      styles['pagination--item'],
      {
        [styles['pagination--item-active']]: selected,
      },
      className
    );

    return (
      <button
        className={paginationItemClasses}
        ref={propRef}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default PaginationItem;
