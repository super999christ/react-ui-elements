import clsx from 'clsx';
import React, { forwardRef } from 'react';

import type { AvatarSizeTypes } from '../Avatar';
import Avatar from '../Avatar';
import styles from './PageHeader.module.css';

type PageHeaderVariantTypes =
  | 'simple'
  | 'avatar'
  | 'banner-simple'
  | 'banner-avatar'
  | 'banner-simple-centered'
  | 'banner-avatar-centered';

interface PageHeaderProps extends React.HTMLProps<HTMLDivElement> {
  Avatarr?: (size: AvatarSizeTypes) => React.ReactNode; // NOTE: return type needs to be <Avatar /> Component
  BackButton?: () => React.ReactNode;
  Breadcrumb?: () => React.ReactNode;
  children: React.ReactNode;
  Search?: () => React.ReactNode;
  supportingText?: string;
  text: string;
  variant: PageHeaderVariantTypes;
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader(props, ref) {
    const {
      Avatarr,
      BackButton,
      Breadcrumb,
      children,
      className,
      Search,
      supportingText,
      text = 'Text',
      variant = 'simple',
      ...rest
    } = props;

    const wrapperClasses = clsx(styles.wrapper);
    const bannerClasses = clsx(styles.banner);
    const outerContainerClasses = clsx(styles.outer__container, {
      [styles['outer__container--variant-banner-avatar-centered']]:
        variant === 'banner-avatar-centered',
      [styles['outer__container--variant-banner-simple-centered']]:
        variant === 'banner-simple-centered',
    });
    const avatarClasses = clsx(styles.avatar, {
      [styles['avatar--variant-banner-avatar-centered']]:
        variant === 'banner-avatar-centered',
    });
    const containerClasses = clsx(styles.container, {
      [styles['container--variant-simple-or-avatar']]:
        variant === 'simple' || variant === 'avatar',
      [styles['container--variant-banner-simple-or-banner-avatar']]:
        variant === 'banner-simple' || variant === 'banner-avatar',
      [styles['container--variant-banner-simple-centered']]:
        variant === 'banner-simple-centered',
      [styles['container--variant-banner-avatar-centered']]:
        variant === 'banner-avatar-centered',
    });
    const contentClasses = clsx(styles.content, {
      [styles[
        'content--variant-banner-simple-centered-or-banner-avatar-centered'
      ]]:
        variant === 'banner-simple-centered' ||
        variant === 'banner-avatar-centered',
      [styles['content--variant-banner-simple-centered']]:
        variant === 'banner-simple-centered',
      [styles['content--no-breadcrum--variant-banner-avatar-centered']]:
        Breadcrumb === undefined && variant === 'banner-avatar-centered',
      [styles['content--no-breadcrum--variant-banner-avatar']]:
        Breadcrumb === undefined && variant === 'banner-avatar',
    });
    const avatarTextContainerClasses = clsx(styles.avatar__text__container, {
      [styles['avatar__text__container--variant-banner-avatar-centered']]:
        variant === 'banner-avatar-centered',
    });
    const textContainerClasses = clsx(styles.text__container, {
      [styles[
        'text__container--variant-banner-simple-centered-banner-avatar-centered'
      ]]:
        variant === 'banner-simple-centered' ||
        variant === 'banner-avatar-centered',
    });
    const textClasses = clsx(styles.text);
    const supportingTextClasses = clsx(styles.supporting__text);

    const mobileWrapperClasses = clsx(styles.mobile__wrapper);
    const mobileBannerClasses = clsx(styles.mobile__banner);
    const mobileAvatarClasses = clsx(styles.mobile__avatar, {
      [styles['mobile__avatar-centered']]: variant === 'banner-avatar-centered',
    });
    const mobileContainerClasses = clsx(styles.mobile__container, {
      [styles['mobile__container--variant-with-banner']]:
        variant !== 'simple' && variant !== 'avatar',
      [styles['mobile__container-centered']]:
        variant === 'banner-simple-centered' ||
        variant === 'banner-avatar-centered',
    });
    const backButtonContainerClasses = clsx(styles.back__button__container, {
      [styles['back__button__container--variant-banner-avatar']]:
        variant === 'banner-avatar',
    });
    const mobileContentClasses = clsx(styles.mobile__content, {
      [styles['mobile__content-padding-top']]:
        BackButton === undefined &&
        (variant === 'banner-avatar' || variant === 'banner-avatar-centered'),
      [styles['mobile__content-centered']]:
        variant === 'banner-simple-centered' ||
        variant === 'banner-avatar-centered',
    });
    const mobileAvatarTextContainerClasses = clsx(
      styles.mobile__avatar__text__container,
      {
        [styles['mobile__avatar__text__container-centered']]:
          variant === 'banner-simple-centered' ||
          variant === 'banner-avatar-centered',
      },
    );
    const mobileTextContainerClasses = clsx(styles.mobile__text__container, {
      [styles[
        'text__container--variant-banner-simple-centered-banner-avatar-centered'
      ]]:
        variant === 'banner-simple-centered' ||
        variant === 'banner-avatar-centered',
      [styles['mobile__text__container-centered']]:
        variant === 'banner-simple-centered' ||
        variant === 'banner-avatar-centered',
    });
    const mobileTextClasses = clsx(styles.mobile__text);

    return (
      <div className={className} ref={ref} {...rest}>
        <div className={wrapperClasses}>
          {variant !== 'simple' && variant !== 'avatar' && (
            <div className={bannerClasses}>
              {variant === 'banner-avatar-centered' && (
                <div className={avatarClasses}>
                  {Avatarr ? Avatarr('4xl') : <Avatar size="4xl" />}
                </div>
              )}
            </div>
          )}
          <div className={outerContainerClasses}>
            {variant === 'banner-avatar' && (
              <div className={avatarClasses}>
                {Avatarr ? Avatarr('4xl') : <Avatar size="4xl" />}
              </div>
            )}
            <div className={containerClasses}>
              {Breadcrumb && Breadcrumb()}
              <div className={contentClasses}>
                <div className={avatarTextContainerClasses}>
                  {variant === 'avatar' &&
                    (Avatarr ? Avatarr('2xl') : <Avatar size="2xl" />)}
                  <div className={textContainerClasses}>
                    <div className={textClasses}>{text}</div>
                    {supportingText && (
                      <div className={supportingTextClasses}>
                        {supportingText}
                      </div>
                    )}
                  </div>
                </div>
                {children && children}
                {Search && Search()}
                <div />
              </div>
            </div>
          </div>
        </div>
        <div className={mobileWrapperClasses}>
          {variant !== 'simple' && variant !== 'avatar' && (
            <div className={mobileBannerClasses}>
              {(variant === 'banner-avatar' ||
                variant === 'banner-avatar-centered') && (
                <div className={mobileAvatarClasses}>
                  {Avatarr ? Avatarr('3xl') : <Avatar size="3xl" />}
                </div>
              )}
            </div>
          )}
          <div className={mobileContainerClasses}>
            {BackButton && (
              <div className={backButtonContainerClasses}>{BackButton()}</div>
            )}
            <div className={mobileContentClasses}>
              <div className={mobileAvatarTextContainerClasses}>
                {variant === 'avatar' &&
                  (Avatarr ? Avatarr('xl') : <Avatar size="xl" />)}
                <div className={mobileTextContainerClasses}>
                  <div className={mobileTextClasses}>{text}</div>
                  {supportingText && (
                    <div className={supportingTextClasses}>
                      {supportingText}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {children && children}
            {Search && Search()}
          </div>
        </div>
      </div>
    );
  },
);

export default PageHeader;
