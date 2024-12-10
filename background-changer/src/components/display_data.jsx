import { useState } from "react";
import { Data } from "../data/data";

export const DisplayArtworks = () => {
    return(
        <>
           <ArtworkCard/>
        </>
    );
};

const ArtworkCard = () => {
    let [index , setindex] = useState(0);

    
    
    
    const handleClick = () => {
        index = index + 1 ;
        if(index > 5 ){
            index = 0 ;
        }
        setindex(index);
    }
    
    const handlePrevClick  = () => {
        index = index - 1 ;
        if ( index < 0 ) {
            index = 5 ;
        }
        setindex(index); 
    }
    let information = Data[index];
    
    
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-slate-600 text-white">
            <h2 className="text-xl font-semibold">{information.name}</h2>
            <p className="text-xl font-bold">Artist: {information.artist}</p>
            <p className="text-lg ">{information.description}</p>
            {/* <img src={information.url} alt={information.alt} style={{ width: '200px', height: 'auto' }} /> */}
            <div className="">
            <button onClick={handlePrevClick} className="mr-5 bg-red-600 hover:bg-red-700 duration-150 p-3 rounded-lg ">Previous</button>
            <button onClick={handleClick} className=" bg-emerald-600  hover:bg-emerald-700 durat-150 p-3 rounded-lg ">Next</button>
            </div>
        </div>
    );
};
