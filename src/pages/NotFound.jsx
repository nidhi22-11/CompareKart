import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#fefefe]">
      {/* title */}
      <h4 className="text-4xl md:text-6xl font text-[#240811] mb-4">
        Uh-oh! Something went wrong.
      </h4>

      <img
        src="/logos/lost-cat.png"  
        alt="Lost Cat"
        className="w-64 h-64 object-contain mb-6"/>


      
      <button
        onClick={() => navigate("/")}
        className="bg-[#752a37] text-white px-4 py-2 rounded hover:bg-[#a34452] transition"
      >
        Go Back to Home
      </button>

      
      <p className="mt-8 text-sm text-gray-600 italic">
        “Meow... did you take a wrong turn?”
      </p>
    </div>
  );
};

export default NotFound;
