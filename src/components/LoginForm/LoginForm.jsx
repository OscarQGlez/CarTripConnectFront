import { Box, Button, Card, CardActions, CardContent, IconButton, TextField, Typography } from '@mui/material'
//import React from 'react'
import CustomTextField from '../CustomTextField/CustomTextField'
import { useState } from 'react'
import {login} from '../../services/auth.service'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPassVisible, setIsPassVisible] = useState (false)


  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    console.log(e.target.value)

    setPassword(e.target.value)
    
  }
  
  function handleClickVisibility (){
    setIsPassVisible (!isPassVisible)
  }

  // function logIn (){
  //   console.log("<<<<<<<<<<<<<<<<<<sign in")
  // }

  const logIn = async () => {
    await login(email, password)
    if (!localStorage.getItem('token')) alert('Error: Usario o contraseña invalidos')
    //else navigate('/dashboard')
  }


  return (
    <Card
      sx={{
        //   height: '350px',
        //   width: '450px',
        //   margin: '20px auto',
        //   padding: '60px 68px 40px',
        //   //backgroundColor: 'rgba(0 0 0 / .8)',
        //   color: 'black'
        //  }}

        display: "flex",
        flexDirection: "column",
        paddingTop: "10px",

        alignItems: "center",
        height: "70vh",
        width: "100vw",
        marginTop: "150px",
      }}
    >
      <CardContent>
        <Typography align="center" variant="h4" component="div">
          Log in
        </Typography>

        <Box sx={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            variant="outlined"
            InputProps={{ startAdornment: <Email /> }}
            onChange={handleEmail}
          ></TextField>

          <TextField
            fullWidth
            margin="dense"
            type={isPassVisible ? "text" : "password"}
            label="Password"
            variant="outlined"
            InputProps={{
              startAdornment: <Lock />,
              endAdornment: (
                <IconButton onClick={(e) => handleClickVisibility()}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
            onChange={handlePassword}
          ></TextField>
        </Box>
      </CardContent>

      <CardActions>
        <Link to='/profilepage'>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "100%" }}
            onClick={logIn}
          >
            {" "}
            Log In
          </Button>
        </Link>
      </CardActions>

      <Typography
        sx={{ display: "flex", justifyContent: "center" }}
        variant="h8"
      >
        Already have an account?
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Typography>
    </Card>
  );
}

export default LoginForm