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
        setindex(index);
    }
    
    let information = Data[index];
    
    
    return(
        <div>
            <button onClick={handleClick} className="border bg-lime-600">clcik me</button>
            <h2>{information.name}</h2>
            <p>Artist: {information.artist}</p>
            <p>{information.description}</p>
            <img src={information.url} alt={information.alt} style={{ width: '200px', height: 'auto' }} />
            <hr />
        </div>
    );
};
