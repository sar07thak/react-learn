import { useState } from "react";

export const State = () =>{
    
    let [ counter , setCounter ] = useState(0);

    const handleIncr = () => {
        // counter = counter + 1 ;
        // setCounter(counter);
        // console.log("incre",counter);
        if (counter > 19) {
            alert("please click on decrement btn");
        }else{
            counter = counter + 1 ;
            setCounter(counter);
            console.log("incre",counter);
        }

    }

    const handleDecre = () => {
        // counter = counter-1 ;
        // setCounter(counter);
        // console.log("decre",counter);
        if (counter < 1) {
            alert("Please click on increment btn");
        }
        else{
            counter = counter - 1;
            setCounter(counter);
            console.log("decre",counter);
        }
         
    }

    return(
        <>
        <div className="flex flex-col bg-slate-700 text-white justify-center items-center h-screen">
            <h1 className="text-3xl mb-3 font-mono font-bold text-purple-600">
                {counter}
            </h1>
            <button className="w-40 border border-purple-100 p-5 rounded-md bg-purple-600 hover:border-purple-900 duration-300 mb-2" onClick={handleIncr}>Increment</button>
            <button className="w-40 border border-purple-100 p-5 rounded-md bg-purple-600 hover:border-purple-900 duration-300" onClick={handleDecre}>Decrement</button>

        </div>
        </>
    );
}