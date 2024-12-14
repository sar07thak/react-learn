import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error =useRouteError();
    
    const navigate = useNavigate() ;

    const handleback = () => {
        navigate(-1) ;

    }
  return (

    <div className=' flex flex-col justify-center items-center h-screen '>
         <img
            className='rounded-full w-[50%] h-[360px] '
            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
            alt="404 page"
        />
        <div className="mt-10 mb-3 text-center font-mono text-lg text-[#242424]">
            <p className=" ">
              . The page you were looking for could not be found
            </p>
            <p className="">... Back to previous page</p>
        </div>
        <div>
            {/* navigating through useNavigate  */}
        <button 
        onClick={handleback}
        className=" p-2 bg-emerald-600 text-sm hover:bg-red-400 duration-200 text-[#242424] rounded-lg mr-2 shadow-sm shadow-[#242424] font-bold ">Go back</button>
            {/* naviigate using navlink */}
        <NavLink to="/" className=" p-2 bg-emerald-600 text-sm hover:bg-red-400 duration-200 text-[#242424] rounded-lg shadow-sm shadow-[#242424] font-bold ">Go back to Home Page....</NavLink>
        </div>
    </div>
  )
}

export default Error