import React from 'react';
import Layout from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';
import styles from '@/styles/Dashboard.module.css';
import DashboardEvent from '@/components/DashboardEvent';

export default function DashboardPage({ events }) {
  const deleteEvent = (id) => {
    console.log(id);
  };
  return (
    <Layout title="Dashboard">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>

        {events.length > 0 ? (
          <>
            {events.map((evt) => {
              return (
                <>
                  <DashboardEvent
                    evt={evt}
                    key={evt.id}
                    deleteEvent={deleteEvent}
                  />
                </>
              );
            })}
          </>
        ) : null}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  const events = await res.json();
  return {
    props: { events },
  };
}
