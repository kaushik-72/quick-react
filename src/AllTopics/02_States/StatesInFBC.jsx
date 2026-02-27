import { useState } from "react";

const StatesInFBC = ()=>{
    const [data, setData] = useState("Hello Everyone ♥"); // [ud, f]
    const [cart,setCart] = useState("Add to cart")

    const handleBtn =()=>{
        setData("Bye Everyone 👋")
    }

    const handleBtn2 = ()=>{
        setCart("Go to cart");
    }
   return(
        <>
            <h1>Learning State FBC</h1>
            <h2>{data}</h2>
            <button onClick={handleBtn}>update</button>

            <hr/>
            <button onClick={handleBtn2}>{cart}</button>
        </>
    )
}



export default StatesInFBC;