import React from 'react'

import {Container, Box, Button} from '@mui/material'
import img from '../../assets/img/ilustracion.jpg'
import { Link } from 'react-router-dom';


function NotFound() {

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      {/* <h1>Ooops!</h1>
      <h2>The page you are trying to access does not exist</h2> */}
      <Box
        className="herosection"
        sx={{
          backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        }}
      >
        <Container 
        
        position="relative"
        sx={{
            zIndex:"8",
            // fontSize:"40px",
            display: "flex", 
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
          }}>
            <h1 >Ooops!</h1>
            <h2 >The page you are trying to access does not exist</h2>
            <Link to='/'>
              <Button variant="contained" onClick={handleGoBack}>Go Back</Button>
            </Link>
        
      </Container>
      </Box>
    
    </>
  )
}

export default NotFound
