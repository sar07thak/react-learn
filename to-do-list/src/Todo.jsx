// import images from "../public/images";
import { CiCircleCheck } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";

export const ToDoList = () => {

  let [userInput , setInput ] = useState("");
  let [task, setTask] = useState([]);

  const handleEventChange = (value) => {
    setInput(value);
  }

  const handleformSubmit = (event) =>{
    event.preventDefault() ;
    
      if ( !userInput) return alert("Enter some tasks") ;
      
      setTask( (prevTask) => [...prevTask , userInput ])

      if (task.includes(userInput)) return ;
      
      setInput("");
  }


  
  return(
    <>
     <div class="container min-h-screen w-screen bg-indigo-300 flex flex-col p-10 items-center  font-mono ">
      <div>
          <header className="text-center mb-5">
            <h1 className="text-6xl font-bold text-white"> To-Do-List</h1>
          </header>
          <section>
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
              after:transition-[all_0.3s_ease]  hover:after:w-full">
               Add-Task
            </button>
              </div>
            </form>
            <section>

              <ul>
                {
                  task.map((curTask, index) => {
                    return (
                      <>
                      <li key ={index} className="p-2.5 rounded-md mb-2 bg-white flex justify-between items-center " > 
                         <span>{curTask}</span>
                         <div className="flex justify-between  w-20">
                         <button className="text-white relative z-0  rounded-md bg-teal-400
                         p-2  transition-[all_0.3s_ease] after:absolute after:left-0
                         after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-teal-700 
                         after:transition-[all_0.3s_ease]  hover:after:w-full"> <CiCircleCheck /> </button>
                         <button className="text-white relative z-0 rounded-md bg-red-400
                         p-2.5  transition-[all_0.3s_ease] after:absolute after:left-0
                         after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-red-600 
                         after:transition-[all_0.3s_ease]  hover:after:w-full"> <TiDeleteOutline /> </button>
                         </div>
                      </li>
                      </>
                    );
                  })
                }
              </ul>
            </section>
          </section>
      </div>
    </div>
    </>
  );
  }
