import { CiCircleCheck } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";

export const ToDoAddList = ({key ,  data ,onHandleDelBtn}) => {

 const handleCheckBtn = () => {
     checked ? <div className="line-through">{data}</div> : <div> {data}</div>
 }

    return(
        <>
        <li key ={key} className="p-2.5 rounded-md mb-2 bg-white flex justify-between items-center " > 
                         <span>{data}</span>

                         <div className="flex justify-between  w-20">
                         <button className="text-white relative z-0  rounded-md bg-teal-400
                         p-2  transition-[all_0.3s_ease] after:absolute after:left-0
                         after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-teal-700 
                         after:transition-[all_0.3s_ease]  hover:after:w-full duration-200" onClick={handleCheckBtn}> <CiCircleCheck /> </button>

                         <button className="text-white relative z-0 rounded-md bg-red-400
                         p-2.5  transition-[all_0.3s_ease] after:absolute after:left-0
                         after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-red-600 
                         after:transition-[all_0.3s_ease]  hover:after:w-full duration-200" 
                         onClick={() => onHandleDelBtn(data)}> <TiDeleteOutline /> </button>
                         </div>
        </li>
        </>
    );
}