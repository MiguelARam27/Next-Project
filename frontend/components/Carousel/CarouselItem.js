import React from 'react';
import styles from '@/styles/Carousel.module.scss';
export default function CarouselItem({ children, width }) {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
}
