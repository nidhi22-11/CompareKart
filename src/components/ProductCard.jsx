import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-xl shadow hover:shadow-lg p-4 border border-gray-200 cursor-pointer transform hover:scale-105 transition duration-200"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
      <p className="text-sm text-gray-600">Price: ₹{product.price}</p>
      <p className="text-sm text-gray-600">Rating: ⭐ {product.rating}</p>
      <p className="text-sm text-gray-600">Material: {product.material}</p>
      <div className="mt-2 inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
        {product.source}
      </div>
    </div>
  );
};

export default ProductCard;
