import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Home.css'
import { Box} from '@mui/material'
import img from '../../assets/img/ilustracion.jpg'



function Home() {
  return (
    <>
    
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        Mejor para el planeta y para tu bolsillo.
        <SearchBar />
      </Box>
    </>
  );
}

export default Home