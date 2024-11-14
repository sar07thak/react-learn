import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";



export const Toggle = () => {

    // let [theme,setTheme] = useState("white");
    
    // const handleOnBtn = () => {
        //     console.log("hi on");
        //     // setTheme("white");
        // }
        
        // const handleOffbtn = () => {
    //     // setTheme("#0f172a")
    // }

    let [isOn , setON] = useState(0);

    const CheckISon = isOn ? "ON" : "OFF";
    const ToggleColor = isOn ? "#22C55E" : "#EF4444" ;

  const handleBtn = () => {
    setON(!isOn)
  }
  
    return(
        <>
        <div className="bg-slate-950  flex flex-col h-screen justify-center items-center text-white" >
            <h1 className="text-4xl font-mono mb-5 flex gap-4">Toggle button <IoIosSwitch /></h1>
            <div className="flex items-center  justify-between rounded-full w-60 p-8" style={{backgroundColor:ToggleColor}}>
                <div className={` border-4 border-slate-800  rounded-full p-5 duration-500 ${CheckISon}`} style={{backgroundColor:ToggleColor}} onClick={handleBtn}> {CheckISon}</div>
            </div>
        </div>
        </>
    );
}