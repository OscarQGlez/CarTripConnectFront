import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Home.css'
import {Button, CardActions, Typography, CardContent, Grid, Card, Container, Box} from '@mui/material'
import img from '../../assets/img/ilustracion.jpg'
import TripCard from '../../components/TripCard/TripCard'
import { useState, useEffect } from 'react' 
import { getAlltrips, getAlltripsEager } from '../../services/trip.services'
import { getOrigin } from '../../services/trip.services'
import { getDestination } from '../../services/trip.services'


function Home() {
  


  const [randomTripCards, setRandomTripCards] = useState([]);
  const [locationOrigin, setLocationOrigin] = useState('')
  const [locationDestination, setLocationDestination] = useState('')
  const [tripsAll, setTripsAll]= useState([])
  
  useEffect(() => {
   
    async function fetchTripCards() {
      try {
        const tripCards = await getAlltripsEager(); 
        setTripsAll(tripCards)
        const randomIndexArray = getRandomIndexArray(tripCards.length, 4);
        const randomTrips = randomIndexArray.map(
          (index) => tripCards[index]
        );
        setRandomTripCards(randomTrips);
      } catch (error) {
        console.error("Error al obtener las tarjetas:", error);
      }
    }

    fetchTripCards();
  }, []);

  function getRandomIndexArray(length, count) {
    const indexArray = [...Array(length).keys()]; // Crear un array con todos los índices
    const shuffledIndexArray = shuffleArray(indexArray); // Mezclar los índices aleatoriamente
    return shuffledIndexArray.slice(0, count); // Obtener los primeros 'count' índices del array mezclado
  }

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  /* console.log(locationOrigin)
  console.log(locationDestination)
  console.log(dateCalendar)
  console.log(randomTripCards) */
  console.log(tripsAll)

  
  return (
    <>
      <Box
        className="herosection"
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          overflow: 'scroll'
        }}
      >
        <Container sx={{
            zIndex:"8"
          }}>
        <SearchBar origin={setLocationOrigin} destination={setLocationDestination} />
        <Grid
        container
        position="relative"
        spacing={4}
        justify="center"
      >  
     {(locationOrigin.length!=0) ?
          tripsAll.filter((trip)=>{             
                console.log(trip.origin.location, locationOrigin, trip.origin.location.includes(locationOrigin))
                return (trip.origin.location.includes(locationOrigin) /*&& trip.destination.includes(locationDestination)*/)
              }).map((card, index) => (
          <Grid item xs={12} sm={3} md={3} key={index}>
            <TripCard propCard={card}/>
          </Grid>      
           )) : 
           randomTripCards           
            .map((card, index) => (
          <Grid item xs={12} sm={3} md={3} key={index}>
            <TripCard propCard={card}/>
          </Grid>      
           )) }

        </Grid>

        
      </Container>
      
      </Box>
    </>
  );
}

export default Home

