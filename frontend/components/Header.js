import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import Search from './Search';
import { FaSignInAlt, FaSignOutAlt, FaSign } from 'react-icons/fa';
import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';
export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <a>
            <span>Ado</span>
            <span>Re</span>
            <span>Mo</span>
          </a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {/* future content TODO */}
          {/* <li className={styles.dropdown}>
            <span>hello</span>

            <div className={styles.dropdownContent}>
              <h1>shown</h1>
            </div>
          </li> */}

          {user ? (
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li onClick={() => logout()}>
                <a className="btn btn-secondary btn-icon">
                  <FaSignOutAlt />
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn btn-secondary btn-icon">
                    <FaSign />
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
