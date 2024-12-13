import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Card } from './UI/Card';
// import "./UI/Card.css"

const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    
  return (
    <>
    <div className='text-black text-7xl text-center font-bold font-mono'>Movie</div>
    <ul className="grid md:grid-cols-5 grid-cols-2 p-3 gap-4">
    {
        moviesData.Search.map((curMovie)=>{
            // console.log(curMovie.Title);
            return <Card key={curMovie.imdbID} curMovie={curMovie} />
        })
    }
    </ul>
    </>
  )
}

export default Movie