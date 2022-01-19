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
      <Link href={'/menu/lunch'}>
        <span
          className={router.pathname === '/menu/lunch' ? styles.selected : null}
        >
          Lunch
        </span>
      </Link>
      <Link href={'/menu/dinner'}>
        <span
          className={
            router.pathname === '/menu/dinner' ? styles.selected : null
          }
        >
          Dinner
        </span>
      </Link>
      <Link href={'/menu/pizza'}>
        <span
          className={router.pathname === '/menu/pizza' ? styles.selected : null}
        >
          Pizza
        </span>
      </Link>
    </div>
  );
}
