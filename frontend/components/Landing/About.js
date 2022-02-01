import React from 'react';
import styles from '@/styles/About.module.scss';
import Link from 'next/link';
import { useScroll } from '../../animations/useScroll';
import {
  titleAnimation,
  platformContainerAnimation,
  jumboInfoChildren,
  jumboInfoChildren2,
  jumboPicture,
} from '../../animations/aboutAnimations';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [element, controls] = useScroll(0.35);
  const [element2, controls2] = useScroll(0.55);
  return (
    <div
      className={styles.container}
      ref={element}
      style={{ overflow: 'hidden' }}
    >
      <div className={styles.leftContainer}>
        <h1>Discover Adoremo </h1>
        <motion.div
          className={styles.linkContainer}
          initial="hidden"
          variants={titleAnimation}
          animate={controls}
          viewport={{ once: true }}
        >
          <Link href={'/menu'}>
            <motion.span variants={jumboInfoChildren}>Appetizers</motion.span>
          </Link>
          <Link href={'/menu/breakfast'}>
            <motion.span variants={jumboInfoChildren}>Breakfast</motion.span>
          </Link>
          <Link href={'/menu/lunch'}>
            <motion.span variants={jumboInfoChildren}>Lunch</motion.span>
          </Link>
          <Link href={'/menu/Dinner'}>
            <motion.span variants={jumboInfoChildren}>Dinner</motion.span>
          </Link>
          <Link href={'/menu/Pizza'}>
            <motion.span variants={jumboInfoChildren}>Pizza</motion.span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className={styles.rightContainer}
        ref={element2}
        initial="hidden"
        variants={platformContainerAnimation}
        animate={controls2}
      >
        <motion.div className={styles.image} variants={jumboPicture}>
          {/* style={{ backgroundImage: `url('/images/chef.jpg')` }} */}
          <img src="/images/chef.jpg" alt="" />
        </motion.div>
        <motion.div
          className={styles.description}
          variants={jumboInfoChildren2}
        >
          <h1>Passionate Team of chefs preparing delights behind </h1>

          <p>
            Fast and light lunches, happy hour drinks after work, pre and
            post-theatre dinners and always the very best quality meat, fish,
            pasta and vegetables
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
