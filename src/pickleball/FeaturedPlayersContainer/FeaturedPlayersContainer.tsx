/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import Button from '../../Button';
import FeaturedPlayer from '../FeaturedPlayer/FeaturedPlayer';
import styles from './FeaturedPlayersContainer.module.css';

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

export interface FeaturedPlayersContainerProps {
  players: PlayerInterface[];
  seeAllLink?: string;
}

const FeaturedPlayersContainer = ({
  players,
  seeAllLink,
}: FeaturedPlayersContainerProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headlineClasses = clsx(styles.headline);
  const dividerClasses = clsx(styles.divider);
  const buttonClasses = clsx(styles.button);

  return (
    <div className={wrapperClasses}>
      <h1 className={headlineClasses}>Featured players</h1>
      {players.map((player, index) => (
        <React.Fragment key={index}>
          <FeaturedPlayer
            {...player}
            lastFeatured={index === players.length - 1}
          />
          {index !== players.length - 1 && <div className={dividerClasses} />}
        </React.Fragment>
      ))}
      {seeAllLink && (
        <a href={seeAllLink} rel="noopener noreferrer" target="_blank">
          <Button size="sm" variant="link" className={buttonClasses}>
            See all
          </Button>
        </a>
      )}
    </div>
  );
};

export default FeaturedPlayersContainer;
