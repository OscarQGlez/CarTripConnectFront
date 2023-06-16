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
import {Icon} from "@mui/material";
import { Email } from "@mui/icons-material";
import { Lock} from "@mui/icons-material"

function Signup() {

      const [name, setName] = useState("");
      const [lastname, setlastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "100px",
        alignItems: "center",        
        width: "100vw",
      }}
    >
      <CardHeader title="SIGN UP" />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="LastName"
        variant="outlined"
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        InputProps={{ startAdornment: <Email /> }}
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        InputProps={{ startAdornment: <Lock /> }}
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Birthdate"
        variant="outlined"
      />
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ width: "100%" }}
        >
          Signup{" "}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Signup