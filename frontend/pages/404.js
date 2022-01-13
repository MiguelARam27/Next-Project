import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useEffect } from 'react';
export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);
  return (
    <>
      <div className={styles.error}>
        <h1 style={{ padding: '.25rem .2rem' }}>
          {' '}
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href={'/'}>Go Back Home</Link>
      </div>
    </>
  );
}
