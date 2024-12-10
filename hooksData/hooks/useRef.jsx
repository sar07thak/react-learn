import { useRef } from "react";


export const UseRef = () => {
    
    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    const username = useRef(null);
    const password = useRef(null);
    
    
    console.log(username,password);
    
    
    const handlesubmit = (data) => {
        data.preventDefault();
        console.log(username.current.value,password.current.value);     
     }
    
    return(
        <>
        <form onSubmit={handlesubmit}>
            <input type="text" id="username"  className="text-black" ref={username}/>
            <br />
            <br />
            <input type="password"  id="password" className="text-black" ref={password} />
            <br />
            <button>cubmit</button>
        </form>
        </>
    );
}

// export const UseRef = () => {
//     const username = useRef(null) ;
//     const password = useRef(null) ;


//     return(
//         <>
//         <PassRefProps label="username" ref={username} />
//         <PassRefProps label="password" ref={password} />
//         </>
//     );
// }


// const PassRefProps = (props) => {
//     return(
//         <>
//         <form >
//             <input type="text" label={props.label} ref={props.ref} id="usernamne" />
//             <br />
//             <input type="password" id="password" label={props.label} ref={props.ref} />
//             <br />
//             <button>submit</button>
//         </form>
//         </>
//     )
// }