import { useState } from "react";

const ThemeChange = ()=>{

    const [theme,setTheme] = useState("dark");
    const handleTheme = () =>{
        console.log(`theme changed: `)
        setTheme((prev)=>(prev==="dark"?"light":"dark"))
        
    };

console.log(theme)
    return(
        <section style={{
            backgroundColor:theme==="dark"?"black":"white",
            color:theme==="dark"?"white":"black",
        }}>
            <h1>Theme change task</h1>
            <button onClick={handleTheme}>{theme}</button>
        </section>
    )
}

export default ThemeChange;