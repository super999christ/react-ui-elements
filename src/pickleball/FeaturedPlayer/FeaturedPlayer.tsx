import clsx from 'clsx';
import React from 'react';

import styles from './FeaturedPlayer.module.css';

interface PlayerInterface {
  background?: string;
  country: string;
  countryImg: string;
  img: string;
  name: string;
  points: string;
  ranking: string;
  sponsorLink: string;
  sponsorLogo: string;
  surname: string;
}

export interface FeaturedPlayerProps extends PlayerInterface {
  lastFeatured: boolean;
}

const FeaturedPlayer = ({
  background,
  country,
  countryImg,
  img,
  name,
  points,
  ranking,
  sponsorLink,
  sponsorLogo,
  surname,
  lastFeatured,
}: FeaturedPlayerProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const playerClasses = clsx(styles.player);
  const aboutClasses = clsx(styles.about);
  const fullNameClasses = clsx(styles.full__name);
  const nameClasses = clsx(styles.name);
  const surnameClasses = clsx(styles.surname);
  const countryContainerClasses = clsx(styles.country__container);
  const countryClasses = clsx(styles.country);
  const playerImageClasses = clsx(styles.player__image, {
    [styles['player__image--no-src']]: !img,
  });
  const countryImageClasses = clsx(styles.country__image, {
    [styles['country__image--no-src']]: !countryImg,
  });
  const rankingContainerClasses = clsx(styles.ranking__container);
  const rankingClasses = clsx(styles.ranking);
  const rankingNumberClasses = clsx(styles.ranking__number);
  const pointsContainerClasses = clsx(styles.points__container);
  const pointsClasses = clsx(styles.points);
  const pointsNumberClasses = clsx(styles.points__number);

  const sponsorContainerClasses = clsx(styles.sponsor__container, {
    [styles['sponsor__container--last-features']]: lastFeatured,
  });
  const sponsorClasses = clsx(styles.sponsor);
  const sponsorWrapperClasses = clsx(styles.sponsor__wrapper);
  const sponsorLinkClasses = clsx(styles.sponsor__link);

  return (
    <div className={wrapperClasses}>
      <div style={{ background: `${background}` }} className={playerClasses}>
        <div className={aboutClasses}>
          <div className={fullNameClasses}>
            <div className={nameClasses}>{name}</div>
            <div className={surnameClasses}>{surname}</div>
          </div>
          <div className={countryContainerClasses}>
            <img
              alt={country}
              src={countryImg}
              className={countryImageClasses}
            />
            <div className={countryClasses}>{country}</div>
          </div>
        </div>
        <img
          alt={`${name} ${surname}`}
          src={img}
          className={playerImageClasses}
        />
      </div>
      <div className={rankingContainerClasses}>
        <div className={rankingClasses}>Ranking</div>
        <div className={rankingNumberClasses}>{ranking && <>#{ranking}</>}</div>
      </div>
      <div className={pointsContainerClasses}>
        <div className={pointsClasses}>Points</div>
        <div className={pointsNumberClasses}>{points && points}</div>
      </div>
      <div className={sponsorContainerClasses}>
        <div className={sponsorClasses}>Sponsor</div>
        <div className={sponsorWrapperClasses}>
          <a
            href={sponsorLink}
            rel="noopener noreferrer"
            target="_blank"
            className={sponsorLinkClasses}
          >
            <img width="76" height="38" alt="Sponsor" src={sponsorLogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlayer;
