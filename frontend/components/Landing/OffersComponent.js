import React from 'react';
import styles from '@/styles/OffersStyle.module.scss';
import Carousel, { CarouselItem } from '../Carousel/Carousel';

export default function Offers({ offers }) {
  if (offers === null || undefined) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Carousel>
        {offers.map((offer, index) => {
          return (
            <CarouselItem key={index}>
              <div className={styles.offerCard}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${offer.image.url})`,
                  }}
                ></div>
                <div className={styles.description}>
                  <h1>special {offer.type} offer</h1>

                  <h2>{offer.name}</h2>
                  <div>
                    <p>{offer.description}</p>
                  </div>
                  <span>${offer.price}</span>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}
