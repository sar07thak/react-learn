import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'


const Applayout = () => {
    const navigation = useNavigation() ;
    console.log(navigation);

    if ( navigation.state === "loading") {
        return <div>Loading....</div>
    }
    
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