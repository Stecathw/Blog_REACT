import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline } from '@react-google-maps/api';
import track from '../data/WSC-02082019-test';


const API_KEY = process.env.REACT_APP_API_KEY

const containerStyle = {
  width: '90%',
  height: '800px'
};

const center = {
  lat: 45.802606808702826,
  lng: 1.5817895252307566
};


const flight_path = track

export default class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Polyline path={flight_path}/>
        </GoogleMap>
      </LoadScript>
    )
  }
}

// import React from 'react'
// import { GoogleMap, useLoadScript } from '@react-google-maps/api'
// import Loading from '../components/Loading'

// const options = {
// //   zoomControlOptions: {
// //     position: google.maps.ControlPosition.RIGHT_CENTER // ,
// //     // ...otherOptions
// //   }
// }

// export default function Map() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyARfZBq244Ftxd4Q6mU9mWXQCalxBbI7Bs'
//     // ...otherOptions
//   })

//   const renderMap = () => {
//     // wrapping to a function is useful in case you want to access `window.google`
//     // to eg. setup options or create latLng object, it won't be available otherwise
//     // feel free to render directly if you don't need that
//     // const onLoad = React.useCallback(
//     //   function onLoad (mapInstance) {
//     //     // do something with map Instance
//     //   }
//     // )
//     return <GoogleMap
//       options={options}
//     //   onLoad={onLoad}
//     >
//       {
//         // ...Your map components
//       }
//     </GoogleMap>
//   }

//   if (loadError) {
//     return <div>Map cannot be loaded right now, sorry.</div>
//   }

//   return isLoaded ? renderMap() : <Loading />
// }
