import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import Search from './Search';
import React, { useRef } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaSign } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogInSharp } from 'react-icons/io5';
import { GoGrabber } from 'react-icons/go';
import AuthContext from '@/context/AuthContext';
import { useContext, useState } from 'react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import { motion } from 'framer-motion';
import { titleAnimation, linksAnimation } from '../animations/headerAnimation';
export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMore, setshowMore] = useState(false);
  const [showMoreMobile, setShowMoreMobile] = useState(false);

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

  function handleMenuShowMoreClick() {
    setshowMore(!showMore);
  }
  function handleShowMobileMoreClick() {
    setShowMoreMobile(!showMoreMobile);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setshowMore);
  return (
    <>
      <div className={styles.header}>
        <motion.div className={styles.logo} {...titleAnimation}>
          <Link href={'/'}>
            <a>
              <span>Ado</span>
              <span>Re</span>
              <span>Mo</span>
            </a>
          </Link>
        </motion.div>

        <nav>
          <motion.ul className={styles.webNav} {...linksAnimation}>
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

            {user ? (
              <>
                <li
                  className={styles.dropdown}
                  onClick={handleMenuShowMoreClick}
                  ref={wrapperRef}
                >
                  <span>Add Items</span>

                  <div
                    className={
                      showMore
                        ? `${styles.dropdownContent} ${styles.showContent}`
                        : styles.dropdownContent
                    }
                  >
                    <div className={styles.container}>
                      <Link href="/events/add">
                        <span>Add Event</span>
                      </Link>
                      <Link href="/account/dashboard/appetizers/add">
                        <span>Add Appetizer Item</span>
                      </Link>
                      <Link href="/account/dashboard/lunches/add">
                        <span>Add Lunch Item</span>
                      </Link>
                      <Link href="/account/dashboard/dinners/add">
                        <span>Add Dinners Item</span>
                      </Link>
                      <Link href="/account/dashboard/pizzas/add">
                        <span>Add Pizza Item</span>
                      </Link>
                      <Link href="/account/dashboard/breakfasts/add">
                        <span>Add Breakfast Item</span>
                      </Link>
                    </div>
                  </div>
                </li>
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
                  <span className="btn btn-secondary btn-icon">
                    <FaSignOutAlt />
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/account/login">
                    <span className="btn btn-secondary btn-icon">
                      <IoLogInSharp />
                      Login
                    </span>
                  </Link>
                </li>
              </>
            )}
          </motion.ul>
          <ul className={styles.mobileMenu}>
            <span onClick={handleShowClick}>
              <GoGrabber />
            </span>
          </ul>
        </nav>
      </div>

      {/* mobile nav */}
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
          <span onClick={handleHideClick}>
            <Link href="/menu">Menu</Link>
          </span>
          <span onClick={handleHideClick}>
            <Link href="/events">Events</Link>
          </span>

          {user ? (
            <>
              <div>
                <span onClick={handleShowMobileMoreClick}>Add Items</span>
                <div
                  className={
                    showMoreMobile ? styles.showAccordion : styles.Accordion
                  }
                >
                  <div className={styles.AccordionBody}>
                    <span
                      onClick={() => {
                        handleShowMobileMoreClick();
                        handleHideClick();
                      }}
                    >
                      <Link href="/events/add">Add Event</Link>
                    </span>
                    <span
                      onClick={() => {
                        handleShowMobileMoreClick();
                        handleHideClick();
                      }}
                    >
                      <Link href="/account/dashboard/appetizers/add">
                        Add Appetizer Item
                      </Link>
                    </span>
                    <span
                      onClick={() => {
                        handleShowMobileMoreClick();
                        handleHideClick();
                      }}
                    >
                      <Link href="/account/dashboard/lunches/add">
                        Add Lunch Item
                      </Link>
                    </span>
                    <span
                      onClick={() => {
                        handleShowMobileMoreClick();
                        handleHideClick();
                      }}
                    >
                      <Link href="/account/dashboard/dinners/add">
                        Add Dinner Item
                      </Link>
                    </span>
                    <span
                      onClick={() => {
                        handleShowMobileMoreClick();
                        handleHideClick();
                      }}
                    >
                      <Link href="/account/dashboard/pizzas/add">
                        Add Pizza Item
                      </Link>
                    </span>
                    <span
                      onClick={() => {
                        handleShowMobileMoreClick();
                        handleHideClick();
                      }}
                    >
                      <Link href="/account/dashboard/breakfast/add">
                        Add Breakfast Item
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <span onClick={handleHideClick}>
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
              <span onClick={handleHideClick}>
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
