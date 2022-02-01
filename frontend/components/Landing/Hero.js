import React from 'react';
import styles from '@/styles/Hero.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  jumboInfoSection,
  jumboInfoChildren,
  jumboPictureSection,
  jumboPictureChildren,
} from '../../animations/jumboAnimation';
export default function Hero() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.leftContainer}
        variants={jumboInfoSection}
        initial="hidden"
        animate="show"
      >
        <div className={styles.topContainer}>
          <h1>Living Italian</h1>
        </div>

        <motion.div
          className={styles.bottomContainer}
          variants={jumboInfoChildren}
          initial="hidden"
          animate="show"
        >
          <div className={styles.description}>
            <p>
              Adoremo is offering fabously fresh, modern, authentic italian
              cooking. Fast and light lunches. At Adoremo's we like to bring you
              the best that Italian Cuisine can offer. Using only the best and
              freshest ingredients, we cook like Mama is there watching our
              every move in putting together.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.rightContainer}
        variants={jumboPictureSection}
        initial="hidden"
        animate="show"
      >
        <img src="/images/hero.png" alt="chef cooking" />
      </motion.div>
    </div>
  );
}
