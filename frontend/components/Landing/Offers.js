import React from 'react';
import styles from '@/styles/Offers.module.scss';
import Carousel, { CarouselItem } from '../Carousel/Carousel';

export default function Offers() {
  return (
    <div className={styles.container}>
      <Carousel>
        <CarouselItem>Item 1 </CarouselItem>
        <CarouselItem>Item 2 </CarouselItem>
        <CarouselItem>Item 3 </CarouselItem>
        <CarouselItem>Item 4 </CarouselItem>
      </Carousel>
    </div>
  );
}
