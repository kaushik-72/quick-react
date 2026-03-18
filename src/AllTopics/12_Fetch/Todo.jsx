import React from "react";

const Todo = ({ele}) => {
  return (
    <div key={ele.id} className="bg-zinc-800 m-2.5 p-2.5">
      <h2 className={ele.completed ? `line-through` : `font-bold`}>
        {ele.todo}
      </h2>
    </div>
  );
};

export default Todo;
