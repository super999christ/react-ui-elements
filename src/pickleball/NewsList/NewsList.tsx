/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import Button from '../../Button';
import styles from './NewsList.module.css';

interface NewsListInterface {
  link: string;
  title: string;
}

export interface NewsListProps {
  newsList: NewsListInterface[];
  seeAllLink?: string;
}

const NewsList = ({ newsList, seeAllLink }: NewsListProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headingClasses = clsx(styles.heading);
  const linkClasses = clsx(styles.link);
  const titleClasses = clsx(styles.title);
  const dividerContainerClasses = clsx(styles.divider__container);
  const dividerClasses = clsx(styles.divider);
  const buttonClasses = clsx(styles.button);

  return (
    <div className={wrapperClasses}>
      <h1 className={headingClasses}>Headlines</h1>
      {newsList.map((dataObject, index) => {
        return (
          <React.Fragment key={index}>
            <a
              href={dataObject.link}
              rel="noopener noreferrer"
              target="_blank"
              className={linkClasses}
            >
              <h2 className={titleClasses}>{dataObject.title}</h2>
            </a>
            <div className={dividerContainerClasses}>
              <div className={dividerClasses} />
            </div>
          </React.Fragment>
        );
      })}
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

export default NewsList;
