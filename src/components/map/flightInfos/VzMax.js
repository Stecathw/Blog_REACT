import React from 'react';

export default function VzMax(props) {

    const { vz } = props

    return(
        <div>
            <h4>Plafond max :</h4>
            <p>{vz ? vz +' m/s' : '-'}</p>
        </div>
    )
}