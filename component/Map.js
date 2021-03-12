import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function Map({ locations }) {

  const [viewport, setViewport] = useState({
    width: "60vw",
    height: "60vh",
    // The latitude and longitude of the center of London
    latitude: 41.98678,
    longitude: -93.625,
    zoom: 13
  });

  return <ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v9"
  mapboxApiAccessToken="pk.eyJ1Ijoibm9taTY5MCIsImEiOiJja20zYnpjcDEwaG9wMnJucmQ2MnlnYno0In0.OqicEU_5ZmK5QOx5c36OJg"
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
  {locations.map((location) => (
    <div key={location.id}>
      <Marker
      latitude='41.98678'
      longitude='-93.625'
      offsetLeft={-20}
      offsetTop={-10}>
        <span role="img" aria-label="push-pin">📌</span>
      </Marker>
    </div>
  ))}
</ReactMapGL>
}