import React, { useState, useMemo, useCallback } from 'react';

import { Polyline, Marker } from '@react-google-maps/api'


const POLYLINE_OPTIONS = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
}

const POLYLINE_OPTIONS_ON_MOUSE_OVER = {
    strokeColor: '#FFF000',
    strokeOpacity: 1.0,
    strokeWeight: 4,
}


export default function Flighttrack( props ) {

    const { flightinfos } = props

    const [polylineOptions, setPolylineOptions] = useState(JSON.stringify(POLYLINE_OPTIONS))

    const [markerVisible, setMarkerVisible] = useState(false)

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
        console.log(flightinfos)
    }, [])

    const handleOnMouseOut = useCallback(() => {
        setPolylineOptions(JSON.stringify(POLYLINE_OPTIONS))
        setMarkerVisible(false)
    }, [])

    return (
        <div>
            <Polyline 
                path={flightinfos.track_json}
                key={flightinfos.id}
                options={po}
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
            />
            <Marker
                icon={'https://img.icons8.com/ultraviolet/40/000000/paragliding.png'}
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
