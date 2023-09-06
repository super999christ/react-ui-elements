/* eslint-disable react/no-array-index-key */
import { faTrophy, faUser } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './ResultCard.module.css';

interface PlayerInterface {
  firstName: string;
  lastName: string;
  img?: string;
}

type TeamType = 'team1' | 'team2';

export interface ScoreInterface {
  team1: number;
  team2: number;
}

export interface MatchInterface {
  team1: PlayerInterface[];
  team2: PlayerInterface[];
  winner: TeamType;
  result: ScoreInterface[];
}

export interface MatchSideProps {
  match: MatchInterface;
  team: TeamType;
}

const MatchSide = ({ match, team }: MatchSideProps) => {
  const reversed = team === 'team2';
  const oppositionTeam: TeamType = team === 'team1' ? 'team2' : 'team1';
  const teamName = team === 'team1' ? 'Team 2' : 'Team 1';

  const matchSideClasses = clsx(styles.match__side, {
    [styles['match__side--reversed']]: reversed,
    [styles['match__side--not-reversed']]: !reversed,
    [styles['match__side--duo']]: match[team].length === 2,
    [styles['match__side--solo']]: match[team].length !== 2,
  });

  const teamInfoClasses = clsx(styles.team__info, {
    [styles['team__info--reversed']]: reversed,
    [styles['team__ino--not-rversed']]: !reversed,
    [styles['team__info--duo']]: match[team].length === 2,
    [styles['team__info--solo']]: match[team].length !== 2,
  });

  const teamContainerClasses = clsx(styles.team__container, {
    [styles['team__container--winner']]: match.winner === team,
    [styles['team__container--duo']]: match[team].length > 1,
  });

  const trophyClasses = clsx(styles.trophy);

  const playerInfoClasses = clsx(styles.player__info, {
    [styles['player__info--reversed-duo']]: reversed && match[team].length > 1,
    [styles['player__info--reversed-solo']]:
      reversed && match[team].length <= 1,
    [styles['player__info--not-reversed-duo']]:
      !reversed && match[team].length > 1,
    [styles['player__info--not-reversed-solo']]:
      !reversed && match[team].length <= 1,
  });

  const nameClasses = clsx(styles.name);
  const firstNameClasses = clsx(styles.first__name);
  const lastNameClasses = clsx(styles.last__name);

  const playerImageClasses = clsx(styles.player__image, {
    [styles['player__image--duo']]: match[team].length > 1,
    [styles['player__image--solo']]: match[team].length <= 1,
  });

  const playerImgClasses = clsx(styles.player__img);

  const winnerClasses = clsx(styles.winner, {
    [styles['winner--reversed-duo']]: reversed && match[team].length > 1,
    [styles['winner--not-reversed-duo']]: !reversed && match[team].length > 1,
    [styles['winner--team2']]: match.winner === 'team2' && team === 'team2',
  });

  const setWrapperClasses = clsx(styles.set__wrapper, {
    [styles['set__wrapper--reversed']]: reversed,
    [styles['set__wrapper--not-reversed']]: !reversed,
  });

  const setClasses = clsx(styles.set, {
    [styles['set--winner']]: match.winner === team,
    [styles['set--loser']]: match.winner !== team,
  });

  const grayBgClasses = clsx(styles.gray__bg);
  const whiteBgClasses = clsx(styles.white__bg);
  const greenTxtClasses = clsx(styles.green__txt);
  const grayTxtClasses = clsx(styles.gray__txt);
  const winnerMiddleClasses = clsx(styles.winner__middle);
  const loserMiddleClasses = clsx(styles.loser__middle);

  return (
    <div className={matchSideClasses}>
      <div className={teamInfoClasses}>
        {match.winner === team && (
          <div className={trophyClasses}>
            <FontAwesomeIcon
              width={20}
              height={20}
              color="#099250"
              icon={faTrophy}
            />
          </div>
        )}
        <div className={teamContainerClasses}>
          {match[team].map((player: PlayerInterface, index: number) => {
            return (
              <div key={index} className={playerInfoClasses}>
                <div className={nameClasses}>
                  <span className={firstNameClasses}>
                    {player.firstName.charAt(0)}
                  </span>
                  {`, `}
                  <span className={lastNameClasses}>{player.lastName}</span>
                </div>
                <div className={playerImageClasses}>
                  {player.img ? (
                    <img
                      alt={`${teamName} - Player ${index + 1}`}
                      src={player.img}
                      className={playerImgClasses}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser} size="sm" />
                  )}
                </div>
              </div>
            );
          })}
          {match.winner === team && match[team].length <= 1 && (
            <div className={winnerClasses}>Winner</div>
          )}
        </div>
      </div>
      <div className={setWrapperClasses}>
        {match.result.map((set: ScoreInterface, index: number) => {
          return (
            <div
              key={index}
              className={`${setClasses} ${
                index % 2 === 0 ? grayBgClasses : whiteBgClasses
              } ${
                set[team] > set[oppositionTeam]
                  ? greenTxtClasses
                  : grayTxtClasses
              } ${
                match.winner === team && index % 2 === 0 && winnerMiddleClasses
              } ${
                match.winner !== team && index % 2 === 0 && loserMiddleClasses
              }
              `}
            >
              {set[team]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchSide;
