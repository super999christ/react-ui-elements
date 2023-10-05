import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import { mergeRefs } from "../../utils";
import styles from "./MatchCard.module.css";
import { PlayerAvatar } from "./PlayerAvatar";
import type { TeamInfo } from "./types";

const EMPTY_STRING_PLACE = "_";

export const MatchCardTeam = ({
  oppositeTeam,
  ...team
}: { oppositeTeam: TeamInfo } & TeamInfo) => {
  return (
    <div className={styles.team__player}>
      <div className={styles.match__card_team_container}>
        <div className={styles.match__card_team_avatar}>
          {team.players.map((player) => {
            return <PlayerAvatar key={player.id} size="xs" />;
          })}
        </div>
        <div>
          {team.players.map((player) => (
            <div key={player.id} className={styles.match__card_player_name}>
              {player.firstName.length > 0
                ? `${player.firstName.charAt(0).toUpperCase()}${
                    player.lastName ? ", " : ""
                  }`
                : `${EMPTY_STRING_PLACE}, `}
              {player.lastName.length > 0 ? (
                <span
                  className={styles.match__card_player_name_semibold}
                >{`${player.lastName
                  .charAt(0)
                  .toUpperCase()}${player.lastName.substring(1)}`}</span>
              ) : (
                EMPTY_STRING_PLACE
              )}
            </div>
          ))}
        </div>
        <span
          className={`${styles.match__card_player_name_winning} ${
            team.winningPercentage && team.winningPercentage > 50
              ? styles.match__card_player_name_winning
              : ""
          }`}
        >
          {`${team.winningPercentage}%`}
        </span>
      </div>
      <div className={styles.match__card_player_auto}>
        {team.scores?.map((score, index) => {
          return (
            <div
              key={score.value}
              className={`${styles.match__card_player_name_results} ${
                score.winner
                  ? styles.match__card_player_name_results_iswinner
                  : styles.match__card_player_name_results_isnotwinner
              }`}
            >
              {score.value === 0 && oppositeTeam.scores && oppositeTeam.scores[index].value === 0 ? '-' : score.value}
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
      if (typeof matchTime === "string") {
        renderCourtMatchTime = matchTime;
      } else {
        renderCourtMatchTime = matchTime.toISOString();
      }
    }

    const matchCardClasses = clsx(
      styles.match__card,
      {
        [styles["match__card--compact"]]: compact,
      },
      className
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
                <div className={styles.card__title} style={{ width: "100%" }}>
                  {tournament}
                </div>
              )}
              {event && (
                <div className={styles.card__title} style={{ width: 360 }}>
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
                <div className={styles.card__details_url}>{detailsUrl}</div>
              )}
            </div>
          )}
          <div className={styles.card__team}>
            {teams && teams[0] && (
              <MatchCardTeam {...teams[0]} oppositeTeam={teams[1]} />
            )}
             {teams && teams[1] && (
              <MatchCardTeam {...teams[1]} oppositeTeam={teams[0]} />
            )}
          </div>
          <div className={styles.body__footer}>{matchDateTime || ""}</div>
        </div>
      </div>
    );
  }
);

export default MatchCard;
