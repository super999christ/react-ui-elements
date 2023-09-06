import clsx from 'clsx';
import React from 'react';

import Button from '../../Button';
import styles from './LoginCard.module.css';

export interface LoginCardProps {
  background?: string;
  button1Text: string;
  button2Text: string;
  headlineText?: string;
  learnMoreLink?: string;
  Logo: string | (() => React.ReactNode);
  text: string;
}

const LoginCard = ({
  background,
  button1Text,
  button2Text,
  headlineText,
  learnMoreLink,
  Logo,
  text,
}: LoginCardProps) => {
  const wrapperClasses = clsx(styles.wrapper);
  const headerClasses = clsx(styles.header, {
    [styles['header--no-headline-text']]: !headlineText,
  });
  const logoClasses = clsx(styles.logo);
  const headlineClasses = clsx(styles.headline);
  const textClasses = clsx(styles.text);
  const buttonsClasses = clsx(styles.buttons);
  const button1Classes = clsx(styles.button1);
  const button2Classes = clsx(styles.button2);
  const linksClasses = clsx(styles.links);
  const linkClasses = clsx(styles.link);

  return (
    <div style={{ background: `${background}` }} className={wrapperClasses}>
      <div className={headerClasses}>
        {typeof Logo === 'string' ? (
          <img alt="Logo" src={Logo} className={logoClasses} />
        ) : (
          Logo()
        )}
        {headlineText && (
          <span className={headlineClasses}>{headlineText}</span>
        )}
      </div>
      <p className={textClasses}>{text}</p>
      <div className={buttonsClasses}>
        <Button size="sm" className={button1Classes}>
          {button1Text}
        </Button>
        <Button size="sm" variant="tertiary" className={button2Classes}>
          {button2Text}
        </Button>
      </div>

      {learnMoreLink && (
        <a
          href={learnMoreLink}
          rel="noopener noreferrer"
          target="_blank"
          className={linksClasses}
        >
          <Button size="sm" variant="link" className={linkClasses}>
            Learn more
          </Button>
        </a>
      )}
    </div>
  );
};

export default LoginCard;
