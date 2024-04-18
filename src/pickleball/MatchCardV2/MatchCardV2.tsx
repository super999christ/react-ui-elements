import React, { forwardRef } from "react";
import { Match, MatchTeam } from "src/types/Match";
import styles from "./MatchCardV2.module.css";
import Avatar from "../../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";
import { faCircle } from "@fortawesome/pro-solid-svg-icons";

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

const NotWinnerIcon = () => (
  <svg
    width="12"
    height="12"
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

const SmallNotWinnerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="8px" viewBox="0 0 8 8" version="1.1">
    <g id="surface1">
      <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(85.098039%,17.647059%,12.54902%)', fillOpacity: '1'}} d="M 6.179688 1.417969 C 6.253906 1.601562 6.398438 1.746094 6.582031 1.824219 L 7.226562 2.089844 C 7.410156 2.164062 7.558594 2.3125 7.632812 2.496094 C 7.710938 2.679688 7.710938 2.886719 7.632812 3.070312 L 7.367188 3.714844 C 7.289062 3.898438 7.289062 4.105469 7.367188 4.289062 L 7.632812 4.929688 C 7.671875 5.023438 7.691406 5.121094 7.691406 5.21875 C 7.691406 5.316406 7.671875 5.414062 7.632812 5.503906 C 7.59375 5.597656 7.539062 5.679688 7.472656 5.75 C 7.402344 5.816406 7.316406 5.875 7.226562 5.910156 L 6.582031 6.175781 C 6.398438 6.253906 6.253906 6.398438 6.175781 6.582031 L 5.910156 7.226562 C 5.835938 7.410156 5.6875 7.558594 5.503906 7.632812 C 5.320312 7.710938 5.113281 7.710938 4.929688 7.632812 L 4.289062 7.367188 C 4.105469 7.289062 3.898438 7.289062 3.714844 7.367188 L 3.070312 7.632812 C 2.886719 7.710938 2.679688 7.710938 2.496094 7.632812 C 2.3125 7.558594 2.167969 7.410156 2.089844 7.226562 L 1.824219 6.582031 C 1.746094 6.398438 1.601562 6.253906 1.417969 6.175781 L 0.773438 5.910156 C 0.589844 5.835938 0.445312 5.6875 0.367188 5.503906 C 0.292969 5.320312 0.292969 5.113281 0.367188 4.929688 L 0.632812 4.289062 C 0.710938 4.105469 0.710938 3.898438 0.632812 3.714844 L 0.367188 3.070312 C 0.332031 2.976562 0.3125 2.878906 0.3125 2.78125 C 0.3125 2.683594 0.332031 2.585938 0.367188 2.496094 C 0.40625 2.402344 0.460938 2.320312 0.53125 2.25 C 0.601562 2.183594 0.683594 2.125 0.773438 2.089844 L 1.417969 1.824219 C 1.601562 1.746094 1.746094 1.601562 1.824219 1.417969 L 2.089844 0.773438 C 2.167969 0.589844 2.3125 0.445312 2.496094 0.367188 C 2.679688 0.292969 2.886719 0.292969 3.070312 0.367188 L 3.714844 0.632812 C 3.898438 0.710938 4.105469 0.710938 4.289062 0.632812 L 4.933594 0.367188 C 5.117188 0.292969 5.320312 0.292969 5.503906 0.367188 C 5.6875 0.445312 5.835938 0.589844 5.910156 0.773438 Z M 6.179688 1.417969 "/>
      <path style={{ fill: 'none', strokeWidth: '1', strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'rgb(100%,100%,100%)', strokeOpacity: '1', strokeMiterlimit: '4'}} d="M 8.501953 3.498047 L 3.498047 8.501953 M 3.498047 3.498047 L 8.501953 8.501953 " transform="matrix(0.666667,0,0,0.666667,0,0)"/>
    </g>
  </svg>
);

const WinnerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clipPath="url(#clip0_6221_28324)">
      <path d="M9.26684 2.12555C9.38081 2.40118 9.59958 2.62027 9.87504 2.73466L10.841 3.13476C11.1166 3.24894 11.3356 3.46794 11.4498 3.7436C11.564 4.01926 11.564 4.32898 11.4498 4.60464L11.05 5.56986C10.9358 5.84564 10.9356 6.15568 11.0504 6.43132L11.4495 7.39626C11.5061 7.53279 11.5352 7.67913 11.5352 7.82693C11.5353 7.97473 11.5062 8.12108 11.4496 8.25763C11.393 8.39418 11.3101 8.51824 11.2056 8.62274C11.1011 8.72723 10.977 8.8101 10.8404 8.86661L9.8752 9.26642C9.59957 9.38039 9.38047 9.59916 9.26609 9.87462L8.86599 10.8405C8.75181 11.1162 8.53281 11.3352 8.25715 11.4494C7.98149 11.5636 7.67177 11.5636 7.39611 11.4494L6.43089 11.0496C6.15522 10.9357 5.84561 10.9359 5.57012 11.0502L4.6042 11.4497C4.3287 11.5637 4.01924 11.5636 3.74381 11.4495C3.46838 11.3354 3.24949 11.1166 3.13523 10.8413L2.73502 9.87507C2.62105 9.59944 2.40228 9.38034 2.12682 9.26596L1.16091 8.86586C0.885369 8.75173 0.666426 8.53286 0.552203 8.25736C0.43798 7.98187 0.437825 7.67229 0.551772 7.39667L0.951581 6.43145C1.06548 6.15579 1.06525 5.84617 0.950934 5.57068L0.551699 4.60407C0.495096 4.46754 0.46595 4.3212 0.465926 4.1734C0.465902 4.0256 0.495001 3.87925 0.551561 3.7427C0.608121 3.60615 0.691033 3.48209 0.795558 3.3776C0.900084 3.27311 1.02417 3.19023 1.16074 3.13372L2.12596 2.73391C2.40136 2.62004 2.62032 2.40155 2.73479 2.1264L3.13489 1.16049C3.24907 0.884831 3.46807 0.665823 3.74373 0.551642C4.01939 0.437462 4.32911 0.437462 4.60477 0.551642L5.56999 0.951451C5.84566 1.06535 6.15527 1.06512 6.43076 0.950804L7.39708 0.552262C7.6727 0.438146 7.98236 0.438169 8.25796 0.552327C8.53357 0.666486 8.75254 0.885431 8.86674 1.16102L9.26696 2.12722L9.26684 2.12555Z" fill="#099250"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.34995 4.42755C8.43011 4.30164 8.45697 4.14904 8.42462 4.00333C8.39227 3.85761 8.30336 3.73071 8.17745 3.65055C8.05153 3.57039 7.89894 3.54353 7.75322 3.57588C7.6075 3.60823 7.48061 3.69714 7.40045 3.82305L5.1977 7.2843L4.1897 6.0243C4.09651 5.90774 3.96083 5.83297 3.81251 5.81644C3.66419 5.79992 3.51538 5.84299 3.39882 5.93618C3.28226 6.02937 3.20749 6.16504 3.19096 6.31336C3.17444 6.46168 3.21751 6.61049 3.3107 6.72705L4.8107 8.60205C4.8666 8.67202 4.9384 8.72762 5.02012 8.76425C5.10185 8.80087 5.19114 8.81745 5.28056 8.81261C5.36999 8.80777 5.45696 8.78164 5.53426 8.73641C5.61155 8.69118 5.67692 8.62814 5.72495 8.55255L8.34995 4.42755Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_6221_28324">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const SmallWinnerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <g clipPath="url(#clip0_6221_32118)">
        <path d="M6.17789 1.41703C6.25387 1.60079 6.39972 1.74685 6.58336 1.82311L7.2273 2.08984C7.41107 2.16596 7.55708 2.31196 7.6332 2.49573C7.70932 2.67951 7.70932 2.88599 7.6332 3.06976L7.36666 3.71324C7.29051 3.89709 7.2904 4.10379 7.3669 4.28755L7.63298 4.93084C7.67071 5.02186 7.69014 5.11942 7.69016 5.21796C7.69018 5.31649 7.67078 5.41406 7.63307 5.50509C7.59536 5.59612 7.54009 5.67883 7.47041 5.74849C7.40072 5.81815 7.318 5.8734 7.22695 5.91108L6.58347 6.17762C6.39971 6.2536 6.25365 6.39944 6.17739 6.58308L5.91066 7.22703C5.83454 7.4108 5.68854 7.5568 5.50477 7.63292C5.321 7.70904 5.11451 7.70904 4.93074 7.63292L4.28726 7.36638C4.10348 7.29045 3.89707 7.29061 3.71341 7.36681L3.06947 7.63316C2.8858 7.70911 2.6795 7.70904 2.49587 7.63298C2.31225 7.55693 2.16633 7.41109 2.09016 7.22752L1.82335 6.58338C1.74737 6.39963 1.60152 6.25356 1.41788 6.17731L0.773937 5.91058C0.590246 5.83449 0.444284 5.68858 0.368135 5.50491C0.291987 5.32124 0.291883 5.11486 0.367848 4.93112L0.634387 4.28763C0.71032 4.10386 0.710165 3.89745 0.633956 3.71379L0.3678 3.06938C0.330064 2.97836 0.310633 2.8808 0.310617 2.78227C0.310602 2.68374 0.330001 2.58617 0.367708 2.49513C0.405414 2.4041 0.460688 2.32139 0.530372 2.25173C0.600056 2.18207 0.682783 2.12682 0.773827 2.08915L1.41731 1.82261C1.60091 1.74669 1.74688 1.60103 1.82319 1.4176L2.08992 0.773659C2.16604 0.589888 2.31205 0.443882 2.49582 0.367762C2.67959 0.291641 2.88607 0.291641 3.06985 0.367762L3.71333 0.634301C3.8971 0.710234 4.10351 0.710079 4.28717 0.633869L4.93139 0.368175C5.11514 0.292097 5.32157 0.292113 5.50531 0.368218C5.68904 0.444324 5.83503 0.590287 5.91116 0.774011L6.17797 1.41815L6.17789 1.41703Z" fill="#099250"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.56663 2.9517C5.62007 2.86776 5.63798 2.76603 5.61641 2.66888C5.59485 2.57174 5.53557 2.48714 5.45163 2.4337C5.36769 2.38026 5.26596 2.36235 5.16881 2.38392C5.07167 2.40549 4.98707 2.46476 4.93363 2.5487L3.46513 4.8562L2.79313 4.0162C2.731 3.93849 2.64055 3.88865 2.54167 3.87763C2.44279 3.86661 2.34359 3.89532 2.26588 3.95745C2.18817 4.01958 2.13833 4.11003 2.12731 4.20891C2.11629 4.30779 2.145 4.40699 2.20713 4.4847L3.20713 5.7347C3.2444 5.78134 3.29227 5.81842 3.34675 5.84283C3.40123 5.86725 3.46076 5.8783 3.52037 5.87507C3.57999 5.87184 3.63797 5.85443 3.6895 5.82427C3.74103 5.79412 3.78462 5.7521 3.81663 5.7017L5.56663 2.9517Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_6221_32118">
          <rect width="8" height="8" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

interface TeamInfoRowProps {
  team: MatchTeam;
  oppositeTeam: MatchTeam;
  shortenName?: boolean;
  compact?: boolean;
  matchStatus?: number;
  winnerExists?: boolean;
  playerOneIsServer?: boolean;
  playerTwoIsServer?: boolean;
  secondServerDot?: boolean;
  teamOne?: boolean;
  gamesStatus?: number[];
}

const TeamInfoRow = ({
  team,
  oppositeTeam,
  shortenName,
  compact,
  matchStatus,
  winnerExists,
  playerOneIsServer,
  playerTwoIsServer,
  secondServerDot,
  teamOne,
  gamesStatus,
}: TeamInfoRowProps) => {
  const avatarClasses = clsx(styles["avatar"], {
    [styles["avatar--loser"]]: winnerExists && team.isWinner !== undefined && !team.isWinner,
    [styles["avatar--winner"]]: winnerExists && team.isWinner,
  });

  const percentageClasses = clsx(styles["player-percentage"], {
    [styles["player-percentage--larger"]]: team.percentage && oppositeTeam.percentage && team.percentage > oppositeTeam.percentage,
  });
  const serverWrapperClasses = clsx(styles['server__wrapper']);
  const serverDotClasses = clsx(styles['server__dot']);

  const derivedPercentage = team.percentage
    ? team.percentage
    : oppositeTeam.percentage ? 100 - oppositeTeam.percentage : undefined;

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
                  <div className={styles['avatar--indicator']}>
                    {winnerExists && (
                      team.isWinner ? (
                        compact ? <SmallWinnerIcon /> : <WinnerIcon />
                      ) : team.isWinner !== undefined ? (
                        compact ? <SmallNotWinnerIcon /> : <NotWinnerIcon />
                      ) : null
                    )}
                  </div>
                }
              />
            );
          })}
        </div>
        <div className={styles["player-info"]}>
          <div className={styles["player-names"]}>
            {team.players.map((player, index) => (
                <div
                  key={player.playerId}
                  className={styles["player-info-name"]}
                >
                  <div className={styles["player-names-wrapper"]}>
                    <div className={styles["names--wrapper"]}>
                      {player.firstName && 
                        <>
                          {shortenName ? `${player.firstName.charAt(0)}.` : player.firstName}
                          <span className={styles['right--spacing']} />
                        </>
                      }
                      {player.lastName && 
                        <>
                          <b>{player.lastName}</b>
                          <span className={styles['right--spacing']} />
                        </>
                      }
                      {player.suffixName}
                    </div>
                    {
                      matchStatus === 2 &&
                        <div className={serverWrapperClasses}>
                          {index === 0 && playerOneIsServer && <FontAwesomeIcon width={6} icon={faCircle} className={serverDotClasses} />}
                          {index === 0 && playerOneIsServer && secondServerDot && <FontAwesomeIcon width={6} icon={faCircle} className={serverDotClasses} />}
                          {index === 1 && playerTwoIsServer && <FontAwesomeIcon width={6} icon={faCircle} className={serverDotClasses} />}
                          {index === 1 && playerTwoIsServer && secondServerDot && <FontAwesomeIcon width={6} icon={faCircle} className={serverDotClasses} />}
                        </div>
                    }
                  </div>
                </div>
            ))}
          </div>
          {derivedPercentage !== undefined && (
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
            const oppositeTeamScore = oppositeTeam.scores[index];
            let value = score === 0 && oppositeTeamScore === 0 ? "-" : `${score}`;

            const gameStatus = gamesStatus && gamesStatus[index];
            const statusLabel = 
              gameStatus !== undefined 
                ? teamOne 
                  ? gameStatus === 2 ? 'FF' : gameStatus === 3 ? 'RET' :gameStatus === 4 ? 'WD' : ''
                    : gameStatus === 7 ? 'FF' : gameStatus === 8 ? 'RET' :gameStatus === 9 ? 'WD' : '' 
                    : '';

            let isPreviousGameWinner = false;
            
            if (index > 0) {
              const teamPreviousScore = team.scores[index - 1];
              const oppositeTeamPreviousScore = oppositeTeam.scores[index - 1];

              isPreviousGameWinner = teamPreviousScore > oppositeTeamPreviousScore;
            }

            let isGameOver = value !== '-' && oppositeTeamScore !== undefined && Math.abs(score - oppositeTeamScore) >= 2 && (score >= 11 || oppositeTeamScore >= 11);
  
            const isGameWinner = value !== '-' && score > oppositeTeam.scores[index];

            const scoreClasses = clsx(styles["scores"], {
              [styles["scores-winner"]]: isGameOver && isGameWinner,
              [styles["scores-loser"]]: isGameOver && !isGameWinner,
              [styles["scores-in-progress"]]: !isGameOver,
              [styles["scores-previous-game-winner"]]: isPreviousGameWinner && isGameWinner && isGameOver,
            });

            return (
              <div key={index} className={scoreClasses}>
                {isGameWinner ? (
                  <div className={styles["scores-winner-inner"]}>{value}</div>
                ) : (
                  value
                )}
                {statusLabel && <span>{statusLabel}</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export interface LinkInterface {
  matchStatsURL?: string;
  liveURL?: string;
  archivedURL?: string;
}

export interface MatchCardV2Props {
  compact?: boolean;
  hideMatchTimeStartRowOnPhones?: boolean;
  match: Match;
  shortenName?: boolean;
  sponsors?: React.ReactNode;
  links?: LinkInterface;
  showCourtNameInTourTitleRow?: boolean;
}

const MatchCardV2 = forwardRef<HTMLDivElement, MatchCardV2Props>(
  (props, ref) => {
    const { compact, hideMatchTimeStartRowOnPhones, match, shortenName, sponsors, links, showCourtNameInTourTitleRow } = props;
    const [showLinks, setShowLinks] = React.useState<boolean>(false);

    const cardClasses = clsx(styles["match-card"], {
      [styles["match-card--compact"]]: compact,
    });

    const cardFooterClasses = clsx(styles['card--footer'], {
      [styles['card--footer--end']]: !match.matchTimeStart && sponsors,
      [styles['card--footer--hidden']]: hideMatchTimeStartRowOnPhones,
    });

    const detailsClasses = clsx({
      [styles['details--URL']]: !compact,
      [styles['details--URL--compact']]: compact,
    });

    return (
      <div 
        onMouseEnter={() => links && setShowLinks(true)}
        onMouseLeave={() => links && setShowLinks(false)} 
        className={cardClasses}
        ref={ref}
      >
        {links && showLinks &&
          <div className={styles['match-card__links']}>
            {links.matchStatsURL &&
              <a href={links.matchStatsURL} className={styles['link__item']}>
                MATCH STATS
              </a>
            }
            {match.matchStatus === 2 && links.liveURL &&
              <a href={links.liveURL} className={styles['link__item']}>
                WATCH LIVE
              </a>
            }
            {match.matchStatus === 4 && links.archivedURL &&
              <a href={links.archivedURL} className={styles['link__item']}>
                WATCH VIDEO
              </a>
            }
          </div>
        }
        {match.matchNumber && (
          <div className={styles["match-card__number"]}>
            {match.matchNumber}
          </div>
        )}
        <div className={styles["match-card__content"]}>
          {(match.tournamentTitle || match.eventTitle) && (
            <div className={styles["content__header"]}>
              {match.tournamentTitle && (
                <div className={styles["header--text--wrapper"]}>
                  <span className={styles["header--text"]}>
                    {match.tournamentTitle}
                  </span>
                  <span className={styles["badges--wrapper"]}>
                    {(match.matchStatus === 2 || match.matchStatus === 3 || (match.matchStatus === 4 && match.matchCompletedType === 6)) &&
                      (
                        match.matchStatus === 2 ? 
                          <span className={styles['live__text']}>
                            &#x2022;
                            LIVE
                          </span> :
                        match.matchStatus === 3 ? 
                          <span className={styles['delayed__text']}>DELAYED</span> : 
                          (match.matchStatus === 4 && match.matchCompletedType === 6) ? 
                          <span className={styles['canceled__text']}>CANCELED</span> : null
                      )
                    }
                    {match.courtName && showCourtNameInTourTitleRow && match.matchStatus !== 4 &&
                      <span className={styles["top__court__text"]}>
                        {match.courtName}
                      </span>
                    }
                  </span>
                </div>
              )}
              {match.eventTitle && (
                <div className={styles["header--text--wrapper"]}>
                  <span className={styles["header--text"]}>
                    {match.eventTitle}
                  </span>
                  <span className={styles["badges--wrapper"]}>
                    {!match.tournamentTitle && (match.matchStatus === 2 || match.matchStatus === 3 || (match.matchStatus === 4 && match.matchCompletedType === 6)) &&
                      (
                        match.matchStatus === 2 ?
                          <span className={styles['live__text']}>
                            &#x2022;
                            LIVE
                          </span> :
                        match.matchStatus === 3 ?
                          <span className={styles['delayed__text']}>DELAYED</span> : 
                          (match.matchStatus === 4 && match.matchCompletedType === 6) ? 
                          <span className={styles['canceled__text']}>CANCELED</span> : null
                      )
                    }
                    {!match.tournamentTitle && match.courtName && showCourtNameInTourTitleRow && match.matchStatus !== 4 &&
                      <span className={styles["top__court__text"]}>
                        {match.courtName}
                      </span>
                    }
                </span>
                </div>
              )}
            </div>
          )}
          {((match.courtName && !showCourtNameInTourTitleRow) || match.roundNumber || match.matchTime || match.detailsURL) && (
            <div className={styles["content--info"]}>
              <div className={styles["info--inner"]}>
                {match.courtName && !showCourtNameInTourTitleRow && (
                  <span className={styles["info--item"]}>
                    {match.courtName}
                  </span>
                )}
                {match.roundNumber && (
                  <span className={styles["info--item"]}>
                    {match.roundNumber}
                  </span>
                )}
                {match.matchTime && (
                  <span className={styles["info--item"]}>
                    {`${match.matchTime || ""} ${match.timezoneAbbreviation || ""}`}
                  </span>
                )}
              </div>
              {match.detailsURL &&
                <a className={detailsClasses} href={match.detailsURL} rel="noopener noreferrer" target="_blank">See details</a>
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
                matchStatus={match.matchStatus}
                winnerExists={match.team1.isWinner || match.team2.isWinner}
                playerOneIsServer={match.server === 1 && match.serverFromTeam === 1}
                playerTwoIsServer={match.server === 1 && match.serverFromTeam === 2}
                secondServerDot={match.server === 1 && match.currentServingNumber === 2}
                gamesStatus={match.gamesStatus}
                teamOne
              />
              <TeamInfoRow
                team={match.team2}
                oppositeTeam={match.team1}
                shortenName={shortenName}
                compact={compact}
                matchStatus={match.matchStatus}
                winnerExists={match.team1.isWinner || match.team2.isWinner}
                playerOneIsServer={match.server === 2 && match.serverFromTeam === 1}
                playerTwoIsServer={match.server === 2 && match.serverFromTeam === 2}
                secondServerDot={match.server === 2 && match.currentServingNumber === 2}
                gamesStatus={match.gamesStatus}
              />
            </>
          )}
          {(match.matchTimeStart || sponsors) && (
            <div className={cardFooterClasses}>
              {match.matchTimeStart &&
                <div className={styles["footer--time"]}>
                  <ClockIcon
                    width={compact ? 16 : 18}
                    height={compact ? 16 : 18}
                  />
                  {`${match.matchTimeStart || ""} ${
                    match.timezoneAbbreviation || ""
                  }`}
                </div>
              }
              {sponsors}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default MatchCardV2;
