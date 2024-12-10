import { useEffect, useState } from "react";

export const ChallengeEffect = () => {
    let [cnt , setcnt ] = useState(0) ;
    let [data ,setData ] =useState("hello");
    const handleChangetext = (e) => {
        setData(e.target.value);
    }
    
    const handleclick =()=>{
        setcnt(cnt++);
    }

    useEffect(()=>{
        document.title = `count : ${cnt}`
    },[cnt])

    useEffect(()=>{
        console.log("entered data is :",data );
    },[data , setData]);

    return(
        <>
        <div className="bg-slate-500 h-screen flex flex-col justify-center items-center">
            <p> Count th value </p>
            <p> COUNT : {cnt} </p>
            <button className="border bg-emerald-400 p-2 rounded-lg" onClick={handleclick}>CLick-me</button>
            <input 
            type="text" 
            name="" 
            id=""
            value={data}
            className="text-black"
            placeholder="enter the text"
            onChange={handleChangetext}
            />
           <p>Entered data : {data}</p>
        </div> 
        </>
    );
}