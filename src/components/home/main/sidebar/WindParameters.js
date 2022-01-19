import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export default function WindParameters(props) {

    const { location } = props;

    const [data, setData] = useState([])


    const handleFetchWindData = () => {
        const url = 'https://balisemeteo.com/balise_json.php?idBalise='+location.id
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            setData(data)
        })
        .catch(error => {
            console.log("Error fetching data :", error);
        })
    }

    const calculateIntervall = () => {
        //To be made
    }

    useEffect(() => {
        handleFetchWindData()
        const interval = setInterval(() => {
            handleFetchWindData()
        }, 600000)
        return () => clearInterval(interval)
    })

    return (
        <div>
            <span>Mis à jour à {data.dateIso}</span>
            <br></br>
            {/* <span>Prochaine mis à jour à {data.dateIso + 600000}</span> */}
            <br></br>
            <span>{data.directVentInst} degrés</span>
            <br></br>
            <span>{data.directVentMoy} degrés</span>
            <br></br>
            <span>{data.vitesseVentMin} km/h</span>
            <br></br>
            <span>{data.vitesseVentMoy} km/h</span>
            <br></br>
            <span>{data.vitesseVentMax} km/h</span>                          
        </div>
    )
}

WindParameters.propTypes = {
    location: PropTypes.object,
}
