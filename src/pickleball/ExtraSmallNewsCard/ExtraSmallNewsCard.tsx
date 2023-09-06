import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './ExtraSmallNewsCard.module.css';

export interface ExtraSmallNewsCardProps {
  description?: string;
  image?: string;
  time?: string;
  title: string;
}

const ExtraSmallNewsCard = ({
  description,
  image,
  time,
  title,
}: ExtraSmallNewsCardProps) => {
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
      <img alt={title} src={image} className={imageClasses} />
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

export default ExtraSmallNewsCard;
