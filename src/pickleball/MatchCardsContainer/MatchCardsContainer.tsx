import clsx from 'clsx';
import React from 'react';

import styles from './MatchCardsContainer.module.css';

export interface MatchCardsContainerProps {
  children: React.ReactNode;
}

const MatchCardsContainer = ({ children }: MatchCardsContainerProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headlineClasses = clsx(styles.headline);
  const contentClasses = clsx(styles.content);

  return (
    <div className={wrapperClasses}>
      <h1 className={headlineClasses}>Championship Sunday</h1>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

export default MatchCardsContainer;
