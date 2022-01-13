import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ReactMapgGL, { Marker } from 'react-map-gl';
import Geocode from 'react-geocode';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '@/styles/Map.module.scss';
export default function Map() {
  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE);

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: '100%',
    height: '500px',
    zoom: 12,
  });

  useEffect(() => {
    // Get latitude & longitude from address.
    Geocode.fromAddress('1604 W Osceola Pkwy').then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  if (loading) return false;
  return (
    <div className={styles.container}>
      {/* <div>
        <h1>Location</h1>
      </div> */}
      <div className={styles.flexContainer}>
        <div className={styles.hoursContainer}>
          <h2>
            <span>Hours</span>
          </h2>
          <div className={styles.timesContainer}>
            <span>Monday</span>
            <span>9:00am - 9:00pm</span>
          </div>
          <div className={styles.timesContainer}>
            <span>Tuesday</span>
            <span>9:00am - 9:00pm</span>
          </div>
          <div className={styles.timesContainer}>
            <span>Wednesday</span>
            <span>9:00am - 9:00pm</span>
          </div>
          <div className={styles.timesContainer}>
            <span>Thursday</span>
            <span>9:00am - 9:00pm</span>
          </div>
          <div className={styles.timesContainer}>
            <span>Friday</span>
            <span>9:00am - 9:00pm</span>
          </div>
          <div className={styles.timesContainer}>
            <span>Saturday</span>
            <span>9:00am - 12:00am</span>
          </div>
          <div className={styles.timesContainer}>
            <span>Sunday</span>
            <span>11:00am - 10:00pm</span>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <h2>
            <span>Location</span>
          </h2>
          <ReactMapgGL
            {...viewport}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_API}
            onViewportChange={(vp) => setViewport(vp)}
          >
            <Marker key={2} latitude={lat} longitude={lng}>
              <Image src={'/images/pin.svg'} height={20} width={20} />
            </Marker>
          </ReactMapgGL>
          <h4>1604 W Osceola Pkwy Kissimmee, FL 34741</h4>
        </div>
        <div className={styles.contactContainer}>
          <h2>
            <span>Contact</span>
          </h2>
          <div className={styles.contactFlex}>
            <div className={styles.contact}>
              <h3>Phone</h3>
              <span>202-555-0175</span>
            </div>
            <div className={styles.contact}>
              <h3>Fax</h3>
              <span>202-555-0158</span>
            </div>
            <div className={styles.contact}>
              <h3>Email</h3>
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
