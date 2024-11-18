import { useState } from "react";


export const ToDoForm = ({onHandleSubmit}) => {
    let [userInput , setInput ] = useState("");

    const handleEventChange = (value) => {
        setInput(value);
    }
    
    const handleformSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(userInput);
        setInput("");
    }
    return(
        <>
            <form className="flex " onSubmit={handleformSubmit}>
              <div>
                <input 
                type="text" 
                placeholder="Enter some task...." 
                className="p-2.5 rounded-l-md w-72 mb-4 " 
                value={userInput} onChange={() => {
                  handleEventChange(event.target.value)
                }} 
                />
              </div>
              <div>
             <button 
             className="text-white relative z-0 rounded-r-md bg-indigo-600
              p-2.5 w-36 transition-[all_0.3s_ease] after:absolute after:left-0
              after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-indigo-800 
              after:transition-[all_0.3s_ease]  hover:after:w-full duration-200">
               Add-Task
            </button>
              </div>
            </form>
        </>
    );
}