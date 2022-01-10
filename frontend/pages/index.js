import Layout from '../components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/events/EventItem';
import Link from 'next/link';

import Hero from '@/components/Landing/Hero';
import Offers from '@/components/Landing/Offers';
export default function HomePage({ offers }) {
  return (
    <>
      {/* <h1>UpComing Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href="/events/">
          <a className="btn-secondary">View All</a>
        </Link>
      )} */}

      <Hero />
      <Offers offers={offers} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/offers`);
  const offers = await res.json();

  console.log(offers);
  return {
    props: { offers: offers },
    revalidate: 1,
  };
}
