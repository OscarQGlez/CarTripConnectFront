import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  InputLabel,
  CardHeader,
} from "@mui/material";
import { styled } from "@mui/material";

import React from "react";
import Calendar from "../Date/Date";

function TripForm() {
  const [date, setDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [petAccepted, setpetAccepted] = useState("");
  const [maximumBaggage, setMaximumBaggage] = useState("");


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
            <Calendar size='50%'/>
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
                  sx={{ width: "50%" }}
                  id="outlined-basic"
                  label="Departure time"
                  variant="outlined"
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
          >
            Save trip
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default TripForm;
