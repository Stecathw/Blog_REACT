import React from 'react';

export default function Date(props) {

    const { date } = props

    return(
        <div>
            <h4>Date :</h4>
            <p>{date ? date : '-'}</p>
        </div>
    )
}