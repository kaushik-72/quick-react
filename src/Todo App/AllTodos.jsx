import React, { useContext } from 'react'
import { todoContext } from './ContextProvider'

const AllTodos = () => {

    let {todos,editTodo,removeTodo} = useContext(todoContext);

    console.log(todos);  // [{},{},{}]

    
  return (
    <div>

      {todos.length === 0? <p>No todos available</p> : <div>

        {todos.map((ele,index)=>{
          return(  // since we are using {} we have to use return so as to iterate this div tag or else we it won't if we don't want to use the return then instead of ()=>{} we'll use ()=>() here we don't have to use return
            //*Err:Each child in a list should have a unique "key" prop. = >  unique inbuilt key ; here we are using id , when no id => index 
            <section key={ele.id}>  
              <h3>{ele.text}</h3>

              <button onClick={()=> editTodo(ele.id)}>edit</button>

              <button onClick={()=> removeTodo(ele.id)}>delete</button>

            </section>
          )
        })}
      </div>}

    </div>
  )
}

//~ implicit / explicit return

export default AllTodos