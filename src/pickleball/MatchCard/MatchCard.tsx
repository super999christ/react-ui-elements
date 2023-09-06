import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

import { mergeRefs } from '../../utils';
import styles from './MatchCard.module.css';
import { PlayerAvatar } from './PlayerAvatar';
import type { TeamInfo } from './types';

const EMPTY_STRING_PLACE = '_';

export const MatchCardTeam = ({ ...team }: TeamInfo) => {
  return (
    <div className={styles.team__player}>
      <div className="flex flex-1 items-center gap-1">
        <div className="flex gap-1">
          {team.players.map((player) => {
            return <PlayerAvatar key={player.id} size="xs" />;
          })}
        </div>
        <div className="">
          {team.players.map((player) => (
            <div key={player.id} className="text-xs leading-none text-gray-800">
              {player.firstName.length > 0
                ? `${player.firstName.charAt(0)}${player.lastName ? ', ' : ''}`
                : `${EMPTY_STRING_PLACE}, `}
              {player.lastName.length > 0 ? (
                <span className="font-semibold">{player.lastName}</span>
              ) : (
                EMPTY_STRING_PLACE
              )}
            </div>
          ))}
        </div>
        <span
          className={`px-1 text-[10px] font-semibold leading-none ${
            team.winningPercentage && team.winningPercentage > 50
              ? 'text-success-500'
              : 'text-gray-500'
          }`}
        >
          {`${team.winningPercentage}%`}
        </span>
      </div>
      <div className="ml-auto flex">
        {team.scores?.map((score) => {
          return (
            <div
              key={score.value}
              className={`inline-flex w-6 items-center justify-center border-x text-xs font-semibold last-of-type:border-r-0 ${
                score.winner
                  ? 'z-30 border-white bg-success-50 text-success-700'
                  : 'border-gray-200 bg-white text-gray-500'
              }`}
            >
              {score.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export interface MatchCardProps {
  className?: string;
  compact?: boolean;
  court?: string | number;
  detailsUrl?: React.ReactNode;
  event?: string;
  matchDateTime?: string;
  matchNumber?: string | number;
  matchTime?: string | Date;
  round?: string | number;
  teams?: TeamInfo[];
  tournament?: string;
}

const MatchCard = React.forwardRef<HTMLDivElement, MatchCardProps>(
  function MatchCard(props, propRef) {
    const {
      className,
      compact,
      court,
      detailsUrl,
      event,
      matchDateTime,
      matchNumber,
      matchTime,
      round,
      teams,
      tournament,
      ...rest
    } = props;

    /* const [width, setWidth] = useState<number>(); */
    const cardRef = useRef<HTMLDivElement>(null);
    const ref = mergeRefs([propRef, cardRef]);

    let renderCourtMatchTime: string | undefined;
    if (matchTime) {
      if (typeof matchTime === 'string') {
        renderCourtMatchTime = matchTime;
      } else {
        renderCourtMatchTime = matchTime.toISOString();
      }
    }

    const matchCardClasses = clsx(
      styles.match__card,
      {
        [styles['match__card--compact']]: compact,
      },
      className,
    );

    useEffect(() => {
      if (cardRef.current) {
        // const rect = cardRef.current.getBoundingClientRect();
        // setWidth(rect.width);
      }
    }, []);

    return (
      <div className={matchCardClasses} {...rest} ref={ref}>
        {matchNumber && (
          <div className={styles.card__number}>{matchNumber}</div>
        )}
        <div className={styles.card__body}>
          {(tournament || event) && (
            <div className={styles.body__header}>
              {tournament && (
                <div className="grow truncate" style={{ width: '100%' }}>
                  {tournament}
                </div>
              )}
              {event && (
                <div className="grow truncate" style={{ width: 360 }}>
                  {event}
                </div>
              )}
            </div>
          )}
          {(court || round || renderCourtMatchTime) && (
            <div className={styles.body__details}>
              <div className={styles.details__list}>
                <div>{`Court ${court}`}</div>
                <div>{`Round ${round}`}</div>
                <div>{renderCourtMatchTime}</div>
              </div>
              {detailsUrl && (
                <div className="ml-auto flex items-center pr-2">
                  {detailsUrl}
                </div>
              )}
            </div>
          )}
          <div className={styles.card__team}>
            {teams?.map((team) => (
              <MatchCardTeam key={team.winningPercentage} {...team} />
            ))}
          </div>
          <div className={styles.body__footer}>{matchDateTime || ''}</div>
        </div>
      </div>
    );
  },
);

export default MatchCard;
