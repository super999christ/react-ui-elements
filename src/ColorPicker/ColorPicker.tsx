import clsx from 'clsx';
import React, { forwardRef } from 'react';

import InputField from '../InputField';
import styles from './ColorPicker.module.css';

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
            value={color}
            {...rest}
          />
        </div>
        <div className='w-full'>
          <InputField
            disabled
            label="Color"
            value={color}
          />
        </div>
      </div>
    );
  },
);

export default ColorPicker;
