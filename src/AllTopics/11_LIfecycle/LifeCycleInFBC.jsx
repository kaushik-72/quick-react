import { useRef } from "react";
import { useEffect, useState } from "react";
//! useffect return a cleanup function

const LifeCycleInFBC = () => {

    const [count,setCount] = useState(0);
    const intialRender = useRef(true);

    useEffect(()=>{
        console.log("comp mounted");

        return  ()=>{
            console.log("comp mounted");
            let id = setInterval(()=>{
                console.log("API Call");
            })
        };
    },1500);

    return ()=>{
        console.log("comp unmounted");
        clearInterval(id);
    }

    useEffect(()=>{
        if (intialRender.current) {  
            intialRender.current =false;
            return;
        }

        console.log("comp updated")
    })

  return (
    <div className='p-5'>
        <h1 className='text-center text-4xl'>Learn life-cycle in fbc</h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
    </div>
  )
}

export default LifeCycleInFBC;