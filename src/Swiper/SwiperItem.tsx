import React, { JSXElementConstructor, ReactElement } from 'react';

import styles from './SwiperItem.module.css';

export type SwiperItemType = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  numberOfItemsPerSwipe?: number;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

function SwiperItem({ children, numberOfItemsPerSwipe = 1, onClick }: SwiperItemType) {
  return (
    <li className={styles["swiper-item"]} style={{width: `${100 / numberOfItemsPerSwipe }%`}} onClick={onClick}>
      <div className={styles["swiper-item-inner-container"]} draggable={false}>
        {children}
      </div>
    </li>
  );
}

export default SwiperItem;
