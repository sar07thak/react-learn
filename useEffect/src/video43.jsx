import { useState } from "react";

export const ShortCkt =  () => {

    const [login ,setlogin] = useState(true);
    const [user,setuser] = useState(true);

    return(
        <>
        <section className=" gap-4 flex flex-col h-screen justify-center items-center">
            <h1 className=""> Welcome to the shortCkt evaluation</h1>

            { login && <p>you are login </p> }
            
            {user ? `hello ${user}` :"you are loggin"}
            <div >
                <button onClick={()=> setlogin(!login)}  className="ml-3 border p-2 rounded-lg bg-emerald-400">toggle login state</button>
                <button onClick={() => setuser(!user)}  className="ml-3 border p-2 rounded-lg bg-emerald-400">Set user</button>
                <button className="ml-3 border p-2 rounded-lg bg-emerald-400">Clear user</button>
            </div>
        </section>
        </>
    );
}