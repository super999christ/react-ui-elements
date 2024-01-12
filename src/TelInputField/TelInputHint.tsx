import clsx from 'clsx';
import React from 'react';

import styles from './TelInputField.module.css';

interface TelInputHintProps {
  children: React.ReactNode;
  hasError?: boolean;
}

export const TelInputHint = ({ children, hasError }: TelInputHintProps) => {
  const hintClasses = clsx(styles.hint,
    {
      [styles['hint--no-error']]: !hasError,
      [styles['hint--has-error']]: hasError,
    },
  );

  return <div className={hintClasses}>{children}</div>;
};