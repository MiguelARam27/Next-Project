import Layout from '@/components/Layout';
import { useEffect } from 'react';
export default function AboutPage() {
  useEffect(() => {
    document.title = 'About page';
  }, []);
  return (
    <>
      <div>
        <h2>about page</h2>
      </div>
    </>
  );
}
