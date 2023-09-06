/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import ExtraSmallNewsCard from '../ExtraSmallNewsCard';
import styles from './SideNewsContainer.module.css';

interface NewsInterface {
  description?: string;
  image?: string;
  time?: string;
  title: string;
}

export interface SideNewsContainerProps {
  news: NewsInterface[];
}

const SideNewsContainer = ({ news }: SideNewsContainerProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headlineClasses = clsx(styles.headline);
  const newsContainerClasses = clsx(styles.news__container);
  const dividerContainerClasses = clsx(styles.divider__container);
  const dividerClasses = clsx(styles.divider);

  return (
    <div className={wrapperClasses}>
      <h1 className={headlineClasses}>Best of Pickleball+</h1>
      {news.map((dataObject, index) => {
        return (
          <React.Fragment key={index}>
            <div className={newsContainerClasses}>
              <ExtraSmallNewsCard {...dataObject} />
            </div>
            {index !== news.length - 1 && (
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

export default SideNewsContainer;
