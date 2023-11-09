import React, { forwardRef } from 'react';
import clsx from 'clsx';

import Button, { ButtonVariant } from './../Button';

import styles from './Tabs.module.css';

export type TabVariant = 'primary' | 'gray' | 'underline' | 'underline-filled' | 'white-border';
export type TabSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TabIconPosition = 'prefix' | 'suffix';

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  size: TabSize;
  value: string;
  variant: TabVariant;
  icon?: React.ReactNode;
  iconPosition?: TabIconPosition;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  function Tab(props, ref) {
    const {
      active,
      children,
      className,
      icon,
      iconPosition = 'suffix',
      size = 'sm',
      value,
      variant = 'primary',
      ...rest
    } = props;

    let buttonVariant: ButtonVariant = active ? 'secondary-color' : 'tertiary-color';
    if (variant === 'gray') {
      buttonVariant = 'tertiary-color';
    } else {
      buttonVariant = 'tertiary-color';
    }

    const buttonClasses = clsx({
      [styles['button--primary']]: !active && variant === 'primary',
      [styles['button--primary-active']]: active && variant === 'primary',
      [styles['button--gray']]: !active && variant === 'gray',
      [styles['button--gray-active']]: active && variant === 'gray',
      [styles['button--white-border']]: !active && variant === 'white-border',
      [styles['button--white-border-active']]: active && variant === 'white-border',
      [styles['button--underline']]: !active && variant === 'underline',
      [styles['button--underline-active']]: active && variant === 'underline',
      [styles['button--underline-filled']]: !active && variant === 'underline-filled',
      [styles['button--underline-filled-active']]: active && variant === 'underline-filled',
    }, className);
  
    return (
      <Button
        className={buttonClasses}
        prefixIcon={icon && iconPosition && iconPosition === 'prefix' ? icon : undefined}
        size={size}
        suffixIcon={icon && iconPosition && iconPosition === 'suffix' ? icon : undefined}
        value={value}
        variant={buttonVariant}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

export default Tab;
