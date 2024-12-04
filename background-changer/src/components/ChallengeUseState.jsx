import { useState } from "react";

export const Challenge = () => {

    let [value , setValue] = useState(0) ;
    let [inputVal , setInputVal ] = useState(1)

    const handleIncrementclick = () => {
        value = value + inputVal ;
        setValue(value);
        
    };

    const handleDecrementClick = () => {
        value = value - inputVal ;
        setValue(value);
        
    }

    const handleOnChange = (e) => {
        setInputVal(Number(e.target.value));
    }

    const handleReset = () => {
        setValue(0);
        setInputVal(1);
    }


    return(
        <>
        <div className="h-screen text-black bg-blue-500 flex justify-center items-center ">
         <div className="shadow-xl shadow-black rounded-2xl bg-blue-300 flex flex-col justify-center items-center gap-4 p-14">
                <h1 className="text-3xl font-bold font-sans ">useState Challenge</h1>
                <div className="text-white">
                
                <p className="text-xl font-semibold" >count : <span className="text-blue-500"> {value}</span></p>
                <p className="text-xl font-semibold">step : <input className="text-blue-500 p-1" type="text" min={0} max={10} value={inputVal} onChange={handleOnChange} /></p>
                </div>
                <div className="flex gap-3 text-white  ">
                    <button
                    disabled = {value >= 100}
                    onClick={handleIncrementclick} 
                    className=" p-3 font-semibold bg-blue-400  shadow-lg">Increment</button>
                    <button
                    disabled = {value <= 0 }
                    onClick={handleDecrementClick} 
                    className=" p-3 font-semibold bg-blue-400 shadow-lg">Decrement</button>
                    <button 
                    onClick={handleReset}
                    className=" p-3 font-semibold bg-blue-400 shadow-lg">Reset</button>
                </div>
            </div>        
        </div>
       
        </>
    );
}
            // <div className="f bg-blue-400 flex flex-col justify-center items-center gap-4">
            // </div>