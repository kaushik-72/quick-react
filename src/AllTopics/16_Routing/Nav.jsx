import React from 'react'

const Nav = ({setPath}) => {
  return (
    <header className='p-5 bg-violet-500 text-white font-bold'>
        <nav className='flex gap-10'>
            <div onClick={()=> setPath("/") } className="hover:cursor-pointer">Home</div>
            <div onClick={()=> setPath("/about")} className="hover:cursor-pointer">About</div>
        </nav>
    </header>
  )
}

export default Nav;