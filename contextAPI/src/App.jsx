import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UsercontextProvider } from './context/usercontextprovider'
import { Login } from './components/login'
import { Profile } from './components/profile'

function App() {


  return (
    <>
    <UsercontextProvider>
     <h1>react with chai</h1>
     <Profile/>
     <Login/>
    </UsercontextProvider>
    </>

  )
}

export default App
