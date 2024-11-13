import { useState } from "react";

export const App = () => {

  let [color,setColor] = useState("coral");

  
  return(
    <>
      <div className="h-screen flex justify-center items-center text-white duration-300" style={{backgroundColor:color}}>
        <div className="bg-white flex w-[80%]  justify-evenly p-4 rounded-md flex-wrap gap-0.5">
          <button className="p-1 w-36 border bg-red-500 hover:border-red-800 duration-200 rounded-md" onClick={() => {
            setColor("#EF4444");
          }}>Red</button>
          <button className="p-1 w-36 border bg-blue-500 duration-200 hover:border-blue-800 rounded-md" onClick={()=>{
            setColor("#3B82F6");
          }}>Blue</button>
          <button className="p-1 w-36 border bg-yellow-400 duration-200 hover:border-yellow-600 rounded-md" onClick={()=>{
            setColor("#FACC15");
          }}>Yellow</button>
          <button className="p-1 w-36 border bg-green-500 duration-200 hover:border-green-800 rounded-md" onClick={()=>{
            setColor("#22C55E");
          }}>Green</button>
          <button className="p-1 w-36 border bg-slate-500  duration-200 hover:border-slate-800 rounded-md" onClick={()=>{
            setColor("#64748B");
          }}>Grey</button>
          <button className="p-1 w-36 border bg-white text-black  duration-200 hover:border-slate-900 rounded-md" onClick={()=>{
            setColor("white");
          }}>White</button>
          <button className="p-1 w-36 border bg-purple-500  duration-200 hover:border-purple-800 rounded-md" onClick={()=>{
            setColor("#8B5CF6");
          }}>Purple</button>
        </div>
      </div>
    </>
  );
}