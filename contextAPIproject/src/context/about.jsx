
import { useContext } from "react";
import { BioContext } from "./contextAPI";


export const About = () =>{
    const { myname , myage }= useContext(BioContext) ;
    
    return(
        <div className="bg-slate-700 flex justify-center items-center h-screen text-xl text-white">
        <h1>hello context (about) , my name is {myname} and my age is {myage} </h1>
        </div>
    )
}