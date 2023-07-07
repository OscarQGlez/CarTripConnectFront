import React from "react";
import './MyTrips.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

function MyTrips() {
  const Data = [
    {
      TripId: 1,
      date: "06-02-2023",
      departure_time: "12:00:00",
      arrival_time: "13:00:00",
      origin: "Las Palmas de Gran Canaria",
      destination: "el fondillo",
      price: "5",
      driver_name: "María",
      score: "5",
      profile: "verificado",
      available_seats: 2,
    },
    {
      TripId: 2,
      date: "15-07-23",
      departure_time: "09:00:00",
      arrival_time: "11:10:00",
      origin: "Agaete",
      destination: "Las Palmas",
      price: "10",
      driver_name: "Andrés",
      score: "5",
      profile: "verificado",
      menssage: "",
      available_seats: 2,
    },
  ];
  return (
    <>
      <Card className="myTrips" sx={{ maxWidth: 345 }}>
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
            <p>Arrival time: {Data[0].arrival_time.slice(0, 5)}</p>
           
            <p>Driver's name: {Data[0].driver_name}</p>
        
        
            <p>Avaible seats: {Data[0].available_seats}</p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default MyTrips;
