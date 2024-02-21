import React, { forwardRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/pro-light-svg-icons';
import InputField from './../InputField';
import styles from './CodeGenerator.module.css';

const ARRAY_OF_CHARACTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const generateRandomCharacters = (N: number) : string => {
  let randomString = '';
  let generatedNumberOfCharacters = 0;
  const ARRAY_OF_CHARACTERS_LENGTH = ARRAY_OF_CHARACTERS.length;
  
  while (generatedNumberOfCharacters < N) {
    const randomIndex = Math.floor(Math.random() * ARRAY_OF_CHARACTERS_LENGTH);
    randomString += ARRAY_OF_CHARACTERS[randomIndex];
    generatedNumberOfCharacters++;
  }

  return randomString;
}

// I had an error with the CodeGeneratorProps extending InputFieldProps, the typescript wasn't recognizing the props from InputFieldProps in the CodeGenerator.stories.tsx file
export interface CodeGeneratorProps  extends React.InputHTMLAttributes<HTMLInputElement> {
  numberOfCharactersToGenerateOnButtonClick?: number;
  hasError?: boolean;
  hint?: string;
  label?: string;
  PrefixIcon?: () => React.ReactNode;
  inputProps?: {
    className?: string
  }
}

const CodeGenerator = forwardRef<HTMLInputElement, CodeGeneratorProps>(
  function CodeGenerator(props, ref) {
    const {
      hasError,
      hint,
      label,
      PrefixIcon,
      inputProps,
      value,
      onChange,
      numberOfCharactersToGenerateOnButtonClick = 10,
      ...rest
    } = props;
    const [inputValue, setInputValue] = React.useState(value);

    const handleOnChange = (e: any) => {
      let copyOfValue = e.target.value;
      let newValue = '';

      for (const character of copyOfValue) {
        if (ARRAY_OF_CHARACTERS.includes(character)){
          newValue += character;
        }
      }

      e.target.value = newValue;

      setInputValue(newValue);
      if (onChange) onChange(e);
    }

    const handleOnClick = () => {
      const randomString = generateRandomCharacters(numberOfCharactersToGenerateOnButtonClick);
      setInputValue(randomString);
      
      // Create a synthetic event
      const syntheticEvent = {
        target: {
          value: randomString,
        },
      };

      // Trigger the onChange prop with the synthetic event
      if (onChange) onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
    }

    return (
      <InputField
        ref={ref}
        type="text"
        withDivider
        value={inputValue}
        onChange={handleOnChange}
        SuffixIcon={() => 
          <div
            className={styles["generate"]}
            onClick={handleOnClick}
          >
            <FontAwesomeIcon icon={faRotate} />
            <span>Generate</span>
          </div>
        }
        hasError={hasError}
        hint={hint}
        label={label}
        PrefixIcon={PrefixIcon}
        inputProps={inputProps}
        {...rest}
      />
    );
  },
);

export default CodeGenerator;
