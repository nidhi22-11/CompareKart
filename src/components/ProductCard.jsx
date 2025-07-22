import React from 'react';

const ProductCard = ({ product, onClick }) => {
  const logoMap = {
    amazon: "/logos/amazonLogo.png",
    meesho: "/logos/meeshoLogo.png",
  };

  const sourceKey = product.source?.toLowerCase();
  const logoPath = logoMap[sourceKey] || "/logos/comparekartLogo.png";

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 p-4 transition transform hover:scale-105 flex flex-col justify-between"
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-3 rounded"
      />

      {/* Info */}
      <div className="flex-grow">
        <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h2>
        <p className="text-sm text-gray-600">Price: {product.price}</p>
        <p className="text-sm text-gray-600">Rating: ⭐ {product.rating}</p>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
      </div>

      {/* Footer: Brand + Button */}
      <div className="mt-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img
            src={logoPath}
            alt={product.source}
            className="h-5 w-auto"
          />
          <span className="text-sm text-gray-600 capitalize font-medium">
            {product.source}
          </span>
        </div>

        {/* Compare Button */}
        <button
          onClick={() => onClick(product)}
          className="bg-[#5b181b] text-white text-sm px-3 py-1 rounded hover:bg-[#7a1e22] transition"
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default ProductCard;