import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

import { Polyline, InfoWindow } from '@react-google-maps/api';


import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';

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


export default function Map() {

  const [Tracks, setTracks] = useState([])
  const [FlightInfos, setFlightInfos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [PolylineOptions, setPolylineOptions] = useState(optionsPolyline)
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

      const tracksData = data.map((item, _index) => {  
        
        return item.track_json
      })
      const Polylines = tracksData.map((track, _position) => {
        return (<Polyline 
                    path={track}
                    options={PolylineOptions} 
                    key={_position.toString()}
                    editable={true}
                  >
                  </Polyline>)             
      })
      setTracks(Polylines)
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
            {Tracks}
        </GoogleMap> 
      </LoadScript>
    </Container>
  )
}