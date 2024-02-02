import clsx from 'clsx';
import React from 'react';

import styles from './InputFieldWithDropdown.module.css';

interface InputFieldWithDropdownHintProps {
  children: React.ReactNode;
  hasError?: boolean;
}

export const InputFieldWithDropdownHint = ({ children, hasError }: InputFieldWithDropdownHintProps) => {
  const hintClasses = clsx(styles.hint,
    {
      [styles['hint--no-error']]: !hasError,
      [styles['hint--has-error']]: hasError,
    },
  );

  return <div className={hintClasses}>{children}</div>;
};