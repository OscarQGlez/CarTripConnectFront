import React from 'react'
import './TripDetails.css'

function TripDetails() {
  
  const Data = [{"TripId":1,"date":"21-07-24", "departure_time":"04:00:00", "arrival_time":"14:30:00", "origin":"Madrid", "destination":"Barcelona","price":"48","driver_name":"David","score":"5", "profile":"verificado", "available_seats": 2 },
                {"TripId":2,"date":"22-07-24", "departure_time":"09:00:00", "arrival_time":"15:30:00", "origin":"Sevilla", "destination":"Madrid","price":"35","driver_name":"Cuco","score":"5", "profile":"verificado", "menssage":"", "available_seats": 2 },
]
  return (
    <>
      <div className='tripBoard'>
        <div className='tripDetails'>

          <div className='information'>
            <h2>Información sobre el viaje</h2> 
          </div>

          <div className='card'>
            <p className='text'>Fecha: {Data.date}</p>
            <p className='text'>Hora de Salida: {Data.departure_time}</p>
            <p className='text'>Hora de LLegada: {Data.arrival_time}</p>
            <p className='text'>Inicio de viaje: {Data.origin}</p>
            <p className='text'>Destino de viaje: {Data.destination}</p>
            <p className='text'>Importe por pasajero: {Data.Price}</p>
            <p className='text'>Nombre del chofer:{Data.driver_name}</p>
            <p className='text'>Puntuación: {Data.score}</p>
            <p className='text'>Perfil: {Data.profile}</p>
            <p className='text'>Asientos disponibles: {Data.available_seats}</p>
          </div>
            
            <div className='btn-continue'>
             <a href="#" className='myButton'>Continuar</a>
            </div>

        </div>
      </div>
    </>
  )
}

export default TripDetails