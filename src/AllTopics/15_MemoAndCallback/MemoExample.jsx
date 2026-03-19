import { useCallback, useMemo, useState } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

//   function multiply(){
//     console.log("I am Multiply");
//     return add*5;    
//   }

    //~ it returns memoized value
    //? we can only define vaiable and pass the hook data using useMemo as useEffect returns nothing(undefined) and is executed when unmounted
    let multiply = useMemo(()=>{
        console.log("i'm multiply");
        return add*5;
        
    },[add])

    //~ it returns memoized function
    const display = useCallback(()=>{
        console.log("i'm display");
    },[minus])

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl">Learn useMemo and useCallback</h1>
      <article className="my-2">
        Addition : {add}
        <button
          className="ms-5 bg-gray-300 px-4  rounded "
          onClick={() => setAdd((prev) => prev + 1)}
        >
          increment
        </button>
      </article>

      <article className="my-2">
        Subtraction : {minus}
        <button
          className="ms-5 bg-gray-300 px-4 rounded "
          onClick={() => setMinus((prev) => prev - 1)}
        >
          decrement
        </button>
      </article>

      <article className="my-2">
        Multiplication: {multiply}
      </article>

      <hr/>
      <MemoChild display={display}/>
    </div>
  );
};

export default MemoExample;
