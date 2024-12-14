import React from 'react'
import { useLoaderData,useParams } from 'react-router-dom'

export const MovieDetails = () => {
    // const Params = useParams() ;
    // console.log(Params);
    const moviedata = useLoaderData()
    // console.log(moviedata);

      
  const {
    Actor,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
  } = moviedata;
    
  return (
    <div className='p-5 flex justify-center items-center'>
    <div className='shadow-2xl text-center shadow-neutral-600 w-60 p-2 bg-[#242424] rounded-xl'>
      <img src={Poster} className="h-72 w-72 rounded-xl" alt={imdbID} />
      <button className="border shadow-sm shadow-gray-400  p-2 m-2 rounded-xl ">Watch now</button>
    </div>
    
    </div>
  )
}
