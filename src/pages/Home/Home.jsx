import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Home.css'
import {Button, CardActions, Typography, CardContent, Grid, Card, Container, Box} from '@mui/material'
import img from '../../assets/img/ilustracion.jpg'
import TripCard from '../../components/TripCard/TripCard'
import { useState, useEffect } from 'react' 
import { getAlltrips } from '../../services/trip.services'
import { getOrigin } from '../../services/trip.services'
import { getDestination } from '../../services/trip.services'


function Home() {
  
  const [randomTripCards, setRandomTripCards] = useState([]);
  const [locationOrigin, setLocationOrigin] = useState('')
  const [locationDestination, setLocationDestination] = useState('')
  const [dateCalendar, setDateCalendar] = = useState('')
  
  useEffect(() => {
   
    async function fetchTripCards() {
      try {
        const tripCards = await getAlltrips(); 
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

  console.log(locationOrigin)
  console.log(locationDestination)
  console.log(dateCalendar)

  return (
    <>
      <Box
        className="herosection"
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
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
      >  {randomTripCards
            .filter((trip)=>{
              if ((locationOrigin.length>0) && (locationDestination.length>0)){
                trip.origin.includes(locationOrigin)
                trip.destination.includes(locationDestination)
              } else {
                return true
              }
            })
            .map((card, index) => (
          <Grid item xs={12} sm={3} md={3} key={index}>
            <TripCard propCard={card}/>
          </Grid>
      
           ))}
        </Grid>
      </Container>
      
      </Box>
    </>
  );
}

export default Home