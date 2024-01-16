import clsx from 'clsx';
import React, { forwardRef, useRef } from 'react';

import styles from './TelInputField.module.css';

import { TelInputHint } from './TelInputHint';
import { TelInputLabel } from './TelInputLabel';
import Select from './../Select';

const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export interface CountryInterface {
  value: string;
  label: string;
}

export interface TelInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  hasError?: boolean;
  hint?: string;
  inputProps?: {
    className?: string
  };
  label?: string;
  SuffixIcon?: () => React.ReactNode;
  withDivider?: boolean;
  countryList: CountryInterface[];
  countryOnChange: (event: any) => void;
  countryValue?: CountryInterface;
  defaultCountry?: CountryInterface;
  dropdownClassname?: string;
  menuPortalTarget?: HTMLElement;
}

const TelInputField = forwardRef<HTMLInputElement, TelInputFieldProps>(
  function InputField(props, ref) {
    const {
      className,
      disabled,
      hasError,
      hint,
      inputProps,
      label,
      SuffixIcon,
      withDivider,
      countryList,
      countryOnChange,
      countryValue,
      defaultCountry,
      dropdownClassname,
      menuPortalTarget,
      onChange,
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const inputContainerClasses = clsx(styles.input__container, {
      [styles['input__container--disabled']]: disabled,
      [styles['input__container--has-error']]: hasError,
    }, className);
    const dropdownClasses = clsx(styles.dropdown, dropdownClassname);
    const inputClasses = clsx(styles.input, {
      [styles['input--with-suffix-divider']]: SuffixIcon && withDivider,
    }, inputProps?.className);
    const suffixClasses = clsx(styles.suffix);

    const handleIconClick = () => {
      const node = inputRef.current;
      if (node !== null) node.focus();
    };

    const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let copyOfValue = e.target.value;
      let newValue = '';
      for (const character of copyOfValue) {
        if (allowedCharacters.includes(character)){
          newValue += character;
        }
      }
      e.target.value = newValue;
      if (onChange) onChange(e);
    };

    return (
      <div className={styles.container}>
        {label && <TelInputLabel htmlFor={rest.id}>{label}</TelInputLabel>}

        <div className={inputContainerClasses}>
          <Select
            noBorder
            options={countryList}
            onChange={(option) => countryOnChange(option)}
            value={countryValue}
            defaultValue={defaultCountry}
            className={dropdownClasses}
            menuPortalTarget={menuPortalTarget}
          />
          
          <input
            type="tel"
            ref={(element) => {
              inputRef.current = element;
              if (typeof ref === "function") {
                ref(element);
              } else if(ref) { 
                ref.current = element;
              }
            }} 
            className={inputClasses}
            disabled={disabled}
            inputMode="numeric"
            onChange={handlePhoneInputChange}
            {...rest}
          />

          {SuffixIcon && <span className={suffixClasses} onClick={() => handleIconClick()}>{SuffixIcon()}</span>}
        </div>

        {hint && <TelInputHint hasError={hasError}>{hint}</TelInputHint>}
      </div>
    );
  },
);

export default TelInputField;
