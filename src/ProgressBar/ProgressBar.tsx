/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './ProgressBar.module.css';

type LabelPlacementTypes = 'bottom' | 'right';
/* | 'top floating'| 'bottom floating'; */

export interface ProgressBarProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  label?: string;
  labelPlacement?: LabelPlacementTypes;
  progress?: number;
  progressColor?: string;
}

// TODO: Add 'top-floating' and 'bottom-floating' labelPlacements
const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar(props, ref) {
    const {
      className,
      label,
      labelPlacement = 'right',
      progress = 0,
      progressColor,
      ...rest
    } = props;

    const progressBarClasses = clsx(
      styles.progress__bar,
      {
        [styles['progress__bar--label-placement-bottom']]:
          labelPlacement === 'bottom',
      },
      className,
    );
    const progressContainerClasses = clsx(
      styles.progress__bar__progress__container,
    );
    const progressClasses = clsx(
      styles.progress__bar__progress__container_progress,
    );
    const descriptionContainerClasses = clsx(
      styles.progress__bar__description__container,
      {
        [styles[
          'progress__bar__description__container--label-placement-bottom'
        ]]: labelPlacement === 'bottom',
      },
    );

    return (
      <div className={progressBarClasses} ref={ref} {...rest}>
        <div className={progressContainerClasses}>
          <div
            className={progressClasses}
            style={{
              width: `${progress < 0 ? 0 : progress > 100 ? 100 : progress}%`,
              backgroundColor: `${progressColor || ''}`,
            }}
          />
        </div>
        {label && <div className={descriptionContainerClasses}>{label}</div>}
      </div>
    );
  },
);

export default ProgressBar;
