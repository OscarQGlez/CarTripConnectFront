import React, { useState } from 'react'
import "./SearchBar.css"
import { Button, TextField, Typography, CardActions, Grid, Container, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import Calendar from '../Date/Date'
import TripDetails from '../../pages/TripDetails/TripDetails'



function SearchBar() {
const [visible, setVisible] = useState('false')

const showData = ()=> {
    return (
        <TripDetails/>
    )
}
const handleSearch = () => {
    setVisible(!visible)
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
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "25px", flexGrow: 1 }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Origin"
                      className="formfield"
                    ></TextField>
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "25px", flexGrow: 1 }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Destination"
                      className="formfield"
                    />
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Calendar className="formfield" />
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    className="cantidad-personas formfield"
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "25px", flexGrow: 1 }}
                  >
                    <TextField
                      className="formfield"
                      variant="outlined"
                      placeholder="Number of persons"
                    />
                  </Typography>
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
