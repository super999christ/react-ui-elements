import React from 'react';

import styles from './Select.module.css';

interface SelectLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const SelectLabel = ({ children, ...rest }: SelectLabelProps) => (
  <label
    className={styles.label}
    {...rest}
  >
    {children}
  </label>
);