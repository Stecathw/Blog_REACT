import React from 'react';

export default function Distance(props) {

    const { dist } = props

    return(
        <div>
            <h4>Distance :</h4>
            <p>{dist ? dist +' km' : '-'}</p>
        </div>
    )
}