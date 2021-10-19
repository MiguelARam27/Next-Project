import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
export default function EventsPage() {
  const router = useRouter();

  return (
    <Layout>
      <h2>events page 2</h2>
    </Layout>
  );
}
