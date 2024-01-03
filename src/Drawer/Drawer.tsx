/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faXmark } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import Button from '../Button';
import styles from './Drawer.module.css';

type DrawerPositionTypes = 'left' | 'right' | 'top';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  onBackdropClick?: () => void;
  onClose?: () => void;
  open: boolean;
  position?: DrawerPositionTypes;
  title?: string;
  wrapperClassname?: string;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(props, ref) {
    const {
      children,
      className,
      onBackdropClick,
      onClose,
      open,
      position = 'right',
      title,
      wrapperClassname,
      ...rest
    } = props;

    const backdropClasses = clsx(
      styles.backdrop,
      {
        [styles['backdrop--open']]: open,
      },
      className,
    );
    const wrapperClasses = clsx(
      styles.wrapper,
      {
        [styles['wrapper--position-left']]: position === 'left',
        [styles['wrapper--position-top']]: position === 'top',
        [styles['wrapper--open']]: open && position === 'right',
        [styles['wrapper--open-position-left']]: open && position === 'left',
        [styles['wrapper--open-position-top']]: open && position === 'top',
      },
      wrapperClassname,
    );
    const headerClasses = clsx(styles.header, {
      [styles['header--no-title']]: !title,
    });
    const titleClasses = clsx(styles.title);
    const buttonClasses = clsx(styles.button);
    const closeIconClasses = clsx(styles.close__icon);

    return (
      <div
        onClick={() => open && onBackdropClick && onBackdropClick()}
        className={backdropClasses}
        ref={ref}
        {...rest}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className={wrapperClasses}
        >
          {onClose && (
            <div className={headerClasses}>
              {title && <h1 className={titleClasses}>{title}</h1>}
              <Button
                onClick={() => onClose()}
                variant="secondary-color"
                className={buttonClasses}
              >
                <FontAwesomeIcon icon={faXmark} className={closeIconClasses} />
              </Button>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  },
);

export default Drawer;
