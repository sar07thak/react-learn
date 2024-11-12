import { useState } from "react";

// const users = [
//     { name: "Alice" , age : 24 },
//     { name: "Bob" , age : 23 },
//     { name: "Vanish" , age : 14 },
//     { name: "Alok" , age : 54 },
// ];

  

export const DerivedState = () => {
    let [users, setUser] = useState( [
        { name: "Alice" , age : 24 },
        { name: "Bob" , age : 23 },
        { name: "Vanish" , age : 14 },
        { name: "Alok" , age : 54 },
    ]
    )

    
    return(
        <div>
            <h1>
                users List
            </h1>
            <ul className="flex flex-col  justify-center items-center h-screen" >
               {
                users.map((data)=>{
                    return(
                        <>
                        <li>Name:{data.name}</li>  
                        <li>Age:{data.age}</li>
                        </>
                    )
                })
               } 
            </ul>
        </div>
    );
};