import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './InputField.module.css';

import { InputHint } from './InputHint';
import { InputLabel } from './InputLabel';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hint?: string;
  label?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    const { className, label, hasError, hint, type = 'text', ...rest } = props;

    const inputClasses = clsx(
      styles.input,
      {
        [styles['input--no-error']]:
          !hasError,
        [styles['input--has-error']]:
          hasError,
      },
      className,
    );

    return (
      <div className={styles.container}>
        {label && <InputLabel htmlFor={rest.id}>{label}</InputLabel>}
        <input type={type} ref={ref} className={inputClasses} {...rest} />
        {hint && <InputHint hasError={hasError}>{hint}</InputHint>}
      </div>
    );
  },
);

export default InputField;
