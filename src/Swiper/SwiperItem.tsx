import React, { JSXElementConstructor, ReactElement } from 'react';

import styles from './SwiperItem.module.css';
import clsx from 'clsx';

export type SwiperItemType = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string;
  numberOfItemsPerSwipe?: number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

function SwiperItem({ children, className, numberOfItemsPerSwipe = 1, onClick }: SwiperItemType) {
  const listClasses = clsx(styles["swiper-item"], className);
  return (
    <li className={listClasses} style={{width: `${100 / numberOfItemsPerSwipe }%`}} onClick={onClick}>
      <div className={styles["swiper-item-inner-container"]} draggable={false}>
        {children}
      </div>
    </li>
  );
}

export default SwiperItem;
