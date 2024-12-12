import { useContext } from "react";
import { ThemeContext } from "./parent";

export const ChildA = () => {
    const {theme , setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        if ( theme == "light") {
            setTheme("dark");
        }else{
            setTheme("light")
        }
    }

    return(
        <>
        <p>{theme}</p>
        <button 
        className="border border-gray-400 p-5 rounded-lg m-2"
        onClick={handleClick}>Change theme</button>
        </>
    );
}