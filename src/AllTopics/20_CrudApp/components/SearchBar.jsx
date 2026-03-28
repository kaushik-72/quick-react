

const SearchBar = ({query,setQuery}) => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="search here..."
      className="border"
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
    ></input>
  );
};

export default SearchBar;
