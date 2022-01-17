import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import EventItem from '@/components/events/EventItem';
import Pagination from '@/components/Pagination';
import { useEffect } from 'react';
import styles from '@/styles/Form.module.css';
export default function EventsPage({ events, total, page }) {
  useEffect(() => {
    document.title = 'Events';
  }, []);
  return (
    <div className={styles.container}>
      <h1>UpComing Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  //fetch total events
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  //fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: { events, page: parseInt(page), total },
  };
}
