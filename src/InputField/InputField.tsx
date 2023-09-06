import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './InputField.module.css';

type InputFieldSizeTypes = 'sm' | 'md';

export interface InputFieldProps
  extends React.HTMLAttributes<HTMLInputElement> {
  destructive?: boolean;
  disabled?: boolean;
  ErrorMessage?: string | (() => React.ReactNode);
  HintMessage?: string | (() => React.ReactNode);
  label?: string | (() => React.ReactNode);
  placeholder?: string;
  PrefixIcon?: () => React.ReactNode;
  size?: InputFieldSizeTypes;
  SuffixIcon?: () => React.ReactNode;
  value?: string | number | readonly string[];
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    const {
      className,
      destructive,
      disabled,
      ErrorMessage,
      HintMessage,
      id = 'inputField',
      label,
      placeholder,
      PrefixIcon,
      size = 'md',
      SuffixIcon,
      value,
      ...rest
    } = props;

    const wrapperClasses = clsx(styles.wrapper);
    const labelClasses = clsx(styles.wrapper__label);
    const inputFieldWrapperClasses = clsx(
      styles.wrapper__input__field__wrapper,
      {
        [styles['wrapper__input__field__wrapper--disabled']]: disabled,
        [styles['wrapper__input__field__wrapper--destructive']]: destructive,
        [styles['wrapper__input__field__wrapper--size-sm']]: size === 'sm',
      },
    );
    const inputFieldClasses = clsx(
      styles.wrapper__input__field__wrapper__input__field,
      className,
    );
    const errorClasses = clsx(styles.wrapper__error);
    const hintClasses = clsx(styles.wrapper__hint);

    return (
      <div className={wrapperClasses}>
        {label &&
          (typeof label === 'string' ? (
            <label className={labelClasses} htmlFor={id}>
              {label}
            </label>
          ) : (
            label()
          ))}
        <div className={inputFieldWrapperClasses}>
          {PrefixIcon && PrefixIcon()}
          <input
            className={inputFieldClasses}
            disabled={disabled}
            id={id}
            placeholder={placeholder}
            ref={ref}
            type="text"
            value={value}
            {...rest}
          />
          {SuffixIcon && SuffixIcon()}
        </div>
        {destructive &&
          ErrorMessage &&
          (typeof ErrorMessage === 'string' ? (
            <p className={errorClasses}>{ErrorMessage}</p>
          ) : (
            ErrorMessage()
          ))}
        {!destructive &&
          HintMessage &&
          (typeof HintMessage === 'string' ? (
            <p className={hintClasses}>{HintMessage}</p>
          ) : (
            HintMessage()
          ))}
      </div>
    );
  },
);

export default InputField;
