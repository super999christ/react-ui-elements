/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import Button from '../../Button';
import styles from './ButtonsContainer.module.css';

interface ButtonInterface {
  link: string;
  text: string;
}

export interface ButtonsContainerProps {
  buttons: ButtonInterface[];
}

const ButtonsContainer = ({ buttons }: ButtonsContainerProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const buttonClasses = clsx(styles.button);

  return (
    <div className={wrapperClasses}>
      {buttons.map((button, index) => {
        return (
          <a
            key={index}
            href={button.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="sm" variant="secondary" className={buttonClasses}>
              {button.text}
            </Button>
          </a>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
