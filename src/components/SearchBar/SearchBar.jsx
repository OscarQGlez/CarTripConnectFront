import React, { useState } from 'react'
import "./SearchBar.css"
import { Button, TextField, Typography, CardActions, Grid, Container, Card } from '@mui/material'

import Calendar from '../Date/Date'




function SearchBar({origin, destination}) {

const [inputOrigin, setInputOrigin] = useState('')
const [inputDestination, setInputDestination] = useState('')
const [inputcalendar, setInputcalendar] = useState('')


const handleSearch = () => {
   
    origin(inputOrigin)
    destination(inputDestination)
}

const handleOriginInput = (e) => {
  setInputOrigin(e.target.value)
}

const handleDestinationInput = (e) => {
  setInputDestination(e.target.value)
}

const handlecalendar = (e) => {
  setInputcalendar(e.target.value)
}

  return (
    <>
      <div className="cardDetails">
        <div className="box-search">
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  component="div"
                  className="heading"
                  sx={{ textAlign: "Center", color: "black" }}
                >
                  <h1>Better for the planet and your wallet</h1>
                </Typography>
              </Grid>
            </Grid>

            <Card position="static" sx={{ padding: "10px" }}>
              <Grid container spacing={2} sx={{ backgroundColor: "white" }}>
                <Grid item xs={4}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "25px", flexGrow: 1 }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Origin"
                      className="formfield"
                      onChange={handleOriginInput}
                    ></TextField>
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "25px", flexGrow: 1 }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Destination"
                      className="formfield"
                      onChange={handleDestinationInput}
                    />
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <Calendar className="formfield" onChange={handlecalendar}/>
                </Grid>           

                <Grid item xs={2}>
                  <CardActions
                    className="h100"
                    sx={{ width: "100%", height: "100%", padding: "0" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ width: "100%", height: "100%" }}
                      className="h100"
                      onClick={handleSearch}
                    >
                      Search{" "}
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SearchBar
