// import images from "../public/images";

import { useState } from "react";
import { ToDoForm } from "./Todoform";
import { ToDoAddList } from "./todolist";
import { ToDoDateTime } from "./tododatetime";


export const ToDoList = () => {

  let [task, setTask] = useState([]);
  const handleformSubmit = (userInput) =>{
  
    if ( !userInput) return alert("Enter some tasks") ;
      
    setTask( (prevTask) => [...prevTask , userInput ])
    
  }

  const handleTODOdel = ( value ) => {
  console.log(value);
  const updateTask = task.filter((currentTask) => {
  return currentTask !== value ;
  })
    setTask(updateTask) ;
  }

  const handleClearBtn = () => {
    return setTask([]);
  }

  return(
    <>
     <div class="container min-h-screen max-w-screen-2xl bg-indigo-300 flex flex-col p-10 items-center  font-mono ">
      <div>
          <header className="text-center mb-5">
            <h1 className="text-6xl font-bold text-white"> To-Do-List</h1>
            {/* <h2 className="text-2xl text-white font-bold"> {DateTime}  </h2> */}
            <ToDoDateTime />
          </header>

          <ToDoForm 
          onHandleSubmit = {handleformSubmit}  
          />
          {/*  LIST JSX  */}
          <section>  
          <ul>
                {
                  task.map((curTask , index) => {
                    return (
                     <ToDoAddList 
                     key ={index} 
                     data = {curTask} 
                     onHandleDelBtn = {handleTODOdel}/>
                    );
                  })
                }
          </ul>



            <div className="flex justify-center mt-6">
              <button className="text-white relative z-0  rounded-md bg-orange-400
                         p-2  transition-[all_0.3s_ease] after:absolute after:left-0
                         after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-orange-700 
                         after:transition-[all_0.3s_ease]  hover:after:w-full duration-200" onClick={handleClearBtn} >Clear-All</button>
            </div> 
            </section>
      </div>
    </div>
    </>
  );
  }
