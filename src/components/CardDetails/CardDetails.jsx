import React, { useState } from 'react'
import './CardDetails.css'
import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FirstComponent from '../Date/Date'



function CardDetails() {
const [visible, setVisible] = useState('false')

const showData = ()=> {
    return (
        <div>Hola</div>
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
            </div>

            <div className='box-cards'>
                {visible ? 'No hay datos' : showData()}
            </div>
        </div>
    </>
  )
}

export default CardDetails