import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from './components/layout/About'
import Movie from './components/layout/Movie'
import Contact from './components/layout/Contact'
import Home from './components/layout/Home'
import Applayout from './components/layout/Applayout'


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout/>, 
      children : [
        {
          path: "/",
          element : <Home/>
        },
        {
          path: "/about",
          element : <About/>
        },
        {
          path: "/movie",
          element : <Movie/>
        },
        {
          path: "/contact",
          element : <Contact/>
        }
      ]
    }
  ])
  return (
    <div className='bg-lime-500 p-1.5 h-screen text-white'>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
