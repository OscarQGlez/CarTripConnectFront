import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, CardActions, Typography, Box  } from "@mui/material";

import React from 'react'

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
    <div>
      <h1>Create your trip here</h1>
    </div>
  );
}

export default TripForm