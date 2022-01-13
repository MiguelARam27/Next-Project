import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ReactMapgGL, { Marker } from 'react-map-gl';
import Geocode from 'react-geocode';
import 'mapbox-gl/dist/mapbox-gl.css';
export default function Map({ evt }) {
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
    Geocode.fromAddress(evt.address).then(
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
    <div style={{ padding: '2rem 2rem' }}>
      <ReactMapgGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAP_API}
        onViewportChange={(vp) => setViewport(vp)}
      >
        <Marker key={evt.id} latitude={lat} longitude={lng}>
          <Image src={'/images/pin.svg'} height={30} width={30} />
        </Marker>
      </ReactMapgGL>
    </div>
  );
}
