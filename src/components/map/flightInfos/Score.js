import React from 'react';

export default function Score(props) {

    const { score } = props

    return(
        <div>
            <h4>Score CFD :</h4>
            <p>{score ? score +' pts' : '-'}</p>
        </div>
    )
}