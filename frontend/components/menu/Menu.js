import React from 'react';

import styles from '@/styles/Menu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <Link href={'/menu'}>
        <span className={router.pathname === '/menu' ? styles.selected : null}>
          Appetizers
        </span>
      </Link>
      <Link href={'/menu/breakfast'}>
        <span
          className={
            router.pathname === '/menu/breakfast' ? styles.selected : null
          }
        >
          Breakfast
        </span>
      </Link>

      <span>Lunch</span>
      <span>Dinner</span>
      <span>Pizza</span>
      <span>Drinks</span>
    </div>
  );
}
