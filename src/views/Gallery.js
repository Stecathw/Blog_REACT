import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function Gallery() {

    const [photos, setPhotos] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(null)


    const handleMouseOver = (e, slug) => {
        e.preventDefault()        
        const el = document.querySelector("#"+slug)
        el.style.display = 'block'
    };
    const handleMouseOut = (e, slug) => {
        e.preventDefault()
        const el = document.querySelector("#"+slug)
        el.style.display = 'none'

    };

    const handleFecthPhotos = () => {
        fetch('http://127.0.0.1:8000/api/photos')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            setPhotos(data)
        })
        .catch(error => {
            console.log("Error fetching data :", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        handleFecthPhotos()
    }, [])

    return (
        <Container fixed>
            <ImageList>     
                {photos.map((photo, _index) => {
                    return (
                        <ImageListItem key={_index.toString()}>
                            <img
                                src={`${photo.image}`}                        
                                alt={photo.alt}
                                loading="lazy"
                                onMouseOver={(e) => handleMouseOver(e, photo.slug)}
                                onMouseOut={(e) => handleMouseOut(e, photo.slug)}
                            />
                            <ImageListItemBar
                                id={photo.slug}
                                title={photo.title}
                                subtitle={<span>{photo.altitudeAMSL} mètres AMSL le {photo.taken}</span>}
                                style={{ display: 'none'}}
                                actionPosition={'right'}
                                actionIcon={
                                    <IconButton
                                        id={photo.slug}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                  }
                            />
                        </ImageListItem>
                        )
                    })
                }            
            </ImageList>
        </Container>
    )
}