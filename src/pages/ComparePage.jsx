import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ComparePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const products = location.state?.products;

  if (!products || products.length === 0) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        No product data received. Please go back and select a product again.
      </div>
    );
  }

  // Common name to show as product title
  const baseName = products[0].name.split('-')[0].trim();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        className="mb-4 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back to results
      </button>

      <h1 className="text-3xl font-bold text-[#003049] mb-4">{baseName}</h1>

      <p className="text-gray-600 mb-6">
        Compare this product across platforms. You can view pricing, ratings, and details below.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-[#003049] text-white text-left">
              <th className="py-3 px-4">Platform</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Rating</th>
              <th className="py-3 px-4">Material</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-semibold">{p.source}</td>
                <td className="py-3 px-4">₹{p.price}</td>
                <td className="py-3 px-4">⭐ {p.rating}</td>
                <td className="py-3 px-4">{p.material}</td>
                <td className="py-3 px-4 text-center">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                    Buy on {p.source}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePage;
