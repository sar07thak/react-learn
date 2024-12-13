import React from 'react'

export const Card = ({curMovie}) => {
    const {Poster , imdbID } = curMovie ;
  return (
    <li className="shadow-2xl shadow-lime-900 w-60 p-2 bg-[#242424] rounded-xl ">
      <div className="">
        <div className="">
          <img src={Poster} className="h-72 w-72 rounded-xl" alt={imdbID} />
        </div>
        <div className="text-center">
          <div className="ticket__content">
            {/* <NavLink to={`/movie/${imdbID}`}> */}
              <button className="border border-lime-500 shadow-sm shadow-gray-400 text-lime-500 p-2 m-2 rounded-xl ">Watch now</button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </li>
  )
}

