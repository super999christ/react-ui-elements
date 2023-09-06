import clsx from 'clsx';
import React from 'react';

import styles from './MatchCard.module.css';

interface Result {
  score: number;
  winner: boolean;
}

export interface TeamPlayerInfo {
  firstName?: string;
  fullName?: string;
  image?: string;
  lastName?: string;
}

export interface Team {
  players: TeamPlayerInfo[];
  probablity: number;
  results: Result[];
}

const ScoreColumn = ({ score, winner }: Result) => {
  const scoreClasses = clsx(
    'inline-flex h-full w-[26px] shrink-0 items-center justify-center border-x border-gray-200 text-sm font-bold',
    {
      'bg-success-50 text-success-700 border-gray-200': winner,
    },
  );
  return <div className={scoreClasses}>{score}</div>;
};

export const MatchCardTeam = ({ results }: Team) => {
  return (
    <div className={styles.teams__row}>
      <div className="ml-auto">
        {results.map((result) => {
          return <ScoreColumn key={result.score} {...result} />;
        })}
      </div>
    </div>
  );
};
