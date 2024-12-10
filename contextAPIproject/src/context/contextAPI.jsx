import { createContext } from "react";

export const BioContext = createContext() ;

export const ContextProvider = ({children}) => {
    const myname = "sarthak" ;
    const myage = 21 ;
    return(
        <>
        <BioContext.Provider value={{myname,myage}}>
            {children}
        </BioContext.Provider >
        </>
    );
} 