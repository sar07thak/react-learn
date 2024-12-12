/* 
=> jo components use ho usko Provider me wrap krna jrur hai

=> jis component par direct props pass krna hai 
   vha par pehle context ko import krao.

=> phir useContext hooks se use krlo
*/
import { useContext } from "react";
import { UserContext } from "../context";



export const Cchild = () => {
    // const user = useContext(UserContext);

    return(
        <>
        {/* {user.name} */}
        </>
    );
}