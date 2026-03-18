import { useEffect, useState } from "react";


const Todos = () => {

    const [allTodos,setAllTodos] = useState([]);

    async function getTodos () {
        try{
            let resp = await fetch ("https://dummyjson.com/todos");
            let data = await resp.json();
            console.log(data.todos);  // data is in obj form with array data
            setAllTodos(data.todos);
        }
        catch(err){
            console.log(err.response);
        }
    }

    useEffect(()=>{
        getTodos();
    },[]);
  return (
    <div>
        <h1>All Todos</h1>

        {allTodos.length === 0 ? (
            <>
                <p>No Todos Available</p>
            </>
        ):(
            <>
                <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    {allTodos.map((ele)=>{
                        return <Todo key={ele.id} ele={ele}/>
                    })}
                </section>
            </>
        )};
    </div>
  )
}

export default Todos;