import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Auth.module.css';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Layout title={'login'}>
      <div className={styles.auth}>
        <h1>
          <FaUser /> Login
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="login" class="btn" />
        </form>
        <p>
          Don't have an account?{' '}
          <Link href={'/account/register'}>Click here</Link>
        </p>
      </div>
    </Layout>
  );
}
