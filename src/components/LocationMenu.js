import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BaliseLocations from '../data/BaliseLocations';

export default function LocationMenu() {

  const [location, setLocation] = useState(BaliseLocations);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  // useEffect(() => {
  //   setLocation(BaliseLocations)
  // })

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Décollage</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value=''
          label="Location"
          onChange={handleChange}
        >
          { 
          location.map((item, _index) => {
              return <MenuItem key={item.id} value={item.place}>{item.place}</MenuItem>
          })
          }
        </Select>
      </FormControl>
    </Box>
  );
}