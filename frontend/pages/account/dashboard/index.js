import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';
import styles from '@/styles/Dashboard.module.css';
import DashboardEvent from '@/components/dashboard/DashboardEvent';
import { useRouter } from 'next/router';
import toast from 'react-toastify';
export default function DashboardPage({ events, token }) {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  const deleteEvent = async (id) => {
    if (confirm('Are you sure you want to delete the event?')) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      }
      router.reload();
    }
  };
  return (
    <>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>

        {events.length > 0 ? (
          <>
            {events.map((evt, index) => {
              return (
                <DashboardEvent
                  evt={evt}
                  key={index}
                  deleteEvent={deleteEvent}
                />
              );
            })}
          </>
        ) : null}
      </div>
    </>
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
    props: { events, token },
  };
}
