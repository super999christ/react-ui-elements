import clsx from 'clsx';
import React, { forwardRef, useRef } from 'react';

import styles from './InputField.module.css';

import { InputHint } from './InputHint';
import { InputLabel } from './InputLabel';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  hasError?: boolean;
  hint?: string;
  label?: string;
  PrefixIcon?: () => React.ReactNode;
  SuffixIcon?: () => React.ReactNode;
  withDivider?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    const { className, disabled, label, hasError, hint, PrefixIcon, SuffixIcon, withDivider, type = 'text', ...rest } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const inputContainerClasses = clsx(styles.input__container, {
      [styles['input__container--disabled']]: disabled,
      [styles['input__container--has-error']]: hasError,
    });
    const inputClasses = clsx(styles.input, {
      [styles['input--with-prefix-divider']]: PrefixIcon && withDivider,
      [styles['input--with-suffix-divider']]: SuffixIcon && withDivider,
    }, className);
    const prefixClasses = clsx(styles.prefix);
    const suffixClasses = clsx(styles.suffix);

    const handleIconClick = () => {
      const node = inputRef.current;
      if (node !== null) node.focus();
    };

    return (
      <div className={styles.container} onClick={() => handleIconClick()}>
        {label && <InputLabel htmlFor={rest.id}>{label}</InputLabel>}
        <div className={inputContainerClasses}>
          {PrefixIcon && <span className={prefixClasses}>{PrefixIcon()}</span>}
          <input 
            type={type}
            ref={(element) => {
              inputRef.current = element;
              if (typeof ref === "function") {
                ref(element);
              } else if(ref) { 
                ref.current = element;
              }
            }} 
            className={inputClasses}
            disabled={disabled}
            {...rest} 
          />
          {SuffixIcon && <span className={suffixClasses}>{SuffixIcon()}</span>}
        </div>
        {hint && <InputHint hasError={hasError}>{hint}</InputHint>}
      </div>
    );
  },
);

export default InputField;