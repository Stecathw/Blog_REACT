import React from 'react';

import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid';

import Date from './flightInfos/Date';
import Category from './flightInfos/Category';
import Score from './flightInfos/Score';
import AvgSpeed from './flightInfos/AvgSpeed';
import MaxAlt from './flightInfos/MaxAlt';
import VzMax
 from './flightInfos/VzMax';

export default function FlightInfosLeftSide() {

    const flight = useSelector(state => state.flight)

    return(
        <>
            <Grid item xs={12} className="panelInfo">
                <Date date={flight.date}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <Category cat={flight.category}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <Score score={flight.score}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <AvgSpeed avg={flight.avg_speed}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <MaxAlt alt={flight.max_alt}/>
            </Grid>
            <Grid item xs={12} className="panelInfo">
                <VzMax vz={flight.vz_max}/>
            </Grid>
        </>
    )
}

