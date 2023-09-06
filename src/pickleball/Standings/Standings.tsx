/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import Button from '../../Button';
import styles from './Standings.module.css';

const columns = [
  { name: 'Rank', width: '14%' },
  { name: 'Player', width: '44%' },
  { name: 'W', width: '10%' },
  { name: 'L', width: '10%' },
  { name: 'Last 10', width: '18%' },
];

interface StandingsRow {
  img: string;
  last10Loses: string;
  last10Wins: string;
  loses: string;
  name: string;
  surname: string;
  wins: string;
}

export interface StandingsProps {
  rows: StandingsRow[];
  viewFullRankingLink?: string;
}

const Standings = ({ rows, viewFullRankingLink }: StandingsProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headlineClasses = clsx(styles.headline);
  const headerClasses = clsx(styles.header);
  const columnNameClasses = clsx(styles.column__name);
  const playerColumnNameClasses = clsx(styles.player__column__name);
  const buttonClasses = clsx(styles.button);
  const rowClasses = clsx(styles.row);
  const rankColumnClasses = clsx(styles.rank__column);
  const rankNumberClasses = clsx(styles.rank__number);
  const rankDashClasses = clsx(styles.rank__dash);
  const playerColumnClasses = clsx(styles.player__column);
  const imageClasses = clsx(styles.image);
  const nameContainerClasses = clsx(styles.name__container);
  const nameClasses = clsx(styles.name);
  const winsLosesColumnClasses = clsx(styles.wins__loses__column);
  const last10ColumnClasses = clsx(styles.last__10__column);
  const last10ContainerClasses = clsx(styles.last__10__container);
  const greenBackgroundClasses = clsx(styles.green__background);
  const redBackgroundClasses = clsx(styles.red__background);
  const last10FieldClasses = clsx(styles.last__10__field);

  return (
    <div className={wrapperClasses}>
      <h1 className={headlineClasses}>2022-23 Standings</h1>
      <div className={headerClasses}>
        {columns.map((column, index) => {
          if (column.name === 'Player') {
            return (
              <div
                key={index}
                style={{ width: column.width }}
                className={playerColumnNameClasses}
              >
                {column.name}
              </div>
            );
          }
          return (
            <div
              key={index}
              style={{ width: column.width }}
              className={columnNameClasses}
            >
              {column.name}
            </div>
          );
        })}
      </div>
      {rows.map((row, index) => {
        const nameFirstLetter =
          row.name.length > 0 ? `${row.name.charAt(0)},` : '';
        const last10String = `${row.last10Wins}-${row.last10Loses}`;

        return (
          <div key={index} className={rowClasses}>
            <div className={rankColumnClasses}>
              <div className={rankNumberClasses}>{index + 1}</div>
              <div className={rankDashClasses}>-</div>
            </div>
            <div className={playerColumnClasses}>
              <img
                src={row.img}
                alt={`${row.name} ${row.surname}`}
                className={imageClasses}
              />
              <div className={nameContainerClasses}>
                <span className={nameClasses}>{nameFirstLetter}</span>{' '}
                <span className={nameClasses}>{row.surname || ''}</span>
              </div>
            </div>
            <div className={winsLosesColumnClasses}>{row.wins}</div>
            <div className={winsLosesColumnClasses}>{row.loses}</div>
            <div className={last10ColumnClasses}>
              <div
                className={`${last10ContainerClasses} ${
                  +row.last10Wins > +row.last10Loses
                    ? greenBackgroundClasses
                    : redBackgroundClasses
                }`}
              >
                <span className={last10FieldClasses}>{last10String}</span>
              </div>
            </div>
          </div>
        );
      })}

      {viewFullRankingLink && (
        <a href={viewFullRankingLink} rel="noopener noreferrer" target="_blank">
          <Button size="sm" variant="link" className={buttonClasses}>
            View Full Ranking
          </Button>
        </a>
      )}
    </div>
  );
};

export default Standings;
