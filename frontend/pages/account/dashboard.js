import React from 'react';
import Layout from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';

export default function DashboardPage({ events }) {
  console.log(events);
  return <Layout title="Dashboard"></Layout>;
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(token);

  const events = await res.json();
  return {
    props: { events },
  };
}
