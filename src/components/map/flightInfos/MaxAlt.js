import React from 'react';

export default function MaxAlt(props) {

    const { alt } = props

    return(
        <div>
            <h4>Plafond max :</h4>
            <p>{alt ? alt +' m' : '-'}</p>
        </div>
    )
}