import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './ErrorSection.module.css';

export interface ErrorSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  centeredDesktop?: boolean;
  centeredMobile?: boolean;
  className?: string;
  heading: string;
  Image?: () => React.ReactNode;
  reverseOrderDesktop?: boolean;
  reverseOrderMobile?: boolean;
  Subheading?: string | (() => React.ReactNode);
  supportingText?: string;
}

const ErrorSection = forwardRef<HTMLDivElement, ErrorSectionProps>(
  function ErrorSection(props, ref) {
    const {
      children,
      centeredDesktop = false,
      centeredMobile = false,
      className,
      heading,
      Image,
      reverseOrderDesktop = false,
      reverseOrderMobile = false,
      Subheading,
      supportingText,
      ...rest
    } = props;

    const wrapperClasses = clsx(
      styles.wrapper,
      {
        [styles['wrapper--reversed']]: reverseOrderDesktop,
        [styles['wrapper--mobile-reversed']]: reverseOrderMobile,
      },
      className,
    );
    const containerClasses = clsx(styles.container);
    const headerClasses = clsx(styles.header, {
      [styles['header--mobile-centered']]: centeredMobile,
      [styles['header--centered']]: centeredDesktop,
      [styles['header--mobile-reversed']]: reverseOrderMobile,
    });
    const reasonClasses = clsx(styles.reason, {
      [styles['reason--mobile-centered']]: centeredMobile,
      [styles['reason--centered']]: centeredDesktop,
    });
    const subheadingClasses = clsx(styles.subheading, {
      [styles['subheading--mobile-centered']]: centeredMobile,
      [styles['subheading--centered']]: centeredDesktop,
    });
    const headingClasses = clsx(styles.heading, {
      [styles['heading--mobile-centered']]: centeredMobile,
      [styles['heading--centered']]: centeredDesktop,
    });
    const supportingTextClasses = clsx(styles.supporting__text, {
      [styles['supporting__text--mobile-centered']]: centeredMobile,
      [styles['supporting__text--centered']]: centeredDesktop,
    });
    const imageClasses = clsx(styles.image);

    return (
      <div className={wrapperClasses} ref={ref} {...rest}>
        <div className={containerClasses}>
          <div className={headerClasses}>
            <div className={reasonClasses}>
              {Subheading &&
                (typeof Subheading === 'string' ? (
                  <h6 className={subheadingClasses}>{Subheading}</h6>
                ) : (
                  Subheading()
                ))}
              <h1 className={headingClasses}>{heading}</h1>
            </div>
            <p className={supportingTextClasses}>{supportingText}</p>
          </div>
          {children}
        </div>
        {Image && <div className={imageClasses}>{Image()}</div>}
      </div>
    );
  },
);

export default ErrorSection;
