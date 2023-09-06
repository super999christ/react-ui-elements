/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faXmark } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import Button from '../Button';
import styles from './Drawer.module.css';

type DrawerPositionTypes = 'left' | 'right';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  disableCloseOnBackdropClick?: boolean;
  onClose?: () => void;
  open: boolean;
  position?: DrawerPositionTypes;
  Title?: string | (() => React.ReactNode);
  wrapperClassname?: string;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer(props, ref) {
    const {
      children,
      className,
      disableCloseOnBackdropClick = false,
      onClose,
      open,
      position = 'right',
      Title,
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
        [styles['wrapper--open']]: open && position === 'right',
        [styles['wrapper--open-position-left']]: open && position === 'left',
      },
      wrapperClassname,
    );
    const headerClasses = clsx(styles.header, {
      [styles['header--no-title']]: !Title,
    });
    const titleClasses = clsx(styles.title);
    const buttonClasses = clsx(styles.button);
    const closeIconClasses = clsx(styles.close__icon);

    return (
      <div
        onClick={() => {
          if (disableCloseOnBackdropClick) return;
          if (open && onClose) onClose();
        }}
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
              {Title &&
                (typeof Title === 'string' ? (
                  <h1 className={titleClasses}>{Title}</h1>
                ) : (
                  Title()
                ))}
              <Button
                onClick={() => onClose && onClose()}
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
