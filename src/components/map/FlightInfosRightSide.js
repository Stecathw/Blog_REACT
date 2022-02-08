import React from 'react';

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux';

import Distance from './flightInfos/Distance';
import Duration from './flightInfos/Duration';
import TakeOff from './flightInfos/TakeOff';
import Landing from './flightInfos/Landing';

export default function FlightInfosRightSide() {

    const flight = useSelector(state => state.flight)

    return(
        <>
            <Grid item xs={12} className="panelInfo">
                <Distance dist={flight.distance}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <Duration dur={flight.duration}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <TakeOff from={flight.take_off} at={flight.take_off_time}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <Landing to={flight.landing} at={flight.landing_time}/>
            </Grid>
        </>
    )
}