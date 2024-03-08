"use client"
import { useEffect, useState } from "react";

const ThemeButton = ()=>{
    const [theme, setTheme] = useState("dark")

    useEffect(()=>{
        if(theme === "dark"){
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    },[theme])

    const handleChangeTheme = ()=>{
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <div className="  flex justify-center items-center ">
            <button className=" bg-slate-400 border-b-4 border-l-2 border-slate-500 px-4 py-2 rounded hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            onClick={handleChangeTheme}>
                Change Theme
            </button>
        </div>
    )
}

export default ThemeButton