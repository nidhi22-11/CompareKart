import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
import Footer from "../components/Footer";


const ComparePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProduct = location.state?.product;
  const [matches, setMatches] = useState([]);
  const [chosenMatch, setChosenMatch] = useState(null);
  const [showName, setShowName] = useState(false);
const [showDesc, setShowDesc] = useState(false);


  useEffect(() => {
  if (!selectedProduct) return;

  const fetchMatches = async () => {
    try {
      NProgress.start(); // Start progress bar
      const otherSource = selectedProduct.source === "Meesho" ? "amazon" : "meesho";
      const response = await axios.get(`http://localhost:5000/search?query=${selectedProduct.name}`);
      const all = response.data?.[otherSource] || [];
      setMatches(all.slice(0, 5));
    } catch (error) {
      console.error("Failed to fetch matches", error);
    } finally {
      NProgress.done(); // Finish bar
    }
  };

  fetchMatches();
}, [selectedProduct]);


  if (!selectedProduct) return <div>No product selected</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
   <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b shadow-sm px-6 py-3 flex justify-between items-center">
  <Breadcrumb currentPage="Compare" />
  <button
    onClick={() => navigate("/")}
    className="text-sm bg-[#752a37] text-white px-3 py-1 rounded hover:bg-[#a34452] transition"
  >
    ← Back to Results
  </button>
</div>



      <h2 className="text-3xl font-bold text-gray-800 mb-6">Compare Products</h2>

      {/* Selected + Match Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Selected Product */}
         <div className="sticky top-20 self-start">
    <div className="border rounded-xl p-4 bg-white shadow-sm overflow-y-auto max-h-[500px]">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">Selected Product</h3>
      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-52 object-contain rounded mb-2" />
     <p className="font-bold text-gray-900 mb-1">
  {showName
    ? selectedProduct.name
    : selectedProduct.name.slice(0, 60) + (selectedProduct.name.length > 60 ? "..." : "")}
  {selectedProduct.name.length > 60 && (
    <button
      onClick={() => setShowName(!showName)}
      className="text-blue-600 text-xs ml-2 underline"
    >
      {showName ? "Show less" : "Show more"}
    </button>
  )}
</p>

      <p className="text-gray-800 mb-1">{selectedProduct.price}</p>
      <p className="text-sm">{selectedProduct.rating ? `⭐ ${selectedProduct.rating}` : "No rating"}</p>
    </div>
  </div>

        {/* Match Suggestions */}
       <div className="border rounded-xl p-4 bg-white shadow-sm">
    <h3 className="font-semibold text-lg text-gray-800 mb-4">
      Similar from {selectedProduct.source === "Meesho" ? "Amazon" : "Meesho"}
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {matches.length === 0 ? (
        [...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 p-3 rounded flex gap-4 items-center">
            <div className="bg-gray-300 h-16 w-16 rounded" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))
      ) : (
        matches.map((item, index) => (
          <ProductCard key={index} product={item} onClick={setChosenMatch} />
        ))
      )}
    </div>
  </div>
</div>

      {/* Comparison Table */}
      {chosenMatch && (
        <div className="mt-12 border-t pt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comparison Table</h3>
          <table className="w-full bg-white border rounded-xl shadow overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">Attribute</th>
                <th className="border px-4 py-2">Selected</th>
                <th className="border px-4 py-2">Match</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Image</td>
                <td className="border px-4 py-2">
                  <img src={selectedProduct.image} className="h-20" />
                </td>
                <td className="border px-4 py-2">
                  <img src={chosenMatch.image} className="h-20" />
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Name</td>
                <td className="border px-4 py-2">{selectedProduct.name}</td>
                <td className="border px-4 py-2">{chosenMatch.name}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Price</td>
                <td className="border px-4 py-2">{selectedProduct.price}</td>
                <td className="border px-4 py-2">{chosenMatch.price}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Rating</td>
                <td className="border px-4 py-2">
                  {selectedProduct.rating || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {chosenMatch.rating || "N/A"}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Source</td>
                <td className="border px-4 py-2">{selectedProduct.source}</td>
                <td className="border px-4 py-2">{chosenMatch.source}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">View</td>
                <td className="border px-4 py-2">
                  <a
                    href={selectedProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <a
                    href={chosenMatch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default ComparePage;
