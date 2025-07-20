import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Comparegrid from '../components/Comparegrid';
import { useNavigate } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    try {
      NProgress.start();
      const response = await axios.get(`http://localhost:5000/search?query=${query}`);
      const allProducts = response.data;

      const amazonProducts = allProducts.amazon || [];
      const meeshoProducts = allProducts.meesho || [];

      const combined = [...amazonProducts, ...meeshoProducts];

      setProducts(combined);
    } catch (error) {
      console.error('❌ Error fetching products:', error);
    }
    finally {
    NProgress.done();
  }
  };

  const handleProductClick = (product) => {
    navigate('/compare', { state: { product } });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar onSearch={handleSearch} />
      <Hero/>
      <Comparegrid products={products} onProductClick={handleProductClick} />
      <Footer/>
    </div>
  );
};

export default HomePage;
