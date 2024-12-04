import { useState } from "react";

export const ShortCkt =  () => {

    const [login ,setlogin] = useState(true);
    const [user,setuser] = useState(true);

    return(
        <>
        <section className="h-screen flex justify-center items-center bg-purple-600">
            <div className="p-10 rounded-xl shadow-2xl bg-purple-500  border-black gap-4 flex flex-col justify-center items-center">
            <h1 className=""> Welcome to the shortCkt evaluation</h1>

            { login && <p>you are login </p> }
            
            {user ? `hello ${user}` :"you are loggin"}
            <div >
                <button onClick={()=> setlogin(!login)}  className="ml-3 shadow-lg p-2 rounded-lg bg-emerald-400">toggle login state</button>
                <button onClick={() => setuser(!user)}  className="shadow-lg ml-3  p-2 rounded-lg bg-emerald-400">Set user</button>
                <button className="ml-3 shadow-lg p-2 rounded-lg bg-emerald-400">Clear user</button>
            </div>
            </div>
        </section>
        </>
    );
}