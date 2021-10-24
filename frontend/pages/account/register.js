import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Auth.module.css';
export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userName, setUserName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match');
    }
    console.log({ email, password, passwordConfirm, userName });
  };
  return (
    <Layout title={'login'}>
      <div className={styles.auth}>
        <h1>
          <FaUser /> User Registration
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">UserName</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
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
          <div>
            <label htmlFor="email">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="login" className="btn" />
        </form>
        <p>
          Already have an account?{' '}
          <Link href={'/account/login'}>Click here</Link>
        </p>
      </div>
    </Layout>
  );
}
