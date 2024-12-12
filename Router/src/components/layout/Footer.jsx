import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section>
        <div className=' p-3 md:p-5 rounded-lg text-sm bg-[#242424] shadow-black shadow-lg font-mono'>
            <div className='flex  justify-between'>
            <div className=' w-44 md:w-80 p-3'>
                <p className='text-xs text-gray-300'>
                    welcome to WatchMovie here you can watch , Buy and download .
                </p>
            </div>
            <div className='p-3'>
                <h3 className='font-semibold mb-4 font-mono' >SHOPPING</h3>
                <div className='text-xs text-gray-300 flex flex-col md:flex md:flex-col md:justify-between'>
                <NavLink to="com" className="mb-3">Computer Store</NavLink>
                <NavLink to="lap" className="mb-3">Laptop Store</NavLink>
                <NavLink to="acc" className="mb-3">Accessories</NavLink>
                <NavLink to="sal" className="mb-3">Sales & Discount</NavLink>
                </div>
            </div>
            <div className='p-3'>
            <h3 className='font-semibold mb-4 font-mono'>EXPERIENCE</h3>
                <div  className='text-xs text-gray-300  flex flex-col md:flex md:flex-col md:justify-between'>
                <NavLink to="cont" className="mb-3">Contact Us</NavLink>
                <NavLink to="pay" className="mb-3">Payment method</NavLink>
                <NavLink to="acc" className="mb-3">Accessories</NavLink>
                <NavLink to="sal" className="mb-3">Sales & Discount</NavLink>
                </div>
            </div>
            <div className=' p-3'>
                <h3 className='font-semibold font-mono mb-4'>NEWSLETTER</h3>
                <p className='text-xs text-gray-300  mb-2' >Be the first to know about new arrivals , sales & promos!</p>
                <input type="email" id="" placeholder='Your Email'className='p-3 bg-gray-500 font-semibold rounded-md' />
            </div>
            </div>
            <div className='border border-b  border-gray-300'></div>
            <p className='text-gray-400 text-xs mt-1.5 text-center'>Design and Code by Sarthak</p>
        </div>
    </section>
  )
}

export default Footer