import React from 'react';
import styles from '@/styles/OffersStyle.module.scss';
import { API_URL } from '@/config/index';
import Offers from '@/components/Landing/OffersComponent';
import Map from '@/components/Landing/Map';

export default function location() {
  return (
    <div className={styles.container}>
      <Map />
    </div>
  );
}
