import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section>
        <div className=' flex p-3 md:p-5 rounded-lg text-sm bg-[#242424] shadow-black shadow-lg justify-between'>
            <div className=' w-40 md:w-80'>
                <p className='text-xs text-gray-300'>
                    welcome to WatchMovie here you can watch , Buy and download .
                </p>
            </div>
            <div>
                <h3 className='font-semibold mb-4'>SHOPPING</h3>
                <div className='text-xs text-gray-300 flex flex-col md:flex md:flex-col md:justify-between'>
                <NavLink className="mb-3">Computer Store</NavLink>
                <NavLink className="mb-3">Laptop Store</NavLink>
                <NavLink className="mb-3">Accessories</NavLink>
                <NavLink className="mb-3">Sales & Discount</NavLink>
                </div>
            </div>
            <div>
            <h3 className='font-semibold mb-4'>EXPERIENCE</h3>
                <div  className='text-xs text-gray-300 flex flex-col md:flex md:flex-col md:justify-between'>
                <NavLink className="mb-3">Contact Us</NavLink>
                <NavLink className="mb-3">Payment method</NavLink>
                <NavLink className="mb-3">Accessories</NavLink>
                <NavLink>Sales & Discount</NavLink>
                </div>
            </div>
            <div>
                <h3 className='font-semibold mb-4'>NEWLETTER</h3>
                <p className='text-xs text-gray-300  mb-2' >Be the first to know about new arrivals , sales & promos!</p>
                <input type="email" id="" placeholder='Your Email'className='p-3 bg-gray-500 font-semibold rounded-md' />
            </div>

        </div>
    </section>
  )
}

export default Footer