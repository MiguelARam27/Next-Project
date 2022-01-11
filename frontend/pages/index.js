import Layout from '../components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/events/EventItem';
import Link from 'next/link';

import Hero from '@/components/Landing/Hero';
import Offers from '@/components/Landing/Offers';
export default function HomePage({ offers }) {
  return (
    <>
      <Hero />
      <Offers offers={offers} />
    </>
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
