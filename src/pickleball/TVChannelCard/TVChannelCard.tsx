/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import styles from './TVChannelCard.module.css';

export interface TVChannelCardProps {
  channelName: string;
  channelLogo: string;
  channelLink: string;
  dateString: string;
  matches: string[];
}

const TVChannelCard = ({
  channelName,
  channelLogo,
  channelLink,
  dateString,
  matches,
}: TVChannelCardProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headerClasses = clsx(styles.header);
  const imageContainerClasses = clsx(styles.image__container);
  const headlineClasses = clsx(styles.headline);
  const linkClasses = clsx(styles.link);
  const imageClasses = clsx(styles.image);
  const contentClasses = clsx(styles.content);
  const dateClasses = clsx(styles.date);
  const textContainerClasses = clsx(styles.text__container);
  const textClasses = clsx(styles.text);

  return (
    <div className={wrapperClasses}>
      <div className={headerClasses}>
        <h1 className={headlineClasses}>Pickleball on {channelName}</h1>
        <div className={imageContainerClasses}>
          <a
            href={channelLink}
            rel="noopener noreferrer"
            target="_blank"
            className={linkClasses}
          >
            <img
              alt={`${channelName} logo`}
              src={channelLogo}
              className={imageClasses}
            />
          </a>
        </div>
      </div>
      <div className={contentClasses}>
        <p className={dateClasses}>{dateString}</p>
        <div className={textContainerClasses}>
          {matches.map((match, index) => (
            <p key={index} className={textClasses}>
              {match}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVChannelCard;
