import React from 'react';
import styles from '@/styles/OffersStyle.module.scss';
import { API_URL } from '@/config/index';
import Offers from '@/components/Landing/OffersComponent';

export default function offers({ offers }) {
  if (offers === null || undefined) {
    return null;
  }
  return (
    <div className={styles.offerpageContainer}>
      <Offers offers={offers} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/offers`);
  const offers = await res.json();

  return {
    props: { offers: offers },
    revalidate: 1,
  };
}
