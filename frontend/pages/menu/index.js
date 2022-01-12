import React from 'react';
import styles from '@/styles/Menu.module.scss';
import Menu from '@/components/menu/Menu';
import MenuLayout from '@/components/menu/MenuLayout';
import { API_URL } from '@/config/index';
export default function MenuPage({ appetizers }) {
  return (
    <div className={styles.container}>
      <Menu />
      <MenuLayout items={appetizers} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/appetizers`);
  const data = await res.json();

  return {
    props: { appetizers: data }, // will be passed to the page component as props
  };
}
