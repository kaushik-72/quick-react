import { useEffect, useState } from "react";

//! net required
export const useApi = (url)=>{
    const [apiData,setApiData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getApiData (){
        setLoading(true);
        try {
            let resp = await fetch("url")
            let data = await resp.json();
            setApiData(data); // backend se jo data ayega wo yaha store hoga
        } catch (error) {
            console.log(error.response);
        } finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getApiData()
    },[url]);

    return{apiData,loading};
};


