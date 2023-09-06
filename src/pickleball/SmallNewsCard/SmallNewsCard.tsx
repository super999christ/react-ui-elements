import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './SmallNewsCard.module.css';

export interface SmallNewsCardProps {
  description?: string;
  image?: string;
  time?: string;
  title: string;
}

const SmallNewsCard = ({
  description,
  image,
  time,
  title,
}: SmallNewsCardProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const imageClasses = clsx(styles.image, {
    [styles['image--no-src']]: !image,
  });
  const contentClasses = clsx(styles.content);
  const titleClasses = clsx(styles.title);
  const descriptionClasses = clsx(styles.description);
  const iconTimeClasses = clsx(styles.icon__time);
  const iconClasses = clsx(styles.icon);
  const timeClasses = clsx(styles.time);

  return (
    <div className={wrapperClasses}>
      <img alt="Pickleball player" src={image} className={imageClasses} />
      <div className={contentClasses}>
        <h2 className={titleClasses}>{title}</h2>
        {description && <p className={descriptionClasses}>{description}</p>}
        {time && (
          <div className={iconTimeClasses}>
            <FontAwesomeIcon icon={faClock} size="sm" className={iconClasses} />
            <p className={timeClasses}>{time}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallNewsCard;
