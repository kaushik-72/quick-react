
const TailwindPractise1 = () => {
  return (
    <div>
    {/* <h1 className="bg-violet-500 text-white text-[50px] rounded-3xl text-center">TailwindPractise1</h1>

    <button className="bg-yellow-300 text-white py-1 px-2.5 rounded-3xl">Submit</button> */}

    <nav className="bg-violet-700 p-2 text-white font-semibold md:bg-amber-300 md:text-3xl md:text-black lg:bg-pink-400 xl:bg-red-400 flex justify-between items-center">
      <div>NavBar</div>
      <ul className="gap-10 hidden md:flex">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Contact Us</li>
      </ul>
    </nav>
    </div>
  )
}

export default TailwindPractise1