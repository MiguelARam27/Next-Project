import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import EventItem from '@/components/events/EventItem';
import Pagination from '@/components/Pagination';

export default function EventsPage({ events, total, page }) {
  return (
    <Layout>
      <h1>UpComing Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = parseInt(page);

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
