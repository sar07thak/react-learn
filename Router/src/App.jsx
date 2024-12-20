import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from './components/About'
import Movie from './components/Movie'
import Contact from './components/Contact'
import Home from './components/Home'
import Applayout from './components/Applayout'
import Error from './components/Error'
import { GetMoviesdata } from './API/GetAPIdata'
import { MovieDetails } from './components/UI/MovieDetails'
import { getMovieDetails } from './API/GetMovieDetails'


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout/>, 
      errorElement : <Error/>, //errorElement for activating <Error/> components
      children : [ // children for activating outlet
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
          element : <Movie/>,
          loader : GetMoviesdata , // loader key is for loading api and also for useLoader
        },
        {
          path: "/movie/:movieID",
          element : <MovieDetails/>,
          loader : getMovieDetails
        },
        {
          path: "/contact",
          element : <Contact/>
        }
      ]
    }
  ])
  return (
    <div className='p-1.5 text-white'>
    <RouterProvider router={router} />
    </div>
  )
}

export default App