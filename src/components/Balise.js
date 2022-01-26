import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import WindParameters from './WindParameters';
import BaliseLocations from '../data/BaliseLocations';


export default function Balise() {

  const allLocationsList = BaliseLocations

  const [currentLocation, setCurrentLocation] = useState(allLocationsList[0])

  const handleChange = (event) => {
    event.preventDefault()
    let newLocationIndex = event.target.value 
    let obj = allLocationsList.at(newLocationIndex)
    setCurrentLocation(obj)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Décollage</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label="Location"
          value={allLocationsList.findIndex((location) => location === currentLocation)}
          onChange={handleChange}
        >
          { 
          allLocationsList.map((item, _index) => {
            // Menu Item does not support object into value field Should also look for controlled select 
            // useContext better to share state between component ?
              return <MenuItem key={item.id} value={_index}>{item.place}</MenuItem>
          })
          }
        </Select>
      </FormControl>
      <WindParameters locationID={currentLocation.id}/>
    </Box>
  );
}