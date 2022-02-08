import React from 'react';

export default function AvgSpeed(props) {

    const { avg } = props

    return(
        <div>
            <h4>Vitesse moyenne :</h4>
            <p>{avg ? avg +' km/h' : '-'}</p>
        </div>
    )
}