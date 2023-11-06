/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import { faUser } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import type { MatchTeam } from './ResultCard';
import styles from './ResultCard.module.css';

export function getPartNames(name: string) {
  return name.split(' ');
}

const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_3979_28470)">
      <path
        d="M10.0001 12.4998C7.23866 12.4998 5.00008 10.2613 5.00008 7.49984V2.87021C5.00008 2.52533 5.00008 2.3529 5.05034 2.21482C5.13459 1.98335 5.31693 1.80101 5.5484 1.71676C5.68648 1.6665 5.85891 1.6665 6.20379 1.6665H13.7964C14.1413 1.6665 14.3137 1.6665 14.4518 1.71676C14.6832 1.80101 14.8656 1.98335 14.9498 2.21482C15.0001 2.3529 15.0001 2.52533 15.0001 2.87021V7.49984C15.0001 10.2613 12.7615 12.4998 10.0001 12.4998ZM10.0001 12.4998V14.9998M15.0001 3.33317H17.0834C17.4717 3.33317 17.6658 3.33317 17.819 3.3966C18.0232 3.48118 18.1854 3.64341 18.27 3.8476C18.3334 4.00074 18.3334 4.19489 18.3334 4.58317V4.99984C18.3334 5.77481 18.3334 6.1623 18.2482 6.48022C18.0171 7.34295 17.3432 8.01682 16.4805 8.24799C16.1625 8.33317 15.7751 8.33317 15.0001 8.33317M5.00008 3.33317H2.91675C2.52846 3.33317 2.33432 3.33317 2.18118 3.3966C1.97699 3.48118 1.81476 3.64341 1.73018 3.8476C1.66675 4.00074 1.66675 4.19489 1.66675 4.58317V4.99984C1.66675 5.77481 1.66675 6.1623 1.75193 6.48022C1.9831 7.34295 2.65697 8.01682 3.5197 8.24799C3.83762 8.33317 4.22511 8.33317 5.00008 8.33317M6.20379 18.3332H13.7964C14.0009 18.3332 14.1667 18.1674 14.1667 17.9628C14.1667 16.3264 12.8402 14.9998 11.2038 14.9998H8.79638C7.15998 14.9998 5.83341 16.3264 5.83341 17.9628C5.83341 18.1674 5.99924 18.3332 6.20379 18.3332Z"
        stroke="#099250"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3979_28470">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type TeamType = 'team1' | 'team2';

export interface MatchSideProps {
  oppositeTeam: MatchTeam;
  team: MatchTeam;
  teamLabel: TeamType;
}

const MatchSide = ({ oppositeTeam, team, teamLabel }: MatchSideProps) => {
  const reversed = teamLabel === 'team2';
  const teamNumberOfPlayers = team.players.length;

  const matchSideClasses = clsx(styles.match__side, {
    [styles['match__side--reversed'] as any]: reversed,
    [styles['match__side--not-reversed'] as any]: !reversed,
    [styles['match__side--duo'] as any]: teamNumberOfPlayers === 2,
    [styles['match__side--solo'] as any]: teamNumberOfPlayers !== 2,
  });

  const teamInfoClasses = clsx(styles.team__info, {
    [styles['team__info--reversed'] as any]: reversed,
    [styles['team__ino--not-rversed'] as any]: !reversed,
    [styles['team__info--duo'] as any]: teamNumberOfPlayers === 2,
    [styles['team__info--solo'] as any]: teamNumberOfPlayers !== 2,
  });

  const teamContainerClasses = clsx(styles.team__container, {
    [styles['team__container--winner'] as any]: team.isWinner,
    [styles['team__container--duo'] as any]: teamNumberOfPlayers > 1,
  });

  const trophyClasses = clsx(styles.trophy);

  const playerInfoClasses = clsx(styles.player__info, {
    [styles['player__info--reversed-duo'] as any]:
      reversed && teamNumberOfPlayers > 1,
    [styles['player__info--reversed-solo'] as any]:
      reversed && teamNumberOfPlayers <= 1,
    [styles['player__info--not-reversed-duo'] as any]:
      !reversed && teamNumberOfPlayers > 1,
    [styles['player__info--not-reversed-solo'] as any]:
      !reversed && teamNumberOfPlayers <= 1,
  });

  const nameClasses = clsx(styles.name);
  const firstNameClasses = clsx(styles.first__name);
  const lastNameClasses = clsx(styles.last__name);

  const playerImageClasses = clsx(styles.player__image, {
    [styles['player__image--duo'] as any]: teamNumberOfPlayers > 1,
    [styles['player__image--solo'] as any]: teamNumberOfPlayers <= 1,
  });

  const playerImgClasses = clsx(styles.player__img);

  const winnerClasses = clsx(styles.winner, {
    [styles['winner--reversed-duo'] as any]:
      reversed && teamNumberOfPlayers > 1,
    [styles['winner--not-reversed-duo'] as any]:
      !reversed && teamNumberOfPlayers > 1,
    [styles['winner--team2'] as any]: teamLabel === 'team2' && team.isWinner,
  });

  const setWrapperClasses = clsx(styles.set__wrapper, {
    [styles['set__wrapper--reversed'] as any]: reversed,
    [styles['set__wrapper--not-reversed'] as any]: !reversed,
  });

  const setClasses = clsx(styles.set, {
    [styles['set--winner'] as any]: team.isWinner,
    [styles['set--loser'] as any]: !team.isWinner,
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
        {team.isWinner && (
          <div className={trophyClasses}>
            <TrophyIcon />
          </div>
        )}
        <div className={teamContainerClasses}>
          {team.players.map((player, index: number) => {
            const name = getPartNames(player.name);
            const duos = team.players.length > 1;

            return (
              <div key={index} className={playerInfoClasses}>
                <div className={nameClasses}>
                  <span className={firstNameClasses}>
                    {name[0] && name[0].charAt(0).toUpperCase()}
                  </span>
                  {`, `}
                  <span className={lastNameClasses}>{name[1] && name[1]}</span>
                </div>
                <div className={playerImageClasses}>
                  {player.image ? (
                    <img
                      alt={player.playerId}
                      src={player.image}
                      className={playerImgClasses}
                    />
                  ) : duos ? (
                    <FontAwesomeIcon
                      className={styles['icon--color']}
                      icon={faUser}
                      size="sm"
                    />
                  ) : (
                    <FontAwesomeIcon
                    className={styles['icon--color']}
                      icon={faUser}
                      size="lg"
                    />
                  )}
                </div>
              </div>
            );
          })}
          {team.isWinner && teamNumberOfPlayers && teamNumberOfPlayers <= 1 && (
            <div className={winnerClasses}>Winner</div>
          )}
        </div>
      </div>
      <div className={setWrapperClasses}>
        {team.scores.length > 0 &&
          team.scores?.map((setValue, index: number) => {
            const isSetWinner =
              setValue > (oppositeTeam.scores[index] as number);

            const value =
              setValue === 0 && oppositeTeam.scores[index] === 0
                ? '-'
                : setValue;

            return (
              <div
                key={index}
                className={`${setClasses} ${
                  index % 2 === 0 ? grayBgClasses : whiteBgClasses
                } ${isSetWinner ? greenTxtClasses : grayTxtClasses} ${
                  isSetWinner && index % 2 === 0 && winnerMiddleClasses
                } ${!isSetWinner && index % 2 === 0 && loserMiddleClasses}
              `}
              >
                {value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MatchSide;
