import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'pages/account/dashboard/appetizers/node_modules/react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from 'pages/account/dashboard/appetizers/node_modules/@/styles/Form.module.css';
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';

export default function add({ token }) {
  const router = useRouter();
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  });

  const [isValidToSubmit, setisValidToSubmit] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );
    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('No token included');
      }
      toast.error('Something Went Wrong');
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
    }
  };
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const {
      name,
      address,
      date,
      time,
      description,

      venue,
    } = values;

    if (
      name === '' ||
      address === '' ||
      date === '' ||
      time === '' ||
      description === '' ||
      venue === ''
    ) {
      setisValidToSubmit(false);
    } else {
      setisValidToSubmit(true);
    }
  }, [values]);
  return (
    <div className={styles.container}>
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="performers">Performers</label>
            <input
              type="text"
              name="performers"
              id="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              name="venue"
              id="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              name="time"
              id="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description">Event Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
            style={{ padding: '10px 10px' }}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Add Event"
          className={isValidToSubmit ? 'btn' : 'btn-disabled'}
        />
      </form>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: { token },
  };
}
