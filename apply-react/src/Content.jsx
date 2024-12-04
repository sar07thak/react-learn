import { useState } from "react";

export const Content = () => {
    // ?  increment and decrement 
    let [counter , setcounter] = useState(6);

   const addvalue = ()=>{
    if ( counter < 10  ) {
        counter = counter+1 ;
        setcounter(counter);
    }
    else{
        alert("please deccrease");
        counter = 10 ;
        setcounter(counter);
    }
   }

   const delvalue = () => {
    if ( counter > 0) {
        counter = counter -1 ;
        setcounter(counter);
    }else{
        counter = 0 ;
        alert("please increase");
        setcounter(counter);
    }
   }

   // ? delete and set value
   const [text,setText] = useState("");
   const handleChange = (e) => {
    setText(e.target.value);
   }
   const handleSubmit = () =>{
    setText("")
   }

    return(
        <div className="flex p-2 justify-between text-white ">
            <div className="w-[49%] rounded-lg bg-slate-600 h-[500px] p-2">
                <InnerContent/>
                <InnerContent/>
            </div>

            <div className="w-[49%] bg-slate-600 rounded-lg h-[500px] flex flex-col">
                {/* // ? -------------FIRST BOX--------------- */}
                <div className="p-1 border flex justify-center flex-col w-52 gap-1">
                <h2>
                    increase and decrease the number : {counter}
                </h2>
                <button className="border p-2 w-36" onClick={addvalue} >Increase</button>
                <button className="border p-2 w-36" onClick={delvalue} >Deccrease</button>
                </div>

                {/* // ? -------------SECOND-BOX----------------- */}
            <div className="p-1 border flex justify-center items-center flex-col w-52 gap-1">
                <input value={text} onChange={handleChange} placeholder="enter something" className="text-black"/>
                <p>
                    you entered : {text}
                </p>
                <button className="border p-2 w-36"  onClick={handleSubmit}>
                    reset
                </button>
            </div>
            </div>

        </div>
    );
}

const InnerContent = () => {
    return(
        <>
           <div className="p-1.5 border mb-1.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium modi minima eaque ipsum assumenda
            et quos distinctio, molestias corporis sunt quaerat esse debitis unde saepe quibusdam
            nostrum odio laudantium aut qui? Quisquam voluptas enim animi reprehenderit autem hic eius magni.
           </div>
        </>
    );
}