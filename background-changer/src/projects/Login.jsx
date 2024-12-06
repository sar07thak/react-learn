import { useState } from "react";

export const LoginForm = () => {

    const [username , setuser] = useState("");
    const [password , setpassword] = useState("");


    const handdleuserChange = (e) => {
        setuser(e.target.value);
    }

    const handlePassword = (e) => {
        setpassword(e.target.value);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const formdata = {
            username ,
            password,
          };
      
          console.log(formdata);
    }

    return(
        <>
        <form 
        onSubmit={handlesubmit}
        className="bg-gray-200 h-screen flex justify-center items-center" >
            <div className="bg-gray-300 w-[50%] flex flex-col justify-center  rounded-xl shadow-2xl p-10">
                <h1 className="font-bold mb-10 text-3xl">Login Page</h1>
                
                <h2 className="text-xl">Username :</h2>
                <input 
                onChange={handdleuserChange}
                value={username}
                className="p-2 rounded-md text-gray-600 font-semibold "
                placeholder="enter username"
                name="username"
                type="text" />

                <h2 className="text-xl">Password :</h2>
                <input 
                onChange={handlePassword}
                value={password}
                className="p-2 rounded-md mb-5 text-gray-600 "
                placeholder="enter password"
                name="password"
                type="password" />

                <button
                className="shadow-xl p-1.5 rounded-md bg-gray-200"
                >Login-Know</button>
            </div>
        </form>
        </>
    );
}