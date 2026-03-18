import { useReducer } from "react"

let initialState = 0 ;
const reducerFunc = (prevState,action)=>{  //~ last
 switch(action){
    case "incre":
        return prevState+1;
    case "decre":
        return prevState-1;
    case "reset":
        return 0;
 }
}


const ReducerCounter = () => {
    const [count,dispatch]=useReducer(reducerFunc,initialState);

  return (
    <div>
    <h1 className='text-center text-4xl font-bold'>Learn useReducer Hook</h1>
    <p className='text-center'>
        useReducer is a state managment hook used for complex state managment
    </p>
    <h1 className="text-center text-2xl m-4 font-semibold">Counter:{count}</h1>
    <button onClick={()=>dispatch("incre")}>Increment</button>
    <button onClick={()=>dispatch("decre")}>Decrement</button>
    <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ReducerCounter