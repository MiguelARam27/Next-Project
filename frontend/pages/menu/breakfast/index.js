import React from 'react';
import styles from '@/styles/Menu.module.scss';
import Menu from '@/components/menu/Menu';
import MenuLayout from '@/components/menu/MenuLayout';
import { API_URL } from '@/config/index';
export default function BreakfastPage({ breakfast }) {
  return (
    <div className={styles.container}>
      <Menu />
      <MenuLayout items={breakfast} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/breakfasts?_sort=price:ASC`);
  const data = await res.json();

  return {
    props: { breakfast: data }, // will be passed to the page component as props
  };
}
