import { useDispatch, useSelector } from "react-redux";
import { incre,decre,reset } from "./ReduxCounter";

//? useDispatch -> used to call the actions

const Counter = () => {
  // useSelector is used to access redux's state and returns
  let count = useSelector((state) => {
    // console.log(state.counter);
    return state.counter;
  });

  const dispatch = useDispatch();
  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mb-5">Counter : {count} </h1>
      <button
        className="px-10 bg-green-400 me-5 rounded-3xl hover:text-white cursor-pointer"
        onClick={() => dispatch(incre(10))}
      >
        Increment
      </button>
      <button
        className="px-10 bg-red-400 me-5 rounded-3xl hover:text-white cursor-pointer"
        onClick={() => dispatch(decre(10))}
      >
        Decrement
      </button>
      <button
        className="px-10 bg-blue-200 me-5 rounded-3xl hover:text-white text-bold cursor-pointer"
        onClick={() => dispatch(reset(0))}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
