import React from "react";
import { useContext } from "react";
import contextTheme from "../context/contextTHeme";
import themeColor from "../themeColor";
const Herosection=()=>{
    const theme =useContext(contextTheme)[0]
    const currentTheme=themeColor[theme]
    const [themeMode, setThemeMode]=useContext(contextTheme)
    return(
        <div style={{
            padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center"
        }}>
            <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, hic quaerat assumenda vitae itaque neque dicta sequi modi similique doloribus eos eveniet corporis esse illum suscipit fuga facilis velit cumque?
            </p>
            <button
            onClick={()=>{setThemeMode(themeMode==="light"?"dark":"light")}}
            style={{
                backgroundColor: "#26ae60",
                padding: "10px 150px",
                fontSize: "20px",
                color: "#FFF",
                border: `${currentTheme.border}`
              }}>click me </button>
        </div>
    )
} 

export default Herosection