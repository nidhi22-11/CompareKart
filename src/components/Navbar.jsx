import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({onSearch}) => {
  return (
    <> <nav className= "max-w-6xl mx-auto bg-[#6a4c93] text-[#ffffff] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">
        CompareKart 🛒
      </h1>
      <SearchBar onSearch={onSearch}/>
    </nav></>
  )
}

export default Navbar