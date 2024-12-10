import { useEffect, useState } from 'react'
import image from './assets/image.jpg'


export const Form = () => {
    const [email ,setemail] = useState("")
    const [text , settext] = useState("")
    
    const handleChange = () => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ( !regex.test(email)) {
            settext("enter the valid email ❌❌")
        }else{
            settext("login sucessfully 👍👍")
        }
    }
      
    
    const handleformsubmit = (e) => {
        e.preventDefault();
        const formData = {
            email ,
        }
        console.log(formData);
    }

    return(
        <form onSubmit={handleformsubmit}>
          <div className="bg-zinc-700 h-screen flex justify-center items-center">
        {/* <!-- card --> */}
        <div className="bg-zinc-800 p-2 mx-6 md:h-64 rounded-2xl flex flex-col md:flex-row">
            {/* <!-- image --> */}
        <img src={image} alt=""
        className="md:h-60 md:w-52 h-80 w-96  rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 duration-200 hover:rounded-xl"/>
        
        <div className="p-6 md:p-12 ">
            <h2 className="font-serif text-white text-xl text-center md:text-left">
                Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs text-center text-white md:text-left">
                Eat better and exercise better.Sign up for the Diet & Fitness newsletter.
            </p>
            <div className="flex flex-col md:flex-row ">
            <input 
            type="text" 
            placeholder="Enter your email address"
            className="bg-zinc-800 p-2 px-4 text-sm text-center border border-zinc-600 text-white focus:outline-none "
            onChange={(e) => setemail(e.target.value)}
            />
            <button className="px-5 py-3 text-xs my-2 md:mx-2.5 md:my-0 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white"
            onClick={handleChange}
            >Subscribe</button>
            </div>
            <p className='text-center mt-3 text-white flex justify-center items-center'>{text}</p>
        </div>
        </div>
    </div>
        </form>
    )
}