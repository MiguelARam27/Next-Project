import React from 'react';

import styles from '@/styles/Menu.module.scss';
import Image from 'next/image';
export default function MenuLayout({ items }) {
  return (
    <div className={styles.menuContainer}>
      {items?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className={styles.menuItem}>
              <div className={styles.image}>
                <Image src={item.image.url} layout="fill" alt="" />
              </div>
              <div className={styles.description}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <div className={styles.price}>${item.price}</div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
