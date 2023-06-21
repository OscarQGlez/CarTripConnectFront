import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,

} from "@mui/material";
import { styled } from "@mui/material";
import React from "react";
import Calendar from "../Date/Date";
import { addtrip } from "../../services/trip.services";
// import { getOringin} from "../../services/trip.services"
// import { getDestination} from "../../services/trip.services"

import { LocalizationProvider, MobileTimePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function TripForm() {
  const [date, setDate] = useState("");
  const [departure_time, setdeparture_time] = useState(dayjs('2022-04-17T15:30'));
  const [available_seats, setavailable_seats] = useState("");
  const [vehicle_type, setvehicle_type] = useState("");

  const [favorite_genre, setfavorite_genre] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [pets_accepted, setpets_accepted] = useState("");
  const [maximun_baggage, setmaximun_baggage] = useState("");
  const [drivingSkill, setDrivingSkill]  = useState("");

  // const [origin, setorigin]  = useState("");
  // const [destination, setDestination]  = useState("");

  const handleDate = (e) => {
    setDate(`${e.$y}-${e.$M+1}-${e.$D}`)
  }

  const handledeparture_time = (e) => {

    setdeparture_time(`${e.$H}:${e.$m}`)
  }

  const handleavailable_seats = (e) => {
    setavailable_seats(e.target.value)
  }

  const handlevehicle_type = (e) => {
    setvehicle_type(e.target.value)
  }

  const handlefavorite_genre = (e) => {
    setfavorite_genre(e.target.value)
  }

  const handleLenguaje = (e) => {
    setLenguaje(e.target.value)
  }

  const handlepets_accepted = (e) => {
    setpets_accepted(e.target.value)
  }

  const handlemaximun_baggage = (e) => {
    setmaximun_baggage(e.target.value)
  }

  const handleDrivingSkill = (e) => {
    setDrivingSkill(e.target.value)
  }

  const uploadtrip = async () => {
    const tripData = {
      date,
      departure_time,
      available_seats,
      vehicle_type,
      favorite_genre,
      lenguaje,
      pets_accepted,
      maximun_baggage,
      drivingSkill,
    };
    try {
      const res = await addtrip(tripData);
      console.log(tripData)
      if (res === "success") {
        console.log("Viaje guardado exitosamente");
        Navigate('/')
      } else {
        console.log("Error al guardar el viaje");
      } 
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  }


  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "70px",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>Publish a trip </h1>

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Origin</InputLabel>
                  <Select
                    labelId="select-label"
                    id="lenguaje-select"
                    label="Origin"
                    //onChange={handleOrigin}
                  >
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="en">Inglés</MenuItem>
                    <MenuItem value="de">Alemán</MenuItem>
                    <MenuItem value="fr">Francés</MenuItem>
                    <MenuItem value="it">Italiano</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Destination</InputLabel>
                  <Select
                    labelId="select-label"
                    id="lenguaje-select"
                    label="Destination"
                    //onChange={handleDestination}
                  >
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="en">Inglés</MenuItem>
                    <MenuItem value="de">Alemán</MenuItem>
                    <MenuItem value="fr">Francés</MenuItem>
                    <MenuItem value="it">Italiano</MenuItem>
                  </Select>
                </FormControl>
              </Grid>





              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                item
                xs={6}
              >
            <Calendar size='60%' handleDate={handleDate}  value={date} />
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Lenguaje</InputLabel>
                  <Select
                    labelId="select-label"
                    id="lenguaje-select"
                    label="Lenguaje"
                    onChange={handleLenguaje}
                  >
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="en">Inglés</MenuItem>
                    <MenuItem value="de">Alemán</MenuItem>
                    <MenuItem value="fr">Francés</MenuItem>
                    <MenuItem value="it">Italiano</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

               <Grid
                  item
                  xs={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileTimePicker
                      label="Departure time"
                      sx={{ width: '60%' }}
                      ampm={false}
                      value={departure_time}
                      onChange={handledeparture_time}
                      
                    />
                  </LocalizationProvider>
                </Grid> 

              {/* <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <TextField
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Departure time"
                  variant="outlined"
                  onChange={handledeparture_time}
                />
              </Grid> */}

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Driving skill</InputLabel>
                  <Select
                    labelId="select-label"
                    id="driving-skill-select"
                    label="driving-skill"
                    onChange={handleDrivingSkill}
                  >
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                item
                xs={6}
              >
                <TextField
                  sx={{ width: "60%" }}
                  id="outlined-basic"
                  label="Avaible seats"
                  variant="outlined"
                  onChange={handleavailable_seats}
                />
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Pets accepted</InputLabel>
                  <Select
                    labelId="select-label"
                    id="choice-select"
                    label="Choice"
                    onChange={handlepets_accepted}
                    value={pets_accepted === true ? "Yes" : "No"}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Vehicle type</InputLabel>
                  <Select
                    labelId="select-label"
                    id="vehicle-type-select"
                    label="vehicle-type"
                    onChange={handlevehicle_type}
                  >
                    <MenuItem value="minivan">Minivan</MenuItem>
                    <MenuItem value="SUV">SUV</MenuItem>
                    <MenuItem value="off-road">Off-road</MenuItem>
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="family vehicle">Family vehicle</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
                  
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                item
                xs={6}
              >
                <TextField
                  sx={{ width: "60%" }}
                  id="outlined-basic"
                  label="Maximum baggage"
                  variant="outlined"
                  onChange={handlemaximun_baggage}
                />
              </Grid>
              
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "60%" }} variant="outlined">
                  <InputLabel id="select-label">Gender</InputLabel>
                  <Select
                    labelId="select-label"
                    id="gender-select"
                    label="Gender"
                    onChange={handlefavorite_genre}
                    value={favorite_genre.toLowerCase()}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="both">Both</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </CardContent>

        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            sx={{ width: "100%" }}
            onClick={uploadtrip}
          >
            Publicar
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default TripForm;
