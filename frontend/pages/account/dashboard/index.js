import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';
import styles from '@/styles/Dashboard.module.css';
import DashboardEvent from '@/components/dashboard/DashboardEvent';
import DashBoardFoodItem from '@/components/dashboard/DashBoardFoodItem';
import { useRouter } from 'next/router';
import toast from 'react-toastify';
export default function DashboardPage({ events, token, appetizers }) {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  const deleteEvent = async (type, id) => {
    if (confirm('Are you sure you want to delete?')) {
      const res = await fetch(`${API_URL}/${type}/${id}`, {
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

        {events.length > 0 ? (
          <>
            <h3> Events</h3>
            {events.map((evt, index) => {
              return (
                <DashboardEvent
                  item={evt}
                  evt={evt}
                  key={index}
                  deleteEvent={deleteEvent}
                  path={'events'}
                />
              );
            })}
          </>
        ) : (
          <h3>No Events</h3>
        )}
        {appetizers?.length > 0 ? (
          <>
            <h3> Appetizers</h3>
            {appetizers.map((appetizer, index) => {
              return (
                <DashBoardFoodItem
                  item={appetizer}
                  key={index}
                  deleteEvent={deleteEvent}
                  path={'appetizers'}
                />
              );
            })}
          </>
        ) : (
          <h3>No Appetizers</h3>
        )}
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

  const appetizerRes = await fetch(`${API_URL}/appetizers`, {
    method: 'Get',
  });
  const appetizers = await appetizerRes.json();

  return {
    props: { events, token, appetizers },
  };
}
