/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import Button from '../../Button';
import styles from './ToursList.module.css';

interface TourInterface {
  link: string;
  logo: string;
  name: string;
}

export interface ToursListProps {
  tours: TourInterface[];
  mainLogo?: string;
}

const ToursList = ({ tours, mainLogo }: ToursListProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headerClasses = clsx(styles.header);
  const imageClasses = clsx(styles.image);
  const headlineClasses = clsx(styles.headline);
  const buttonsClasses = clsx(styles.buttons);
  const buttonClasses = clsx(styles.button);
  const tourClasses = clsx(styles.tour);
  const logoClasses = clsx(styles.logo);
  const nameClasses = clsx(styles.name);
  const dividerContainerClasses = clsx(styles.divider__container);
  const dividerClasses = clsx(styles.divider);

  return (
    <div className={wrapperClasses}>
      <div className={headerClasses}>
        {mainLogo && <img alt="Logo" src={mainLogo} className={imageClasses} />}
        <h1 className={headlineClasses}>Pickleball +</h1>
      </div>
      <div className={buttonsClasses}>
        <Button size="sm" className={buttonClasses}>
          Subscribe now
        </Button>
      </div>
      {tours.map((tour, index) => {
        return (
          <React.Fragment key={index}>
            <a
              href={tour.link}
              rel="noopener noreferrer"
              target="_blank"
              className={tourClasses}
            >
              <img
                alt={`${tour.name} logo`}
                src={tour.logo}
                className={logoClasses}
              />
              <h2 className={nameClasses}>{tour.name}</h2>
            </a>
            {index !== tours.length - 1 && (
              <div className={dividerContainerClasses}>
                <div className={dividerClasses} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ToursList;
