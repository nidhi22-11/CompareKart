import React from 'react';
import ProductCard from '../components/ProductCard'; // ✅ Import reusable card

const CompareGrid = ({ products, onProductClick }) => {
  return (
    <div className="p-6 bg-[#ffffff] min-h-screen">
      <h2 className="text-2xl font-bold text-[#5b313d] mb-4">CompareKart Results</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CompareGrid;
