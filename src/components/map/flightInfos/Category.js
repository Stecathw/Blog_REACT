import React from 'react';

export default function Category(props) {

    const { cat } = props

    return(
        <div>
            <h4>Catégorie :</h4>
            <p>{cat ? cat : cat===0 ? cat : '-'}</p>
        </div>
    )
}