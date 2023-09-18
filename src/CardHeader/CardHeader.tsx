import clsx from 'clsx';
import React from 'react';

import styles from './CardHeader.module.css';

export interface CardHeaderProps extends React.HTMLProps<HTMLDivElement> {
  Avatar?: () => React.ReactNode;
  Badge?: () => React.ReactNode;
  children?: React.ReactNode;
  Dropdown?: () => React.ReactNode;
  SupportingText?: string | (() => React.ReactNode);
  Text: string | (() => React.ReactNode);
  withHeaderLine?: boolean;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader(props, ref) {
    const {
      Avatar,
      Badge,
      children,
      className,
      Dropdown,
      SupportingText,
      Text = 'Text',
      withHeaderLine,
      ...rest
    } = props;

    const wrapperClasses = clsx(
      styles.wrapper,
      {
        [styles['wrapper--with-header-line']]: withHeaderLine,
      },
      className,
    );
    const avatarTextContainerClasses = clsx(styles.avatar__text__container);
    const textContainerClasses = clsx(styles.text__container);
    const textBadgeContainerClasses = clsx(styles.text__badge__container);
    const textClasses = clsx(styles.text);
    const supportingTextClasses = clsx(styles.supporting__text);
    const dropdownClasses = clsx(styles.dropdown);

    return (
      <div className={wrapperClasses} ref={ref} {...rest}>
        <div className={avatarTextContainerClasses}>
          {Avatar && Avatar()}
          <div className={textContainerClasses}>
            <div className={textBadgeContainerClasses}>
              {typeof Text === 'string' ? (
                <div className={textClasses}>{Text}</div>
              ) : (
                Text()
              )}
              {Badge && Badge()}
            </div>
            {SupportingText &&
              (typeof SupportingText === 'string' ? (
                <div className={supportingTextClasses}>{SupportingText}</div>
              ) : (
                SupportingText()
              ))}
          </div>
        </div>
        {children}
        {Dropdown && <div className={dropdownClasses}>{Dropdown()}</div>}
      </div>
    );
  },
);

export default CardHeader;
