import React from 'react';
import styles from '@/styles/Menu.module.scss';
import Menu from '@/components/menu/Menu';
import MenuLayout from '@/components/menu/MenuLayout';
import { API_URL } from '@/config/index';
export default function PizzaPage({ pizzas }) {
  return (
    <div className={styles.container}>
      <Menu />
      <MenuLayout items={pizzas} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/pizzas?_sort=price:ASC`);
  const data = await res.json();

  return {
    props: { pizzas: data }, // will be passed to the page component as props
  };
}
