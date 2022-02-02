import React, { useState, useEffect, useCallback } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'


import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Flighttrack from '../components/Flighttrack';

const useStyles = makeStyles((theme) => ({
    mapContainer: {
      marginTop: theme.spacing(5),
    },
  }))

const API_KEY = process.env.REACT_APP_BALISE_API_KEY

const containerStyle = {
  width: 'auto',
  height: '800px',
  paddingTop: '15px',
};

const center = {
  lat: 45.802606808702826,
  lng: 1.5817895252307566
};

export default function Map() {

  const [FlightInfos, setFlightInfos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const classes = useStyles()



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

      // const tracksData = data.map((item, _index) => {       
      //   return item.track_json
      // })
      // setTracks(tracksData)
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

  const onlyInfos = useCallback((flight) => {
    delete flight.track_json
    console.log(flight)
    return flight
  }, [])

  return (
    <Container fixed className={classes.mapContainer}>
      <LoadScript
          googleMapsApiKey={API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
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
}