import React, { forwardRef } from "react";
import { Match, MatchTeam } from "src/types/Match";
import styles from "./MatchCardV2.module.css";
import Avatar from "../../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";

function getPartNames(name: string) {
  return name.split(" ");
}

interface IconProps {
  width: number;
  height: number;
}

const ClockIcon = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1268_52828)">
      <path
        d="M7.99992 3.99967V7.99967L10.6666 9.33301M14.6666 7.99967C14.6666 11.6816 11.6818 14.6663 7.99992 14.6663C4.31802 14.6663 1.33325 11.6816 1.33325 7.99967C1.33325 4.31778 4.31802 1.33301 7.99992 1.33301C11.6818 1.33301 14.6666 4.31778 14.6666 7.99967Z"
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1268_52828">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const NotWinnerIcon = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1146_43196)">
      <path
        d="M9.26733 2.12555C9.3813 2.40118 9.60006 2.62027 9.87553 2.73466L10.8414 3.13476C11.1171 3.24894 11.3361 3.46794 11.4503 3.7436C11.5645 4.01926 11.5645 4.32898 11.4503 4.60464L11.0505 5.56986C10.9362 5.84564 10.9361 6.15568 11.0508 6.43132L11.45 7.39626C11.5066 7.53279 11.5357 7.67913 11.5357 7.82693C11.5358 7.97473 11.5067 8.12108 11.4501 8.25763C11.3935 8.39418 11.3106 8.51824 11.2061 8.62274C11.1016 8.72723 10.9775 8.8101 10.8409 8.86661L9.87569 9.26642C9.60006 9.38039 9.38096 9.59916 9.26658 9.87462L8.86648 10.8405C8.7523 11.1162 8.53329 11.3352 8.25764 11.4494C7.98198 11.5636 7.67226 11.5636 7.3966 11.4494L6.43138 11.0496C6.15571 10.9357 5.8461 10.9359 5.57061 11.0502L4.60469 11.4497C4.32919 11.5637 4.01973 11.5636 3.7443 11.4495C3.46887 11.3354 3.24998 11.1166 3.13572 10.8413L2.73551 9.87507C2.62154 9.59944 2.40277 9.38034 2.12731 9.26596L1.16139 8.86586C0.885857 8.75173 0.666914 8.53286 0.552691 8.25736C0.438468 7.98187 0.438313 7.67229 0.552261 7.39667L0.952069 6.43145C1.06597 6.15579 1.06574 5.84617 0.951422 5.57068L0.552188 4.60407C0.495584 4.46754 0.466438 4.3212 0.466414 4.1734C0.466391 4.0256 0.49549 3.87925 0.552049 3.7427C0.608609 3.60615 0.691521 3.48209 0.796046 3.3776C0.900572 3.27311 1.02466 3.19023 1.16123 3.13372L2.12645 2.73391C2.40185 2.62004 2.62081 2.40155 2.73528 2.1264L3.13537 1.16049C3.24955 0.884831 3.46856 0.665823 3.74422 0.551642C4.01988 0.437462 4.3296 0.437462 4.60526 0.551642L5.57048 0.951451C5.84614 1.06535 6.15576 1.06512 6.43125 0.950804L7.39757 0.552262C7.67319 0.438146 7.98285 0.438169 8.25845 0.552327C8.53405 0.666486 8.75303 0.885431 8.86723 1.16102L9.26745 2.12722L9.26733 2.12555Z"
        fill="#D92D20"
      />
      <path
        d="M8.5 3.5L3.5 8.5M3.5 3.5L8.5 8.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1146_43196">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WinnerIcon = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1146_43193)">
      <path
        d="M9.26684 2.12555C9.38081 2.40118 9.59958 2.62027 9.87504 2.73466L10.841 3.13476C11.1166 3.24894 11.3356 3.46794 11.4498 3.7436C11.564 4.01926 11.564 4.32898 11.4498 4.60464L11.05 5.56986C10.9358 5.84564 10.9356 6.15568 11.0504 6.43132L11.4495 7.39626C11.5061 7.53279 11.5352 7.67913 11.5352 7.82693C11.5353 7.97473 11.5062 8.12108 11.4496 8.25763C11.393 8.39418 11.3101 8.51824 11.2056 8.62274C11.1011 8.72723 10.977 8.8101 10.8404 8.86661L9.8752 9.26642C9.59957 9.38039 9.38047 9.59916 9.26609 9.87462L8.86599 10.8405C8.75181 11.1162 8.53281 11.3352 8.25715 11.4494C7.98149 11.5636 7.67177 11.5636 7.39611 11.4494L6.43089 11.0496C6.15522 10.9357 5.84561 10.9359 5.57012 11.0502L4.6042 11.4497C4.3287 11.5637 4.01924 11.5636 3.74381 11.4495C3.46838 11.3354 3.24949 11.1166 3.13523 10.8413L2.73502 9.87507C2.62105 9.59944 2.40228 9.38034 2.12682 9.26596L1.16091 8.86586C0.885369 8.75173 0.666426 8.53286 0.552203 8.25736C0.43798 7.98187 0.437825 7.67229 0.551772 7.39667L0.951581 6.43145C1.06548 6.15579 1.06525 5.84617 0.950934 5.57068L0.551699 4.60407C0.495096 4.46754 0.46595 4.3212 0.465926 4.1734C0.465902 4.0256 0.495001 3.87925 0.551561 3.7427C0.608121 3.60615 0.691033 3.48209 0.795558 3.3776C0.900084 3.27311 1.02417 3.19023 1.16074 3.13372L2.12596 2.73391C2.40136 2.62004 2.62032 2.40155 2.73479 2.1264L3.13489 1.16049C3.24907 0.884831 3.46807 0.665823 3.74373 0.551642C4.01939 0.437462 4.32911 0.437462 4.60477 0.551642L5.56999 0.951451C5.84566 1.06535 6.15527 1.06512 6.43076 0.950804L7.39708 0.552262C7.6727 0.438146 7.98236 0.438169 8.25796 0.552327C8.53357 0.666486 8.75254 0.885431 8.86674 1.16102L9.26696 2.12722L9.26684 2.12555Z"
        fill="#099250"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.34995 4.42755C8.43011 4.30164 8.45697 4.14904 8.42462 4.00333C8.39227 3.85761 8.30336 3.73071 8.17745 3.65055C8.05153 3.57039 7.89894 3.54353 7.75322 3.57588C7.6075 3.60823 7.48061 3.69714 7.40045 3.82305L5.1977 7.2843L4.1897 6.0243C4.09651 5.90774 3.96083 5.83297 3.81251 5.81644C3.66419 5.79992 3.51538 5.84299 3.39882 5.93618C3.28226 6.02937 3.20749 6.16504 3.19096 6.31336C3.17444 6.46168 3.21751 6.61049 3.3107 6.72705L4.8107 8.60205C4.8666 8.67202 4.9384 8.72762 5.02012 8.76425C5.10185 8.80087 5.19114 8.81745 5.28056 8.81261C5.36999 8.80777 5.45696 8.78164 5.53426 8.73641C5.61155 8.69118 5.67692 8.62814 5.72495 8.55255L8.34995 4.42755Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1146_43193">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TeamInfoRow = ({
  team,
  oppositeTeam,
  shortenName,
  compact,
}: {
  team: MatchTeam;
  oppositeTeam: MatchTeam;
  shortenName?: boolean;
  compact?: boolean;
}) => {
  const avatarClasses = clsx(styles["avatar"], {
    [styles["avatar--loser"]]: team.isWinner !== undefined && !team.isWinner,
    [styles["avatar--winner"]]: team.isWinner,
  });

  const percentageClasses = clsx(styles["player-percentage"], {
    [styles["player-percentage--winner"]]: team.isWinner,
  });

  const derivedPercentage = team.percentage
    ? team.percentage
    : 100 - oppositeTeam.percentage;
  const iconSize = compact ? 12 : 14;

  return (
    <div className={styles["team-row"]}>
      <div className={styles["team-row-info"]}>
        <div className={styles["team-avatars"]}>
          {team.players.map((player) => {
            return (
              <Avatar
                className={avatarClasses}
                key={player.playerId}
                size={compact ? "xs" : "sm"}
                imageUrl={player.image}
                customIconRender={() => (
                  <FontAwesomeIcon icon={faUser} size="xs" />
                )}
                onlineIndicator={
                  <div className={styles["avatar--indicator"]}>
                    {team.isWinner ? (
                      <WinnerIcon width={iconSize} height={iconSize} />
                    ) : team.isWinner !== undefined ? (
                      <NotWinnerIcon width={iconSize} height={iconSize} />
                    ) : null}
                  </div>
                }
              />
            );
          })}
        </div>
        <div className={styles["player-info"]}>
          <div className={styles["player-names"]}>
            {team.players.map((player) => {
              const name = getPartNames(player.name);
              const nameClasses = clsx(styles["player-first-name"], {
                [styles["player-first-name-short"]]: shortenName,
              });

              return (
                <div
                  key={player.playerId}
                  className={styles["player-info-name"]}
                >
                  <div className={styles["player-names-wrapper"]}>
                    {name[0] && (
                      <span className={nameClasses}>
                        {shortenName ? `${name[0].charAt(0)}.` : name[0]}
                      </span>
                    )}
                    {name[1] && (
                      <span className={styles["player-last-name"]}>
                        {name[1]}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {derivedPercentage && (
            <div className={percentageClasses}>{`${Math.round(derivedPercentage * 10) / 10}%`}</div>
          )}
          {team.retired && <div className={styles["player-tag"]}>Retired</div>}
          {team.withdrawn && (
            <div className={styles["player-tag"]}>Withdrawn</div>
          )}
        </div>
      </div>
      {team.scores.length > 0 && (
        <div className={styles["scores-container"]}>
          {team.scores.map((score, index) => {
            const value =
              score === 0 && oppositeTeam.scores[index] === 0 ? "-" : score;
            const isWinner = score > oppositeTeam.scores[index];
            const scoreClasses = clsx(styles["scores"], {
              [styles["scores-winner"]]: isWinner,
              [styles["scores-loser"]]: !isWinner,
            });

            return (
              <div key={index} className={scoreClasses}>
                {isWinner ? (
                  <div className={styles["scores-winner-inner"]}>{value}</div>
                ) : (
                  value
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export interface MatchCardV2Props {
  match: Match;
  shortenName?: boolean;
  compact?: boolean;
}

const MatchCardV2 = forwardRef<HTMLDivElement, MatchCardV2Props>(
  (props, ref) => {
    const { match, shortenName, compact } = props;

    const cardClasses = clsx(styles["match-card"], {
      [styles["match-card--compact"]]: compact,
    });

    return (
      <div className={cardClasses} ref={ref}>
        {match.matchNumber && (
          <div className={styles["match-card__number"]}>
            {match.matchNumber}
          </div>
        )}
        <div className={styles["match-card__content"]}>
          {(match.tournamentTitle || match.eventTitle) && (
            <div className={styles["content__header"]}>
              {match.tournamentTitle && (
                <div className={styles["header--text"]}>
                  {match.tournamentTitle}
                </div>
              )}
              {match.eventTitle && (
                <div className={styles["header--text"]}>{match.eventTitle}</div>
              )}
            </div>
          )}
          {(match.courtNumber || match.roundNumber || match.matchTime) && (
            <div className={styles["content--info"]}>
              <div className={styles["info--inner"]}>
                {match.courtNumber && (
                  <span className={styles["info--item"]}>
                    {`Court ${match.courtNumber}`}
                  </span>
                )}
                {match.roundNumber && (
                  <span className={styles["info--item"]}>
                    {`Round ${match.roundNumber}`}
                  </span>
                )}
                {match.matchTime && (
                  <span className={styles["info--item"]}>
                    {match.matchTime}
                  </span>
                )}
              </div>
              {(match.matchStatus === 2 || match.matchStatus === 3) &&
                <span className={styles["info--item"]}>
                  {
                    match.matchStatus === 2 ? <span className={styles['live__text']}>Live</span> :
                    match.matchStatus === 3 ? <span className={styles['delayed__text']}>Delayed</span> : null
                  }
                </span>
              }
            </div>
          )}
          {match.team1 && match.team2 && (
            <>
              <TeamInfoRow
                team={match.team1}
                oppositeTeam={match.team2}
                shortenName={shortenName}
                compact={compact}
              />
              <TeamInfoRow
                team={match.team2}
                oppositeTeam={match.team1}
                shortenName={shortenName}
                compact={compact}
              />
            </>
          )}
          {match.matchTimeStart && (
            <div className={styles["card--footer"]}>
              {match.matchTimeStart && (
                <div className={styles["footer--time"]}>
                  <ClockIcon
                    width={compact ? 18 : 16}
                    height={compact ? 18 : 16}
                  />
                  {`${match.matchTimeStart || ""} ${
                    match.timezoneAbbreviation || ""
                  }`}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default MatchCardV2;
