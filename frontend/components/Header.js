import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import Search from './Search';
import { FaSignInAlt, FaSignOutAlt, FaSign } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogInSharp } from 'react-icons/io5';
import { GoGrabber } from 'react-icons/go';
import AuthContext from '@/context/AuthContext';
import { useContext, useState } from 'react';
export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleShowClick() {
    let body = document.querySelector('body');
    body.style.overflow = 'hidden';
    setShowMobileMenu(true);
  }
  function handleHideClick() {
    let body = document.querySelector('body');
    body.style.overflow = 'auto';
    setShowMobileMenu(false);
  }

  return (
    <>
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
          <ul className={styles.webNav}>
            <li>
              <Link href="/menu">
                <a>Menu</a>
              </Link>
            </li>
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
                  <Link href="/account/dashboard">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    handleHideClick();
                    logout();
                  }}
                >
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
                      <IoLogInSharp />
                      Login
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className={styles.mobileMenu}>
            <span onClick={handleShowClick}>
              <GoGrabber />
            </span>
          </ul>
        </nav>
      </div>
      <nav
        className={
          showMobileMenu
            ? `${styles.mobileNav} ${styles.show}`
            : `${styles.mobileNav} ${styles.hide}`
        }
      >
        <span onClick={handleHideClick}>
          <AiOutlineClose />
        </span>

        <div className={styles.mobileLinks}>
          <span>
            <Link href="/menu">Menu</Link>
          </span>
          <span>
            <Link href="/events">Events</Link>
          </span>

          {/* future content TODO */}
          {/* <li className={styles.dropdown}>
            <span>hello</span>

            <div className={styles.dropdownContent}>
              <h1>shown</h1>
            </div>
          </li> */}

          {user ? (
            <>
              <span>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </span>
              <span
                onClick={() => {
                  handleHideClick();
                  logout();
                }}
              >
                <a className="btn btn-secondary btn-icon">
                  <FaSignOutAlt />
                  Logout
                </a>
              </span>
            </>
          ) : (
            <>
              <span>
                <Link href="/account/login">
                  <a className="btn btn-secondary btn-icon">
                    <IoLogInSharp />
                    Login
                  </a>
                </Link>
              </span>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
