import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Checkbox.module.css';

type CheckboxSizeTypes = 'sm' | 'md';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  indeterminate?: boolean;
  size?: CheckboxSizeTypes;
  SupportingText?: string | (() => React.ReactNode);
  Text?: string | (() => React.ReactNode);
  wrapperClassname?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const {
      className,
      disabled,
      id,
      indeterminate,
      name,
      size = 'md',
      SupportingText,
      Text,
      value,
      wrapperClassname,
      ...rest
    } = props;

    const wrapperClasses = clsx(styles.wrapper, {
      [styles['wrapper--size-sm']]: size === 'sm',
      '!gap-0': !Text && !SupportingText,
    }, wrapperClassname);
    const checkboxClasses = clsx(
      styles.wrapper__checkbox,
      {
        [styles['wrapper__checkbox--indeterminate']]: indeterminate,
        [styles['wrapper__checkbox--size-sm']]: size === 'sm',
      },
      className,
    );

    const textClasses = clsx(styles.wrapper__text, {
      [styles['wrapper__text--size-sm']]: size === 'sm',
    });
    const supportingTextClasses = clsx(styles.wrapper__supporting__text, {
      [styles['wrapper__supporting__text--size-sm']]: size === 'sm',
    });

    return (
      <label className={wrapperClasses}>
        <input
          type="checkbox"
          className={checkboxClasses}
          disabled={disabled}
          id={`${name}-${id}`}
          name={name}
          ref={ref}
          value={value}
          {...rest}
        />
        <span>
          {Text &&
            (typeof Text === 'string' ? (
              <p className={textClasses}>{Text}</p>
            ) : (
              Text()
            ))}
          {SupportingText &&
            (typeof SupportingText === 'string' ? (
              <span className={supportingTextClasses}>{SupportingText}</span>
            ) : (
              SupportingText()
            ))}
        </span>
      </label>
    );
  },
);

export default Checkbox;
