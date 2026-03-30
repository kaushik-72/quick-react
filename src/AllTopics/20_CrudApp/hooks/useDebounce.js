import { useEffect, useState } from "react"


export const useDebounce = (query,delay = 1000) =>{
    const [debouncedQuery,setdebouncedQuery] = useState("");

    useEffect(()=>{
        let timer = setTimeout(() => {
           setdebouncedQuery(query); 
        }, delay);

        return()=>clearTimeout(timer);
    },[query]);

    return debouncedQuery;
}