import { memo } from "react";
import { useState } from "react";

 const Memo = () => {

    const [count , setcount ] =useState(0)

    const data = new Date() ;
    console.log(data.getSeconds());
    
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen ">
            <p> count is : {count} </p>
            <button className="border border-white  rounded-md p-6" onClick={()=>setcount(count + 1 )} > Increment </button>
            <p> current time :  </p>
        </div>
        </>
    );
}


export default memo(Memo);