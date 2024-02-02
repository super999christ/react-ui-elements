import React from 'react';

import styles from './InputFieldWithDropdown.module.css';

interface InputFieldWithDropdownLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const InputFieldWithDropdownLabel = ({ children, ...rest }: InputFieldWithDropdownLabelProps) => (
  <label
    className={styles.label}
    {...rest}
  >
    {children}
  </label>
);