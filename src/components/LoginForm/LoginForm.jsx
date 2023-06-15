import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from '../CustomTextField/CustomTextField'

function LoginForm() {
  return (
    //<h1>En la pagina de login PAge redirido al componente LoginForm</h1>
    <Card sx={{
      height: '450px',
      width: '450px',
      margin: '20px auto',
      padding: '60px 68px 40px',
      //backgroundColor: 'rgba(0 0 0 / .8)',
      color: 'black'
     }}>

      <CardContent>
        <Typography align='center' variant="h4" component="div">
          Login
        </Typography>

        <Box sx={{ marginTop: '20px'}}>
          <CustomTextField fullWidth label="Email" variant="outlined" />
          <CustomTextField fullWidth label="Password" variant="outlined" />
        </Box>
      </CardContent>

      <CardActions>
        <Button variant="contained" color="error" sx={{ width: '100%'}}> Sign In</Button>
      </CardActions>


      <Typography sx={{display: "flex", justifyContent: "center"}} variant="h8" >
        Already have an account? Sign in
      </Typography>
    </Card>
  )
}

export default LoginForm