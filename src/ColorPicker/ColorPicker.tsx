import clsx from 'clsx';
import React, { forwardRef } from 'react';

import InputField from '../InputField';
import styles from './ColorPicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/pro-solid-svg-icons';

const arrayOfValidLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const checkIsValid = (color: string) => {
  for (let i = 0; i < color.length; i++) {
    if (i === 0 && color[i] === '#') continue;
    else if (!arrayOfValidLetters.includes(color[i].toLowerCase())) {
      return false;
    }
  }

  return true;
}

export interface ColorPickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
  setColor?: (color: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  function ColorPicker(props, ref) {
    const { className, color, setColor, onChange, ...rest } = props;
    const containerClasses = clsx(styles.container, className);
    const colorClasses = clsx(styles.color);
    const inputClasses = clsx(styles.input);
    const hashClasses = clsx(styles.hash);

    return (
      <div className={containerClasses} ref={ref}>
        <div className={colorClasses}>
          <input
            type="color"
            className={inputClasses}
            onChange={(e) => onChange ? onChange(e) : setColor ? setColor(e.target.value) : undefined}
          />
        </div>
        <div className='w-full'>
          <InputField
            maxLength={6}
            label="Color"
            PrefixIcon={() => <FontAwesomeIcon className={hashClasses} icon={faHashtag} size="xs" />}
            withDivider
            onChange={(e) => {
              if (!checkIsValid(e.target.value)) return;
              else if (onChange) {
                onChange(e);
              } else if (setColor) {
                setColor(`#${e.target.value}`);
              }
            }}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

export default ColorPicker;
