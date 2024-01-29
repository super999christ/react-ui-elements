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
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  function ColorPicker(props, ref) {
    const { className, color, setColor, ...rest } = props;
    const containerClasses = clsx(styles.container, className);
    const colorClasses = clsx(styles.color);
    const inputClasses = clsx(styles.input);
    const hashClasses = clsx(styles.hash);

    const colorPickerValue = color && color.length === 7 && checkIsValid(color) ? color : undefined;
    const inputFieldValue = color ? color?.substring(1) : setColor ? '' : undefined;

    return (
      <div className={containerClasses} ref={ref}>
        <div className={colorClasses}>
          <input
            type="color"
            className={inputClasses}
            value={colorPickerValue}
            onChange={(e) => setColor ? setColor(e.target.value) : undefined}
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
              else if (setColor) {
                setColor(`#${e.target.value}`);
              }
            }}
            value={inputFieldValue}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

export default ColorPicker;
