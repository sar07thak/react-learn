import { useCallback, useState , useEffect , useRef} from "react";

// import { useCallback, useState } from "react";

export const App = () => {

    const [length , setlength] = useState(8);
    const [password,setpassword ] = useState("");
    const [numallowed ,setnumAllowed] = useState(false);
    const [characterAllowed , setCharAllow] = useState(false);


    // ? password ref

    const passwordRef = useRef(null) ;

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        alert("password copied");
        window.navigator.clipboard.writeText(password);
    },[password])

    const passwordGenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz" ;

        if ( numallowed) str = str + "1234567890"; 
        if(characterAllowed) str = str + "!@#$%^&*_+-=|?{}[]()~" ;

        for (let index = 1; index <= length ; index++) {
           let char = Math.floor(Math.random()*str.length + 1) ;
            pass += str.charAt(char);
        }
        setpassword(pass);
    } , [length , numallowed , characterAllowed , setpassword])

    useEffect(() => {
        passwordGenerator();
    },[length , numallowed , characterAllowed , passwordGenerator])
    return(
        <>
          <div className="w-[69%] mx-auto shadow-xl px-4 my-8 bg-purple-700 rounded-md ">
            <h1 className="text-2xl text-center my-3">Password-generator</h1>
            <div className="flex rounded-lg overflow-hidden mb-4">
                <input 
                type="text"
                value={password}
                className="outline-none text-purple-600 font-semibold w-full py-1 px-3"
                placeholder="password...." 
                readOnly
                ref={passwordRef}
                onClick={copyPassword}/>
                <button className="text-white w-44 relative z-0 rounded-md bg-red-400
                         p-2.5  transition-[all_0.3s_ease] after:absolute after:left-0
                         after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-red-600 
                         after:transition-[all_0.3s_ease]  hover:after:w-full duration-200">
                        Copy
                        </button>
            </div>
            <div className="flex text-md gap-x-2 ">
                <div className="flex items-center gap-x-1">
                    <input 
                    type="range" 
                    min={6}
                    max={15}
                    value={length}
                    className="cursor-pointer duration-300"
                    onChange={(e) => {
                        setlength(e.target.value);
                    }}/>
                </div>
                <label>length : {length}</label>
           
            <div className="flex items-center gap-x-4">
                <input type="checkbox"
                defaultChecked={numallowed}
                id="nmberInput"
                onChange={(e) => {
                    setnumAllowed((prev) => !prev)
                }}/>
                <label> Integer </label>
            </div>
            <div className="flex items-center gap-x-4">
                <input type="checkbox"
                defaultChecked={characterAllowed}
                id="charInput"
                onChange={(e) => {
                    setCharAllow((prev) => !prev)
                }}/>
                <label> Character </label>
            </div>
           </div>
          </div>
        </>
    );
}
