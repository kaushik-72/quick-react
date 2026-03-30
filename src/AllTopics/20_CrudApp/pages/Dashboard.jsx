import { useState } from "react"
import SearchBar from "../components/SearchBar"
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";
import { usePosts } from "../hooks/usePosts";
import { useDebounce } from "../hooks/useDebounce";



const Dashboard = () => {

  const [query,setQuery] = useState("");
  const [sortby,setSortBy] = useState("");
  const [skip,setSkip] = useState(0);

//! deobunced query
  let debouncedQuery = useDebounce(query,2000);

  //! calling custom hook
  const {post,loading} = usePosts({query: debouncedQuery, sortby,skip});


  usePosts({query,sortby,skip});

  return (
    <section className="pt-20 px-10">
      <header className="font-bold my-5">
        <h1>My Dashboard</h1>
      </header>
      {/* SEARCH BAR */}
      <SearchBar query={query} setQuery={setQuery}/>

      {/* SORTING */}
      <Sorting sortBy={sortby} setSortBy={setSortBy}/>

      {/* DISPLAY POSTS FROM API*/}
      {loading ? <p>loading...</p>:<>

        <table >
          <thead border={1} cellPadding={10}>
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">TITLE</th>
              <th className="p-2">VIEWS</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {post.map(()=>{
            return(
              <tr>
                <td className="border border-gray-300 p-2">{item.id}</td>
                <td className="border border-gray-300 p-2">{item.title}</td>
                <td className="border border-gray-300 p-2">{item.views}</td>
              </tr>
            )
          })}
        </tbody>
        
      </>
        
      }

      {/* PAGINATION */}
      <Pagination skip={skip} setSkip={setSkip}/>
    </section>
  )
}

export default Dashboard