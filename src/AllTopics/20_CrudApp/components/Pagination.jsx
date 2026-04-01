

const Pagination = ({ skip, setSkip }) => {
  return (
    <div className="flex gap-5 my-4">
      <button
        onClick={() => setSkip((prev) => Math.max(0, prev - 10))}
        disabled={skip === 0}
        className="bg-blue-500 active:bg-violet-700 text-white px-3 py-1 rounded disabled:bg-blue-300 cursor-pointer disabled:hover:ring-0 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transition"
      >
        prev
      </button>
      <button
        onClick={() => setSkip((prev) => prev + 10)}
        className="bg-blue-500 hover:bg-blue-700 active:bg-violet-700 text-white px-3 py-1 rounded cursor-pointer hover:ring-2 hover:ring-gray-800 hover:ring-offset-2 transition"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
