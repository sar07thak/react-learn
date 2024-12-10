import React, { useContext } from "react";
import { UserContext } from "../context/usercontext";

export const  Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>

    return(
        <>
        <div>
            welcome {user.username}</div>    
        </>
    );
}