import Head from 'next/head';
import Layout from '../../components/Layout';
export default function HomePage() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Dj Events</title>
          <meta name="description" content="Welcome to DJ Events" />
        </Head>
        <div>
          <h2>Home</h2>
        </div>
      </div>
    </Layout>
  );
}
