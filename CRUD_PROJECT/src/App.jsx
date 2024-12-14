import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getApiData } from '../api/Dataapi';
import { Post } from './components/Post';


export const App = () => {
 
  const [postdata , setpostdata] = useState([]);

  const getPostdata = async() => {
    try {
      const res = await getApiData() ;
      // console.log(res.data);
      setpostdata(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
  getPostdata() ;
  },[])

  return (
    <div className='bg-[#e1cec7] flex flex-col justify-center items-center p-6'>
    <input type="text" className='w-1/4 bg-[#5e473e] text-white p-3 rounded-lg placeholder:text-gray-300 placeholder:font-mono' placeholder='write a post........' />
    <ul className=' w-full grid md:grid-cols-4 grid-flow-row sm:grid-cols-2 gap-y-3'>
      {
        postdata.map((curpost)=>{
          // const {id,body,title} = curdata ;
          return <Post key={curpost.id} curdata = {curpost} />
        })
      }
    </ul>
    </div>
  )
}


