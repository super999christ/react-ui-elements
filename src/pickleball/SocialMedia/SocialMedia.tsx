/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './SocialMedia.module.css';

interface SocialMediaInterface {
  link: string;
  name: string;
}

export interface SocialMediaProps {
  socialMedias: SocialMediaInterface[];
}

const SocialMedia = ({ socialMedias }: SocialMediaProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headlineClasses = clsx(styles.headline);
  const mediaClasses = clsx(styles.media);
  const iconClasses = clsx(styles.icon);
  const nameClasses = clsx(styles.name);
  const dividerContainerClasses = clsx(styles.divider__container);
  const dividerClasses = clsx(styles.divider);

  return (
    <div className={wrapperClasses}>
      <h1 className={headlineClasses}>Follow us</h1>
      {socialMedias.map((socialMedia, index) => {
        return (
          <React.Fragment key={index}>
            <a
              href={socialMedia.link}
              rel="noopener noreferrer"
              target="_blank"
              className={mediaClasses}
            >
              <div className={iconClasses}>
                {socialMedia.name === 'Facebook' ? (
                  <FontAwesomeIcon
                    color="#1877F2"
                    icon={faFacebook}
                    size="lg"
                  />
                ) : socialMedia.name === 'Twitter' ? (
                  <FontAwesomeIcon color="#1DA1F2" icon={faTwitter} size="lg" />
                ) : socialMedia.name === 'Instagram' ? (
                  <FontAwesomeIcon
                    color="#000100"
                    icon={faInstagram}
                    size="lg"
                  />
                ) : socialMedia.name === 'YouTube' ? (
                  <FontAwesomeIcon color="#FF0302" icon={faYoutube} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                )}
              </div>
              <div className={nameClasses}>{socialMedia.name}</div>
            </a>
            {index !== socialMedias.length - 1 && (
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

export default SocialMedia;
