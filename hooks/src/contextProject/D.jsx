import { useContext } from "react";
import { ThemeContext } from "./parent";


export const ChildD = () => {
    const {theme ,setTheme,name} = useContext(ThemeContext);

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
        {name}
        <button 
        className="border border-gray-400 p-5 rounded-lg m-2"
        onClick={handleClick}>Change theme</button>
        </>
    );
}