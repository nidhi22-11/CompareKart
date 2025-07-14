import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed !== '') {
      onSearch(trimmed);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white text-black w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
      />

      <button
        type="submit"
        className="bg-white text-[#003049] font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
