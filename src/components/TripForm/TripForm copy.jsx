import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material";

import React from "react";
import Calendar from "../Date/Date";
import { addtrip } from "../../services/trip.services";

function TripForm() {
  const [date, setDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [petAccepted, setPetAccepted] = useState("");
  const [maximumBaggage, setMaximumBaggage] = useState("");
  const [drivingSkill, setDrivingSkill]  = useState("");

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleDepartureTime = (e) => {
    setDepartureTime(e.target.value)
  }

  const handleAvailableSeats = (e) => {
    setAvailableSeats(e.target.value)
  }

  const handleVehicleType = (e) => {
    setVehicleType(e.target.value)
  }

  const handleFavoriteGenre = (e) => {
    setFavoriteGenre(e.target.value)
  }

  const handleLenguaje = (e) => {
    setLenguaje(e.target.value)
  }

  const handlePetAccepted = (e) => {
    setPetAccepted(e.target.value)
  }

  const handleMaximumBaggage = (e) => {
    setMaximumBaggage(e.target.value)
  }

  const handleDrivingSkill = (e) => {
    setDrivingSkill(e.target.value)
  }

  const uploadtrip = async () => {
    const tripData = {
      date,
      departureTime,
      availableSeats,
      vehicleType,
      favoriteGenre,
      lenguaje,
      petAccepted,
      maximumBaggage,
      drivingSkill,
    };
    try {
      const res = await addtrip(tripData);
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
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                item
                xs={6}
              >
            <Calendar size='50%'onChange={handleDate}/>
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
                <TextField
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Lenguaje"
                  variant="outlined"
                  onChange={handleLenguaje}
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
                <TextField
                  sx={{ width: "50%", colorScheme:"none" }}
                  id="outlined-basic"
                  
                  label="Departure time"
                  variant="outlined"
                  
                  // type="time"
                  // defaultValue="08:00"
                  
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  // inputProps={{
                  //   step: 300, // 5 min
                  // }}
                  onChange={handleDepartureTime}
                />
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Driving skill"
                  variant="outlined"
                  onChange={handleDrivingSkill}
                />
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Avaible seats"
                  variant="outlined"
                  onChange={handleAvailableSeats}
                />
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Pets accepted"
                  variant="outlined"
                  onChange={handlePetAccepted}
                />
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Vehicle type"
                  variant="outlined"
                  onChange={handleVehicleType}
                />
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Maximum baggage"
                  variant="outlined"
                  onChange={handleMaximumBaggage}
                />
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Favorite genre"
                  variant="outlined"
                  onChange={handleFavoriteGenre}
                />
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
