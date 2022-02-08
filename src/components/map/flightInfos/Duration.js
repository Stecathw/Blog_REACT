import React from 'react';

export default function Duration(props) {

    const { dur } = props

    return(
        <div>
            <h4>Duration :</h4>
            <p>{dur ? dur : '-'}</p>
        </div>
    )
}