import { useContext } from "react";
import { UserContext } from "../context";



export const Dchild = () => {

    const user = useContext(UserContext)

    return(
        <>
        hello {user.name}
        </>
    );
}