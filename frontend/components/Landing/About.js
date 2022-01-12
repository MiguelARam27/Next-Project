import React from 'react';
import styles from '@/styles/About.module.scss';
import Link from 'next/router';
export default function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1>Discover Adoremo </h1>
        <div className={styles.linkContainer}>
          <span>Appetizers</span>
          <span>Breakfast</span>
          <span>Lunch</span>
          <span>Dinner</span>
          <span>Pizza</span>
          <span>Drinks</span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.image}>
          {/* style={{ backgroundImage: `url('/images/chef.jpg')` }} */}
          <img src="/images/chef.jpg" alt="" />
        </div>
        <div className={styles.description}>
          <h1>Passionate Team of chefs preparing delights behind </h1>

          <p>
            Fast and light lunches, happy hour drinks after work, pre and
            post-theatre dinners and always the very best quality meat, fish,
            pasta and vegetables
          </p>
        </div>
      </div>
    </div>
  );
}
