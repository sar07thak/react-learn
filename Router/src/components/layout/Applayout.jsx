import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
        <Header/>
        
        {/* outlet is used for taking the data of others components */}
        <Outlet/> 

        <Footer/>
    </div>
  )
}

export default Applayout