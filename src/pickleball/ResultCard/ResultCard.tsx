/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import MatchSide from './MatchSide';
import styles from './ResultCard.module.css';

export interface ResultCardProps {
  category?: string;
  gradient?: string;
  link: string;
  match: any;
  name: string;
}

const ResultCard = ({
  category,
  gradient,
  link,
  match,
  name,
}: ResultCardProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headerClasses = clsx(styles.header);
  const linkClasses = clsx(styles.link);
  const contentClasses = clsx(styles.content);
  const finalClasses = clsx(styles.final);

  return (
    <div className={wrapperClasses}>
      <div style={{ background: gradient || '' }} className={headerClasses}>
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className={linkClasses}
        >
          {name}
          {category && ` - ${category}`}
        </a>
      </div>
      <div className={contentClasses}>
        <MatchSide match={match} team="team1" />
        <div className={finalClasses}>Final</div>
        <MatchSide match={match} team="team2" />
      </div>
    </div>
  );
};

export default ResultCard;
