import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

import { Polyline } from '@react-google-maps/api';
// import track from '../data/05-09-2021.json';

const API_KEY = process.env.REACT_APP_BALISE_API_KEY

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

// const path = track

export default function Map() {

  const [Tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleFetchTracks = () => {
    fetch('http://127.0.0.1:8000/api/tracks')
    .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json()
        }
        throw response;
    })
    .then(data => {
      console.log(data)
      const tracksData = data.map((item, _index) => {
        // listOfTracks.push(item.track_json)
        return item.track_json
      })
      console.log(tracksData)
      const Polylines = tracksData.map((track, _position) => {
        return <Polyline 
                  path={track}
                  options={optionsPolyline} 
                  key={_position.toString()} 
                  />
                  
      })
      console.log(Polylines)
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

    <LoadScript
      googleMapsApiKey={API_KEY}
    >

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
      >
        {Tracks.map((track, _index) => {
          return track
        })}
        {/* {
          Tracks.map((track, _index) => {
            return <Polyline
              path={track}
              options={optionsPolyline}
              key={_index} 
            />
          })
        }  */}
      </GoogleMap>
    </LoadScript>
  )
}