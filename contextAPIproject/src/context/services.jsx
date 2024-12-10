
import { useContext } from "react";
import { BioContext } from "./contextAPI";


export const Services = () =>{
    const { myname , myage }= useContext(BioContext) ;
    
    return(
        <div className="bg-slate-600 flex justify-center items-center h-screen text-xl text-white">
        <h1>hello context (service) , my name is {myname} and my age is {myage} </h1>
        </div>
    )
}