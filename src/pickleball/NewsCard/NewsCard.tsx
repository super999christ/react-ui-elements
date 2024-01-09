import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { faCirclePlay } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './NewsCard.module.css';

export interface NewsCardProps {
  author?: string;
  description?: string;
  image?: string;
  imageAltText?: string;
  time?: string;
  title: string;
}

const NewsCard = ({
  author,
  description,
  image,
  imageAltText,
  time,
  title,
}: NewsCardProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const imageClasses = clsx(styles.image);
  const contentClasses = clsx(styles.content);
  const titleClasses = clsx(styles.title);
  const descriptionClasses = clsx(styles.description);
  const iconTimeClasses = clsx(styles.icon__time);
  const iconClasses = clsx(styles.icon);
  const timeClasses = clsx(styles.time);

  return (
    <div className={wrapperClasses}>
      <img alt={imageAltText || title} src={image || '/assets/images/placeholder.png'} className={imageClasses} />
      {title && (
        <div className={contentClasses}>
          <h2 className={titleClasses}>{title}</h2>
          {description && <p className={descriptionClasses}>{description}</p>}
          {time && (
            <div className={iconTimeClasses}>
              <FontAwesomeIcon icon={faClock} size="sm" className={iconClasses} />
              <p className={timeClasses}>{time}</p>
              {author && <p className={timeClasses}> - {author}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsCard;

