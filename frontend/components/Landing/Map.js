import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ReactMapgGL, { Marker } from 'react-map-gl';
import Geocode from 'react-geocode';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '@/styles/Map.module.scss';
import { motion } from 'framer-motion';
import {
  mainComponentAnimation,
  childrenmain,
  mapAnimation,
  contactChildren,
} from '../../animations/mapsAnimation';
import { useScroll } from '../../animations/useScroll';
export default function Map() {
  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE);
  const [element, controls] = useScroll(0.55);
  const [element2, controls2] = useScroll(0.55);
  const [element3, controls3] = useScroll(0.55);
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
        <motion.div
          className={styles.hoursContainer}
          ref={element}
          initial="hidden"
          variants={mainComponentAnimation}
          animate={controls}
        >
          <h2>
            <span>Hours</span>
          </h2>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Monday</span>
            <span>9:00am - 9:00pm</span>
          </motion.div>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Tuesday</span>
            <span>9:00am - 9:00pm</span>
          </motion.div>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Wednesday</span>
            <span>9:00am - 9:00pm</span>
          </motion.div>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Thursday</span>
            <span>9:00am - 9:00pm</span>
          </motion.div>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Friday</span>
            <span>9:00am - 9:00pm</span>
          </motion.div>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Saturday</span>
            <span>9:00am - 12:00am</span>
          </motion.div>
          <motion.div variants={childrenmain} className={styles.timesContainer}>
            <span>Sunday</span>
            <span>11:00am - 10:00pm</span>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.mapContainer}
          ref={element2}
          initial="hidden"
          variants={mapAnimation}
          animate={controls2}
        >
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
        </motion.div>
        <motion.div
          className={styles.contactContainer}
          ref={element3}
          initial="hidden"
          variants={mainComponentAnimation}
          animate={controls3}
        >
          <motion.h2 variants={contactChildren}>
            <span>Contact</span>
          </motion.h2>
          <div className={styles.contactFlex}>
            <motion.div className={styles.contact}>
              <h3>Phone</h3>
              <span>202-555-0175</span>
            </motion.div>
            <motion.div variants={contactChildren} className={styles.contact}>
              <h3>Fax</h3>
              <span>202-555-0158</span>
            </motion.div>
            <motion.div variants={contactChildren} className={styles.contact}>
              <h3>Email</h3>
              <span>example@gmail.com</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
