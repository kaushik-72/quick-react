import { createContext, use, useState } from "react";

export const todoContext = createContext()

const ContextProvider = (props) =>{

    const [newTodo,setNewTodo] = useState("");
    const [todos,setAllTodos] = useState([{id:1,text:"default video"}]);

    const addTodo = (e) =>
        {
            e.preventDefault()
            console.log(newTodo);

            //~ for avoiding empty input
            if (newTodo.trim() === "")
                {
                    alert("no todo available");
                    setNewTodo("");
                } return;

            //~ string to obj
            let todo = {
                id: Date.now(),
                text: newTodo.trim(),
            };

            console.log(todo);

            setAllTodos((prev)=>[...prev,todo]);


            //~ clear inp field
            setNewTodo("");
        };

    const removeTodo = ()=>{};

    return <todoContext.Provider value={{newTodo,setNewTodo,todos,setAllTodos,addTodo,removeTodo}}>
        {props.children}
    </todoContext.Provider>

}

export default ContextProvider;