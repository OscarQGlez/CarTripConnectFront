import React, { useEffect, useState } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

import { getAllOrigin } from '../../services/trip.services';
import { getAllDestination } from "../../services/trip.services";


function LocationSelect() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const destination = await getAllDestination() 
        const origin = await getAllOrigin()
        setLocations(destination)
        console.log(destination)
        console.log(origin)
            
        //const dataOrigin = await origin.json();
        //const dataDestination = await destination.json();
        //setLocations(dataOrigin);
      } catch (error) {
        console.error('Error al obtener las localizaciones:', error);
      }
    }

    fetchLocations();
  }, []);

  const handleLocationChange = (event) => {
    // Manejar el cambio de la localización seleccionada
    const selectedLocation = event.target.value;
    console.log('Localización seleccionada:', selectedLocation);
  };

  return (
    <Grid
      item
      xs={6}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <FormControl sx={{ width: '60%' }} variant="outlined">
        <InputLabel id="select-label">Location</InputLabel>
        <Select
          labelId="select-label"
          id="location-select"
          label="Location"
          onChange={handleLocationChange}
        >
          {locations.map((location) => (
            <MenuItem key={location.id} value={location.id}>
              {location.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default LocationSelect;
