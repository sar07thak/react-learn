import React from "react";
import { UserContext } from "./usercontext";

export const UsercontextProvider = ({children}) => {
    let [user,setuser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
          {children}
        </UserContext.Provider>
    );
}