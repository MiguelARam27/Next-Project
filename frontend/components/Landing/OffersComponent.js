import React from 'react';
import styles from '@/styles/OffersStyle.module.scss';
import Carousel, { CarouselItem } from '../Carousel/Carousel';
import { motion } from 'framer-motion';
import { useScroll } from '../../animations/useScroll';
import { projectTitle } from '../../animations/offersAnimations';
export default function Offers({ offers }) {
  if (offers === null || undefined) {
    return null;
  }
  const [element, controls] = useScroll(0.55);
  return (
    <div className={styles.container} ref={element}>
      <Carousel>
        {offers.map((offer, index) => {
          return (
            <CarouselItem key={index}>
              <motion.div
                className={styles.offerCard}
                initial="hidden"
                variants={projectTitle}
                animate={controls}
              >
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
              </motion.div>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}
