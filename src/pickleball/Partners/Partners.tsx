/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React from 'react';

import styles from './Partners.module.css';

interface PartnerInterface {
  link: string;
  logo: string;
}

export interface PartnersProps {
  partners: PartnerInterface[];
}

const Partners = ({ partners }: PartnersProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headlineClasses = clsx(styles.headline);
  const contentClasses = clsx(styles.content);
  const linkClasses = clsx(styles.link);
  const imageClasses = clsx(styles.image);

  return (
    <div className={wrapperClasses}>
      <h1 className={headlineClasses}>Our Featured Partners</h1>
      <div className={contentClasses}>
        {partners.map((partner, index) => {
          return (
            <a
              key={index}
              href={partner.link}
              rel="noopener noreferrer"
              target="_blank"
              className={linkClasses}
            >
              <img
                alt="Sponsor logo"
                src={partner.logo}
                className={imageClasses}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
