import React , {useState,useContext} from "react";
import { UserContext } from "../context/usercontext";



export function Login() {
    let [username , setusername]  = useState("");
    let [password ,setpassword] = useState("");

      const {setuser} = useContext(UserContext)

    const handleClick = (e) =>{
        e.preventDefault();
        setuser({username,password})
    }


    return(

        <div>
            <h2>login</h2>
            <input 
            type="text" 
            placeholder="username" 
            onChange={(e) => setusername(e.target.value)} />
            <br />
            <input 
            type="password" 
            placeholder="password" 
            onChange={(e) => setpassword(e.target.value)}/>

            <button onClick={handleClick}>login</button>
        </div>
    )
}