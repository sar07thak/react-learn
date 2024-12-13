import { createContext, useState } from "react"
import { ChildA } from "./A";
import { ChildC } from "./C";
import { ChildD } from "./D";

export const ThemeContext = createContext() ;


export const Parent  = ( )=> {

    const [theme ,setTheme] = useState("light") ;
    const [name ,setname] = useState("sarthak")
    
    return(
        <div 
        style={{
            background:theme === "light" ? "white" : "#1E293B" ,
            color:theme === "light" ? "#1E293B" : "white"
            }}
        className="h-screen text-black flex flex-col justify-center items-center">
        <ThemeContext.Provider value={{theme ,setTheme,name}}>
            {/* <ChildA /> */}
            {/* <ChildC /> */}
            <ChildD/>
            
        </ThemeContext.Provider>
        </div>
    )
}