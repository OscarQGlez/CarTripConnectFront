import React, { useState } from 'react'
import './CardDetails.css'
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FirstComponent from '../Date/Date'
import TripDetails from '../../pages/TripDetails/TripDetails'



function CardDetails() {
const [visible, setVisible] = useState('false')

const showData = ()=> {
    return (
        <h1>Su búsqueda</h1>
    )
}
const handleSearch = () => {
    setVisible(!visible)
}

  return (
    <>
        <div className='cardDetails'>
            <div className='box-search'>
                <AppBar position="static"
              sx={{}}>
                    <Toolbar sx={{backgroundColor: 'grey'}}>

                    <Typography variant="h6" component="div" sx={{ fontSize:'25px', flexGrow: 1 }}>
                        <TextField variant='filled' placeholder='Origen'>

                        </TextField>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ fontSize:'25px', flexGrow: 1 }}>
                        <TextField variant='filled' placeholder='Destino'/>
                    </Typography>

                    <box>
                        <FirstComponent/>
                        <Typography className='cantidad-personas' variant="h6" component="div" sx={{ fontSize:'25px', flexGrow: 1 }}>
                            <TextField variant='filled' placeholder='Cantidad de personas'/>
                        </Typography>
                    </box>

                    <div className='btn-search'>
                        <a href="#" className='myButton' onClick={ handleSearch }>Buscar</a>
                    </div>

                    </Toolbar>
                </AppBar>
                    <div className='btn-back'>
                        <a href="#" className='myButton' onClick={ handleSearch }>Atrás</a>
                    </div>


            </div>

            <h1 className='box-cards'>
                {visible ? 'No hay datos' : showData()}
            </h1>
        </div>
    </>
  )
}

export default CardDetails