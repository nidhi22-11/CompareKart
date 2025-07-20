import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="mt-1 w-full bg-[#6a4c93] shadow-md rounded-t-l">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <h1 className="text-2xl font-bold tracking-wide">CompareKart 🛒</h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
