import { useEffect, useState } from "react";

export const UseEffect = () => {
   const [cnt , setcnt] = useState(0);
   const [total ,settotal] = useState(0)

   useEffect(()=>{
    alert("run when cnt or total is clicked");
    
   },[cnt ,total])

//    console.log("hi");
   
    return(
        <div className="flex flex-col justify-center items-center h-screen">
        count : {cnt} 
        <button className="border p-4 rounded-lg m-4 "
        onClick={() => setcnt(cnt+1)} >click me</button>
        total : {total}
        <button className="border p-4 rounded-lg m-4 "
        onClick={() => settotal(cnt + total)} >click me</button>
        </div>
    );
}


