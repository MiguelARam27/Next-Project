import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Auth.module.css';
import AuthContext from '@/context/AuthContext';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className={styles.container}>
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
          <input type="submit" value="login" className="btn" />
        </form>
        <p>
          Don't have an account?{' '}
          <Link href={'/account/register'}>Click here</Link>
        </p>
      </div>
    </div>
  );
}
