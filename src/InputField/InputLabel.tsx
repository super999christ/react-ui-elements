import React from 'react';

import styles from './InputField.module.css';

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const InputLabel = ({ children, ...rest }: InputLabelProps) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={styles.label}
    {...rest}
  >
    {children}
  </label>
);