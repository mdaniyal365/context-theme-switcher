import React from "react";
import contextTheme from "../context/contextTHeme";
// import themeColor from "../themeColor";
import { useContext } from "react";

const ThemeToggler=()=>{
    const [themeMode, setThemeMode]=useContext(contextTheme)

    return(
        <div>
             <h1>theme Toggler</h1>
        <div >
            <span>{themeMode==="light"?"turn no dark MOde":"turn no light mode"}</span>

        </div>
            
        </div>
    )
}

export default ThemeToggler;