// to remove peops drilling 

import { createContext, useState } from "react";
import { Achild } from "./components/Achild";
import { Dchild } from "./components/Dchild";
//step-1 :  create context
export const UserContext = createContext();

// step 2: wrap all the child inside a provider

// step 3 : pass value

// step - 4 : consumer ke andr jake consume karlo

export const Context = () => {

    const [user , setuser ] = useState({name : "sarthak"})

    return(
        <>
        <UserContext.Provider value={user} >
           <Dchild />
        </UserContext.Provider>
        </>
    );
}