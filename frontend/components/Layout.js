import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import ShowCase from './ShowCase';
import { useRouter } from 'next/router';

export default function Layout({
  title,
  keywords,
  description,
  children,
  socialLinks,
}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />

      {/* {router.pathname === '/' && <ShowCase />} */}

      {/* {router.pathname === '/' ? (
        <>{children}</>
      ) : (
        <div className={styles.container}>{children}</div>
      )} */}

      <>{children}</>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Hottest restaurant',
  description: 'milktoast description',
  keywords: 'Dj',
};
