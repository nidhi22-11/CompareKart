import React from 'react'
import ProductCard from './ProductCard'

const Comparegrid = ({ products, onProductClick }) => {
  return (
    <>
        <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-[#003049]">Search Results</h2>

      {products.length === 0 ? 
      ( <p className="text-gray-500">No products found. Try searching something!</p>) : 
      (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => 
          ( <ProductCard key={index} product={product} onClick={onProductClick}  /> ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Comparegrid