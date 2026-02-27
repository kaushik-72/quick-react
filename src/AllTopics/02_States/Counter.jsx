import { useState } from "react";

const Counter = ()=>{

    const [count,setCount] = useState(0);
    const incCount = () =>{
        setCount((prev)=>prev+3)
        
    };

    const decCount = ()=>{
        setCount((prev)=>(prev>0?prev-1:0));
        
    }

    const reset = ()=>{
        setCount(0);
    }

    return (
        <section>
        <h1>{count}</h1>
        <button onClick={incCount}>Increase</button>
        <button onClick={decCount} disabled={count===0?true:false}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </section>
    )
}

export default Counter;