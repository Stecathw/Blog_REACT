import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

import Container from '@mui/material/Container';
import Flighttrack from './Flighttrack';
import Loading from '../Loading.js'


const API_KEY = process.env.REACT_APP_BALISE_API_KEY

const containerStyle = {
  width: 'auto',
  height: '50vh',
};

const center = {
  lat: 45.802606808702826,
  lng: 1.5817895252307566
};

export default function Map() {

  const [FlightInfos, setFlightInfos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleFetchTracks = () => {
    fetch('http://127.0.0.1:8000/api/tracks')
    .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
    })
    .then(data => {
      setFlightInfos(data.map((item, _index) => {       
        return item}))
    })
    .catch(error => {
        console.log("Error fetching data :", error);
    })
    .finally(() => {
        setIsLoading(false)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    handleFetchTracks()
  }, [])

  if (!isLoading) return ( 
    <Container className="mapContainer" disableGutters={true}>
      <LoadScript
          googleMapsApiKey={API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
            mapTypeId='terrain'
          > 
          {
            FlightInfos.map((flight, _index) => {
              return (
                <Flighttrack  
                  flightinfos={flight} 
                  key={_index.toString()}
                />
              )
            })
          } 
        </GoogleMap> 
      </LoadScript>      
    </Container>    
  )
  return <Loading/>
}