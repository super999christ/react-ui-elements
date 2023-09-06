/* eslint-disable no-nested-ternary */
import { faCircleCheck } from '@fortawesome/pro-light-svg-icons';
import {
  faInfoCircle,
  faTriangleExclamation,
} from '@fortawesome/pro-regular-svg-icons';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import styles from './Alert.module.css';

type AlertTypeTypes =
  | 'default'
  | 'primary'
  | 'gray'
  | 'error'
  | 'warning'
  | 'success';

export interface AlertProps {
  CustomFooter?: () => React.ReactNode;
  FeaturedIcon?: () => React.ReactNode;
  SupportingText?: string | (() => React.ReactNode);
  Text: string | (() => React.ReactNode);
  type?: AlertTypeTypes;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    const {
      CustomFooter,
      FeaturedIcon,
      SupportingText,
      Text = 'Text',
      type = 'default',
      ...rest
    } = props;

    const wrapperClasses = clsx(styles.wrapper, {
      [styles['wrapper--type-primary']]: type === 'primary',
      [styles['wrapper--type-error']]: type === 'error',
      [styles['wrapper--type-warning']]: type === 'warning',
      [styles['wrapper--type-success']]: type === 'success',
    });

    const mobileWrapperClasses = clsx(styles.mobile__wrapper, {
      [styles['wrapper--type-primary']]: type === 'primary',
      [styles['wrapper--type-error']]: type === 'error',
      [styles['wrapper--type-warning']]: type === 'warning',
      [styles['wrapper--type-success']]: type === 'success',
    });

    const infoIconClasses = clsx(styles.info__icon, {
      [styles['info__icon--type-primary']]: type === 'primary',
      [styles['info__icon--type-error']]: type === 'error',
      [styles['info__icon--type-warning']]: type === 'warning',
      [styles['info__icon--type-success']]: type === 'success',
    });

    const textClasses = clsx(styles.text, {
      [styles['text--type-primary']]: type === 'primary',
      [styles['text--type-error']]: type === 'error',
      [styles['text--type-warning']]: type === 'warning',
      [styles['text--type-success']]: type === 'success',
    });

    const supportingTextClasses = clsx(styles.supporting__text, {
      [styles['supporting__text--type-primary']]: type === 'primary',
      [styles['supporting__text--type-error']]: type === 'error',
      [styles['supporting__text--type-warning']]: type === 'warning',
      [styles['supporting__text--type-success']]: type === 'success',
    });

    const closeIconClasses = clsx(styles.close__icon, {
      [styles['close__icon--type-primary']]: type === 'primary',
      [styles['close__icon--type-error']]: type === 'error',
      [styles['close__icon--type-warning']]: type === 'warning',
      [styles['close__icon--type-success']]: type === 'success',
    });

    const mobileIconsContainerClasses = clsx(styles.mobile__icons__container);
    const contentContainerClasses = clsx(styles.content__container);
    const mobileContentContainerClasses = clsx(
      styles.mobile__content__container,
    );
    const textContainerClasses = clsx(styles.text__container);
    const infoIconContainerClasses = clsx(styles.icon__container, {
      [styles['icon__container--type-default']]: type === 'default',
    });
    const iconContainerClasses = clsx(styles.icon__container);

    return (
      <div ref={ref} {...rest}>
        <div className={mobileWrapperClasses}>
          <div className={mobileIconsContainerClasses}>
            <div className={infoIconContainerClasses}>
              {FeaturedIcon ? (
                FeaturedIcon()
              ) : (
                <FontAwesomeIcon
                  className={infoIconClasses}
                  icon={
                    type === 'success'
                      ? faCircleCheck
                      : type === 'warning'
                      ? faTriangleExclamation
                      : faInfoCircle
                  }
                  width={20}
                  height={20}
                />
              )}
            </div>
            <div className={iconContainerClasses}>
              <FontAwesomeIcon
                className={closeIconClasses}
                icon={faXmark}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={mobileContentContainerClasses}>
            <div className={textContainerClasses}>
              {typeof Text === 'string' ? (
                <h1 className={textClasses}>{Text}</h1>
              ) : (
                Text()
              )}
              {SupportingText &&
                (typeof SupportingText === 'string' ? (
                  <p className={supportingTextClasses}>{SupportingText}</p>
                ) : (
                  SupportingText()
                ))}
            </div>
            {CustomFooter && CustomFooter()}
          </div>
        </div>
        <div className={wrapperClasses}>
          <div className={infoIconContainerClasses}>
            {FeaturedIcon ? (
              FeaturedIcon()
            ) : (
              <FontAwesomeIcon
                className={infoIconClasses}
                icon={
                  type === 'success'
                    ? faCircleCheck
                    : type === 'warning'
                    ? faTriangleExclamation
                    : faInfoCircle
                }
                width={20}
                height={20}
              />
            )}
          </div>
          <div className={contentContainerClasses}>
            <div className={textContainerClasses}>
              {typeof Text === 'string' ? (
                <h1 className={textClasses}>{Text}</h1>
              ) : (
                Text()
              )}
              {SupportingText &&
                (typeof SupportingText === 'string' ? (
                  <p className={supportingTextClasses}>{SupportingText}</p>
                ) : (
                  SupportingText()
                ))}
            </div>
            {CustomFooter && CustomFooter()}
          </div>
          <div className={iconContainerClasses}>
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

export default Alert;
