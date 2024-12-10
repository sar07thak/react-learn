import { useContext } from "react";
import { BioContext } from "./contextAPI";


export const Home = () =>{
    const { myname , myage }= useContext(BioContext) ;
    
    return(
        <div className="bg-slate-800 flex justify-center items-center h-screen text-white text-xl">
        <h1>hello context , my name is {myname} and my age is {myage}</h1>
        </div>
    )
}