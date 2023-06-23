import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  InputLabel,
  CardHeader,
  IconButton
} from "@mui/material";
import { styled } from "@mui/material";

import React from "react";
import {Icon} from "@mui/material";
import { Email } from "@mui/icons-material";
import { Lock} from "@mui/icons-material"

function Signup() {

      const [name, setName] = useState("");
      const [lastname, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [isPassvisible, setIsPassVisible] = useState(false)
      const [isPassvisibleRepeat, setIsPassVisibleRepeat] = useState(false)
      const [repeatPassword, setRepeatPassword] = useState('')
      const [valid, setValid] = useState(false)
      const [validPassword, setValidPassword] = useState(false)
      const [validRepeatPassword, setValidRepeatPassword] = useState(false)

      const navigate = useNavigate()

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const passRegex = /^(?=.*\d)(.{5,})\1$/

  const validateName = (e) => {
    const name = e.target.value
    setName(name)
  }

  const validateLastName = (e) => {
    const lastname = e.target.value
    setLastName(lastname)
  }

  const validatePassword = (e) => {
    const password = e.target.value
    setPassword(password)
    if (!passRegex.test(password)) {
      setValidPassword(false)
    } else {
      setValidPassword(true)
      if (password === repeatPassword) {
        setValidRepeatPassword(true)
      } else {
        setValidRepeatPassword(false)
      }
    }
  }
  const validateRepeatPassword = (e) => {
    const repeatPassword = e.target.value
    setRepeatPassword(repeatPassword)
    if (password === repeatPassword) {
      setValidRepeatPassword(true)
      setValidPassword(true)
    } else {
      setValidRepeatPassword(false)
      setValidPassword(false)
    }
  }

  const validateEmail = (e) => {
    const email = e.target.value
    setEmail(email)
    if (!emailRegex.test(email)) {
      setValid(false)
    } else {
      setValid(true)
    }
  }


  const handleClick = () => {
    setIsPassVisible(!isPassvisible)
  }

  const handleClickRepeat = () => {
    setIsPassVisibleRepeat(!isPassvisibleRepeat)
  }

  

  const signUp = async () => {
    if (valid !== true) {
      alert('verify your email')
    } else if (validPassword !== true) {
      alert('verify your password')
    } else {
      await signup(name, email, password)
      if (!localStorage.getItem('token')) alert('Error')
      else navigate('/invite')
    }
  }

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
        onChange={validateName}
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="LastName"
        variant="outlined"
        onChange={validateLastName}
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        InputProps={{ startAdornment: <Email /> }}
        onChange={validateEmail}
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        // InputProps={{ startAdornment: <Lock /> }}


        value={password}
        type={isPassvisible ? 'text' : 'password'}
        onChange={validatePassword}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClick}>
              {isPassvisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        }}
      />
      <TextField
        sx={{ width: "20%", margin: "10px" }}
        id="outlined-basic"
        label="Repeat Password"
        variant="outlined"
        // InputProps={{ startAdornment: <Lock /> }}


        value={repeatPassword}
        type={isPassvisibleRepeat ? 'text' : 'password'}
        color={validRepeatPassword ? 'info' : 'error'}
        onChange={validateRepeatPassword}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClickRepeat}>
              {isPassvisibleRepeat ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        }}
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
          onClick={signUp}
        >
          Sign up{" "}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Signup