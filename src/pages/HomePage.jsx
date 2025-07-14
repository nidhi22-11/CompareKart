import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Comparegrid from '../components/Comparegrid';
import { useNavigate } from 'react-router-dom';


const dummyProducts = [
  {
    name: "Tote Bag - Amazon",
    price: "499",
    rating: "4.2",
    material: "Canvas",
    source: "Amazon",
  },
  {
    name: "Tote Bag - Flipkart",
    price: "539",
    rating: "4.1",
    material: "Cotton",
    source: "Flipkart",
  },
  {
    name: "Tote Bag - Myntra",
    price: "599",
    rating: "4.3",
    material: "Polyester",
    source: "Myntra",
  },
  {
    name: "Tote Bag - Meesho",
    price: "469",
    rating: "4.0",
    material: "Canvas",
    source: "Meesho",
  }
];


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const handleSearch = (query) => {
    console.log('Search:', query);
    setProducts(dummyProducts); // replace with real fetch later
  };

 const handleProductClick = (product) => {
  console.log('Clicked product:', product);
  navigate('/compare', { state: { product } });
};

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar onSearch={handleSearch} />
      <Comparegrid products={products} onProductClick={handleProductClick} />
    </div>
  );
};

export default HomePage;
