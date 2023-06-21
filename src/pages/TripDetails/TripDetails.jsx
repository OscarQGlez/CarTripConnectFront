import React from 'react'
import './TripDetails.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";


function TripDetails() {
  const Data = [
    {
      TripId: 1,
      date: "21-07-24",
      departure_time: "04:00:00",
      arrival_time: "14:30:00",
      origin: "Madrid",
      destination: "Barcelona",
      price: "48",
      driver_name: "David",
      score: "5",
      profile: "verificado",
      available_seats: 2,
    },
    {
      TripId: 2,
      date: "22-07-24",
      departure_time: "09:00:00",
      arrival_time: "15:30:00",
      origin: "Sevilla",
      destination: "Madrid",
      price: "35",
      driver_name: "Cuco",
      score: "5",
      profile: "verificado",
      menssage: "",
      available_seats: 2,
    },
  ];
  return (
    <>
      <Card className="cardDetail" sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://unsplash.it/1000/450/?random"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            Trip
          </Typography>
          <Typography sx={{ fontSize: "16px" }} color="text.secondary">
            <p>Date: {Data[0].date}</p>
            <p>Origin: {Data[0].origin}</p>
            <p>Destination: {Data[0].destination}</p>
            <p>Departure time: {Data[0].departure_time.slice(0, 5)}</p>
            <p>Arrival time: {Data[0].arrival_time}</p>
            <p>Price: {Data[0].price}€</p>
            <p>Driver's name: {Data[0].driver_name}</p>
            <p>Score: {Data[0].score}</p>
            <p>Profile: {Data[0].profile}</p>
            <p>Avaible seats: {Data[0].available_seats}</p>
          </Typography>
        </CardContent>
      </Card>
      <CardActions>
        <Link to="/">
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{ width: "100%", height: "100%" }}
            className="h100"
          >
            Back
          </Button>
        </Link>
      </CardActions>
    </>
  );
}
export default TripDetails