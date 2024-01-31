import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Radio.module.css';

type RadioSizeTypes = 'sm' | 'md';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: RadioSizeTypes;
  SupportingText?: string | (() => React.ReactNode);
  Text?: string | (() => React.ReactNode);
  wrapperClassname?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const {
      className,
      disabled,
      id,
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
    const radioClasses = clsx(
      styles.wrapper__radio,
      {
        [styles['wrapper__radio--size-sm']]: size === 'sm',
      },
      className,
    );

    const textClasses = clsx(styles.wrapper__text, {
      [styles['wrapper__text--size-sm']]: size === 'sm',
    });
    const supportingTextClasses = clsx(styles.wrapper__supporting__text, {
      [styles['wrapper__supporting__text--size-sm']]: size === 'sm',
    });

    const randomNumber = Math.random();

    return (
      <div className={wrapperClasses}>
        <input
          type="radio"
          className={radioClasses}
          disabled={disabled}
          id={id || `${randomNumber}`}
          name={name}
          ref={ref}
          value={value}
          {...rest}
        />
        <label htmlFor={id || `${randomNumber}`}>
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
        </label>
      </div>
    );
  },
);

export default Radio;
