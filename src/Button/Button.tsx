'use client';

import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondary-color'
  | 'tertiary'
  | 'tertiary-color'
  | 'link'
  | 'link-gray';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  destructive?: boolean;
  disabled?: boolean;
  prefixIcon?: React.ReactNode;
  size?: ButtonSize;
  suffixIcon?: React.ReactNode;
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      children,
      className,
      destructive,
      disabled,
      prefixIcon,
      size = 'md',
      suffixIcon,
      variant = 'primary',
      ...rest
    } = props;

    const buttonClasses = clsx(
      styles.button,
      {
        [styles['button--disabled']]: disabled,
        [styles['button--destructive']]: destructive,
        [styles['button--size-sm']]: size === 'sm',
        [styles['button--size-lg']]: size === 'lg',
        [styles['button--size-xl']]: size === 'xl',
        [styles['button--size-2xl']]: size === '2xl',
        [styles['button--primary']]: variant === 'primary',
        [styles['button--secondary']]: variant === 'secondary',
        [styles['button--secondary-color']]: variant === 'secondary-color',
        [styles['button--tertiary']]: variant === 'tertiary',
        [styles['button--tertiary-color']]: variant === 'tertiary-color',
        [styles['button--link']]: variant === 'link' || variant === 'link-gray',
        [styles['button--link-gray']]: variant === 'link-gray',
      },
      className,
    );

    return (
      <button
        type="button"
        className={buttonClasses}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {prefixIcon && (
          <span className={styles['button-prefix--icon']}>{prefixIcon}</span>
        )}
        {children}
        {suffixIcon && (
          <span className={styles['button-suffix--icon']}>{suffixIcon}</span>
        )}
      </button>
    );
  },
);

export default Button;
