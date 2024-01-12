import React from 'react';

import styles from './TelInputField.module.css';

interface TelInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const TelInputLabel = ({ children, ...rest }: TelInputLabelProps) => (
  <label
    className={styles.label}
    {...rest}
  >
    {children}
  </label>
);