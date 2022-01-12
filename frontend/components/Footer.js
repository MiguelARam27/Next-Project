import styles from '@/styles/Footer.module.scss';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from 'react-icons/ai';
import Link from 'next/link';
export default function Footer({ socialLinks }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.logo}>
          <span>Ado</span>
          <span>Re</span>
          <span>Mo</span>
        </div>
        <div className={styles.socialContainer}>
          <a href={socialLinks.facebook.url}>
            <AiFillFacebook />
          </a>
          <a href="https://facebook.com">
            <AiFillTwitterCircle />
          </a>
          <a href="https://facebook.com">
            <AiFillInstagram />
          </a>
        </div>
      </div>
      <div className={styles.footerRight}>
        <ul>
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/menu'}>
            <li>Menu</li>
          </Link>
          <Link href={'/offers'}>
            <li>Offers</li>
          </Link>

          <Link href={'/contact'}>
            <li>Contact</li>
          </Link>
          <Link href={'/location'}>
            <li>Location</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
