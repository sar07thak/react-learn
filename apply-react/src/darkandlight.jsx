// import { useState } from "react";

// export const LightDark = () => {
//     const [text ,settext] = useState("switch to Dark mode ")
//     const handleOnclick = () => {
//         let mode = "light" ;
//         if (mode == "light") {
//             settext("switch to Dark mode 🌙")
//             mode = "dark" ;
//         }
//         else{
//             settext("switch to Light mode ☀️")
//         }
//     }
//     return(
//         <div className="bg-gray-300 h-screen flex justify-center items-center flex-col">
//             <h1 className="text-3xl font-bold ">Welcome to react-19 Dark and light toggle button</h1>
//             <p className="text-xl font-semibold">hello everyone</p>
//             <button
//             className="text-white font-semibold text-xl mt-5 p-5 rounded-lg bg-blue-400"
//             onClick={handleOnclick}
//             >
//              {text}
//             </button>

//         </div>
//     );
// }

import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme }}>
        {children}
    </ThemeContext.Provider>
  );
};

export const Darkandlight = () => {
  return (
    <div>
      <h1>sdsaad</h1>
      <p>dsadad</p>
      <button>switch to light mode ☀️</button>
    </div>
  );
};
