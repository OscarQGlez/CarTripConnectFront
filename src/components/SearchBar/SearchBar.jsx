import React, { useState } from 'react'
import "./SearchBar.css"
import { AppBar, Button, TextField, Toolbar, Typography, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'
import FirstComponent from '../Date/Date'
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
          <AppBar position="static" sx={{}}>
            <Toolbar sx={{ backgroundColor: "white" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "25px", flexGrow: 1 }}
              >
                <TextField variant="outlined" placeholder="Origin"></TextField>
              </Typography>

              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "25px", flexGrow: 1 }}
              >
                <TextField variant="outlined" placeholder="Destination" />
              </Typography>

              <box>
                <FirstComponent />
                <Typography
                  className="cantidad-personas"
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "25px", flexGrow: 1 }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Number of persons"
                  />
                </Typography>
              </box>

              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "100%" }}
                  onClick={handleSearch}
                >
                  Publish a trip{" "}
                </Button>
              </CardActions>
            </Toolbar>
          </AppBar>
          <div className="btn-back">
            <a href="#" className="myButton" onClick={handleSearch}>
              Atrás
            </a>
          </div>
        </div>

        <div className="box-cards">{visible ? "No hay datos" : showData()}</div>
      </div>
    </>
  );
}

export default SearchBar
