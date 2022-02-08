import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Polyline, Marker } from '@react-google-maps/api';

import { useDispatch } from 'react-redux';
import { FlightAdded, FlightRemoved } from './FlightInfosSlice';

const POLYLINE_OPTIONS = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
}

const POLYLINE_OPTIONS_ON_MOUSE_OVER = {
    strokeColor: '#FFF000',
    strokeOpacity: 1.0,
    strokeWeight: 5,
}


export default function Flighttrack( props ) {

    const { flightinfos } = props

    const [polylineOptions, setPolylineOptions] = useState(JSON.stringify(POLYLINE_OPTIONS))

    const [markerVisible, setMarkerVisible] = useState(false)

    const dispatch = useDispatch()


    const po = useMemo(() => {
        try {
            return JSON.parse(polylineOptions)
        } catch (e) {
            return POLYLINE_OPTIONS
        }
    }, [polylineOptions]) 
    
    const handleOnMouseOver = useCallback(() => {
        setPolylineOptions(JSON.stringify(POLYLINE_OPTIONS_ON_MOUSE_OVER))
        setMarkerVisible(true)
        dispatch(FlightAdded(flightinfos))
    }, [])

    const handleOnMouseOut = useCallback(() => {
        setPolylineOptions(JSON.stringify(POLYLINE_OPTIONS))
        setMarkerVisible(false)
        dispatch(FlightRemoved(flightinfos))
    }, [])

    // const handleOnClick = useCallback(() => {
    //     dispatch(FlightAdded(flightinfos))
    // }, [])


    return (
        <div>
            <Polyline 
                path={flightinfos.track_json}
                key={flightinfos.id}
                options={po}
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                // onClick={handleOnClick}
            />
            <Marker
                title={"Décollage"}
                visible={markerVisible}
                position={flightinfos.track_json.at(0)}
            />
            <Marker
                title={"Atterrissage"}
                visible={markerVisible}
                position={flightinfos.track_json.at(-1)}
            />
        </div>
    )    
}

Flighttrack.propTypes = {
    flightinfos: PropTypes.object.isRequired,
}