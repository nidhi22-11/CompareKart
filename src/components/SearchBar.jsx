import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false); // ⬅️ Added

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed === '' || isLoading) return;

    setIsLoading(true);
    await onSearch(trimmed); // Wait for onSearch to complete
    setIsLoading(false);
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
        disabled={isLoading} // ⬅️ Disable while loading
        className={`font-semibold px-4 py-2 rounded-lg transition ${
          isLoading
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-white text-[#003049] hover:bg-blue-100"
        }`}
      >
        {isLoading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
