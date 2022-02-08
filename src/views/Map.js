import React from 'react'

import Container from '@mui/material/Container';
import Grid from '@material-ui/core/Grid';

import GoogleMap from '../components/map/GoogleMap'
import FlightInfosLeftSide from '../components/map/FlightInfosLeftSide';
import FlightInfosRightSide from '../components/map/FlightInfosRightSide';

export default function Map() {

  return (
      <Grid className='mainPanel' container >
        
        <Grid item xs={2} className="leftPanel"><FlightInfosLeftSide/></Grid>
        
        <Grid item xs={8} className="middleContainer"><GoogleMap/></Grid>

        <Grid item xs={2} className="rightPanel"><FlightInfosRightSide/></Grid>
                                   
      </Grid>
  )
}