import React, { useState, useRef, RefObject } from 'react';

import styles from './Swiper.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import clsx from 'clsx';
import { SwiperItemType } from './SwiperItem';

function useStateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef<S>(defaultValue);
  const [state, _setState] = useState<S>(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}

function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLElement>
    | React.MouseEvent<HTMLElement>
) {
  return 'changedTouches' in e ? e.changedTouches[0] : e;
}

function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

export interface SwiperProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SwiperItemType[];
  minSwipeRequired?: number;
  numberOfItemsPerSwipe?: number;
}

const Swiper = React.forwardRef<HTMLDivElement, SwiperProps>(
  function Swiper(props, ref) {
    const {
      className,
      items,
      minSwipeRequired = 50,
      numberOfItemsPerSwipe = 1,
      ...rest
    } = props;
    const numberOfItems = items.length;

    const realNumberOfItems = Math.ceil(numberOfItems / numberOfItemsPerSwipe);

    const containerRef = useRef<HTMLUListElement>(null);
    const containerWidthRef = useRef(0);
    const minOffsetXRef = useRef(0);
    const currentOffsetXRef = useRef(0);
    const startXRef = useRef(0);
    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const onTouchMove = (e: TouchEvent | MouseEvent) => {
      const currentX = getTouchEventData(e).clientX;
      const diff = getRefValue(startXRef) - currentX;
      let newOffsetX = getRefValue(currentOffsetXRef) - diff;

      const maxOffsetX = 0;
      const minOffsetX = getRefValue(minOffsetXRef);

      if (newOffsetX > maxOffsetX) {
        newOffsetX = maxOffsetX;
      }

      if (newOffsetX < minOffsetX) {
        newOffsetX = minOffsetX;
      }

      setOffsetX(newOffsetX);
    };

    const onTouchEnd = () => {
      const currentOffsetX = getRefValue(currentOffsetXRef);
      const containerWidth = getRefValue(containerWidthRef);
      let newOffsetX = getRefValue(offsetXRef);

      const diff = currentOffsetX - newOffsetX;

      if (currentIdx !== realNumberOfItems - 1 || diff < -1 || diff > 0) {
        // we need to check difference in absolute/positive value (if diff is more than minSwipeRequired px)
        if (Math.abs(diff) > minSwipeRequired) {
          if (diff > 0) {
            // swipe to the right if diff is positive
            newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;

            const newCurrentIndex = Math.abs(newOffsetX / containerWidth);
            setCurrentIdx(Math.abs(newOffsetX / containerWidth));

            if (newCurrentIndex === realNumberOfItems - 1 && numberOfItems % numberOfItemsPerSwipe !== 0) {
              newOffsetX = newOffsetX + (numberOfItemsPerSwipe - (numberOfItems % numberOfItemsPerSwipe)) * containerWidth / numberOfItemsPerSwipe;
            }
          } else {
            // swipe to the left if diff is negative
            newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
            setCurrentIdx(Math.abs(newOffsetX / containerWidth));
          }
        } else if (currentIdx === realNumberOfItems - 1) {
          // remain in the current image since diff was <= minSwipeRequired
          const moveToFitPerfectlyToTheLeft = (numberOfItems % numberOfItemsPerSwipe) * containerWidth / numberOfItemsPerSwipe;
          newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth - moveToFitPerfectlyToTheLeft;
        } else {
          // remain in the current image since diff was <= minSwipeRequired
          newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
          setCurrentIdx(Math.abs(newOffsetX / containerWidth));
        }
      }

      setIsSwiping(false);
      setOffsetX(newOffsetX);

      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onTouchEnd);
      window.removeEventListener('mousemove', onTouchMove);
    };

    const onTouchStart = (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
      setIsSwiping(true);

      currentOffsetXRef.current = getRefValue(offsetXRef);
      startXRef.current = getTouchEventData(e).clientX;

      const containerEl = getRefValue(containerRef);
      const containerWidth = containerEl.offsetWidth;

      containerWidthRef.current = containerWidth;
      minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
      window.addEventListener('mousemove', onTouchMove);
      window.addEventListener('mouseup', onTouchEnd);
    };

    const indicatorOnClick = (idx: number) => {
      const containerEl = getRefValue(containerRef);
      const containerWidth = containerEl.offsetWidth;

      setCurrentIdx(idx);
      if (idx === realNumberOfItems - 1 && numberOfItems % numberOfItemsPerSwipe !== 0) {
        const moveToFitPerfectlyToTheRight = (numberOfItemsPerSwipe - (numberOfItems % numberOfItemsPerSwipe)) * containerWidth / numberOfItemsPerSwipe;
        setOffsetX(-(containerWidth * idx) + moveToFitPerfectlyToTheRight);
      } else {
        setOffsetX(-(containerWidth * idx));
      }
    };

    const swiperContainerClasses = clsx(styles["swiper-container"], className);

    return (
      <div>
        <div
          className={swiperContainerClasses}
          onTouchStart={onTouchStart}
          onMouseDown={onTouchStart}
          ref={ref}
          {...rest}
        >
          {currentIdx > 0 &&
            <div className={styles["chevron-left-container"]}>
              <div 
                className={`group ${styles["chevron-wrapper"]}`}
                onClick={() => indicatorOnClick(currentIdx - 1)}
              >
                <FontAwesomeIcon icon={faChevronLeft} className={styles["chevron-icon"]} />
              </div>
            </div>
          }

          <ul
            ref={containerRef}
            className={`${styles["swiper-list"]} ${isSwiping ? styles["is-swiping"] : ''}`}
            style={{ transform: `translate3d(${offsetX}px, 0, 0)`, }}
          >
            {items.map((item, index) => <React.Fragment key={index}>{React.cloneElement(item.children, { numberOfItemsPerSwipe: numberOfItemsPerSwipe })}</React.Fragment>)}
          </ul>

          {currentIdx !== realNumberOfItems - 1 &&
            <div className={styles["chevron-right-container"]}>
              <div 
                className={styles["chevron-wrapper"]}
                onClick={() => indicatorOnClick(currentIdx + 1)}
              >
                <FontAwesomeIcon icon={faChevronRight} className={styles["chevron-icon"]} />
              </div>
            </div>
          }
        </div>
        <ul className={styles["swiper-indicator"]}>
          {Array.from(new Array(realNumberOfItems)).map((num, idx) => (
            <li
              key={idx}
              className={`${styles["swiper-indicator-item"]} ${
                currentIdx === idx ? styles["active"] : ''
              }`}
              onClick={() => indicatorOnClick(idx)}
              data-testid="indicator"
            />
          ))}
        </ul>
      </div>
    );
  }
);

export default Swiper;
