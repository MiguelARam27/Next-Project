import React from 'react';
import Link from 'next/link';
import styles from '@/styles/DashboardEvent.module.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
export default function DashBoardFoodItem({ item, deleteEvent, path }) {
  return (
    <div className={styles.event}>
      <h4>
        <Link href={`/${path}/${item.slug}`}>
          <a>{item.name}</a>
        </Link>
      </h4>
      <Link href={`/account/dashboard/${path}/edit/${item.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>Edit Food Item</span>
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => deleteEvent('appetizers', item.id)}
      >
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  );
}
