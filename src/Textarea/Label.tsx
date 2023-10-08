import React from 'react';

import styles from './TextArea.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label = ({ children, ...rest }: LabelProps) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={styles.label}
    {...rest}
  >
    {children}
  </label>
);
