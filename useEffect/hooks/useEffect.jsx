import { useEffect, useState } from "react";

export const Byuseeffect = () => {

    let [count,setCount] = useState(0) ;
    let [date ,setDate ] =useState(0) ;

    const handleclick = () =>{ 
        count++;
        setCount(count);
    }
    setInterval(() => {
        const updtDate = new Date() ;
        setDate(updtDate.toLocaleTimeString());
    },1000);

    useEffect(()=>{
        console.log("count value",count);
    },[count,setCount,date,setDate])
    return(
        <>
        <div className="flex justify-center flex-col items-center h-screen">
        <h1 className="text-3xl font-bold ">using UseEffect</h1>
        <p>Count : {count} </p>
        <button className="border" onClick={handleclick}>click-me</button>
        
        <p>Date : {date}</p>
        </div>
        </>
    );
}



// export const Date = () => {
    
//     let [date ,setDAte ] = useState(0);

//     useEffect (() => {
//         const updtDate = new Date() ;
//         setDAte(updtDate.tolocalTimeString());
//     },[]);

//     return(
//         <>
//         <div>
//             <p>Date : {date} </p>
//         </div>
//         </>
//     );
// }