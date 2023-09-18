/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './ProgressCircle.module.css';

export interface CircleProps {
  color: string;
  diameter: number;
  percentage: number;
  strokeWidth: number;
}

const Circle = ({ color, diameter, percentage, strokeWidth }: CircleProps) => {
  const circ = 2 * Math.PI * diameter;
  return (
    <circle
      cx={diameter + strokeWidth / 2}
      cy={diameter + strokeWidth / 2}
      fill="transparent"
      r={diameter}
      stroke={color}
      strokeDasharray={circ}
      strokeDashoffset={((100 - percentage) * circ) / 100}
      strokeLinecap="round"
      strokeWidth={`${strokeWidth}px`}
    />
  );
};

const cleanPercentage = (percentage: number): number => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

type ProgressCircleShapeTypes = 'half-circle' | 'circle';
type ProgressCircleSizeTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';

interface ProgressCircleProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  label?: string;
  progress?: number;
  shape?: ProgressCircleShapeTypes;
  size?: ProgressCircleSizeTypes;
}

const ProgressCircle = forwardRef<HTMLDivElement, ProgressCircleProps>(
  function ProgressCircle(props, propsRef) {
    const {
      className,
      label,
      progress = 0,
      shape = 'circle',
      size = 'md',
      ...rest
    } = props;

    const cleanPerc = cleanPercentage(progress);

    let strokeWidth = 24;
    let realWidth = 192 + 2 * strokeWidth;

    if (size === 'xxs') {
      strokeWidth = 6;
      realWidth = 52 + 2 * strokeWidth;
    } else if (size === 'xs') {
      strokeWidth = 16;
      realWidth = 128 + 2 * strokeWidth;
    } else if (size === 'sm') {
      strokeWidth = 20;
      realWidth = 160 + 2 * strokeWidth;
    } else if (size === 'lg') {
      strokeWidth = 28;
      realWidth = 224 + 2 * strokeWidth;
    }

    const diameter = (realWidth - strokeWidth) / 2;

    const wrapperClasses = clsx(
      styles.wrapper,
      {
        [styles['wrapper--shape-half-circle']]: shape === 'half-circle',
      },
      className,
    );
    const containerClasses = clsx(styles.container, {
      [styles['container--shape-half-circle']]: shape === 'half-circle',
    });
    const svgClasses = clsx(styles.svg, {
      [styles['svg--shape-half-circle']]: shape === 'half-circle',
    });
    const textContainerClasses = clsx(styles.text__container, {
      [styles['text__container--shape-half-circle']]: shape === 'half-circle',
      [styles['text__container--shape-half-circle-with-label']]:
        size !== 'xxs' && shape === 'half-circle' && label,
    });
    const labelClasses = clsx(styles.label, {
      [styles['label--size-xs-or-sm']]: size === 'xs' || size === 'sm',
    });
    const percentageClasses = clsx(styles.percentage, {
      [styles['percentage--size-xxs']]: size === 'xxs',
      [styles['percentage--size-xs']]: size === 'xs',
      [styles['percentage--size-sm']]: size === 'sm',
      [styles['percentage--size-lg']]: size === 'lg',
    });
    const labelBottomClasses = clsx(styles.label__bottom, {
      [styles['label__bottom--shape-circle']]: shape === 'circle',
    });

    return (
      <div className={wrapperClasses} ref={propsRef} {...rest}>
        <div
          className={containerClasses}
          style={{
            height:
              shape === 'half-circle'
                ? size !== 'xxs'
                  ? `${(realWidth + strokeWidth) / 2 + 20}px`
                  : `${(realWidth + strokeWidth) / 2}px`
                : '',
          }}
        >
          <svg className={svgClasses} height={realWidth} width={realWidth}>
            <Circle
              color="#EAECF0"
              diameter={diameter}
              percentage={shape === 'circle' ? 100 : 50}
              strokeWidth={strokeWidth}
            />
            <Circle
              color="#254EDB"
              diameter={diameter}
              percentage={shape === 'circle' ? cleanPerc : cleanPerc / 2}
              strokeWidth={strokeWidth}
            />
          </svg>
          <div className={textContainerClasses}>
            {label && size !== 'xxs' && <p className={labelClasses}>{label}</p>}
            <p className={percentageClasses}>{cleanPerc}%</p>
          </div>
        </div>
        {label && size === 'xxs' && (
          <p className={labelBottomClasses}>{label}</p>
        )}
      </div>
    );
  },
);

export default ProgressCircle;
