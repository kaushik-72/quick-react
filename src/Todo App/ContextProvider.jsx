import { createContext, use, useState } from "react";

export const todoContext = createContext();

const ContextProvider = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setAllTodos] = useState([{ id: 1, text: "default value" }]);

  const addTodo = (e) => {
    e.preventDefault();
    console.log(newTodo);

    //~ for avoiding empty input
    if (newTodo.trim() === "") {
      alert("no todo available");
      setNewTodo("");
      return;
    }

    //~ string to obj and unique id
    let todo = {
      id: Date.now(),
      text: newTodo.trim(),
    };

    console.log(todo);

    setAllTodos((prev) => [...prev, todo]);

    //~ clear inp field
    setNewTodo("");
  };

  const removeTodo = (id) => {
    let allTodos = [...todos];
    let filteredTodo = allTodos.filter((ele)=> ele.id !== id);
    setAllTodos(filteredTodo);
  };

  const editTodo = (id) => {
    let allTodos = [...todos]
    let todoToBeEdit = allTodos.find((ele)=>ele.id===id)  // find returns an obj{}
    setNewTodo(todoToBeEdit.text)
    removeTodo(id)
  };

  return (
    <todoContext.Provider
      value={{ newTodo, setNewTodo, todos, setAllTodos, addTodo, removeTodo,editTodo }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default ContextProvider;
