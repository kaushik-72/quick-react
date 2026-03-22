import { useEffect, useRef, useState } from "react"


const LCiFBC = () => {
    const [count,setCount] = useState(0);
    const initailRender = useRef(true);

    useEffect(()=>{
        console.log("comp mounted");

        let id = setInterval(() => {
            console.log("hii");
        }, 2000);

        return ()=>{ //~ unmount/ cleanup function
            console.log("comp unmounted");
            clearInterval(id)
        }
    },[]);

    useEffect(()=>{
        if(initailRender.current){
            initailRender.current = false;
            return;
        }
        console.log("comp updated");
    },[count])

  return (
    <div>
        <h1>LifeCycle In FBC</h1>
        <button onClick={()=>{setCount(count+1)}} >update</button>
    </div>
  )
}

export default LCiFBC