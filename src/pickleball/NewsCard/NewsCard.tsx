import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { faCirclePlay } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './NewsCard.module.css';

export interface NewsCardProps {
  description?: string;
  image?: string;
  time?: string;
  title: string;
  video?: boolean;
}

const NewsCard = ({
  description,
  image,
  time,
  title,
  video,
}: NewsCardProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const imageClasses = clsx(styles.image, {
    [styles['image--video']]: video,
    [styles['image--no-src']]: !image,
  });
  const playIconContainerClasses = clsx(styles.play__icon__container);
  const playIconClasses = clsx(styles.play__icon);
  const contentClasses = clsx(styles.content);
  const titleClasses = clsx(styles.title);
  const descriptionClasses = clsx(styles.description);
  const iconTimeClasses = clsx(styles.icon__time);
  const iconClasses = clsx(styles.icon);
  const timeClasses = clsx(styles.time);

  return (
    <div className={wrapperClasses}>
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className={imageClasses}
      >
        {video && (
          <div className={playIconContainerClasses}>
            <FontAwesomeIcon icon={faCirclePlay} className={playIconClasses} />
          </div>
        )}
      </div>
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

export default NewsCard;
