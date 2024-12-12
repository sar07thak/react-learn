import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <section >
        <div className='flex justify-between items-center p-5 mb-2 bg-[#242424] shadow-black shadow-lg rounded-lg'>
            <p className='text-sm font-semibold '> Buy Membership and get amximum discounts </p>
            <div className=' w-40 flex justify-between'>
            <NavLink to = "#" >
                Sign-in
            </NavLink>
            <NavLink to="#">
                Sign-up
            </NavLink>
            </div>
        </div>
        <div className='bg-[#242424] shadow-black shadow-lg  rounded-lg flex justify-between p-5'>
            <p className='text-xl font-semibold'>WatchMovie</p>
            <div className='w-72 flex justify-between '>
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">Contact</NavLink>
            <NavLink to="#">Movie</NavLink>
            <NavLink to="#">About</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Header