import React from 'react'

export const Card = ({movieData}) => {
  const {Poster, imdbID } = movieData ;
    return (
    <>
    <li className='m-2'>
       <img src={Poster} alt="" />
    </li>
    </> 
  )
}
