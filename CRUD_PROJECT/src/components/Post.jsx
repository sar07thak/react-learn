import React, { useState } from 'react'
import { deletePost } from '../../api/Dataapi';


export const Post = ({curdata,key}) => {
    
    const {id,body,title} = curdata ;
    const [data ,setdata] =useState(curdata)
    const handleDltBtn = async(id) => {
        try {
            const res = await deletePost(id);
            console.log(res);
            // console.log(data);
            if ( res.status === 200 ) {
                const newPost = data.filtre(()=>{
                    return key === id ;
                })
                setdata(newPost)
            }           
        } catch (error) {
            console.log(error);   
        }
    }
 
  return (
    <>
    <li className='p-3 rounded-xl m-1 w-72  font-mono shadow-[#31231e] shadow-lg text-white'>
        <div className='rounded-lg text-center p-1 text-white bg-[#5e473e]' key={id}> </div>
        <h2 className='text-black text-center font-semibold'>{title}</h2>
        <p className='text-gray-700'>{body}</p>
        <div className=' mt-5 flex justify-center gap-10  '>
            <button className='bg-emerald-600 p-2 text-sm w-20'>Edit</button>
            <button 
            className='bg-red-500 p-2 w-20'
            onClick={() => handleDltBtn()}
            >Delete</button>
        </div>
    </li>
    </>
  )
}
