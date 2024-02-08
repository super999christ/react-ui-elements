import clsx from 'clsx';
import React, { forwardRef } from 'react';

import InputField from '../InputField';
import styles from './ColorPicker.module.css';

const arrayOfValidLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const checkIsValid = (color: string) => {
  console.log('color', color);
  for (let i = 0; i < color.length; i++) {
    if (i === 0 && color[i] === '#') continue;
    else if (i === 0 && color[i] !== '#') return false;
    if (!arrayOfValidLetters.includes(color[i].toLowerCase())) {
      return false;
    }
  }

  return true;
}

export interface ColorPickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  function ColorPicker(props, ref) {
    const { className, onChange, ...rest } = props;
    const containerClasses = clsx(styles.container, className);
    const colorClasses = clsx(styles.color);
    const inputClasses = clsx(styles.input);
    const [color, setColor] = React.useState<string>('#');

    return (
      <div className={containerClasses} ref={ref}>
        <div className={colorClasses}>
          <input
            type="color"
            className={inputClasses}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
                setColor(e.target.value);
              }
            }}
            value={color.length === 7 ? color : undefined}
          />
        </div>
        <div className='w-full'>
          <InputField
            maxLength={7}
            label="Color"
            withDivider
            onChange={(e) => {
              console.log('e', e);
              if (e.target.value === '') return;
              if (!checkIsValid(e.target.value)) return;
              else if (onChange) {
                onChange(e);
                setColor(e.target.value);
              }
            }}
            value={color}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

export default ColorPicker;
