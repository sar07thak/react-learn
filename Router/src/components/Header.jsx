import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <section >
        <div className='flex justify-between items-center p-5 mb-2 font-mono bg-[#242424] shadow-red-400 shadow-md rounded-lg'>
            <p className='text-sm font-semibold '> Buy Membership and get maximum discounts </p>
            <div className=' w-40 flex justify-between'>
            <NavLink to = "/sign-in" >
                Sign-in
            </NavLink>
            <NavLink to="/sign-up">
                Sign-up
            </NavLink>
            </div>
        </div>
        <div className='bg-[#242424] shadow-red-400 shadow-md  rounded-lg flex justify-between p-5'>
            <p className='text-xl font-semibold font-mono'>WatchMovie</p>
            <div className='w-72 flex justify-between font-mono items-center '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/movie">Movie</NavLink>
            <NavLink to="/about">About</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Header ;