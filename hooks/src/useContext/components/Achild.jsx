import { Bchild } from "./Bchild";
import { UserContext } from "../context";
import { useContext } from "react";

export const Achild = () => {
    const user = useContext(UserContext) 

    return(
        <>
        {/* {user.name} */}
        <Bchild/>
        </>
    );
}