import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from '../Components/UI/UI/Card';
import { axiosService } from '../service/AxiosService';


// export const Movie = async() => {
//  try {
//     const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=efe7d584&s=batman&page=1");
//     const data = await response.json() ;
//     console.log(data.Search);
//     return data ;
//  } catch (error) {
//     console.log(error);
//  }
// }


export const Movie = () => {
    // const API = "https://www.omdbapi.com/?i=tt3896198&apikey=efe7d584&s=batman&page=1";
    
    const [data ,setdata] = useState([]);
    const getMovieData = async() =>{
        try {
            // const res = await axios.get(API);
            const res = await axiosService();
            // console.log(res.data.Search);     
            setdata(res.data.Search);   
        } catch (error) {           
            // Axios provide some error handling commonds
            console.log("error msg :",error.message);
            console.log("error status :",error.response.status);
            console.log("error data :",error.response.data);
        }
    }


    useEffect(()=>{
        getMovieData() ;
    },[])



    return(
        <>
        <ul className="flex ">
            {
                data.map((curEle)=>{
                    return <Card key={curEle.imdbID} movieData={curEle} />
                })
            }
        </ul>
        </>
    )
}