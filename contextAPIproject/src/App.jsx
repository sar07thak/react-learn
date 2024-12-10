import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BioContext } from './context/contextAPI'
import { ContextProvider } from './context/contextAPI'
import { Home } from './context/home'
import { About } from './context/about'
import { Services } from './context/services'


function App() {

  return (
    <>
    <ContextProvider>
      <Home/>
      <About/>
      <Services/>
    </ContextProvider>
    </>
  )
}

export default App
