import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export default function WindParameters(props) {

    const { locationID } = props;    

    WindParameters.propTypes = {
        windData: PropTypes.number
    }
    const [windData, setWindData] = useState([])

    const handleFetchWindData = (location) => {
        const url = 'https://balisemeteo.com/balise_json.php?idBalise='+location
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            setWindData(data)
        })
        .catch(error => {
            console.log("Error fetching data :", error);
        })
      }

    useEffect(() => {
        handleFetchWindData(locationID)
        const interval = setInterval(() => {
            handleFetchWindData(locationID)
        }, 600000)
        return () => clearInterval(interval)
    }, [locationID])

    return (
        <div>
            <span>Mis à jour à {windData.dateIso}</span>
            <br></br>
            {/* <span>Prochaine mis à jour à {data.dateIso + 600000}</span> */}
            <br></br>
            <span>{windData.directVentInst} degrés</span>
            <br></br>
            <span>{windData.directVentMoy} degrés</span>
            <br></br>
            <span>{windData.vitesseVentMin} km/h</span>
            <br></br>
            <span>{windData.vitesseVentMoy} km/h</span>
            <br></br>
            <span>{windData.vitesseVentMax} km/h</span>                          
        </div>
    )
}


