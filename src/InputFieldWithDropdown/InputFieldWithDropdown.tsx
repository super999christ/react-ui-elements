import clsx from 'clsx';
import React, { forwardRef, useRef } from 'react';

import styles from './InputFieldWithDropdown.module.css';

import Select from '../Select';
import { InputFieldWithDropdownLabel } from './InputFieldWithDropdownLabel';
import { InputFieldWithDropdownHint } from './InputFieldWithDropdownHint';
import { type } from 'os';

const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const isValidPercentage = (percentage: number) : boolean => {
  return 0 <= percentage && percentage <= 100;
}

export interface LabelInterface {
  value: string;
  label: string;
}

export interface InputFieldWithDropdownProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  hasError?: boolean;
  hint?: string;
  inputProps?: {
    className?: string
  };
  label?: string;
  PrefixIcon?: () => React.ReactNode;
  withDivider?: boolean;
  dropdownList: LabelInterface[];
  dropdownOnChange: (event: any) => void;
  dropdownValue?: LabelInterface;
  defaultDropdownValue?: LabelInterface;
  dropdownClassname?: string;
  menuPortalTarget?: HTMLElement;
  validatePercentage?: boolean;
}

const InputFieldWithDropdown = forwardRef<HTMLInputElement, InputFieldWithDropdownProps>(
  function InputField(props, ref) {
    const {
      className,
      disabled,
      hasError,
      hint,
      inputProps,
      label,
      PrefixIcon,
      withDivider,
      dropdownList,
      dropdownOnChange,
      dropdownValue,
      defaultDropdownValue,
      dropdownClassname,
      menuPortalTarget,
      onChange,
      validatePercentage,
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const inputContainerClasses = clsx(styles.input__container, {
      [styles['input__container--disabled']]: disabled,
      [styles['input__container--has-error']]: hasError,
    }, className);
    const dropdownClasses = clsx(styles.dropdown, dropdownClassname);
    const inputClasses = clsx(styles.input, {
      [styles['input--with-suffix-divider']]: PrefixIcon && withDivider,
    }, inputProps?.className);
    const prefixClasses = clsx(styles.prefix);

    const handleIconClick = () => {
      const node = inputRef.current;
      if (node !== null) node.focus();
    };

    const handlePhoneInputChange = (e: any) => {
      console.log(e);
      let deleting = false;
      if (e && e.nativeEvent && (e.nativeEvent.inputType as string) === 'deleteContentBackward') {
        deleting = true;
      }
      let copyOfValue = e.target.value;
      let newValue = '';
      if (!deleting) {
        let alreadyAddedDotSign = false;
        for (const character of copyOfValue) {
          if (allowedCharacters.includes(character)){
            if (character === '.' && !alreadyAddedDotSign) {
              newValue += character;
              alreadyAddedDotSign = true;
            } else if (character !== '.') {
              newValue += character;
            }
          }
        }
        if (validatePercentage && (dropdownValue?.label === '%' || (!dropdownValue?.label && defaultDropdownValue?.label === '%')) && !isValidPercentage(+newValue)) {
          return;
        }
        e.target.value = newValue;

        if (onChange) onChange(e);
      } else { // Deleting
        if (onChange) onChange(e);
      }
    };

    return (
      <div className={styles.container}>
        {label && <InputFieldWithDropdownLabel htmlFor={rest.id}>{label}</InputFieldWithDropdownLabel>}

        <div className={inputContainerClasses}>
          {PrefixIcon && <span className={prefixClasses} onClick={() => handleIconClick()}>{PrefixIcon()}</span>}
          
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

          <Select
            noBorder
            noSeparator
            options={dropdownList}
            onChange={(option) => dropdownOnChange(option)}
            value={dropdownValue}
            defaultValue={defaultDropdownValue}
            className={dropdownClasses}
            menuPortalTarget={menuPortalTarget}
            isSearchable={false}
          />
        </div>

        {hint && <InputFieldWithDropdownHint hasError={hasError}>{hint}</InputFieldWithDropdownHint>}
      </div>
    );
  },
);

export default InputFieldWithDropdown;
