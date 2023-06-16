//import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CardDetails from '../components/CardDetails/CardDetails'
import TripDetails from '../pages/TripDetails/TripDetails'
import './layout.css'

function Root() {
  return (
    <div className='layout'>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root