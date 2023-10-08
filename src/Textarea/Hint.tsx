import clsx from 'clsx';
import React from 'react';

import styles from './TextArea.module.css';

interface HintProps {
  children: React.ReactNode;
  hasError?: boolean;
}

export const Hint = ({ children, hasError }: HintProps) => {
  const hintClasses = clsx(styles.hint,
    {
      [styles['hint--no-error']]: !hasError,
      [styles['hint--has-error']]: hasError,
    },
  );

  return <div className={hintClasses}>{children}</div>;
};
