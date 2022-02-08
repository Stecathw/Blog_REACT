import React from 'react';

export default function TakeOff(props) {

    const { to, at } = props

    return(
        <div>
            <h4>Atterrissage :</h4>
            <p>{to ? to : '-'}</p>
            <p>{at ? at : '-'}</p>
        </div>
    )
}