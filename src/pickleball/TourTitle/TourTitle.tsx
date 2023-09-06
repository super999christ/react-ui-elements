import clsx from 'clsx';
import React from 'react';

import styles from './TourTitle.module.css';

type ImagePositionTypes = 'left' | 'right';

export interface TourTitleProps {
  image?: string;
  imagePosition?: ImagePositionTypes;
  title: string;
}

const TourTitle = ({
  image,
  imagePosition = 'left',
  title,
}: TourTitleProps) => {
  const wrapperClasses = clsx(styles.wrapper, {
    [styles['wrapper--image-position-right']]: imagePosition === 'right',
  });
  const imageClasses = clsx(styles.image);
  const titleClasses = clsx(styles.title);

  return (
    <div className={wrapperClasses}>
      {image && <img alt="Tour logo" src={image} className={imageClasses} />}
      <h1 className={titleClasses}>{title}</h1>
    </div>
  );
};

export default TourTitle;
