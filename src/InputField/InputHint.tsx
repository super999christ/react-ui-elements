import clsx from 'clsx';
import React from 'react';

import styles from './InputField.module.css';

interface InputHintProps {
  children: React.ReactNode;
  hasError?: boolean;
}

export const InputHint = ({ children, hasError }: InputHintProps) => {
  const hintClasses = clsx(styles.hint,
    {
      [styles['hint--no-error']]: !hasError,
      [styles['hint--has-error']]: hasError,
    },
  );

  return <div className={hintClasses}>{children}</div>;
};