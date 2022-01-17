import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Form.module.css';
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import Modal from '@/components/Modal';
import ImageUpload from '@/components/ImageUpload';
import { FaImage } from 'react-icons/fa';
export default function add({ token }) {
  const router = useRouter();
  const [values, setValues] = useState({
    name: '',
    price: '',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState(null);
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [isValidToSubmit, setisValidToSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );
    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/appetizers`, {
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
      console.log(evt);
      // router.push(`/events/${evt.slug}`);
    }
  };

  useEffect(() => {
    const { name, price, description } = values;

    if (name === '' || price === '' || description === '') {
      setisValidToSubmit(false);
    } else {
      setisValidToSubmit(true);
    }
  }, [values]);
  return (
    <div className={styles.container}>
      <Link href="/events">Go Back</Link>
      <h1>Add Appetizer</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Appetizer Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={values.price}
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
          value="Add Appetizer"
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
