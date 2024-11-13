import { useState } from "react";

export const App = () => {

  let [color,setColor] = useState("#1E293B");

  
  return(
    <>
      <div className="h-screen flex  flex-col justify-center items-center text-white duration-300 shadow-xl shadow-indigo-500/40 " style={{backgroundColor:color}}>
        <h1 className="mb-2 text-2xl ">Background-Changer</h1>
        <div className="bg-white flex w-[80%]  justify-evenly p-4 rounded-md flex-wrap gap-0.5">
          <button className="relative z-0 rounded bg-red-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-red-700 after:transition-[all_0.3s_ease]  hover:after:w-full" onClick={() => {
            setColor("#EF4444");
          }}>Red</button>
          <button className="relative z-0 rounded bg-blue-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-700 after:transition-[all_0.3s_ease]  hover:after:w-full" onClick={()=>{
            setColor("#3B82F6");
          }}>Blue</button>
          <button className="relative z-0 rounded bg-yellow-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-yellow-700 after:transition-[all_0.3s_ease]  hover:after:w-full" onClick={()=>{
            setColor("#FACC15");
          }}>Yellow</button>
          <button className="relative z-0 rounded bg-green-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-green-700 after:transition-[all_0.3s_ease]  hover:after:w-full" onClick={()=>{
            setColor("#22C55E");
          }}>Green</button>
          <button className="relative z-0 rounded bg-slate-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-slate-700 after:transition-[all_0.3s_ease]  hover:after:w-full" onClick={()=>{
            setColor("#64748B");
          }}>Grey</button>
          <button className="relative z-0 rounded text-black hover:text-white bg-white px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-slate-800 after:transition-[all_0.3s_ease] hover:after:w-full" onClick={()=>{
            setColor("white");
          }}>White</button>
          <button className="relative z-0 rounded bg-purple-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-purple-700 after:transition-[all_0.3s_ease]  hover:after:w-full" onClick={()=>{
            setColor("#8B5CF6");
          }}>Purple</button>

        </div>
      </div>
    </>
  );
}

// 
