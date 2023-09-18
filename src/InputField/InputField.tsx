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
  Label?: string | (() => React.ReactNode);
  placeholder?: string;
  PrefixIcon?: () => React.ReactNode;
  size?: InputFieldSizeTypes;
  SuffixIcon?: () => React.ReactNode;
  value?: string | number | readonly string[];
}

// NOTE: If you want to control the width of the InputField, wrap it in a div and give a width to that div
// Example: <div classname='w-[320px]'><InputField /></div>
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    const {
      className,
      destructive,
      disabled,
      ErrorMessage,
      HintMessage,
      id = 'inputField',
      Label,
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
        {Label &&
          (typeof Label === 'string' ? (
            <label className={labelClasses} htmlFor={id}>
              {Label}
            </label>
          ) : (
            Label()
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
