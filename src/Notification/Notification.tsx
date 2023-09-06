import { faXmark } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import Avatarr from '../Avatar/Avatar';
import styles from './Notification.module.css';

const PrimaryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_6733_584)">
        <path
          d="M3.75001 18.3333V14.1666M3.75001 5.83329V1.66663M1.66667 3.74996H5.83334M1.66667 16.25H5.83334M10.8333 2.49996L9.38819 6.25734C9.15318 6.86837 9.03568 7.17388 8.85295 7.43086C8.691 7.65862 8.492 7.85762 8.26424 8.01957C8.00726 8.2023 7.70175 8.3198 7.09072 8.55481L3.33334 9.99996L7.09072 11.4451C7.70175 11.6801 8.00726 11.7976 8.26424 11.9804C8.492 12.1423 8.691 12.3413 8.85295 12.5691C9.03568 12.826 9.15318 13.1315 9.38819 13.7426L10.8333 17.5L12.2785 13.7426C12.5135 13.1315 12.631 12.826 12.8137 12.5691C12.9757 12.3413 13.1747 12.1423 13.4024 11.9804C13.6594 11.7976 13.9649 11.6801 14.576 11.4451L18.3333 9.99996L14.576 8.55481C13.9649 8.3198 13.6594 8.2023 13.4024 8.01957C13.1747 7.85762 12.9757 7.65862 12.8137 7.43086C12.631 7.17388 12.5135 6.86837 12.2785 6.25734L10.8333 2.49996Z"
          stroke="#254EDB"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6733_584">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const GrayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_6733_830)">
        <path
          d="M10 7.50003L3.38656 11.7988C2.81335 12.1714 2.52675 12.3577 2.42748 12.5939C2.34074 12.8004 2.34074 13.033 2.42748 13.2395M10 7.50003L16.6135 11.7988C17.1867 12.1714 17.4733 12.3577 17.5725 12.5939C17.6593 12.8004 17.6593 13.033 17.5725 13.2395M10 7.50003V2.08337M10 12.5L3.38656 8.20129C2.81335 7.82871 2.52675 7.64241 2.42748 7.40617C2.34074 7.19971 2.34074 6.96702 2.42748 6.76056M10 12.5L16.6135 8.20129C17.1867 7.82871 17.4733 7.64241 17.5725 7.40617C17.6593 7.19971 17.6593 6.96702 17.5725 6.76056M10 12.5V17.9167M17.7267 13.311L10.7267 17.861C10.4636 18.032 10.3321 18.1175 10.1904 18.1507C10.0652 18.1801 9.93483 18.1801 9.80958 18.1507C9.66788 18.1175 9.53637 18.032 9.27335 17.861L2.27335 13.311C2.05168 13.167 1.94085 13.0949 1.86054 12.9988C1.78946 12.9137 1.73606 12.8154 1.70348 12.7094C1.66667 12.5897 1.66667 12.4575 1.66667 12.1931V7.80695C1.66667 7.54256 1.66667 7.41037 1.70348 7.29067C1.73606 7.18471 1.78946 7.08632 1.86054 7.00125C1.94085 6.90515 2.05168 6.83311 2.27335 6.68902L9.27335 2.13902C9.53637 1.96806 9.66788 1.88258 9.80958 1.84932C9.93483 1.81992 10.0652 1.81992 10.1904 1.84932C10.3321 1.88258 10.4636 1.96806 10.7267 2.13902L17.7267 6.68902C17.9483 6.83311 18.0592 6.90515 18.1395 7.00125C18.2106 7.08632 18.2639 7.18471 18.2965 7.29067C18.3333 7.41037 18.3333 7.54256 18.3333 7.80695V12.1931C18.3333 12.4575 18.3333 12.5897 18.2965 12.7094C18.2639 12.8154 18.2106 12.9137 18.1395 12.9988C18.0592 13.0949 17.9483 13.167 17.7267 13.311Z"
          stroke="#344054"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6733_830">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ProgressIndicatorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.66667 13.3333L10 10M10 10L13.3333 13.3333M10 10V17.5M16.6667 13.9524C17.6846 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3976 5.73833 13.3051 5.58145C12.2184 3.73736 10.212 2.5 7.91667 2.5C4.46489 2.5 1.66667 5.29822 1.66667 8.75C1.66667 10.4718 2.36288 12.0309 3.48913 13.1613"
        stroke="#254EDB"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ErrorIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.8333 5.83333L9.90368 3.9741C9.63613 3.439 9.50235 3.17144 9.30277 2.97597C9.12628 2.80311 8.91356 2.67164 8.68002 2.59109C8.41593 2.5 8.1168 2.5 7.51854 2.5H4.33329C3.39987 2.5 2.93316 2.5 2.57664 2.68166C2.26304 2.84144 2.00807 3.09641 1.84828 3.41002C1.66663 3.76654 1.66663 4.23325 1.66663 5.16667V5.83333M1.66663 5.83333H14.3333C15.7334 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8211 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8211 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7334 17.5 14.3333 17.5H5.66663C4.26649 17.5 3.56643 17.5 3.03165 17.2275C2.56124 16.9878 2.17879 16.6054 1.93911 16.135C1.66663 15.6002 1.66663 14.9001 1.66663 13.5V5.83333Z"
        stroke="#D92D20"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const WarningIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.8333 5.83333L9.90368 3.9741C9.63613 3.439 9.50235 3.17144 9.30277 2.97597C9.12628 2.80311 8.91356 2.67164 8.68002 2.59109C8.41593 2.5 8.1168 2.5 7.51854 2.5H4.33329C3.39987 2.5 2.93316 2.5 2.57664 2.68166C2.26304 2.84144 2.00807 3.09641 1.84828 3.41002C1.66663 3.76654 1.66663 4.23325 1.66663 5.16667V5.83333M1.66663 5.83333H14.3333C15.7334 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8211 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8211 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7334 17.5 14.3333 17.5H5.66663C4.26649 17.5 3.56643 17.5 3.03165 17.2275C2.56124 16.9878 2.17879 16.6054 1.93911 16.135C1.66663 15.6002 1.66663 14.9001 1.66663 13.5V5.83333Z"
        stroke="#DC6803"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SuccesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_6733_846)">
        <path
          d="M7.49996 9.99996L9.16663 11.6666L12.9166 7.91663M6.11143 3.18221C6.78129 3.12875 7.41722 2.86534 7.92868 2.42948C9.12223 1.41234 10.8777 1.41234 12.0712 2.42948C12.5827 2.86534 13.2186 3.12875 13.8885 3.18221C15.4517 3.30695 16.693 4.54825 16.8177 6.11143C16.8712 6.78129 17.1346 7.41722 17.5704 7.92868C18.5876 9.12223 18.5876 10.8777 17.5704 12.0712C17.1346 12.5827 16.8712 13.2186 16.8177 13.8885C16.693 15.4517 15.4517 16.693 13.8885 16.8177C13.2186 16.8712 12.5827 17.1346 12.0712 17.5704C10.8777 18.5876 9.12223 18.5876 7.92868 17.5704C7.41722 17.1346 6.78129 16.8712 6.11143 16.8177C4.54825 16.693 3.30695 15.4517 3.18221 13.8885C3.12875 13.2186 2.86534 12.5827 2.42948 12.0712C1.41234 10.8777 1.41234 9.12223 2.42948 7.92868C2.86534 7.41722 3.12875 6.78129 3.18221 6.11143C3.30695 4.54825 4.54825 3.30695 6.11143 3.18221Z"
          stroke="#039855"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6733_846">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

type NotificationTypeTypes =
  | 'image'
  | 'avatar'
  | 'primary-icon'
  | 'gray-icon'
  | 'progress-indicator'
  | 'error-icon'
  | 'warning-icon'
  | 'success-icon'
  | 'no-icon';

export interface NotificationProps extends React.HTMLProps<HTMLDivElement> {
  Avatar?: () => React.ReactNode;
  children?: React.ReactNode;
  imageLink?: string;
  imageAlt?: string;
  ProgressIndicator?: () => React.ReactNode;
  SupportingText?: string | (() => React.ReactNode);
  Text: string | (() => React.ReactNode);
  time?: string;
  type?: NotificationTypeTypes;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  function Notification(props, ref) {
    const {
      Avatar = () => <Avatarr size="md" />,
      children,
      className,
      imageLink,
      imageAlt,
      ProgressIndicator,
      SupportingText,
      Text = 'Text',
      time,
      type = 'no-icon',
      ...rest
    } = props;

    const containerClasses = clsx(styles.container, className);
    const wrapperClasses = clsx(styles.wrapper);
    const mobileWrapperClasses = clsx(styles.mobile__wrapper);
    const mobileIconsContainerClasses = clsx(styles.mobile__icons__container, {
      [styles['mobile__icons__container--x-only']]:
        type === 'no-icon' || type === 'image',
    });
    const contentContainerClasses = clsx(styles.content__container);
    const mobileContentContainerClasses = clsx(
      styles.mobile__content__container,
    );
    const imageContainerClasses = clsx(styles.image__container);
    const imageContainerTwoClasses = clsx(styles.image__container__two);
    const iconContainerClasses = clsx(styles.icon__container, {
      [styles['icon__container--type-gray-icon']]: type === 'gray-icon',
      [styles['icon__container--type-error-icon']]: type === 'error-icon',
      [styles['icon__container--type-warning-icon']]: type === 'warning-icon',
      [styles['icon__container--type-success-icon']]: type === 'success-icon',
    });
    const textTimeIconContainerClasses = clsx(
      styles.text__time__icon__container,
    );
    const textContainerClasses = clsx(styles.text__container);
    const textTimeContainerClasses = clsx(styles.text__time__container);
    const textClasses = clsx(styles.text);
    const timeClasses = clsx(styles.time);
    const supportingTextClasses = clsx(styles.supporting__text);
    const closeIconContainerClasses = clsx(styles.close__icon__container, {
      [styles['close__icon__container--type-no-icon-or-image']]:
        type === 'no-icon' || type === 'image',
    });
    const closeIconContainerClassesNoIconOrImage = clsx(
      styles.close__icon__container,
    );
    const closeIconClasses = clsx(styles.close__icon);

    return (
      <div className={containerClasses} ref={ref} {...rest}>
        <div className={mobileWrapperClasses}>
          {type !== 'no-icon' && type !== 'image' && (
            <div className={mobileIconsContainerClasses}>
              {type === 'avatar' && Avatar && Avatar()}
              {[
                'primary-icon',
                'gray-icon',
                'progress-indicator',
                'error-icon',
                'warning-icon',
                'success-icon',
              ].includes(type) && (
                <div className={iconContainerClasses}>
                  {type === 'primary-icon' && <PrimaryIcon />}
                  {type === 'gray-icon' && <GrayIcon />}
                  {type === 'progress-indicator' && <ProgressIndicatorIcon />}
                  {type === 'error-icon' && <ErrorIcon />}
                  {type === 'warning-icon' && <WarningIcon />}
                  {type === 'success-icon' && <SuccesIcon />}
                </div>
              )}
              <div className={closeIconContainerClasses}>
                <FontAwesomeIcon
                  className={closeIconClasses}
                  icon={faXmark}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          )}
          <div className={mobileContentContainerClasses}>
            <div className={textContainerClasses}>
              <div className={textTimeIconContainerClasses}>
                <div className={textTimeContainerClasses}>
                  {typeof Text === 'string' ? (
                    <h1 className={textClasses}>{Text}</h1>
                  ) : (
                    Text()
                  )}
                  {time && <span className={timeClasses}>{time}</span>}
                </div>
                {(type === 'no-icon' || type === 'image') && (
                  <div className={closeIconContainerClassesNoIconOrImage}>
                    <FontAwesomeIcon
                      className={closeIconClasses}
                      icon={faXmark}
                      width={20}
                      height={20}
                    />
                  </div>
                )}
              </div>
              {SupportingText &&
                (typeof SupportingText === 'string' ? (
                  <p className={supportingTextClasses}>{SupportingText}</p>
                ) : (
                  SupportingText()
                ))}
            </div>
            {type === 'image' && imageLink && (
              <div className={imageContainerTwoClasses}>
                <img src={imageLink} alt={imageAlt} style={{ width: '100%' }} />
              </div>
            )}
            {type === 'progress-indicator' &&
              ProgressIndicator &&
              ProgressIndicator()}
            {children && children}
          </div>
        </div>
        <div className={wrapperClasses}>
          {type !== 'no-icon' && (
            <>
              {type === 'image' && imageLink && (
                <div className={imageContainerClasses}>
                  <img src={imageLink} alt={imageAlt} />
                </div>
              )}
              {type === 'avatar' && Avatar && Avatar()}
              {[
                'primary-icon',
                'gray-icon',
                'progress-indicator',
                'error-icon',
                'warning-icon',
                'success-icon',
              ].includes(type) && (
                <div className={iconContainerClasses}>
                  {type === 'primary-icon' && <PrimaryIcon />}
                  {type === 'gray-icon' && <GrayIcon />}
                  {type === 'progress-indicator' && <ProgressIndicatorIcon />}
                  {type === 'error-icon' && <ErrorIcon />}
                  {type === 'warning-icon' && <WarningIcon />}
                  {type === 'success-icon' && <SuccesIcon />}
                </div>
              )}
            </>
          )}
          <div className={contentContainerClasses}>
            <div className={textContainerClasses}>
              <div className={textTimeContainerClasses}>
                {typeof Text === 'string' ? (
                  <h1 className={textClasses}>{Text}</h1>
                ) : (
                  Text()
                )}
                {time && <span className={timeClasses}>{time}</span>}
              </div>
              {SupportingText &&
                (typeof SupportingText === 'string' ? (
                  <p className={supportingTextClasses}>{SupportingText}</p>
                ) : (
                  SupportingText()
                ))}
            </div>
            {type === 'progress-indicator' &&
              ProgressIndicator &&
              ProgressIndicator()}
            {children && children}
          </div>
          <div className={closeIconContainerClasses}>
            <FontAwesomeIcon
              className={closeIconClasses}
              icon={faXmark}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    );
  },
);

export default Notification;
