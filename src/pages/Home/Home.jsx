import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Home.css'
import {Button, CardActions, Typography, CardContent, Grid, Card, Container, Box} from '@mui/material'
import img from '../../assets/img/ilustracion.jpg'
import TripCard from '../../components/TripCard/TripCard'

function Home() {
  return (
    <>
      <Box
        className="herosection"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <Container sx={{
            zIndex:"8"
          }}>
        <SearchBar />
        <Grid
        container
        position="relative"
        spacing={4}
        justify="center"
      >
          <Grid item xs={12} sm={3} md={3}>
            <TripCard/>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <TripCard/>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <TripCard/>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <TripCard/>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </>
  );
}

export default Home