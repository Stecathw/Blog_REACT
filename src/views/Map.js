
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

import { Polyline } from '@react-google-maps/api';
import track from '../data/05-09-2021.json';



const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
  width: '90%',
  height: '800px'
};

const center = {
  lat: 45.802606808702826,
  lng: 1.5817895252307566
};

const optionsPolyline= {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

const path = track

export default function Map() {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
      >
        <Polyline
          path={path}
          options={optionsPolyline}
        />
      </GoogleMap>
    </LoadScript>
  )
}