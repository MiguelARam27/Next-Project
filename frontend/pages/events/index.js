import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/events/EventItem';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>UpComing Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
        // <h3 key={evt.id}>{evt.name} </h3>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
