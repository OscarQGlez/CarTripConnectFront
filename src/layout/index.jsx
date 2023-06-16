//import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CardDetails from '../components/CardDetails/CardDetails'
import TripDetails from '../pages/TripDetails/TripDetails'

function Root() {
  return (
    <div>
        <Header />
        <Outlet/>
      
        <TripDetails/>
        <Footer/>
    </div>
  )
}

export default Root