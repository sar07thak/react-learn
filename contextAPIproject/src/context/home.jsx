// while using custom hook we have not provide extra info 
// import { useContext } from "react";
// import { BioContext } from "./contextAPI";

// importing custom hook from contextAPI
import {  useBioContext } from "./contextAPI";



export const Home = () =>{
    // const { myname , myage }= useContext(BioContext) ;  done by simple using useContext hook 

    const { myname , myage }= useBioContext ; // in this useBioContext is a custom hook

    
    return(
        <div className="bg-slate-800 flex justify-center items-center h-screen text-white text-xl">
        <h1>hello context , my name is {myname} and my age is {myage}</h1>
        </div>
    )
}