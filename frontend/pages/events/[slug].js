import { useRouter } from 'next/router';

import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';

import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import EventMap from '@/components/EventMap';
export default function EventsPage({ evt }) {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Events';
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={
                evt.image.formats?.medium?.url === undefined
                  ? evt.image.formats.small.url
                  : evt.image.formats.medium.url
              }
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>performers:</h3>
        <p>{evt.performers}</p>
        <h3>Descritpion:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>

        <p>{evt.address}</p>

        <EventMap evt={evt} />

        <Link href="/events">
          <a className={styles.back}> {'<'} Go Back</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);

  const events = await res.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}
