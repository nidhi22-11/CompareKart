import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  const navigate = useNavigate();

  return (
    <nav className="text-sm text-gray-700 flex gap-2 items-center">
      <button
        onClick={() => navigate("/")}
        className="hover:underline text-[#752a37] font-medium"
      >
         Home
      </button>
      <span>/</span>
      <button
        onClick={() => navigate("/")}
        className="hover:underline text-[#752a37] font-medium"
      >
        🔍Search Results
      </button>
      <span>/</span>
      <span className="text-gray-900 font-semibold"> {currentPage}</span>
    </nav>
  );
};

export default Breadcrumb;
