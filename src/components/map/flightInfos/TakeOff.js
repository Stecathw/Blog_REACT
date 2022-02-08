import React from 'react';

export default function TakeOff(props) {

    const { from, at } = props

    return(
        <div>
            <h4>Décollage :</h4>
            <p>{from ? from : '-'}</p>
            <p>{at ? at : '-'}</p>
        </div>
    )
}