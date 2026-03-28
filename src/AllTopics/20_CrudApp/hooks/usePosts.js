import { useState } from "react"

export const usePosts = () =>{
    const [post,setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    return {post,loading};
};